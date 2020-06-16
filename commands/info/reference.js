const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "reference",
    aliases: ["ref", "rf", "info"],
    category: "Other Info",
    description: "Provides requested documents and references.",
    usage: "<?reference [ref]>",
    run: async (client, message, args) => {
        if ((args[0] === 'Medical') || (args[0] === 'medical') || (args[0] === 'Med') || (args[0] === 'med')) {
            const med = new RichEmbed()
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**ACE Medical Cheatsheet**")
                .addField("*Source*", "https://steamcommunity.com/sharedfiles/filedetails/?id=930706887", true)
                .setImage("https://steamuserimages-a.akamaihd.net/ugc/770525423870398498/E2E9E0896067FF15E35532B44090A65498B7AF5C/")
                .setFooter("Click the image to enlarge it if needed.");
            message.author.send(med);
            message.reply(`sent you the requested info!`).then(m => m.delete(5000));
        }
        if ((args[0] === 'Role' && args[1] === 'Colors') || (args[0] === 'role' && args[1] === 'colors') || (args[0] === 'role' && args[1] === 'Colors') || (args[0] === 'Role' && args[1] === 'colors') || (args[0] === 'rc') || (args[0] === 'RC')) {
            const rc = new RichEmbed()
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**Role Color Information**")
                .setDescription("The team color to set yourself as dependent on your role.")
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/647685907415302144/unknown.png")
                .setFooter("Click the image to enlarge it if needed.");
            message.author.send(rc);
            message.reply(`sent you the requested info!`).then(m => m.delete(5000));
        }
        if ((args[0] === 'Rank' && args[1] === 'Roster') || (args[0] === 'rank' && args[1] === 'roster') || (args[0] === 'rank' && args[1] === 'Roster') || (args[0] === 'Rank' && args[1] === 'roster') || (args[0] === 'rr') || (args[0] === 'RR')) {
            const rc = new RichEmbed()
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**ASO Rank Roster Link**")
                .setDescription("https://trello.com/b/VyJivWVX/aso-rank-roster");
            message.author.send(rc);
            message.reply(`sent you the requested info!`).then(m => m.delete(5000));
        }
        if ((args[0] === 'TACSOP') || (args[0] === 'tacsop')) {
            const rc = new RichEmbed()
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**TACSOP (Outdated) Link**")
                .setDescription("https://docs.google.com/document/d/183a6yHUacxFSOMB7Quao6Xo8MAqDqqClr_w3J5mwPvQ/edit");
            message.author.send(rc);
            message.reply(`sent you the requested info!`).then(m => m.delete(5000));
        }
        if (!args.length) {
            message.reply(`you didn't specify what reference you needed!` + `\n> **Usage:**` + " `<?reference [Medical (or Med), Role Colors (or RC), Rank Roster (or RR), TACSOP]>`").then(m => m.delete(9000));
        }
    }
};