const Utils = require("../../modules/utils.js");
const lang = Utils.variables.lang;
const config = Utils.variables.config;
const Embed = Utils.Embed;

module.exports = {
    name: 'userinfo',
    run: async (bot, message, args) => {
        let user = Utils.ResolveUser(message) || message.member;
        if (!user) return utils.Error(message, Client, lang.GlobalErrors.InvalidUser);
        let roles = user.roles.cache.map(r => r.toString()).join(", ").replace(", @everyone", "");

        let embed = Embed({
            thumbnail: user.user.displayAvatarURL({ dynamic: true }),
            timestamp: new Date(),
            title: lang.Other.OtherCommands.Userinfo.Title,
            fields: [
                { name: lang.Other.OtherCommands.Userinfo.Fields[0], value: `<@${user.id}>` },
                { name: lang.Other.OtherCommands.Userinfo.Fields[1], value: user.id },
                { name: lang.Other.OtherCommands.Userinfo.Fields[2], value: user.user.createdAt.toLocaleString() },
                { name: lang.Other.OtherCommands.Userinfo.Fields[3], value: user.joinedAt.toLocaleString() },
                { name: lang.Other.OtherCommands.Userinfo.Fields[4], value: roles.length == 0 ? 'None' : roles }
            ]
        });
        if (user.id === message.guild.ownerID) embed.embed.fields.push({ name: lang.Other.OtherCommands.Userinfo.Fields[5].Name, value: lang.Other.OtherCommands.Userinfo.Fields[5].Value });
        message.channel.send(embed);
    },
    description: "View your or a certain user's info",
    usage: 'userinfo [@user]',
    aliases: [
        'whois'
    ]
}
// 268769   8501   2047405    52657   1606939650   959ce5f8bef7402bb490d09cd0e38b78041c6fb2   2047405