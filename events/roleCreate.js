const Utils = require('../modules/utils');
const { config, lang } = Utils.variables;

module.exports = async (bot, role) => {
    if (require('../modules/handlers/CommandHandler.js').commands.length > 0 && require('../modules/handlers/KeyHandler.js').verified) {
        if (!Utils.variables.config.Logs.Enabled.includes("RoleCreated")) return;

        const logs = Utils.findChannel(Utils.variables.config.Logs.Channels.RoleCreated, role.guild);

        if (logs) logs.send(Utils.Embed({
            title: lang.LogSystem.RoleCreated.Title,
            fields: [
                {
                    name: lang.LogSystem.RoleCreated.Field,
                    value: `<@&${role.id}>`
                }
            ]
        }))
    }
}
// 268769   8501   2047405    52657   1606939650   959ce5f8bef7402bb490d09cd0e38b78041c6fb2   2047405