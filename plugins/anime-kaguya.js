import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/kaguya?apikey=ibeng'
	conn.sendButton(m.chat, 'Waifu Nya Kak (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(shinomiya|kaguya)$/i
handler.tags = ['anime']
handler.help = ['kaguya']
handler.premium = false
handler.limit = true

export default handler