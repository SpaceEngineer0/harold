module.exports = {
	name: 'dice',
	desc: 'rolls an #n-side dice',
	usage: 'dice [<n>]',
	regex: /^dice( \d+)?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const sides = parseInt(args[0], 10) || 6;
		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Dice', `<:diamond_shape_with_a_dot_inside:922759561025298432> Rolled ${Math.floor(Math.random() * sides) + 1}`)
			.setFooter({ text: `Rolled by ${message.author.username}` })
		]});
	}
};
