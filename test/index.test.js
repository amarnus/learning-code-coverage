const split = require('../source');
const { assert, expect } = require('chai');

describe('basic test', () => {

    it('must work as expected when the input is right', () => {
        const people = {
            'adam': 0.20,
            'eve': 0.80
        };
        const results = split(100, people);
        assert(results['adam'] === 20);
        assert(results['eve'] === 80);
    });

    it('must throw when percentages don\'t add up to 1', () => {
        const people = {
            'adam': 0.20,
            'eve': 0.79
        };
        expect(split.bind(null, 100, people)).to.throw();
    });

    it('must throw when the amount is negative', () => {
        const people = {
            'adam': 0.20,
            'eve': 0.79
        };
        expect(split.bind(null, -100, people)).to.throw();
    });

});
