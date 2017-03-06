import * as Lint from 'tslint';
import * as ts from 'typescript';

const OPTION_ALWAYS = 'always';
const OPTION_NEVER = 'never';
const BOOLEAN_RULE_VALUES = [OPTION_ALWAYS, OPTION_NEVER];
const BOOLEAN_RULE_OBJECT = {
    'enum': BOOLEAN_RULE_VALUES,
    'type': 'string',
};

export class Rule extends Lint.Rules.AbstractRule {
    /* tslint:disable:object-literal-sort-keys */
    public static metadata: Lint.IRuleMetadata = {
        'ruleName': 'jsx-boolean-value',
        'description': 'Enforce boolean attribute notation in jsx.',
        'optionsDescription': Lint.Utils.dedent`
            One of the following two options must be provided:
            * \`'${OPTION_ALWAYS}'\` requires JSX boolean values to always be set.
            * \`'${OPTION_NEVER}'\` prevents JSX boolean values to be explicity set as \`true\``,
        'options': {
            'type': 'array',
            'items': [BOOLEAN_RULE_OBJECT],
            'minLength': 1,
            'maxLength': 1,
        },
        'optionExamples': [
            `[true, '${OPTION_ALWAYS}']`,
            `[true, '${OPTION_NEVER}']`,
        ],
        'type': 'style',
        'typescriptOnly': true,
    };
    /* tslint:enable:object-literal-sort-keys */

    public static NEVER_MESSAGE = `Value must be omitted for boolean attributes`;
    public static ALWAYS_MESSAGE = `Value must be set for boolean attributes`;

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new JsxBooleanValueWalker(sourceFile, this.getOptions()));
    }
}

function isInitializerTrue(initializer: ts.JsxExpression | ts.StringLiteral | null | undefined): boolean {
    return initializer &&
    initializer.kind === ts.SyntaxKind.JsxExpression &&
    initializer.expression &&
    initializer.expression.kind === ts.SyntaxKind.TrueKeyword;
}

class JsxBooleanValueWalker extends Lint.RuleWalker {
    protected visitJsxAttribute(node: ts.JsxAttribute) {
        const always = this.hasOption(OPTION_ALWAYS);
        const never = this.hasOption(OPTION_NEVER) || !always;
        if (always && !node.initializer) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.ALWAYS_MESSAGE));
        } else if (never && isInitializerTrue(node.initializer)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.NEVER_MESSAGE));
        }
    }
}
