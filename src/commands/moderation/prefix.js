module.exports = {
	name: 'prefix',
	desc: 'change the bot\'s prefix',
	example: 'prefix ,',
	usage: 'prefix <new prefix>',
	type: 'moderation',
	regex: /^prefix .+$/,
	permissions: ['MANAGE_SERVER'],
	execute(message, args, client, Discord) {
		const oldPrefix = client.prefix;
		client.prefix = args[0];

		const config = require('../../../config.json');
		config.prefix = client.prefix;
		require('fs').writeFileSync('./config.json', `${JSON.stringify(config, null, '\t')}\n`, 'utf-8');

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Prefix', `Prefix changed from \`${oldPrefix}\` to \`${config.prefix}\``)
		]})
	}
}
