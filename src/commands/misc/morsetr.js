module.exports = {
	name: 'morsetr',
	desc: 'translate morse code using morse-tr module',
	usage: 'morsetr <morse|text>',
	regex: /^morsetr (([.-]+|#)( \/ | ?))+|.+$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const morseTr = require('morse-tr');

		const content = message.content.slice(8);

		const embed = string => message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Morse Translator')
			.addFields(
				{ name: 'Translation', value: `\`${string}\`` },
				{ name: 'Info', value: `Unknown characters are replaced with a \`${morseTr.notation.unknownChar}\`
Type \`${client.prefix}morsenota\` to get morse code notation` })
			.setFooter({ text: `Translated for ${message.author.username}` })
		]});

		if (morseTr.isValidMorse(content)) embed(morseTr.decrypt(content));
		else embed(morseTr.encrypt(content));
	}
};
