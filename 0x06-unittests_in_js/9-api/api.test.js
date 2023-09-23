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

  it('GET / returns correct response', (done) => {
    request.get(`${api_url}/cart/4`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 4');
      done();
    });
  });

  it('GET / returns 404 response on negatives', (done) => {
    request.get(`${api_url}/cart/-4`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET / returns 404 response to non-numerics', (done) => {
    request.get(`${api_url}/cart/hello`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});