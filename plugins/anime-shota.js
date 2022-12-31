import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/shota?apikey=ibeng'
	conn.sendButton(m.chat, 'Nih Kak (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(shota)$/i
handler.tags = ['anime']
handler.help = ['shota']
handler.premium = false
handler.limit = true

export default handler