const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "filter",
  aliases: ["fl", "filters"],
  description: `set filter in queue by name`,
  userPermissions: ["Connect"],
  botPermissions: ["Connect"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {JUGNU} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    let filterName = args[0];
    if(!filterName){
      return client.embed(message,`${
        client.config.emoji.ERROR
      } Provide a Filter Name`)
    }
    if (filterName === "off") {
      queue.filters.clear();
      client.embed(
        message,
        `${client.config.emoji.SUCCESS} Queue Filter Off !!`
      );
    } else if (
      Object.keys(client.distube.filters).includes(filterName) == false
    ) {
      client.embed(
        message,
        `${client.config.emoji.ERROR} Not a Valid Filter !! \n\n ${Object.keys(
          client.distube.filters
        ).map(f => `\`${f}\``)
          .join(" , ")
          .substring(0, 2000)} `
      );
    } else if (Object.keys(client.distube.filters).includes(filterName)) {
      queue.filters.add(filterName);
      client.embed(
        message,
        `${client.config.emoji.SUCCESS} Current Queue Filter: \`${
          queue.filters.names.join(", ") || "Off"
        }\` !!`
      );
    }
  },
};
