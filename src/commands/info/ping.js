module.exports = {
	name: 'ping',
	desc: 'tests if bot is online',
	usage: 'ping',
	regex: /^ping$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Ping', `Latency: ${(Date.now() - message.createdTimestamp) * -1}ms. API latency: ${Math.round(client.ws.ping)}ms`)
		]});
	}
};
