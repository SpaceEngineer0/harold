module.exports = {
	name: 'message',
	once: false,
	execute(message, client) {
		const { prefix } = require('../../../config.json');
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		if (/^harold ?help$/.test(message.content)) client.commands.get('help').execute(message, args, client);

		if (!client.commands.has(commandName) || !message.content.startsWith(prefix) || message.author.bot) return;

		const command = client.commands.get(commandName);
		const execute = () => {
			command.execute(message, args, client);

			console.log(`= Executed ${command.name} command in #${message.channel.name}. Arguments: [${args}]`);
		}

		if (!command.regex.test(message.content.slice(1))) return;

		try {
			if (command.permissions.length > 0) {
				if (message.member.hasPermission(command.permissions)) execute();
				else message.reply(`You don\'t have the required permissions: [${command.permissions}]`);
			}
			else execute();
		}
		catch (err) {
			throw err;
			message.reply('There was an error trying to execute that command!');
		}
	}
}
