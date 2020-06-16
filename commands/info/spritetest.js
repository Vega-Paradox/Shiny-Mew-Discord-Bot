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
        message.channel.send();
    }
};