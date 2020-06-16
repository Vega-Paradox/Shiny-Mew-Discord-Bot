const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "setup",
    aliases: ["su", "stup", "modsetup", "walkthrough", "tutorial", "howto"],
    category: "Tutorials",
    description: "Provides a walkthrough to help a user set up their mods.",
    usage: "<?setup [mod]>",
    run: async (client, message, args) => {
        if (args[0] === 'tfar' || args[0] === 'TFAR') {
            const tfar = new RichEmbed()
                .setDescription(`A walkthrough for setting up TFAR (BETA), derived from primary sources.`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/458433705044869142/644714312027602945/Arrowhead_TFAR.png")
                .setTitle("**TFAR Setup**")
                .addField("*Problems*", "If you have any problems with the setup, contact an Arrowhead tech team member.", true)
                .addField("*Before You Proceed*", "Make sure you have Teamspeak 3 installed. You can install it here: https://teamspeak.com/en/downloads/", true)
                .setFooter("Click on images to enlarge them if needed.");
            const Tstp1 = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/644685011647463461/Step_1.png")
                .setColor("#e1a200")
                .setTitle("**Step 1**");
            const Tstp2 = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/647678754826747925/Step_2_Bot.png")
                .setColor("#e1a200")
                .setTitle("**Step 2**");
            const Tstp3 = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/644685014323429392/Step_3.png")
                .setColor("#e1a200")
                .setTitle("**Step 3**");
            const Tstp4 = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/644685016168923139/Step_4.png")
                .setColor("#e1a200")
                .setTitle("**Step 4**")
                .setFooter("- Sorry for the spam, Discord currently doesn't allow for these images to be compiled into one embed.");
            message.author.send(tfar);
            message.author.send(Tstp1);
            message.author.send(Tstp2);
            message.author.send(Tstp3);
            message.author.send(Tstp4);
            message.reply(`sent you the set-up process!`).then(m => m.delete(5000));
        }

        if ((args[0] === 'enhanced' && args[1] === 'movement') || (args[0] === 'Enhanced' && args[1] === 'Movement') || (args[0] === 'Enhanced' && args[1] === 'movement') || (args[0] === 'enhanced' && args[1] === 'Movement') || args[0] === 'EMove') {
            const eMove = new RichEmbed()
                .setDescription(`A walkthrough for setting up Enhanced Movement keybinds.`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/458433705044869142/644713043783057419/Arrowhead_EM.png")
                .setTitle("**Enhanced Movement Setup**")
                .addField("*Problems*", "If you have any problems with the setup, contact an Arrowhead tech team member.", true);
            const Estp = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/644710946736046109/Enhanced_Movement.png")
                .setColor("#e1a200")
                .setTitle("**Enhanced Movement Keybinds**")
                .setFooter("Click the image to enlarge it if needed.");
            message.author.send(eMove);
            message.author.send(Estp);
            message.reply(`sent you the set-up process!`).then(m => m.delete(5000));
        }

        if ((args[0] === 'ace' && args[1] === 'medical') || (args[0] === 'ACE' && args[1] === 'Medical') || (args[0] === 'ACE' && args[1] === 'medical') || (args[0] === 'Ace' && args[1] === 'Medical') || (args[0] === 'Ace' && args[1] === 'medical') || (args[0] === 'ace' && args[1] === 'Medical') || args[0] === 'ACEMed') {
            const mMenu = new RichEmbed()
                .setDescription(`A walkthrough for setting up ACE Medical keybinds.`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/458433705044869142/644713529806422026/Arrowhead_ACE.png")
                .setTitle("**ACE Medical Setup**")
                .addField("*Problems*", "If you have any problems with the setup, contact an Arrowhead tech team member.", true);
            const Mstp = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/644730394612203540/ACE_Medical_Menu.png")
                .setColor("#e1a200")
                .setTitle("**ACE Medical Keybinds**")
                .setFooter("Click the image to enlarge it if needed.");
            message.author.send(mMenu);
            message.author.send(Mstp);
            message.reply(`sent you the set-up process!`).then(m => m.delete(5000));
        }

        if (args[0] === 'teamspeak' || args[0] === 'Teamspeak' || args[0] === 'TS' || args[0] === 'ts') {
            const tSpeak = new RichEmbed()
                .setDescription(`A walkthrough for setting up Teamspeak.`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/458433705044869142/647680845397884938/Arrowhead_TS.png")
                .setTitle("**Teamspeak setup**")
                .addField("*Problems*", "If you have any problems with the setup, contact an Arrowhead tech team member.", true);
            const TSstp = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/647681297174626304/Teamspeak.png")
                .setColor("#e1a200")
                .setTitle("**Installation**")
                .setDescription("Download at https://teamspeak.com/en/downloads/")
                .setFooter("Click the image to enlarge it if needed.");
            message.author.send(tSpeak);
            message.author.send(TSstp);
            message.reply(`sent you the set-up process!`).then(m => m.delete(5000));
        }
        if (args[0] === 'FileAssoc') {
            const fAssoc = new RichEmbed()
                .setDescription(`A walkthrough for setting up Teamspeak.`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/458433705044869142/647680845397884938/Arrowhead_TS.png")
                .setTitle("**Teamspeak setup**")
                .addField("*Problems*", "If you have any problems with the setup, contact an Arrowhead tech team member.", true);
            const FAstp = new RichEmbed()
                .setImage("https://cdn.discordapp.com/attachments/458433705044869142/647678659422846996/Create_File_Assoc.png")
                .setColor("#e1a200")
                .setTitle("**Installation**")
                .setFooter("Click the image to enlarge it if needed.");
            message.author.send(fAssoc);
            message.author.send(FAstp);
            message.reply(`sent you the set-up process!`).then(m => m.delete(5000));
        }

        if (!args.length) {
            message.reply(`you didn't specify what you needed help setting up!` + `\n> **Usage:**` + " `<?setup [TFAR, Enhanced Movement (or EMove), ACE Medical (or ACEMed), Teamspeak (or TS), FileAssoc]>`").then(m => m.delete(9000));
        }
    }
};