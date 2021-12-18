module.exports = {
	name: 'coin',
	desc: 'flips a coin',
	usage: 'coin',
	example: 'coin',
	type: 'fun',
	regex: /^coin$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send(new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Coin', `Flipped ${['heads', 'tails'][Math.floor(Math.random() * 2)]}`)
		)
	}
}
