module.exports = {
	name: 'img',
	desc: 'sends random or certain image from folder',
	usage: 'img <index?>',
	example: 'img 1',
	type: 'fun',
	regex: /^img( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		// 	// FIXME: images in embeds
		// 	// message.channel.send(`Photo nr ${args[0]}`, { files: [`./images/harold/${args[0]}.png`] });

		const dirLength = require('fs').readdirSync(`./images/harold/`).filter(file => file.endsWith('.png')).length;

		if (!args[0]) args[0] = Math.floor(Math.random() * (dirLength - 1) + 1)

		parseInt(args[0], 10);

		if (args[0] < 0 || args[0] > dirLength) {
			message.reply('That image doesn\'t exist');
			return;
		}

		// message.channel.send({ content: `Photo nr ${args[0]}`, files: [`./images/harold/${args[0]}.png`] });

		const attachment = new Discord.MessageAttachment(`./images/harold/${args[0]}.png`, 'harold.png');
		message.channel.send({
			embeds: [new Discord.MessageEmbed()
				.setColor(client.embedColor)
				.addField('Img', `Photo nr ${args[0]}`)
				.setImage('attachment://harold.png')],
			files: [attachment] }
		)
	}
}
