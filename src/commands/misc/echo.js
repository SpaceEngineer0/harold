module.exports = {
	name: 'echo',
	desc: 'repeats a phrase',
	usage: 'echo <string>',
	regex: /^echo .+$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send(message.content.slice(5));
	}
}
