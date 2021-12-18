module.exports = {
	name: 'ready',
	once: true,
	execute(client, Discord) {
		console.log('> harold is ready');
		client.user.setPresence({ activity: { name: `haroldhelp | prefix: ${client.prefix}` }, status: 'online'});
	}
}
