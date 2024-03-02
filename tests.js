const chai = require('chai').expect;
const request = require('request');
let url;


beforeEach(async () => {
url = 'http://localhost:3000';
});

describe('Calculate', () => {

it('Get Me', async () => {
    request(url + '/profile', function (error, response, body) {
    console.log(`Res: $response`);
    expect(response.statusCode).to.equal(200);
    done();
    });
});

it('Auth', async () => {
    request(url + '/auth/login', function (error, response, body) {
    console.log(`Res: $response`);
    expect(response.statusCode).to.equal(200);
    done();
    });
});

it('Register', async () => {
    request(url + '/auth/register', function (error, response, body) {
    console.log(`Res: $response`);
    expect(response.statusCode).to.equal(200);
    done();
    });
});

// it('calculate the wrong sum of two values', async () => {
// request(url + '?num1=5&num2=6', function (error, response, body) {
// expect(response.statusCode).to.equal(200);
// expect(body[0]).to.not.equal(9);
// done();
// });

// });

});
