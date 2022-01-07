const Discord = require('discord.js');
const config = require('../config.json');
const client = new Discord.Client({
	intents: [
		Discord.Intents.FLAGS.GUILDS,
		Discord.Intents.FLAGS.GUILD_MESSAGES
	]
})

console.log('> Starting up...');

client.login(config.token);
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.embedColor = config.embedColor;
client.prefix = config.prefix;

require('./loader')(client, Discord);
