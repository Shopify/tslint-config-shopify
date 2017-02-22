// Aggregate all the tslint rules
// See https://palantir.github.io/tslint/rules/

import * as merge from 'merge';
import {functionalityRules} from './rules/functionality';
import {maintainabilityRules} from './rules/maintainability';
import {reactRules} from './rules/react';
import {styleRules} from './rules/style';
import {typescriptRules} from './rules/typescript';

export const allRules = merge(functionalityRules, maintainabilityRules, reactRules, styleRules, typescriptRules);
