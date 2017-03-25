const bustime = require('../index');
const config = require('../config').config

bustime.init(config.key, config.host);


bustime.getDirections({ rt: 'SY72', format: 'json', rejectUnauthorized: config.rejectUnauthorized })
  .then((response) => {
    console.log(JSON.stringify(response));
  })
  .catch((error) => {
      console.log(JSON.stringify(error));
  });
