module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('> harold is ready');
		client.user.setPresence({ activity: { name: 'haroldhelp' }, status: 'online'});
	}
}
