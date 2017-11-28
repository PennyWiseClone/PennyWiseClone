const commando = require('discord.js-commando');

module.exports = class HackCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'hack',
			aliases: ['heck'],
			group: 'main',
			memberName: 'hack',
			description: 'HECK!!!!!11',
			examples: ['hack', 'heck'],
			guildOnly: true,
		});
	}

	async run(msg, args) {
		msg.channel.send('no u')
	}
};