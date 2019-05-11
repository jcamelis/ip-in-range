const toNumbers = require('./to-numbers');

function inRange(value, min, max, index) {
    if (index > value.length) {
        return true;
    }

    if (value[index] > min[index] && value[index] < max[index]) {
        return true;
    }

    if (value[index] === min[index] && value[index] === max[index]) {
        return inRange(value, min, max, index + 1);
    }

    if (value[index] === min[index]) {
        return inRange(value, min, [255, 255, 255, 255], index + 1);
    }

    if (value[index] === max[index]) {
        return inRange(value, [0, 0, 0, 0], max, index + 1);
    }

    return false;
}

module.exports = function(ip, from, to) {
    const i = toNumbers(ip);
    const f = toNumbers(from);
    const t = toNumbers(to);

    return inRange(i, f, t, 0);
}
