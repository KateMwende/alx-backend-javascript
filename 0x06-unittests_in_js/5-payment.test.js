const sinon = require('sinon');
const expect = require('chai').expect
const sendPaymentRequestToAPI = require('./5-payment');
const Utils = require("./utils");

describe('sendPaymentRequestToAPI', () => {
  beforeEach("set up spy before each test", () => {
    sinon.spy(console, 'log');
  });
  afterEach('restore condole.log after each test', () => {
   console.log.restore();
  });
  it('sendPaymentRequestToAPI', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });

  it('sendPaymentRequestToAPI', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});