import traverse from 'babel-traverse';
import chalk from 'chalk';
import { File } from 'babel-types';
import { NodePath } from 'babel-traverse';
import {
    readCode,
    parseCode,
    isStatement
} from './utils';

let statementCounter = 0;

const source: string = readCode();
const tree: File = parseCode(source);

traverse(tree, {
    enter(path: NodePath) {
        if (isStatement(path)) {
            statementCounter++;
        }
    }
});

console.log(`there are ${ statementCounter } statements in the source`);
