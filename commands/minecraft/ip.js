const Discord = require("discord.js");
const Utils = require("../../modules/utils.js")
const Embed = Utils.Embed;
const {config, lang, embeds} = Utils.variables;

module.exports = {
  name: 'ip',
  run: async (bot, message, args) => {
    message.channel.send(Utils.setupEmbed({
      configPath: embeds.Embeds.IP
    }));
  },
  description: "View the Minecraft server's IP",
  usage: 'ip',
  aliases: [
    'serverip'
  ]
}

// 268769   8501   2047405    52657   1606939650   959ce5f8bef7402bb490d09cd0e38b78041c6fb2   2047405