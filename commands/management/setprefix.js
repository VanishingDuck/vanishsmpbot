const Utils = require("../../modules/utils.js");
const lang = Utils.variables.lang;
const config = Utils.variables.config;
const Embed = Utils.Embed;

module.exports = {
    name: 'setprefix',
    run: async (bot, message, args) => {
        if (args.length == 0) return message.channel.send(Embed({ preset: 'invalidargs', usage: module.exports.usage }));

        await Utils.variables.db.update.prefixes.updatePrefix(message.guild.id, args[0]);
        
        message.channel.send(Embed({
            title: lang.ManagementModule.Commands.Setprefix.Title,
            description: lang.ManagementModule.Commands.Setprefix.Description.replace(/{prefix}/g, args[0]),
            color: config.EmbedColors.Success
        }));
    },
    description: "Set the bot's prefix",
    usage: 'setprefix <prefix>',
    aliases: []
}
// 268769   8501   2047405    52657   1606939650   959ce5f8bef7402bb490d09cd0e38b78041c6fb2   2047405