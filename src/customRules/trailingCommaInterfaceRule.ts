import * as ts from 'typescript';
import * as Lint from 'tslint';

class TrailingCommaInterfaceWalker extends Lint.RuleWalker {
   private static FAILURE_STRING = 'Trailing comma is required in interfaces properties.';
   public visitInterfaceDeclaration(node: ts.InterfaceDeclaration) {
    node.members.map((propertySignature) => {
        if (propertySignature.getText().slice(-1) !== ',') {
          const delimiterPosition = propertySignature.getStart() + propertySignature.getWidth() - 1;
          const fixer = new Lint.Replacement(delimiterPosition, 1, ',');
          const failure = this.createFailure(delimiterPosition, 1, TrailingCommaInterfaceWalker.FAILURE_STRING, fixer);
          this.addFailure(failure);
        }
    });
  }
}

export class Rule extends Lint.Rules.AbstractRule {

     /* tslint:disable:object-literal-sort-keys */
    public static metadata: Lint.IRuleMetadata = {
        'ruleName': 'trailing-comma-interface',
        'description': 'Enforce trailing commas in interface properties.',
        'rationale': 'Our team prefers traling commas over trailing semicolons.',
        'optionsDescription': 'Not configurable.',
        'options': null,
        'type': 'typescript',
        'typescriptOnly': true,
    };
    /* tslint:enable:object-literal-sort-keys */

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new TrailingCommaInterfaceWalker(sourceFile, this.getOptions()));
    }
}

