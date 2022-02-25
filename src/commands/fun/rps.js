module.exports = {
	name: 'rps',
	desc: 'play rock paper scissors with the bot',
	usage: 'rps <your move>',
	regex: /^rps( (rock|paper|scissors|r|p|s))?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		if (!args[0]) {
			message.channel.send('Missing argument: [rock/paper/scissors]');
			return;
		}

		const emoji = ['<:rock:921147956378370108>', '<:page_facing_up:922767856595251221>', '<:scissors:921149049896337459>'][Math.floor(Math.random() * 3)];

		const embed = win => {
			message.channel.send({ embeds: [new Discord.MessageEmbed()
				.setColor(client.embedColor)
				.addField('RPS', `${emoji} ${win}`)
				.setFooter({ text: `Played with ${message.author.username}` })
			]})
		}

		if (args[0].charAt(0) === emoji.charAt(2)) embed('Tie');
		else if (args[0].charAt(0) === 'r') {
			if (emoji.charAt(2) === 's') embed('you win');
			else embed('I win');
		}
		else if (args[0].charAt(0) === 'p') {
			if (emoji.charAt(2) === 'r') embed('you win');
			else embed('I win');
		}
		else if (args[0].charAt(0) === 's') {
			if (emoji.charAt(2) === 'p') embed('you win');
			else embed('I win');
		}
	}
}
