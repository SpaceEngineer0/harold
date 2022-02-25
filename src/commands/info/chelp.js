module.exports = {
	name: 'chelp',
	desc: 'explains a command',
	usage: 'chelp <command>',
	regex: /^chelp \w+$/,
	permissions: [],
	execute(message, args, client, Discord) {
		if (!client.commands.has(args[0])) {
			message.reply('That command doesn\'t exist');
			return;
		}

		const { desc, usage } = client.commands.get(args[0]);

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Command Help')
			.addField(args[0], `\`${usage}\` ${desc}`)
			.setFooter({ text: 'https://github.com/SpaceEngie/harold' })
		]})
	}
}
