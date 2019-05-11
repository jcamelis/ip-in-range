
const toNumbers = require('./to-numbers');

function isHigher(value, min, index) {
    if (index > value.length) {
        return false;
    }

    if (value[index] > min[index]) {
        return true;
    }

    if (value[index] === min[index]) {
        return isHigher(value, min, index + 1);
    }

    return false;
}

module.exports = function(A, B) {
    const a = toNumbers(A);
    const b = toNumbers(B);

    return isHigher(a, b, 0);
}
