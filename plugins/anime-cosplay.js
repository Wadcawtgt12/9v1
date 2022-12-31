import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/random/cosplay?apikey=ibeng'
	conn.sendButton(m.chat, 'Watashiwa Anime Desu (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime']
handler.help = ['cosplay']
handler.premium = false
handler.limit = true

export default handler