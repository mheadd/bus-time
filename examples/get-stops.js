const bustime = require('../index');
const config = require('../config').config

bustime.init(config.key, config.host);

bustime.getStops({ rt: 'SY68', dir: 'FROM HUB', format: 'json', rejectUnauthorized: config.rejectUnauthorized })
  .then((response) => {
    console.log(JSON.stringify(response));
  })
  .catch((error) => {
      console.log(JSON.stringify(error));
  });
