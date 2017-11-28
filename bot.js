const path = require('path');
const Commando = require('discord.js-commando');
const client = new Commando.Client({
    owner: ['251383432331001856', '379695770430996492'],
    commandPrefix: 'b.'
});
const sqlite = require('sqlite');
const config = require('./config.json') 

client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['main', 'Main']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(config.token);