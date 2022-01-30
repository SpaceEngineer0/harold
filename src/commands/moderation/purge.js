module.exports = {
	name: 'purge',
	desc: 'deletes #num messages',
	usage: 'purge <num>',
	regex: /^purge \d+$/,
	permissions: ['MANAGE_MESSAGES'],
	execute(message, args, client, Discord) {
		const amount = parseInt(args[0], 10) + 1;

		if (amount < 1 || amount > 150) {
			message.reply('You can only delete between 1 and 150 messages');
			return;
		};

		console.log(message.guild.me.permission);

		if (!message.guild.me.permissions.has(['MANAGE_MESSAGES'])) {
			message.reply('I don\'t have the required permission: MANAGE_MESSAGES');
			return;
		};

		const fetched = message.channel.messages.fetch({ limit: amount });

		try { message.channel.bulkDelete(fetched) }
		catch (err) {
			console.error('Purge command error', err);
			message.reply('Make sure the messages are 14 days or newer');
		}
	}
}
