module.exports = {
	name: 'quote',
	desc: 'sends a random or certain quote from a list',
	usage: 'quote <index?>',
	example: 'quote 10',
	type: 'fun',
	regex: /^quote( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const quotes = require('fs').readFileSync('./src/quotes.txt', 'utf-8').split('\n');

		if (!args[0]) args[0] = Math.floor(Math.random() * quotes.length);

		parseInt(args[0], 10);
		args[0]--;

		if (args[0] < 0 || args[0] > quotes.length) {
			message.reply('That quote doesn\'t exist');
			return;
		}

		message.channel.send(`Quote nr ${args[0] + 1}: ${quotes[args[0]]}`);
	}
}
