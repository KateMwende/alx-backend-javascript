const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return sum', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
      assert.strictEqual(calculateNumber('SUM', 2, 3.7), 6);
    }); 
  });

  describe('type SUBTRACT', () => {
    it('should return subtracted output', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 3), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
    }); 
  });

  describe('type DIVIDE', () => {
    it('should return DIVIDED output', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 3), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 4), 1.5);
    });
    it("Should return error when divided by 0", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
  });
  it('throw invalid type error', () => {
    assert.throws(() => calculateNumber('Invalid_type', 1, 2), Error);
  });
});