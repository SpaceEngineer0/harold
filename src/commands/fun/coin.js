module.exports = {
	name: 'coin',
	desc: 'flips a coin',
	usage: 'coin',
	example: 'coin',
	type: 'fun',
	regex: /^coin$/,
	permissions: [],
	execute(message, args, client, Discord) {
		const result = ['heads', 'tails'];
		message.reply(`Flipped ${result[Math.floor(Math.random() * (2 - 0) + 0)]}`);
	}
}
