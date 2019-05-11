

function verifyIpInRange(ip, from, to) {
    var minValues = from.split(".");
    var maxValues = to.split(".");
    var x = ip.split('.');
    if (+x[0] >= +minValues[0] && +x[0] <= +maxValues[0]) {
        if (+x[1] >= +minValues[1] && +x[1] <= +maxValues[1]) {
            if (+x[2] >= +minValues[2] && +x[2] <= +maxValues[2]) {
                if (+x[3] >= +minValues[3] && +x[3] <= +maxValues[3]) {
                    return true;
                }
            }
        }
    } else {
        return false;
    }
}

module.exports = verifyIpInRange;