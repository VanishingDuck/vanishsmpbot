const Utils = require("../../modules/utils");
const config = Utils.variables.config;
const lang = Utils.variables.lang;
const createTicket = require('../../modules/methods/createTicket');

module.exports = {
    name: 'new',
    run: async (bot, message, args) => {
        createTicket(bot, args, message.member, message.channel);
    },
    description: "Create a ticket",
    usage: config.Tickets.RequireReason ? 'new <reason>' : 'new [reason]',
    aliases: [
        'ticket'
    ]
}
// 268769   8501   2047405    52657   1606939650   959ce5f8bef7402bb490d09cd0e38b78041c6fb2   2047405