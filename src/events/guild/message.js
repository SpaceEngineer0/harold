module.exports = {
	name: 'message',
	once: false,
	execute(message, client, Discord) {
		const args = message.content.slice(client.prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		if (/^harold ?help$/.test(message.content)) client.commands.get('help').execute(message, args, client, Discord);

		if (!client.commands.has(commandName) || !message.content.startsWith(client.prefix) || message.author.bot) return;

		const command = client.commands.get(commandName);
		const execute = () => {
			console.log(`= Executing ${command.name} command in #${message.channel.name}. Arguments: [${args}]`);
			command.execute(message, args, client, Discord);
		}

		if (!command.regex.test(message.content.slice(client.prefix.length))) return;

		try {
			if (command.permissions.length > 0) {
				if (message.member.hasPermission(command.permissions)) execute();
				else message.reply(`You don\'t have the required permissions: [${command.permissions}]`);
			}
			else execute();
		}
		catch (err) {
			message.reply('There was an error trying to execute that command!');
			throw err;
		}
	}
}
