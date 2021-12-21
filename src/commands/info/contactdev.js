module.exports = {
	name: 'contactdev',
	desc: 'get contact info of harold\'s creator',
	usage: 'contactdev',
	example: 'contactdev',
	type: 'info',
	regex: /^contactdev$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Contact Dev')
			.addFields(
				{ name: 'Info', value: `harold is a small and simple Discord bot. It has many fun commands to make servers more interesting.` },
				{ name: 'Contacts', value: `
Discord: <@658417195147067442>
Discord Server: https://discord.gg/7R9abrnyJ6
Github: https://github.com/SpaceEngie
YouTube: https://www.youtube.com/channel/UCCQ_6GbfuqqZO_lLLG1TdTw` },
				{ name: 'Collaborate', value: 'If you have an idea of how to improve this bot, please contact me.' }
			)
			.setFooter('https://github.com/SpaceEngie/harold')
		]})
	}
}
