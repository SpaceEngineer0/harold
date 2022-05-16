module.exports = {
	name: 'prefix',
	desc: 'change the bot\'s prefix',
	usage: 'prefix <new prefix>',
	regex: /^prefix .+$/,
	permissions: ['MANAGE_SERVER'],
	execute(message, args, client, Discord) {
		const config = require('../../../config.json');
		const oldPrefix = client.prefix;
		client.prefix = args[0];
		config.prefix = client.prefix;
		require('fs').writeFileSync('./config.json', `${JSON.stringify(config, null, '\t')}\n`, 'utf-8');

		message.channel.send({ embeds: [new Discord.MessageEmbed()
			.setColor(client.embedColor)
			.addField('Prefix', `Prefix changed from \`${oldPrefix}\` to \`${config.prefix}\``)
		]})
	}
}
