const client = require('./api-client');

exports.details = (params) => {
    return client.makeApiCall('getrtpidatafeeds', params);
};

exports.gettime = (params) => {
    return client.makeApiCall('gettime', params);
};

// /getvehicles 
// /getroutes 
// /getdirections 
// /getstops 
// /getpatterns 
// /getpredictions 
// /getservicebulletins 

exports.getlocalelist = (params) => {
	return client.makeApiCall('getlocalelist', params);
};

exports.getrtpidatafeeds = (params) => {
	return client.makeApiCall('getrtpidatafeeds', params);
};
