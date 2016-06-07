var expect = require("chai").expect;

const lambdaTestPath = '../src/hello.js';
const lambdaToTest = require(lambdaTestPath);

const context = require('aws-lambda-mock-context')();

describe("Hello Lambda Tests", function() {

	var lambdaResponse = null;
	var lambdaError = null;
	const name = "Nate";
	const event = { "name" : name };

	before(function(done){

		lambdaToTest.handler(event, context);

        	context.Promise
            		.then(resp => { lambdaResponse = resp; done(); })
            		.catch(err => { lambdaError = err; done();});
	});

	it('should have no errors',function() {
            expect(lambdaError).to.be.null
        });

	it('should say hello to the given name', function() {
	    expect(lambdaResponse.hello).to.equal(name);
	});

});
