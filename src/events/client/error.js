module.exports = {
	name: 'error',
	once: false,
	execute(err, client, Discord) {
		console.error(err);
	}
}
