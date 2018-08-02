const DiscordJS = require(`discord.js`)
const client = new DiscordJS.Client()
const { parsed: Config } = require(`dotenv`).load()
const Prefix = `v!`
client.on(`ready`, () => {
  console.log(`起動完了`)
}).on(`message`, (msg) => {
  if (!msg.guild) return
  if (msg.author.bot) return
  if (!msg.content.startsWith(Prefix)) return
  const [command, ...args] = msg.content.slice(Prefix.length).split(` `)
  switch (command) {
  case `report`:
    msg.delete()
    let args = msg.content.split(` `)
    if (args[1]) {
      if (args[2]) {
        msg.reply(`報告ありがとうございます。(\`･ω･´)b`)
        client.channels.get(`439369239594270740`).send(`\n**${msg.author.tag}**からの報告\n違反者: **${args[1]}**\n理由: ${args[2]}`)
      } else {
        msg.reply(`使い方: v!report <プレイヤーの名前> <理由>`)
      }
    } else {
      msg.reply(`使い方: v!report <プレイヤーの名前> <理由>`)
    }
    break
  }
})
client.login(Config.TOKEN)
