module.exports = {
	name: 'morsetr',
	desc: 'translate morse code using morse-tr module',
	usage: 'morsetr <morse/text>',
	example: 'morsetr .- -... -.-.',
	type: 'misc',
	regex: /^morsetr (([.-]+|#)( \/ | ?))+|.+$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const morsetr = require('morse-tr');

		const content = message.content.slice(8 + client.prefix.length);

		const embed = string => message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Morse Translator')
			.addFields(
				{ name: 'Translation', value: `\`${string}\`` },
				{ name: 'Info', value: `Unknown characters are replaced with a \`${morsetr.notation.unknownChar}\`
Type \`${client.prefix}morsenotation\` to get morse code notation` })
			.setFooter(`${message.author.username} | morse module: https://github.com/SpaceEngie/morse-tr`)
		]})

		if (morsetr.isValidMorse(content)) embed(morsetr.toText(content));
		else embed(morsetr.toMorse(content));
	}
}
