import * as Utils from './utils/helpers';
import functionalityRules from '../lib/config/rules/functionality';
import maintainabilityRules from '../lib/config/rules/maintainability';
import styleRules from '../lib/config/rules/style';
import typescriptRules from '../lib/config/rules/typescript';

// Rules Count
const FUNCTIONALITY_RULES_COUNT = 35;
const MAINTAINABILITY_RULES_COUNT = 14;
const STYLE_RULES_COUNT = 26;
const TYPESCRIPT_RULES_COUNT = 17;

describe('How many TSLint rules we have listed', () => {
  Utils.verifyRulesCount('Functionality', functionalityRules, FUNCTIONALITY_RULES_COUNT);
  Utils.verifyRulesCount('Maintainability', maintainabilityRules, MAINTAINABILITY_RULES_COUNT);
  Utils.verifyRulesCount('Style', styleRules, STYLE_RULES_COUNT);
  Utils.verifyRulesCount('Typescript', typescriptRules, TYPESCRIPT_RULES_COUNT);
});
