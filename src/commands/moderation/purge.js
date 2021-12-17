module.exports = {
	name: 'purge',
	desc: 'deletes #num messages',
	usage: 'purge <num>',
	example: 'purge 16',
	type: 'moderation',
	regex: /^purge [0-9]+$/,
	permissions: ['MANAGE_MESSAGES'],
	async execute(message, args, client) {
		const limit = parseInt(args[0], 10) + 1;

		if (limit < 1 || limit > 150) {
			message.reply('You can only delete between 1 and 150 messages');
			return;
		};

		if (!message.guild.me.hasPermission(['MANAGE_MESSAGES'])) {
			message.reply('I don\'t have the required permission: MANAGE_MESSAGES');
			return;
		};

		const fetched = await message.channel.messages.fetch({ limit: limit });

		try { message.channel.bulkDelete(fetched) }
		catch (err) {
			console.error('Purge command error', err);
			message.reply('Make sure the messages are 14 days or newer or an error has ocurred');
		}
	}
}
