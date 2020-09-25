module.exports = {
	name: 'invite',
	description: 'Dodaj bota na swój serwer',
	execute(message, args) {
		message.channel.send('https://discord.com/oauth2/authorize?client_id=689173316530864147&scope=bot&permissions=76800');
	},
};