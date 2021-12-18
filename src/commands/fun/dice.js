module.exports = {
	name: 'dice',
	desc: 'rolls an #n-side dice',
	usage: 'dice <n?>',
	example: 'dice 20',
	type: 'fun',
	regex: /^dice( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		if (!args[0]) args[0] = 6;

		parseInt(args[0], 10);
		args[0]++;

		message.channel.send(new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Dice', `Rolled ${Math.floor(Math.random() * (args[0] - 1) + 1)}`)
		)
	}
}
