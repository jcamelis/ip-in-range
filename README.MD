# INSTALL

```shell

npm install @jcamelis/ip-in-range

```


# How to use


## Evaluate an ip address against a range

```js
const ipInRange = require('@jcamelis/ip-in-range').ipInRange


const range = {
    from: '192.0.0.1',
    to: '192.0.0.12'
};

// Returns true
ipInRange('192.0.0.4', range);

// Returns false
ipInRange('192.0.0.16', range);

```


## Evaluate an ip address against an array of ranges

```js
const ipInRanges = require('@jcamelis/ip-in-range').ipInRanges


const ranges = [
    {
        from: '192.0.0.1',
        to: '192.0.0.12'
    },
    {
        from: '192.0.0.32',
        to: '192.0.0.40'
    },
    {
        from: '192.0.0.50',
        to: '192.0.0.60'
    }
];

// Returns true
ipInRanges('192.0.0.34', ranges);

// Returns false
ipInRanges('192.0.0.43', ranges);

```