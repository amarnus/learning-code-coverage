import { NodePath } from 'babel-traverse';
import { File } from 'babel-types';
import template = require('babel-template');
const { valueToNode } = require('babel-types');

import {
    readCode,
    parseCode,
    isStatement,
    traverse,
    toPlainObjectRecursive,
    generateCode
} from './utils';

let statementCounter = 0;
let coverage: any = {};

const onEachPath = (path: NodePath) => {
    if (isStatement(path)) {
        const statementId = ++statementCounter;
        coverage = coverage || {};
        coverage.c = coverage.c || {};
        coverage.c[statementId] = 0;
        coverage.statementMap = coverage.statementMap || {};
        coverage.statementMap[statementId] = toPlainObjectRecursive(path.node.loc);
        path.insertBefore(template(`
          __coverage__.c["${ statementId }"]++
        `)());
    }
};

const onExitProgram = (path: NodePath) => {
    path.node.body.unshift(template(`
        __coverage__ = COVERAGE
    `)({
        'COVERAGE': valueToNode(coverage)
    }));
};

export default function instrument(filename) {
    const source: string = readCode(filename);
    const tree: File = parseCode(source);
    traverse(tree, onEachPath, onExitProgram);
    return generateCode(tree);
}
