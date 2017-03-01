import * as ts from 'typescript';
import * as Lint from 'tslint';

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

    public static FAILURE_STRING = 'Trailing comma is required in interfaces properties.';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new TrailingCommaInterfaceWalker(sourceFile, this.getOptions()));
    }
}

class TrailingCommaInterfaceWalker extends Lint.RuleWalker {
   public visitInterfaceDeclaration(node: ts.InterfaceDeclaration) {
    node.members.map((propertySignature) => {
        if (propertySignature.getText().slice(-1) !== ',') {
            this.addFailure(this.createFailure(propertySignature.getStart(), propertySignature.getWidth(), Rule.FAILURE_STRING));
        }
    });
  }
}
