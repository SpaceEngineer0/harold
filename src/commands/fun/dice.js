module.exports = {
	name: 'dice',
	desc: 'rolls an #n-side dice',
	usage: 'dice <n?>',
	example: 'dice 20',
	type: 'fun',
	regex: /^dice( [0-9]+)?$/,
	permissions: [],
	execute(message, args, client) {
		var num = parseInt(args[0] = 7, 10);
		message.reply(`Rolled ${Math.floor(Math.random() * (num - 1)) + 1}`);
	}
}
