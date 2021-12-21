module.exports = {
	name: 'help',
	desc: 'sends a help message',
	usage: 'help',
	example: 'help',
	type: 'misc',
	regex: /^help$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const generateString = () => {
			var string = [];

			client.commands.forEach(command => {
				string.push(`\`${command.usage}\` ${command.desc}, type: \`${command.type}\``);
			})

			return string.join('\n');
		}

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Help')
			.addFields(
				{ name: 'info', value: `Prefix: \`${client.prefix}\`\nArguments with \`?\` are optional` },
				{ name: 'commands', value: generateString() })
			.setFooter('https://github.com/SpaceEngie/harold')
		]})

	}
}
