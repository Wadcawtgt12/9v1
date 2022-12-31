import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/rize?apikey=ibeng'
	conn.sendButton(m.chat, 'Waifu Nya Kak (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(rize)$/i
handler.tags = ['anime']
handler.help = ['rize']
handler.premium = false
handler.limit = true

export default handler