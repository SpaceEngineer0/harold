module.exports = {
	name: 'help',
	desc: 'sends a help message',
	usage: 'help',
	example: 'help',
	type: 'misc',
	regex: /^help$/,
	permissions: [],
	execute(message, args, client) {
		const { prefix } = require('../../../config.json'), Discord = require('discord.js');

		const generateString = () => {
			var string = [];

			client.commands.forEach(command => {
				string.push(`\`${command.usage}\` ${command.desc}, type: ${command.type}`);
			})

			return string.join('\n');
		}

		message.channel.send(new Discord.MessageEmbed()
		.setColor('#3db2c4')
		.setTitle('help')
		.addFields({
			name: 'info',
			value: `Prefix: \`${prefix}\`\nArguments with \`?\` mean that it is optional`
		}, {
			name: 'commands',
			value: generateString()
		})
		.setFooter('harold, https://github.com/SpaceEngie'));

	}
}
