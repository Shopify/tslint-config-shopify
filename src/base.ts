// Aggregate all the tslint rules
// See https://palantir.github.io/tslint/rules/

import * as merge from 'merge';
import {functionalityRules} from './rules/functionality';
import {maintainabilityRules} from './rules/maintainability';
import {styleRules} from './rules/style';
import {typescriptRules} from './rules/typescript';

module.exports = {
  'rules': merge(functionalityRules, maintainabilityRules, styleRules, typescriptRules)
};
