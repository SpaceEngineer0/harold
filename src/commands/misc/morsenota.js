module.exports = {
	name: 'morsenota',
	desc: 'diplay morse code notation',
	usage: 'morsenota',
	regex: /^morsenota$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const morsetr = require('morse-tr');
		const morseChar = obj => `\`${obj.text} ${obj.morse}\``

		var letters = [];
		var numbers = [];
		var symbols = [];

		morsetr.notation.letters.forEach(letter => letters.push(morseChar(letter)));
		morsetr.notation.numbers.forEach(number => numbers.push(morseChar(number)));
		morsetr.notation.symbols.forEach(symbol => symbols.push(morseChar(symbol)));

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Morse Notation')
			.addFields(
				{ name: 'Letters', value: `${letters.join('\n')}`, inline: true },
				{ name: 'Numbers', value: `${numbers.join('\n')}`, inline: true },
				{ name: 'Symbols', value: `${symbols.join('\n')}`, inline: true }
			)]})
	}
}
