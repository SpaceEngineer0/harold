const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

console.log('> Starting up...');

client.login(config.token);
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

require('./src/handlers/commandHandler')(client);
require('./src/handlers/eventHandler')(client);
