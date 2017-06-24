const { keys, values, sum, each, round, isObject } = require('lodash');

/**
 * Splits an amount among multiple people based on a percentage criterion specified.
 *
 * @param  {float} amount - Amount to be split
 * @param  {object} percentagesByPeople - An object whose each key is a person identifier and value is a number between 0 and 1 indicating the person's split.
 * @return {object} - An object whose each key is a person identifier as specified in the input. Each value indicates the person's split amount.
 */
module.exports = (amount, percentagesByPeople) => {
    const people = keys(percentagesByPeople);
    const percentages = values(percentagesByPeople);
    let splitAmountByPeople = {};

    if (amount <= 0) {
        throw new Error('amount cannot be zero or negative');
    }

    if (!isObject(percentagesByPeople)) {
        throw new Error('percentage splits must be an object');
    }

    if (sum(percentages) !== 1) {
        throw new Error('percentages must total to 1');
    }

    each(people, person => {
        splitAmountByPeople[person] = round((percentagesByPeople[person] * amount) / 100, 2);
    });

    return splitAmountByPeople;
};
