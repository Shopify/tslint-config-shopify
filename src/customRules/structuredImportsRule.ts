import * as ts from 'typescript';
import * as Lint from 'tslint';

import * as path from 'path';

export class Rule extends Lint.Rules.AbstractRule {
  /* tslint:disable:object-literal-sort-keys */
  public static metadata: Lint.IRuleMetadata = {
    'ruleName': 'structured-imports',
    'description': 'Enforce a structure to your imports. Absolute imports listed first, then relative.',
    'descriptionDetails': Lint.Utils.dedent``,
    'hasFix': true,
    'optionsDescription': Lint.Utils.dedent``,
    'options': null,
    'optionExamples': null,
    'type': 'style',
    'typescriptOnly': false,
  };
  /* tslint:enable:object-literal-sort-keys */

  public static STRUCTURED_IMPORTS_ABS_FIRST_ERROR = 'Import structure should be listed absolute imports first, then relative imports.';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    const structuredImportsWalker = new StructuredImportsWalker(sourceFile, this.getOptions());
    return this.applyWithWalker(structuredImportsWalker);
  }
}

enum ImportType {
  Absolute = 0,
  RelativeAncestor = 1, // '../'
  RelativeCurrent = 2, // './'
};

const importStuctureOrder = [ImportType.Absolute, ImportType.RelativeAncestor, ImportType.RelativeCurrent];

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
      if (!isCurrentImportValid(this.previousImport, this.currentImport)) {
        this.addFailure(this.createFailure(node.moduleSpecifier.getStart(), node.moduleSpecifier.getFullWidth(), Rule.STRUCTURED_IMPORTS_ABS_FIRST_ERROR));
      }
    }
    if (isCurrentImportValid(this.previousImport, this.currentImport)) {
      this.previousImport = this.currentImport;
    }
  }
}


function isCurrentImportValid(prevImport: ImportType, currImport: ImportType): boolean {

  if (prevImport === currImport) {
    return true;
  }

  if (prevImport === ImportType.Absolute && currImport === getNextOrderedImport(prevImport)) {
    return true;
  }
  if (prevImport === ImportType.RelativeAncestor && currImport === getNextOrderedImport(prevImport)) {
    return true;
  }

}

function getNextOrderedImport(importType: ImportType) {
  if (importType < importStuctureOrder.length - 1) {
    return importStuctureOrder[importType + 1];
  }
}


function getImportType(path: string): ImportType {
  if (isRelativeCurrent(path)) {
    return ImportType.RelativeCurrent;
  } else if (isRelativeAncestor(path)) {
    return ImportType.RelativeAncestor;
  }
  return ImportType.Absolute;
}

function isRelativeCurrent(path: string) {
    return path.substr(1, 2) === './' ;
}

function isRelativeAncestor(path: string) {
    return path.substr(1, 4) === '../' ;
}
