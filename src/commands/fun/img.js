module.exports = {
	name: 'img',
	desc: 'sends random or certain image from folder',
	usage: 'img [<index>]',
	regex: /^img( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const dirLength = require('fs').readdirSync(`./images/harold/`).filter(file => file.endsWith('.png')).length;
		const index = parseInt(args[0], 10) || Math.floor(Math.random() * dirLength);

		if (index < 1 || index > dirLength) {
			message.reply('That image doesn\'t exist');
			return;
		};

		const attachment = new Discord.MessageAttachment(`./images/harold/${index}.png`, 'harold.png');
		message.channel.send({
			embeds: [new Discord.MessageEmbed()
				.setColor(client.embedColor)
				.addField('Img', `Photo nr ${index}`)
				.setImage('attachment://harold.png')],
			files: [attachment] }
		);
	}
};
