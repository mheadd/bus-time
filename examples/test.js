const bustime =  require('../index');

bustime.init(process.argv[2], process.argv[3], process.argv[4]);

bustime.test.gettime({format: 'json', rejectUnauthorized: false})
	.then((response) => {
		console.log(JSON.stringify(response));
	})
	.catch((error) => {
		console.log(JSON.stringify(error));
	}
);