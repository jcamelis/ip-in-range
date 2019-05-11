
const toNumbers = require('./to-numbers');

function isLower(value, max, index) {
    if (index > value.length) {
        return false;
    }

    if (value[index] < max[index]) {
        return true;
    }

    if (value[index] === max[index]) {
        return isLower(value, max, index + 1);
    }

    return false;
}

module.exports = function(A, B) {
    const a = toNumbers(A);
    const b = toNumbers(B);

    return isLower(a, b, 0);
}
