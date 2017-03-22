const client = require('./lib/api-client');

module.exports = {
    init: (key, host, version) => client.init(key, host, version),

    // Retrieve the set of external and internal rtpi information serviced by the system.
    getDetails: (params) => {
        return client.makeApiCall('getrtpidatafeeds', params);
    },

    // Retrieve the current system date and time.
    getTime: (params) => {
        return client.makeApiCall('gettime', params);
    },

    // Get a list of what languages can be used as the locale parameter.
    getLocaleList: (params) => {
        return client.makeApiCall('getlocalelist', params);
    },

    // Retrieve vehicle locations of all or a subset of vehicles currently being tracked.
    getVehicles: (params) => {
        return client.makeApiCall('getvehicles', params);
    },

    // Retrieve the set of stops for the specified route and direction.
    getStops: (params) => {
        return client.makeApiCall('getstops', params);
    },

    // Retrieve the set of routes serviced by the system.
    getRoutes: (params) => {
        return client.makeApiCall('getroutes', params);
    },

    // Retrieve predictions for one or more stops or one or more vehicles.
    getPredictions: (params) => {
        return client.makeApiCall('getpredictions', params);
    },

    // Retrieve the set of directions serviced by the specified route.
    getRoutes: (params) => {
        return client.makeApiCall('getroutes', params);
    },

    // Retrieve the set of stops for the specified route and direction
    getDirections: (params) => {
        return client.makeApiCall('getdirections', params);
    },

    // Retrieve the set of geo-positional points and stops that can be used to construct a pattern.
    getPatterns: (params) => {
        return client.makeApiCall('getpatterns', params);
    },

    // Get a list of service bulletins that are in effect for a route.
    getServiceBulletins: (params) => {
        return client.makeApiCall('getservicebulletins', params);
    }
};
