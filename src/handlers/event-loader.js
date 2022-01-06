module.exports = (client, Discord) => {
	console.log('* Loading events');

	['client', 'guild'].forEach(dir => {
		require('fs').readdirSync(`./src/events/${dir}/`).filter(file => file.endsWith('.js')).forEach(file => {
			const event = require(`../events/${dir}/${file}`);
			if (event.once) client.once(event.name, (...args) => event.execute(...args, client, Discord));
			else client.on(event.name, (...args) => event.execute(...args, client, Discord));
		})
	})

	console.log('* Loaded events');
}
