const client = require('./lib/api-client');

module.exports = {
    init: (key, host, version) => client.init(key, host, version),

    details: (params) => {
        return client.makeApiCall('getrtpidatafeeds', params);
    },

    gettime: (params) => {
        return client.makeApiCall('gettime', params);
    },

    getlocalelist: (params) => {
        return client.makeApiCall('getlocalelist', params);
    },

    getrtpidatafeeds: (params) => {
        return client.makeApiCall('getrtpidatafeeds', params);
    },

    getvehicles: (params) => {
        return client.makeApiCall('vehicles', params);
    },

    getstops: (params) => {
        return client.makeApiCall('stops', params);
    },

    getroutes: (params) => {
        return client.makeApiCall('routes', params);
    },

    getpredictions: (params) => {
        return client.makeApiCall('predictions', params);
    },

    getpredictions: (params) => {
        return client.makeApiCall('predictions', params);
    },

    getroutes: (params) => {
        return client.makeApiCall('routes', params);
    },

    getdirections: (params) => {
        return client.makeApiCall('directions', params);
    },

    getpatterns: (params) => {
        return client.makeApiCall('patterns', params);
    },

    getservicebulletins: (params) => {
        return client.makeApiCall('servicebulletins', params);
    }
};
