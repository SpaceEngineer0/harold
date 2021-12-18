module.exports = {
	name: 'prefix',
	desc: 'change the bot\'s prefix',
	example: 'prefix ,',
	usage: 'prefix <prefix>',
	type: 'moderation',
	regex: /^prefix .+$/,
	permissions: ['MANAGE_SERVER'],
	execute(message, args, client, Discord) {
		const temp = client.prefix;
		client.prefix = args[0];

		// TODO

		// message.channel.send(new Discord.MessageEmbed()
		// 	.setColor(client.embedColor)
		// 	.addTitle('Prefix', `Prefix changed from \`${temp}\` to \`${args[0]}\``)
		// )

		message.channel.send(new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Prefix', `Prefix changed from \`${temp}\` to \`${args[0]}\``)
		)
	}
}
