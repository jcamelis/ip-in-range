const ipInRanges = require('../src/index').ipInRanges;

const mock = require('./mock.json');

function checkIpInRanges(ip, blacklist) {

    var isIpInRange = false;
    blacklist.forEach(ipRange => {
        isIpInRange = isIpInRange || verifyIpInRange(ipRange, ip);
    });
    return isIpInRange;
}

function verifyIpInRange(range, ip) {
    var minValues = range.from.split(".");
    var maxValues = range.to.split(".");
    var x = ip.split('.');
    if (+x[0] >= +minValues[0] && +x[0] <= +maxValues[0]) {
        if (+x[1] >= +minValues[1] && +x[1] <= +maxValues[1]) {
            if (+x[2] >= +minValues[2] && +x[2] <= +maxValues[2]) {
                if (+x[3] >= +minValues[3] && +x[3] <= +maxValues[3]) {
                    return true;
                }
            }
        }
    }
    return false;
}

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add tests
suite
.add('oldPkgAlgorith', function() {
    checkIpInRanges('10.9.205.0', mock);
    // checkIpInRanges('20.9.205.0', mock);
    // checkIpInRanges('30.9.205.0', mock);
    // checkIpInRanges('40.9.205.0', mock);
    // checkIpInRanges('50.9.205.0', mock);
    // checkIpInRanges('60.9.205.0', mock);
    // checkIpInRanges('70.9.205.0', mock);
    // checkIpInRanges('80.9.205.0', mock);
    // checkIpInRanges('90.9.205.0', mock);
    // checkIpInRanges('100.100.5.5', mock);
    // checkIpInRanges('110.100.5.5', mock);
    // checkIpInRanges('120.100.5.5', mock);
    // checkIpInRanges('130.100.5.5', mock);
    // checkIpInRanges('140.100.5.5', mock);
    // checkIpInRanges('158.100.5.5', mock);
    // checkIpInRanges('190.100.5.5', mock);
    checkIpInRanges('220.100.5.5', mock);
})

.add('ipInRanges', function() {
    ipInRanges('20.9.205.0', mock);
    // ipInRanges('30.9.205.0', mock);
    // ipInRanges('40.9.205.0', mock);
    // ipInRanges('50.9.205.0', mock);
    // ipInRanges('60.9.205.0', mock);
    // ipInRanges('70.9.205.0', mock);
    // ipInRanges('80.9.205.0', mock);
    // ipInRanges('90.9.205.0', mock);
    // ipInRanges('100.100.5.5', mock);
    // ipInRanges('110.100.5.5', mock);
    // ipInRanges('120.100.5.5', mock);
    // ipInRanges('130.100.5.5', mock);
    // ipInRanges('140.100.5.5', mock);
    // ipInRanges('158.100.5.5', mock);
    // ipInRanges('190.100.5.5', mock);
    ipInRanges('220.100.5.5', mock);
})

// add listeners
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('error', function(event) {
    console.log('ERROR::', event);
})
.on('abort', function(event) {
    console.log('ABORT::', event);
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
