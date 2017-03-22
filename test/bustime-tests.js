const expect = require('expect.js');
const bustime = require('../index');
const config = require('../config').config

describe('Bus-Time Client Library', () => {

    describe("#Initiatize", () => {
        it("Throw an error if API key not passed in call to initialize", (done) => {
            bustime.gettime({
                    format: 'json',
                    rejectUnauthorized: config.rejectUnauthorized
                })
                .catch((error) => {
                    expect(error.message).to.eql('API Key must be set');
                });
            done();
        })
    });

    describe('#GetDetails', () => {
        it("Gets the details of the BusTime feed.", (done) => {
            bustime.init(config.key, config.host);
            bustime.gettime({
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



// bustime.init(config.key, config.host);
// bustime.details({format: 'json', rejectUnauthorized: false})
// 	.then((response) => {
// 		console.log(JSON.stringify(response));
// 	})
// 	.catch((error) => {
// 		console.log(JSON.stringify(error));
// 	}
// );
