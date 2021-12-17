module.exports = {
	name: 'chelp',
	desc: 'explains a command',
	usage: 'chelp <command>',
	example: 'chelp echo',
	type: 'misc',
	regex: /^chelp \w+$/,
	permissions: [],
	execute(message, args, client) {
		if (!client.commands.has(args[0])) {
			message.reply('That command doesn\'t exist');
			return;
		}

		const { desc, usage, type } = client.commands.get(args[0]);
		const Discord = require('discord.js');

		message.channel.send(new Discord.MessageEmbed()
		.setColor('#3db2c4')
		.setTitle('chelp')
		.addFields({ name: `${args[0]} command help`, value: `\`${usage}\` ${desc}, type: ${type}` })
		.setFooter('harold, https://github.com/SpaceEngie'));
	}
}
