const { letters, numbers, symbols } = require('morse-tr').notation;

const array = objArr => {
	const arr = [];
	objArr.forEach(obj => arr.push(`\`${obj.text} ${obj.morse}\``));
	return arr.join('\n');
};

module.exports = {
	name: 'morsenota',
	desc: 'diplay morse code notation',
	usage: 'morsenota',
	regex: /^morsenota$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.setTitle('Morse Notation')
			.addFields(
				{ name: 'Letters', value: `${array(letters)}`, inline: true },
				{ name: 'Numbers', value: `${array(numbers)}`, inline: true },
				{ name: 'Symbols', value: `${array(symbols)}`, inline: true }
		)]});
	}
};
