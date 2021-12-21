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

		const { desc, usage, example, type } = client.commands.get(args[0]);

		const checkEg = example => {
			if (example === null) return '';
			else return `\`${example}\` `;
		}

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Command Help')
			.addField(args[0], `\`${usage}\` ${desc} ${checkEg(example)}}\`type: ${type}\``)
			.setFooter('https://github.com/SpaceEngie/harold')
		]})
	}
}
