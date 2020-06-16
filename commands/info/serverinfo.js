const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "serverinfo",
    aliases: ["sinfo", "serverinfo", "server", "guildinfo", "guild"],
    category: "Other Info",
    description: "Returns information on the current guild.",
    usage: "<?serverinfo>",
    run: async (client, message, args) => {
        const member = getMember(message, args.join(" "));
        const guild = message.guild;

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = guild.roles
            .filter(r => r.id !== guild.id)
            .map(r => r).join(", ") || 'None';

        const channels = guild.channels
            .filter(c => c.id !== guild.id)
            .map(c => c).join(", ") || 'None';

        // Server variables
        const created = formatDate(guild.createdAt);
        var title = "";

        if(guild.verified === true) {
            let title = `${guild.name} *(Verified)*`;
        } else {
            let title = `${guild.name}`;
        }
        const embed = new RichEmbed()
            .setFooter(guild.name, guild.iconURL)
            .setThumbnail(guild.iconURL)
            .setColor("#e1a200")
            .setTitle(title)

            .addField(`> *Server Information*`, `**> Name** - ${guild.name}
            **> ID** - ${guild.id}
            **> Verification Level** - ${guild.verificationLevel}
            **> Region** - ${guild.region}
            **> Server Owner** - ${guild.owner.tag}
            **> Server Created** - ${created}`, true)

            .addField(`> *Other Information*`, `**> Members** - ${guild.memberCount}
            **> Roles** - ${guild.roles.array().length}
            **> Channels** - ${guild.channels.array().length}`, true)
            
            .setTimestamp();

        message.channel.send(embed);
    }
};