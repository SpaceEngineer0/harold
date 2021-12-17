module.exports = {
	name: 'quote',
	desc: 'sends a random or certain quote from `quotes.txt` file',
	usage: 'quote <index?>',
	example: 'quote 10',
	type: 'fun',
	regex: /^quote( [0-9]+)?$/,
	permissions: [],
	execute(message, args, client) {
		const quotes = require('fs').readFileSync('./src/misc/quotes.txt', 'utf-8').split('\n');

		if (args[0]) {
			parseInt(args[0], 10);
			args[0]--;

			if (args[0] < 0 || args[0] > quotes.length) {
				message.reply('That quote doesn\'t exist');
				return;
			}

			message.channel.send(`Quote nr ${args[0] + 1}: ${quotes[args[0]]}`);
		}
		else {
			const index = Math.floor(Math.random() * (quotes.length - 0) + 0);
			message.channel.send(`Quote nr ${index}: ${quotes[index]}`);
		}
	}
}
