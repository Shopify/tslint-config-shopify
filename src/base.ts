// Aggregate all the tslint rules
// See https://palantir.github.io/tslint/rules/

import {functionalityRules} from './rules/functionality';
import {maintainabilityRules} from './rules/maintainability';
import {styleRules} from './rules/style';
import {typescriptRules} from './rules/typescript';

module.exports = {
  'extends': ['./customRules'],
  'rules': {
    ...functionalityRules,
    ...maintainabilityRules,
    ...styleRules,
    ...typescriptRules,
  },
};
