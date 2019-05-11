const ipInRange = require('./in-range');
const isLower = require('./is-lower');
const isHigher = require('./is-higher');

function inRanges(ip, ranges) {
    if (ranges.length === 1) {
        return ipInRange(ip, ranges[0].from, ranges[0].to)
    }
    const half = Math.floor(ranges.length / 2);
    const from = ranges[half].from;

    if (isLower(ip, from)) {
        let halfDown = ranges.slice(0, half)
        return inRanges(ip, halfDown);
    } else if (isHigher(ip, from)) {
        let halfUp = ranges.slice(half);
        return inRanges(ip, halfUp);
    } else {
        return true;
    }
}

module.exports = function(ip, ranges) {
    return inRanges(ip, ranges);
}
