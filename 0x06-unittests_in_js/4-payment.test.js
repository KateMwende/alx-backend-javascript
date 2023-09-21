const sinon = require("sinon");
const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber SUM', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    
    consoleSpy.restore();
    calculateNumberStub.restore();
  });
});