module.exports = {
	name: 'echo',
	desc: 'sends everything after the keyword',
	usage: 'echo <string>',
	example: 'echo lorem ipsum',
	type: 'misc',
	regex: /^echo .+$/,
	permissions: [],
	execute(message, args, client, Discord) {
		message.channel.send(message.content.slice(6));
	}
}
