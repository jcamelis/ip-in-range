const inRange = require('../src/in-range');

describe('inRange Test Suite', function() {
    it(":: Lower with First number equal", function() {
        const expected = false;
        const actual = inRange('10.0.0.0', '10.1.2.3', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it(":: Lower with number 1 and 2 numbers equals", function() {
        const expected = false;
        const actual = inRange('10.1.0.0', '10.1.2.3', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it(":: Lower with number 1, 2 and 3 numbers equals", function() {
        const expected = false;
        const actual = inRange('10.1.2.0', '10.1.2.3', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it(":: Equal ips should be true", function() {
        const expected = true;
        const actual = inRange('10.1.2.3', '10.1.2.3', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it(":: Higher with first number equal should be false", function() {
        const expected = false;
        const actual = inRange('10.4.4.4', '10.1.2.0', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it(":: Higher with 1, and 2 numbers equals should be false", function() {
        const expected = false;
        const actual = inRange('10.1.4.4', '10.1.2.0', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it(":: Higher with 1, 2 and 3 numbers equals should be false", function() {
        const expected = false;
        const actual = inRange('10.1.2.4', '10.1.2.0', '10.1.2.3');

        expect(actual).toBe(expected);
    });

    it(":: InRange should be true", function() {
        const expected = true;
        const actual = inRange('10.1.2.2', '9.0.2.0', '11.2.3.3');

        expect(actual).toBe(expected);
    });

    it(":: InRange with first number equal should be true", function() {
        const expected = true;
        const actual = inRange('10.1.2.2', '10.0.2.0', '10.2.3.3');

        expect(actual).toBe(expected);
    });

    it(":: InRange with 1, and 2 numbers equals should be true", function() {
        const expected = true;
        const actual = inRange('10.1.2.4', '10.1.1.0', '10.1.3.6');

        expect(actual).toBe(expected);
    });

    it(":: InRange with 1, 2 and 3 numbers equals should be true", function() {
        const expected = true;
        const actual = inRange('10.1.2.4', '10.1.2.0', '10.1.2.6');

        expect(actual).toBe(expected);
    });
});