const { readdirSync, readdir } = require('fs');

module.exports = (client, Discord) => {
	readdir('./src/commands/', { withFileTypes: true }, (error, files) => {
		if (error) throw error;

		const dirs = files.filter(item => item.isDirectory()).map(item => item.name);
		dirs.forEach(dir => {
			readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith('.js')).forEach(file => {
				const command = require(`./commands/${dir}/${file}`);
				client.commands.set(command.name, command);
			});
		});
	});

	['client', 'guild'].forEach(dir => {
		readdirSync(`./src/events/${dir}/`).filter(file => file.endsWith('.js')).forEach(file => {
			const event = require(`./events/${dir}/${file}`);
			if (event.once) client.once(event.name, (...args) => event.execute(...args, client, Discord));
			else client.on(event.name, (...args) => event.execute(...args, client, Discord));
		});
	});
};
