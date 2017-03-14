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

  let lastValidType = getImportType(importNodes.shift());
  while (importNodes.length) {
    const currentNode = importNodes.shift();
    const currentType = getImportType(currentNode);
    if (lastValidType > currentType) {
      const {moduleSpecifier} = currentNode;
      const errorStart = moduleSpecifier.getStart();
      const errorWidth = moduleSpecifier.getEnd() - errorStart;
      context.addFailureAt(errorStart, errorWidth, Rule.IMPORT_TYPE_ORDER_ERROR);
    } else {
      lastValidType = currentType;
    }
  }
}

function getImportType({moduleSpecifier}: ts.ImportDeclaration): ImportType {
  const path = moduleSpecifier.getText();
  if (path.substr(1, 2) === './') {
    return ImportType.Sibling;
  } else if (path.substr(1, 3) === '../') {
    return ImportType.Ancestor;
  } else if (path[1] === '/') {
    return ImportType.Absolute;
  }
  return ImportType.External;
};
