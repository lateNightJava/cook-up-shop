const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Server', async function () {
  it('Starts app', async function () {
    const response = await chai.request(server).get('/');

    expect(response.text).to.be.a('string');
    expect(response.text).to.equal('Cook it up!');
  });
});