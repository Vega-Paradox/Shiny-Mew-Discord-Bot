const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const botColor = "#c0e8f8";

module.exports = {
    name: "help",
    aliases: ["h", "cmds", "commands", "bothelp"],
    category: "Help Info",
    description: "Provides bot commands and extras.",
    usage: "<?help [page#]>",
    run: async (client, message, args) => {
        if (args[0] === '1' || !args.length) {
            const pg1 = new RichEmbed()
                .setDescription('`Page 1: Tutorials, Roles`')
                .setFooter("*Next Page: References, Moderation*")
                .setColor(botColor)
                .setThumbnail("https://cdn.discordapp.com/attachments/458433705044869142/753815585803993159/Shiny_Mew_Emoji.png")
                .setTitle("**Shiny Mew's Commands**")
                .addField("*Unformatted*", `<?unf [1]> - Unformatted.`, true)
                .addField("*Unformatted*", `<?unf [2]> - Unformatted.`, false);
            message.author.send(pg1);
            message.reply(`sent you a list of commands! <:ShinyMew:753810947390308502>`).then(m => m.delete(5000));
        }
        // if (args[0] === '2') {
        //     const pg1 = new RichEmbed()
        //         .setDescription(`Current Page (2): References, Moderation`)
        //         .setFooter(`Previous Page (1): Tutorials, Roles`)
        //         .setColor("#e1a200")
        //         .setThumbnail("https://cdn.discordapp.com/attachments/458433705044869142/753803133557145640/Shiny_Mew_Pfp.png")
        //         .setTitle("**Arrowhead Bot Commands**")
        //         .addField("*References*", `<?reference [Med Cheatsheet]> - Returns ACE Med Cheatsheet\n<?reference [Role Colors]> - Returns team colors for squad roles\n<?reference [Ranks]> - Returns link to our rankings roster sheet\n<?reference [TACSOP]> - Returns link to ASO's TACSOP`, true)
        //         .addField("*Moderation*", `<?kick [user]> - Kicks user, sends report to a log channel\n<?ban [user]> - Bans user, sends report to a log channel\n<?warn [user]> - Warns user, sends report to a log channel`);
        //     message.author.send(pg1);
        //     message.reply(`sent you a list of commands!`).then(m => m.delete(2500));
        // }
    }
};