const DiscordJS = require('discord.js')
const dotenv = require('dotenv');

dotenv.config()

const Intents = DiscordJS.Intents;

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
})

client.login(process.env.TOKEN)
