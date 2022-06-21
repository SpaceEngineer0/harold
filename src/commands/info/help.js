module.exports = {
	name: 'help',
	desc: 'sends a help message',
	usage: 'help',
	regex: /^help$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const generateMsg = () => {
			var message = [];
			client.commands.forEach(command => message.push(`\`${command.usage}\` ${command.desc}`));
			return message.join('\n');
		};

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Help')
			.addFields(
				{ name: 'Info', value: `Prefix: \`${client.prefix}\`\nArguments in \`[]\` are optional` },
				{ name: 'Commands', value: generateMsg()})
			.setFooter({ text: 'https://github.com/SpaceEngineer0/harold' })
		]});
	}
};
