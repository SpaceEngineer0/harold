module.exports = {
	name: 'coin',
	desc: 'flips a coin',
	usage: 'coin',
	example: null,
	type: 'fun',
	regex: /^coin$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Coin', `<:coin:922758975915692043> Flipped ${['heads', 'tails'][Math.floor(Math.random() * 2)]}`)
			.setFooter(message.author.username)
		]})
	}
}
