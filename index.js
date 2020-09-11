const { Client, RichEmbed, Collection } = require("discord.js");
const { config } = require("dotenv");
const { _ } = require("lodash");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log("⯈ A wild shiny mew appears!");

    client.user.setPresence({
        status: "online",
        game: {
            name: "out for rare pokemon!",
            type: "WATCHING"
        }
    });
});

client.on("message", async message => {
    const prefix = "$m";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    // Get the command
    let command = client.commands.get(cmd);
    // If command is not found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is found, run the command
    if (command)
        command.run(client, message, args);
});

client.login(process.env.token).catch(console.log);