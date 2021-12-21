module.exports = {
	name: 'help',
	desc: 'sends a help message',
	usage: 'help',
	example: null,
	type: 'misc',
	regex: /^help$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const generateString = () => {
			const checkEg = example => {
				if (example === null) return '';
				else return `\`${example}\` `;
			}

			var string = [];
			client.commands.forEach(command => {
				string.push(`\`${command.usage}\` ${command.desc} ${checkEg(command.example)}\`type: ${command.type}\``);
			})
			return string.join('\n');
		}

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Help')
			.addFields(
				{ name: 'Info', value: `Prefix: \`${client.prefix}\`\nArguments with \`?\` are optional` },
				{ name: 'Commands', value: generateString() })
			.setFooter('https://github.com/SpaceEngie/harold')
		]})

	}
}
