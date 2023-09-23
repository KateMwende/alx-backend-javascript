const request = require('request');
const expect = require('chai').expect;

describe('index page testing', () => {
  const api_url = 'http://localhost:7865';
  
  it('GET / returns correct response', (done) => {
    request.get(`${api_url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});