module.exports = {
	name: 'img',
	desc: 'sends random or certain image from folder',
	usage: 'img <index?>',
	example: 'img 1',
	type: 'fun',
	regex: /^img( [0-9]+)?$/,
	permissions: [],
	execute(message, args, client) {
		const dirLength = require('fs').readdirSync(`./images/harold/`).filter(file => file.endsWith('.png')).length;

		if (args[0]) {
			parseInt(args[0], 10);

			if (args[0] < 0 || args[0] > dirLength) {
				message.reply('That image doesn\'t exist');
				return;
			}

			message.channel.send(`Photo nr ${args[0]}`, { files: [`./images/harold/${args[0]}.png`] });
		}
		else {
			const index = Math.floor(Math.random() * (dirLength - 1) + 1);
			message.channel.send(`Photo nr ${index}`, { files: [`./images/harold/${index}.png`] });
		}
	}
}
