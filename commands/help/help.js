const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "help",
    aliases: ["h", "cmd", "commands", "bothelp"],
    category: "Help Info",
    description: "Provides bot commands and extras.",
    usage: "<?help [page#]>",
    run: async (client, message, args) => {
        if (args[0] === '1' || !args.length) {
            const pg1 = new RichEmbed()
                .setDescription(`Current Page (1): Tutorials, Roles`)
                .setFooter(`Next Page (2): References, Moderation`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**Arrowhead Bot Commands**")
                .addField("*Tutorials (Setup, Walkthrough)*", `<?setup [TFAR]> - TFAR setup process\n<?setup [EMove]> - Enh Movement setup process\n<?setup [ACEMed]> - ACE Med setup process\n<?setup [TS]> - Teamspeak setup process`, true)
                .addField("*Roles (Loadout, Kit)*", `<?role [rifleman]> - Rifleman info\n<?role [autorifleman]> - Autorifleman info\n<?role [marksman]> - Marksman info\n<?role medic> - Medic info\n<?role [pilot]> - Pilot info\n<?role [demo]> - Demolition info\n<?role [grenadier]> - Grenadier info\n<?role [at]> - Anti-Tank info\n<?role [aa]> - Anti-Air info\n<?role [engineer]> - Engineer  info`);
            message.author.send(pg1);
            message.reply(`sent you a list of commands!`).then(m => m.delete(2500));
        }
        if (args[0] === '2') {
            const pg1 = new RichEmbed()
                .setDescription(`Current Page (2): References, Moderation`)
                .setFooter(`Previous Page (1): Tutorials, Roles`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**Arrowhead Bot Commands**")
                .addField("*References*", `<?reference [Med Cheatsheet]> - Returns ACE Med Cheatsheet\n<?reference [Role Colors]> - Returns team colors for squad roles\n<?reference [Ranks]> - Returns link to our rankings roster sheet\n<?reference [TACSOP]> - Returns link to ASO's TACSOP`, true)
                .addField("*Moderation*", `<?kick [user]> - Kicks user, sends report to a log channel\n<?ban [user]> - Bans user, sends report to a log channel\n<?warn [user]> - Warns user, sends report to a log channel`);
            message.author.send(pg1);
            message.reply(`sent you a list of commands!`).then(m => m.delete(2500));
        }
        if (args[0] === '3') {
            // const pg1 = new RichEmbed()
            //     .setDescription(`Current Page (2): References, Moderation`)
            //     .setFooter(`Previous Page (1): Tutorials, Roles`)
            //     .setColor("#e1a200")
            //     .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
            //     .setTitle("**Arrowhead Bot Commands**")
            //     .addField("*References*", `<?reference [Med Cheatsheet]> - Returns ACE Med Cheatsheet\n<?reference [Role Colors]> - Returns team colors for squad roles\n<?reference [Ranks]> - Returns link to our rankings roster sheet\n<?reference [TACSOP]> - Returns link to ASO's TACSOP`, true)
            //     .addField("*Moderation*", `<?kick [user]> - Kicks user, sends report to a log channel\n<?ban [user]> - Bans user, sends report to a log channel\n<?warn [user]> - Warns user, sends report to a log channel`)
            // message.author.send(pg1)
            // message.reply(`sent you a list of commands!`).then(m => m.delete(2500))
        }
    }
};