import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/chitoge?apikey=ibeng'
	conn.sendButton(m.chat, 'Sagiri Lont... (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(sagiri)$/i
handler.tags = ['anime']
handler.help = ['sagiri']
handler.premium = false
handler.limit = true

export default handler