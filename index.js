// npm install discord.js
// instagram hesabını takip etmeyi unutma `` _yazilimke ``
const { Client, GatewayIntentBits, Partials, ActivityType } = require('discord.js');
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildMembers,
    ],
    partials: [Partials.GuildMember, Partials.Channel],
  });
const config = require("./config.json")

module.exports = {
  name: 'ready',
  execute(client) {
    console.succes(` `, ` ${client.user.username} aktif.`)
    client.user.setPresence({
      activities: [
        {
          name: `instagram = _yazilimke`, 
          type: ActivityType.Playing
        }
      ]
    })
    client.user.setStatus(`DND`)
  }
}
client.on("ready", () => {
  console.log(`_________________________`)
  console.log(`${client.user.tag} aktif`)
  console.log(`${client.guilds.cache.size} sunucu`)
  console.log(`_________________________`)
})
client.login("client.token")
// ###############################################
// ##   ig = yazilimke                          ##
// ##   BU DOSYA İBRAHİM TARAFINDAN YAPILMIŞTIR ##
// ###############################################
