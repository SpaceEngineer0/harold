const quotes = require('../../quotes.json');

module.exports = {
	name: 'quote',
	desc: 'sends a random or certain quote from a list',
	usage: 'quote [<index>]',
	regex: /^quote( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const index = parseInt(args[0] || Math.floor(Math.random() * quotes.length));

		if (index == 0 || index >= quotes.length) {
			message.reply('That quote doesn\'t exist');
			return;
		}

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Quote', `Quote nr ${index}: ${quotes[index - 1]}`)
		]})
	}
}
