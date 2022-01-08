module.exports = {
	name: 'ready',
	once: true,
	execute(client, Discord) {
		console.log('Ready');
		client.user.setPresence({ activity: { name: `haroldhelp | prefix: ${client.prefix}` }, status: 'online'});
	}
}
