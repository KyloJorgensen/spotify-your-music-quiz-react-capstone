var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');

var should = chai.should();
var app = server.app;
chai.use(chaiHttp);

describe('Fit For The Kingdom', function() {
    it('should sendFile on GET', function(done) {
        chai.request(app)
        .get('/')
        .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.sendFile;
            done();
        });
    });
});