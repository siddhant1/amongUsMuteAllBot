const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  const channel = message.channel;
  const members = channel.members;
  if (shouldMute(message.content)) {
    members.forEach((member) => {
      member.voice.setMute(true);
    });
  } else if (shouldUnMute(message.content)) {
    members.forEach((member) => {
      member.voice.setMute(false);
    });
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

const shouldMute = (messageContent) =>
  ["/mute", "/ssh", "/m"].includes(messageContent);
const shouldUnMute = (messageContent) =>
  ["/unmute", "/speak", "/u"].includes(messageContent);
