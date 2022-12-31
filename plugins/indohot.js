let handler  = async (m, { conn }) => {
	
	await m.reply('WAIT, Tunggu Sebentar')
  conn.reply(m.chat,`${pickRandom(global.hot)}`, m)
}
handler.help = ['indohot']
handler.tags = ['premium']
handler.command = /^(indohot)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.hot = [
'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri\n\nhttps://animeforallhuman.blogspot.com/',
]