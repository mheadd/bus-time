module.exports = {
	init: (key, host, version) => require('./lib/api-client').init(key, host, version),
	test: require('./lib/test')
}