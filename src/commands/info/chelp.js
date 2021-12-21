module.exports = {
	name: 'chelp',
	desc: 'explains a command',
	usage: 'chelp <command>',
	example: 'chelp echo',
	type: 'misc',
	regex: /^chelp \w+$/,
	permissions: [],
	execute(message, args, client, Discord) {
		if (!client.commands.has(args[0])) {
			message.reply('That command doesn\'t exist');
			return;
		}

		const { desc, usage, type } = client.commands.get(args[0]);

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('CHelp')
			.addField(`${args[0]}`, `command help\`${usage}\` ${desc}, type: ${type}`)
			.setFooter('https://github.com/SpaceEngie/harold')
		]})
	}
}
