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
		const emoji = ['<:rock:921147956378370108>', '<:newspaper:920726420785868840>', '<:scissors:921149049896337459>'][rng];

		var embed = (fields) => new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addFields(fields)

		if (args[0].charAt(0) === move.charAt(0)) message.channel.send(embed({ name: 'RPS', value: `${emoji}, tie` }));
		else if (args[0].charAt(0) === 'r') {
			if (move.charAt(0) === 's') message.channel.send(embed({ name: 'RPS', value: `${emoji}, you win` }));
			else message.channel.send(embed({ name: 'RPS', value: `${emoji}, I win` }));
		}
		else if (args[0].charAt(0) === 'p') {
			if (move.charAt(0) === 'r') message.channel.send(embed({ name: 'RPS', value: `${emoji}, you win` }));
			else message.channel.send(embed({ name: 'RPS', value: `${emoji}, I win` }));
		}
		else if (args[0].charAt(0) === 's') {
			if (move.charAt(0) === 'p') message.channel.send(embed({ name: 'RPS', value: `${emoji}, you win` }));
			else message.channel.send(embed({ name: 'RPS', value: `${emoji}, I win` }));
		}
	}
}
