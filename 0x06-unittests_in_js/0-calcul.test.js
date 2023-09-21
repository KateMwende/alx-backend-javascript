const assert = require("assert")
const calculateNumber = require("./0-calcul")

describe("calculateNumber", () => {
    it('should return rounded off sum', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 2.6), 5);
        assert.strictEqual(calculateNumber(3.7, 9.5), 14);
    });
});