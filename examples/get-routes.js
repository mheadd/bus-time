const bustime = require('../index');
const config = require('../config').config

bustime.init(config.key, config.host);

bustime.getRoutes({ format: 'json', rejectUnauthorized: config.rejectUnauthorized })
  .then((response) => {
      for(let route of response['bustime-response'].routes) {
        console.log(route.rtnm);
      }
  })
  .catch((error) => {
      console.log(JSON.stringify(error));
  });
