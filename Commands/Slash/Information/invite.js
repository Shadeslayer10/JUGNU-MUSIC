const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { links } = require("../../../settings/config");

module.exports = {
  name: "invite",
  description: `Get My Invite Link to add me`,
  userPermissions: ["SendMessages"],
  botPermissions: ["EmbedLinks"],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {JUGNU} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    client.embed(
        interaction,
        `[\`Click to Invite Me\`](${links.inviteURL.replace(
          "BOTID",
          client.user.id
        )})`
      );
  },
};
