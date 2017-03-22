const https = require('https');

let KEY, HOST, VERSION, LOCALE;

// Set up API key and common.
exports.init = (key, host, version, locale) => {
    KEY = key;
    HOST = host || 'localhost';
    VERSION = version || 'v2';
    LOCALE = locale || 'en';
};

// Method to make API call.
exports.makeApiCall = (path, params) => {

    // Build path.
    let query_path = `/bustime/api/${VERSION}/${path}?key=${KEY}&locale=${LOCALE}` + buildQueryString(params);

    // Assemble options for API call.
    var options = {
        hostname: HOST,
        port: 443,
        path: query_path,
        rejectUnauthorized: params.rejectUnauthorized,
        method: 'GET'
    };

    // Make API call.
    return new Promise((resolve, reject) => {

        // Make sure API key is set.
        if (!KEY) {
            reject(new Error('API Key must be set'));
        }

        https.get(options, (res) => {
            res.on('error', (error) => {
                reject(error);
            });
            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(body));
            });
        });
    })

};

// Utility function to build querystring parameters for API call.
let buildQueryString = (params) => {
    let querystring = '';
    for (param in params) {
        querystring += `&${param}=${params[param]}`;
    }
    return querystring;
}
