const isHigher = require('../src/is-higher');

describe('isLower Test Suite', function() {
    it("lower with First number equal", function() {
        const expected = false;
        const actual = isHigher('10.0.0.0', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it("lower with number 1 and 2 equal", function() {
        const expected = false;
        const actual = isHigher('10.1.0.0', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it("lower with number 1, 2 and 3 equal", function() {
        const expected = false;
        const actual = isHigher('10.1.2.0', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it("Equal ips should be false", function() {
        const expected = false;
        const actual = isHigher('10.1.2.3', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it("Higher with first number equal should be true", function() {
        const expected = true;
        const actual = isHigher('10.4.4.4', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it("Higher with 1, and 2 number equal should be true", function() {
        const expected = true;
        const actual = isHigher('10.1.4.4', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it("Higher with 1, 2 and 3 number equal should be true", function() {
        const expected = true;
        const actual = isHigher('10.1.2.4', '10.1.2.3');

        expect(actual).toBe(expected);
    });
});