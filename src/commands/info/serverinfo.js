module.exports = {
	name: 'serverinfo',
	desc: 'server owner, date of creation, member count and other information about the server',
	usage: 'serverinfo',
	example: 'serverinfo',
	type: 'info',
	regex: /^serverinfo$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const guild = message.guild;

		message.channel.send(new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Server Info')
			.setThumbnail(guild.iconURL())
			.addFields(
				{ name: 'Server Name', value: guild.name, inline: true },
				{ name: 'Owner', value: guild.owner.user, inline: true },
				{ name: 'Members', value: `${guild.memberCount} Total` },
				{ name: 'Channels', value: `${guild.channels.cache.filter(c => c.type === "text").size} Text channels, ${guild.channels.cache.filter(c => c.type === 'voice').size} Voice channels` }
			)
		)
	}
}
