module.exports = {
	name: 'ping',
	desc: 'tests if bot is online',
	usage: 'ping',
	example: 'ping',
	type: 'misc',
	regex: /^ping$/,
	permissions: [],
	execute(message, args, client) {
		message.channel.send(`Pong. Latency is ${(Date.now() - message.createdTimestamp) * -1}ms. API latency is ${Math.round(client.ws.ping)}ms`);
	}
}
