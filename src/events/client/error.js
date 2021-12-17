module.exports = {
	name: 'error',
	once: false,
	execute(err, client) {
		console.error(err);
	}
}
