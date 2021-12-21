module.exports = {
	name: 'img',
	desc: 'sends random or certain image from folder',
	usage: 'img <index?>',
	example: 'img 1',
	type: 'fun',
	regex: /^img( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const dirLength = require('fs').readdirSync(`./images/harold/`).filter(file => file.endsWith('.png')).length;

		if (!args[0]) args[0] = Math.floor(Math.random() * (dirLength - 1) + 1)

		parseInt(args[0], 10);

		if (args[0] == 2137) {
			const attachment = new Discord.MessageAttachment(`./images/2137.png`, 'papiez.png');
			message.channel.send({
				embeds: [new Discord.MessageEmbed()
					.setColor(client.embedColor)
					.addField('Img', 'Secret Papież')
					.setImage('attachment://papiez.png')
					.setFooter('Popatrz siostro, popatrz bracie! Papież Polak w automacie!')],
				files: [attachment] }
			)

			return;
		}
		else if (args[0] < 0 || args[0] > dirLength) {
			message.reply('That image doesn\'t exist');
			return;
		}

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
