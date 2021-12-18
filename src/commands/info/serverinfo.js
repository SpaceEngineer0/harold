module.exports = {
	name: 'serverinfo',
	desc: 'server owner, date of creation, member count and other information about the server',
	usage: 'serverinfo',
	example: 'serverinfo',
	type: 'info',
	regex: /^serverinfo$/,
	permissions: [],
	execute(message, args, client, Discord) {
		// TODO
		message.channel.send(new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addFields()
		)
	}
}
