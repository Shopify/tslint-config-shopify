import * as ts from 'typescript';
import * as Lint from 'tslint';

class TrailingCommaInterfaceWalker extends Lint.RuleWalker {
   private static FAILURE_STRING = 'Trailing comma is required in interfaces properties.';
   public visitInterfaceDeclaration(node: ts.InterfaceDeclaration) {
    const potentialDelimiters = [';'];
    node.members.map((propertySignature) => {
        const lastChar = propertySignature.getText().slice(-1);
        if (lastChar !== ',') {
          const lastCharPosition = propertySignature.getStart() + propertySignature.getWidth() - 1;
          const replacementText = (potentialDelimiters.indexOf(lastChar) === -1) ? `${lastChar},` : ',';
          const fixer = new Lint.Replacement(lastCharPosition, 1, replacementText);
          const failure = this.createFailure(lastCharPosition, 1, TrailingCommaInterfaceWalker.FAILURE_STRING, fixer);
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

