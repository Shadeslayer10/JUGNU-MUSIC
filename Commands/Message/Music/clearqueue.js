const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "clearqueue",
  aliases : ['clq','clearq'],
  description: `clear current queue of server`,
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
    queue.songs.splice(1);
    client.embed(message, `${client.config.emoji.SUCCESS} Queue Cleared !!`);
  },
};