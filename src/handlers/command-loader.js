module.exports = (client, Discord) => {
	const { readdirSync, readdir } = require('fs');

	console.log('* Loading commands');

	const requiredir = path => {
		readdirSync(`./src/commands/${path}`).filter(file => file.endsWith('.js')).forEach(file => {
			const command = require(`../commands/${path}/${file}`);
			client.commands.set(command.name, command);
		})
	}

	readdir('./src/commands/', { withFileTypes: true }, (error, files) => {
		if (error) throw error;
		const dirs = files
		.filter(item => item.isDirectory())
		.map(item => item.name);

		dirs.forEach(dir => {
			requiredir(dir)
		});
	})

	requiredir('');

	console.log('* Loaded commands');
}
