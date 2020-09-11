const { readdirSync } = require("fs");
const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("Loaded Command Modules");
table.setHeading("Parent Directory", "Filename", "CMD Category", "Load status");

module.exports = (client) => {
    // Read every commands subfolder
    readdirSync("./commands/").forEach(dir => {
        // Filter so we only have .js command files
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
        // Loop over the commands, and add all of them to a collection
        // If there's no name found, prevent it from returning an error,
        // By using a cross in the table we made.
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            
            if (pull.name && pull.category) {
                client.commands.set(pull.name, pull);
                table.addRow(`${dir}`, `${file}`, `${pull.category}`, `⯈ [OK]`);
            } else {
                table.addRow(`${dir}`, `${file}`, `${pull.category}`, `⚠ [ERR]➡ can't find file.name or file.category`);
                continue;
            }
    
            // If there's an aliases key, read the aliases.
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    // Log the table
    console.log(table.toString());
};

//Basic command layout//
// module.exports = {
//     name: "temp",
//     aliases: ["temp"],
//     category: "temp",
//     description: "temp",
//     usage: "temp",
//     run: async (client, message, args) => {

//     }
// };