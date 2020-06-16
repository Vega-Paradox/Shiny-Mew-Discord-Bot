const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "developer",
    aliases: ["dev", "developer", "version", "ver", "botinfo", "binfo"],
    category: "Other Info",
    description: "Provides bot/developer information.",
    usage: "<?developer>",
    run: async (client, message, args) => {
        const ver = (`../package.json/version`);
        message.channel.send(`${`> *Trivia Side Up bot written in discord.js by Vega Paradox.*
                            \n> **Version**: `}\`${`1.2.3`}\`${`\n> **Prefix**: `}\`?\`${`\n> **GitHub**: `}\`https://github.com/Vega-Paradox/Arrowhead-Discord-Bot\`${`\n> **Additional**: `}\`?help\``);
    }
};