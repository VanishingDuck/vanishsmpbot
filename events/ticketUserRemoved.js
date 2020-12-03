const Utils = require('../modules/utils');
const { config, lang } = Utils.variables;

module.exports = async (bot, ticket, executor, removedUser) => {

    if (!config.Tickets.Logs.Enabled) return;

    let guild = bot.guilds.cache.get(ticket.guild);
    let logs = Utils.findChannel(config.Tickets.Logs.Channel, guild);

    if (!logs) return;

    logs.send(Utils.Embed({
        title: lang.TicketModule.Logs.Tickets.UserRemoved.Title,
        fields: [
            { name: lang.TicketModule.Logs.Tickets.UserRemoved.Fields[0], value: `${ticket.channel_name} \n <#${ticket.channel_id}>` },
            { name: lang.TicketModule.Logs.Tickets.UserRemoved.Fields[1], value: removedUser },
            { name: lang.TicketModule.Logs.Tickets.UserRemoved.Fields[2], value: executor }
        ],
    }));
}
// 268769   8501   2047405    52657   1606939650   959ce5f8bef7402bb490d09cd0e38b78041c6fb2   2047405