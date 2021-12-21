module.exports = {
	name: 'dice',
	desc: 'rolls an #n-side dice',
	usage: 'dice <n?>',
	example: 'dice 12',
	type: 'fun',
	regex: /^dice( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		if (!args[0]) args[0] = 6;

		parseInt(args[0], 10);
		args[0]++;

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Dice', `<:diamond_shape_with_a_dot_inside:922759561025298432> Rolled ${Math.floor(Math.random() * (args[0] - 1) + 1)}`)
			.setFooter(message.author.username)
		]})
	}
}
