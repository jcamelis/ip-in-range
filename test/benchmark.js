const ipInRange = require('../src/index.js').ipInRange;
// const ipInRanges = require('./index.js').ipInRanges;

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

var atoi = function atoi(addr) {
    var parts = addr.split('.').map(function(str) {
      return parseInt(str); 
    });
  
    return (parts[0] ? parts[0] << 24 : 0) +
           (parts[1] ? parts[1] << 16 : 0) +
           (parts[2] ? parts[2] << 8  : 0) +
            parts[3];
  };
  
  var checkIpaddrInRange = function checkIpaddrInRange(ipaddr, start, end) {
    var num = atoi(ipaddr);
    return (num >= atoi(start)) && (num <= atoi(end));
  }

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add tests
suite
.add('chinese', function() {
    checkIpaddrInRange('100.100.5.5', '168.168.155.255', '178.168.155.255');
    checkIpaddrInRange('178.100.5.5', '168.168.155.255', '178.168.155.255');
    checkIpaddrInRange('178.100.5.5', '178.100.5.5', '178.100.5.5');
    checkIpaddrInRange('190.100.5.5', '168.168.155.255', '178.168.155.255');
})

.add('ipInRageNew', function() {
    ipInRange('100.100.5.5', '168.168.155.255', '178.168.155.255');
    ipInRange('178.100.5.5', '168.168.155.255', '178.168.155.255');
    ipInRange('178.100.5.5', '178.100.5.5', '178.100.5.5');
    ipInRange('190.100.5.5', '168.168.155.255', '178.168.155.255');
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
