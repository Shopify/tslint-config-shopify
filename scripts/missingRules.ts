/* tslint:disable: no-console */
import 'isomorphic-fetch';
import {JSDOM} from 'jsdom';
import {red, green} from 'chalk';
import {emoji} from 'node-emoji';

import functionalityRules from '../src/rules/functionality';
import maintainabilityRules from '../src/rules/maintainability';
import styleRules from '../src/rules/style';
import typescriptRules from '../src/rules/typescript';

const currentRulesArr = Object.keys({
  ...functionalityRules,
  ...maintainabilityRules,
  ...styleRules,
  ...typescriptRules,
});

const tslintRulesURL = 'https://palantir.github.io/tslint/rules/';
fetch(tslintRulesURL, {'method': 'GET'})
  .then((res) => res.text())
  .then(printMissingRules);

function printMissingRules(tslintRulesHTML) {
  const missingRules = getTslintRules(tslintRulesHTML).filter(isRuleMissing);
  if (missingRules.length === 0) {
    console.log(green.bold(`${emoji.smile} Rules are all up to date!`));
    return;
  }

  console.log(red.bold(`\n${emoji.cry}  MISSING RULES:`));
  missingRules.forEach((rule) => {
    console.log(`\n${green.bold('Rule:')} ${rule.name}`);
    console.log(`${green.bold('Doc:')} ${rule.description}`);
  });
}

function isRuleMissing(tslintRule) {
  return !currentRulesArr.includes(tslintRule.name);
}

function getTslintRules(html: string) {
  const {document} = new JSDOM(html).window;
  const rulesNodeList = document.querySelectorAll('.page ul.rules-list a');

  return Array.from(rulesNodeList)
    .map((rule) => {
      return {
        'name': rule.querySelector('strong').textContent,
        'description': strip(rule.innerHTML.split('</strong> -')[1].trim()),
      };
    });
}

function strip(html: string) {
  const {document} = new JSDOM(html).window;
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText;
}
