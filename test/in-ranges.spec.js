const inRanges = require('../src/in-ranges');

describe('inRanges Test Suite', function() {
    const mock = [{
            "from": "1.2.169.59",
            "to": "1.2.169.59"
        }, {
            "from": "20.2.169.101",
            "to": "20.2.169.101"
        }, {
            "from": "30.9.216.226",
            "to": "30.9.216.226"
        }, {
            "from": "40.10.141.220",
            "to": "40.10.141.220"
        }, {
            "from": "50.10.176.143",
            "to": "50.10.176.150"
        }, {
            "from": "60.2.169.59",
            "to": "60.2.169.59"
        }, {
            "from": "70.1.169.101",
            "to": "70.2.169.101"
        }, {
            "from": "80.9.205.0",
            "to": "80.9.216.226"
        }, {
            "from": "90.10.141.120",
            "to": "90.10.141.220"
        }, {
            "from": "100.10.176.10",
            "to": "100.10.176.143"
        }];

    it(":: Equal to 'from' should be true", function() {
        const expected = true;
        const actual = inRanges('80.9.205.0', mock);

        expect(actual).toBe(expected);
    });

    it(":: Equal to 'to' should be true", function() {
        const expected = true;
        const actual = inRanges('80.9.216.226', mock);

        expect(actual).toBe(expected);
    });

    it(":: Between range should true", function() {
        const expected = true;
        const actual = inRanges('100.10.176.20', mock);

        expect(actual).toBe(expected);
    });

    it(":: Out of range should false", function() {
        const expected = false;
        const actual = inRanges('92.10.176.20', mock);

        expect(actual).toBe(expected);
    });


    it(":: Out of range should false", function() {
        const expected = false;
        const actual = inRanges('10.10.176.20', mock);

        expect(actual).toBe(expected);
    });
})