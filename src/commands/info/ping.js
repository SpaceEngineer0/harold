module.exports = {
	name: 'ping',
	desc: 'tests if bot is online',
	usage: 'ping',
	example: 'ping',
	type: 'misc',
	regex: /^ping$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send(new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Ping', `Latency is ${(Date.now() - message.createdTimestamp) * -1}ms. API latency is ${Math.round(client.ws.ping)}ms`)
		)
	}
}
