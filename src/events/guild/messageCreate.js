module.exports = {
	name: 'messageCreate',
	once: false,
	execute(message, client, Discord) {
		const args = message.content.slice(client.prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		if (/^harold ?help$/.test(message.content)) client.commands.get('help').execute(message, args, client, Discord);

		if (!client.commands.has(commandName) || !message.content.startsWith(client.prefix) || message.author.bot) return;

		message.content = message.content.slice(client.prefix.length).trim();

		const command = client.commands.get(commandName);
		const execute = () => {
			console.log(`Executing ${command.name} command in #${message.channel.name}. Arguments:`, args);
			command.execute(message, args, client, Discord);
		}

		if (!command.regex.test(message.content)) return;

		try {
			if (message.member.permissions.has(command.permissions || [])) execute();
			else message.reply(`You don\'t have the required permissions: [${command.permissions || []}]`);
		}
		catch (err) {
			message.reply('There was an error trying to execute that command!');
			throw err;
		}
	}
}
