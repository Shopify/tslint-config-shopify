import * as ts from 'typescript';
import * as Lint from 'tslint';

export class Rule extends Lint.Rules.AbstractRule {
  /* tslint:disable:object-literal-sort-keys */
  public static metadata: Lint.IRuleMetadata = {
    'ruleName': 'import-type-order',
    'description': 'Enforce structure to your imports. Import structure should be listed in the following order: modules, absolute imports,  relative parent/ancestor directories, relative sibling directors.',
    'hasFix': false,
    'optionsDescription': 'Not configurable.',
    'options': null,
    'optionExamples': null,
    'type': 'style',
    'typescriptOnly': true,
  };
  /* tslint:enable:object-literal-sort-keys */

  public static STRUCTURED_IMPORTS_ABS_FIRST_ERROR = 'Imports should be listed in the following order: module imports, absolute imports, relative imports.';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    const structuredImportsWalker = new StructuredImportsWalker(sourceFile, this.getOptions());
    return this.applyWithWalker(structuredImportsWalker);
  }
}

enum ImportType {
  External = 0, // 'external'
  Absolute = 1, // '/some/folder/file'
  Ancestor = 2, // '../parentFolder'
  Sibling = 3, // './siblingFolder'
};

const importStuctureOrder = [ImportType.External, ImportType.Absolute, ImportType.Ancestor, ImportType.Sibling];

class StructuredImportsWalker extends Lint.RuleWalker {
  private previousImport: ImportType;
  private currentImport: ImportType;

  constructor(sourceFile: ts.SourceFile, options: Lint.IOptions) {
    super(sourceFile, options);
  }

  // e.g. 'import Foo from './foo';'
  public visitImportDeclaration(node: ts.ImportDeclaration) {
    const importPath = node.moduleSpecifier.getText();
    if (!this.previousImport) {
      this.previousImport = getImportType(importPath);
      this.currentImport = getImportType(importPath);
    } else {
      this.currentImport = getImportType(importPath);
      if (isCurrentImportValid(this.previousImport, this.currentImport)) {
        this.previousImport = this.currentImport;
      } else {
        this.addFailure(this.createFailure(node.moduleSpecifier.getStart(), node.moduleSpecifier.getFullWidth(), Rule.STRUCTURED_IMPORTS_ABS_FIRST_ERROR));
      }
    }
  }
}

function isCurrentImportValid(prevImport: ImportType, currImport: ImportType): boolean {
  if (prevImport === currImport) {
    return true;
  }
  return getNextOrderedImport(prevImport) === currImport;
}

function getNextOrderedImport(importType: ImportType) {
  if (importType < importStuctureOrder.length - 1) {
    return importStuctureOrder[(importType as number) + 1];
  }
}

function getImportType(path: string): ImportType {
  if (isRelativeSibling(path)) {
    return ImportType.Sibling;
  } else if (isRelativeAncestor(path)) {
    return ImportType.Ancestor;
  } else if (isAbsolute(path)) {
    return ImportType.Absolute;
  }
  return ImportType.External;
}

function isAbsolute(path: string) {
  return path[1] === '/' ; // [0] is quote mark
}

function isRelativeAncestor(path: string) {
  return path.substr(1, 4) === '../' ; // path[0] is quote mark
}

function isRelativeSibling(path: string) {
  return path.substr(1, 2) === './' ; // path[0] is quote mark
}
