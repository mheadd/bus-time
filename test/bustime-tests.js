const expect = require('expect.js');
const bustime = require('../index');
const config = require('../config').config

describe('Bus-Time Client Library', () => {

    describe("#Initiatize", () => {
        it("Throw an error if API key not passed in call to initialize", (done) => {
            bustime.getTime({
                    format: 'json',
                    rejectUnauthorized: config.rejectUnauthorized
                })
                .catch((error) => {
                    expect(error.message).to.eql('API Key must be set');
                });
            done();
        })
    });

    describe('#GetTime', () => {
        it("Gets the current system date and time", (done) => {
            bustime.init(config.key, config.host);
            bustime.getTime({
                    format: 'json',
                    rejectUnauthorized: config.rejectUnauthorized
                })
                .then((response) => {
                    expect(response).to.be.an('object');
                    expect(response).to.not.be.empty();
                });
            done();
        });
    });

    describe('#GetDetails', () => {
        it("Gets the set of external and internal rtpi information serviced by the system", (done) => {
            bustime.init(config.key, config.host);
            bustime.getDetails({
                    format: 'json',
                    rejectUnauthorized: config.rejectUnauthorized
                })
                .then((response) => {
                    expect(response).to.be.an('object');
                    expect(response).to.not.be.empty();
                });
            done();
        });
    });

    describe('#GetLocaleList', () => {
        it("Gets the list of what languages can be used as the locale parameter", (done) => {
            bustime.init(config.key, config.host);
            bustime.getLocaleList({
                    format: 'json',
                    rejectUnauthorized: config.rejectUnauthorized
                })
                .then((response) => {
                    expect(response).to.be.an('object');
                    expect(response).to.not.be.empty();
                });
            done();
        });
    });

});
