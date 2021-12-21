module.exports = {
	name: 'rps',
	desc: 'play rock paper scissors with the bot',
	usage: 'rps <your move>',
	example: 'rps paper',
	type: 'fun',
	regex: /^rps( (rock|paper|scissors|r|p|s))?$/,
	permissions: [],
	execute(message, args, client, Discord) {
		if (!args[0]) {
			message.channel.send('Missing argument: [rock, paper, scissors]');
			return;
		}

		const rng = Math.floor(Math.random() * 3);
		const move = ['rock', 'paper', 'scissors'][rng];
		const emoji = ['<:rock:921147956378370108>', '<:page_facing_up:922767856595251221>', '<:scissors:921149049896337459>'][rng];

		var embed = win => {
			message.channel.send({ embeds: [new Discord.MessageEmbed()
				.setColor(client.embedColor)
				.addField('RPS', `${emoji} ${win}`)
				.setFooter(message.author.username)
			]})
		}

		if (args[0].charAt(0) === move.charAt(0)) embed('tie');
		else if (args[0].charAt(0) === 'r') {
			if (move.charAt(0) === 's') embed('you win');
			else embed('I win');
		}
		else if (args[0].charAt(0) === 'p') {
			if (move.charAt(0) === 'r') embed('you win');
			else embed('I win');
		}
		else if (args[0].charAt(0) === 's') {
			if (move.charAt(0) === 'p') embed('you win');
			else embed('I win');
		}
	}
}
