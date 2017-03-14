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

  public static IMPORT_TYPE_ORDER_ERROR = 'Imports should be listed in the following order: module imports, absolute imports, ancestor imports, sibling imports.';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walker);
  }
}

enum ImportType {
  External = 0, // 'external'
  Absolute = 1, // '/some/folder/file'
  Ancestor = 2, // '../parentFolder'
  Sibling = 3, // './siblingFolder'
};

const importStuctureOrder = [ImportType.External, ImportType.Absolute, ImportType.Ancestor, ImportType.Sibling];

function walker(context: Lint.WalkContext<void>): void {
  const { sourceFile } = context;
  const importNodes = sourceFile.statements
    .filter((child) => child.kind === ts.SyntaxKind.ImportDeclaration)
    .map((child) => child as ts.ImportDeclaration);

  if (importNodes.length === 0) { return; }

  let previousImport = getImportType(importNodes.shift().moduleSpecifier.getText());
  while (importNodes.length) {
    const currentImportNode = importNodes.shift().moduleSpecifier;
    const currentImport = getImportType(currentImportNode.getText());
    if (previousImport > currentImport) {
      const errorStart = currentImportNode.getStart();
      const errorWidth = currentImportNode.getEnd() - errorStart;
      context.addFailureAt(errorStart, errorWidth, Rule.IMPORT_TYPE_ORDER_ERROR);
    } else {
      previousImport = currentImport;
    }
  }
}

function getImportType(path: string): ImportType {
  if (path.substr(1, 2) === './') {
    return ImportType.Sibling;
  } else if (path.substr(1, 3) === '../') {
    return ImportType.Ancestor;
  } else if (path[1] === '/') {
    return ImportType.Absolute;
  }
  return ImportType.External;
};
