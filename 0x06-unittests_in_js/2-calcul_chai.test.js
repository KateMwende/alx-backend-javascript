const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return sum', () => {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
      expect(calculateNumber('SUM', 2, 3.7)).to.equal(6);
    }); 
  });

  describe('type SUBTRACT', () => {
    it('should return subtracted output', () => {
      expect(calculateNumber('SUBTRACT', 3, 3)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
    }); 
  });

  describe('type DIVIDE', () => {
    it('should return DIVIDED output', () => {
      expect(calculateNumber('DIVIDE', 3, 3)).to.equal(1);
      expect(calculateNumber('DIVIDE', 6, 4)).to.equal(1.5);
    });
    it("Should return error when divided by 0", () => {
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
  });
  it('throw invalid type error', () => {
    expect(() => calculateNumber('Invalid_type', 1, 2)).to.throw(Error);
  });
});