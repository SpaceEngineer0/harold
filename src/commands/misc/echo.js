module.exports = {
	name: 'echo',
	desc: 'repeats a phrase',
	usage: 'echo <string>',
	example: 'echo lorem ipsum',
	type: 'misc',
	regex: /^echo .+$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send(message.content.slice(6));
	}
}
