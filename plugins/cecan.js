import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/cecan?apikey=ibeng'
	conn.sendButton(m.chat, '*Nih Kak*', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(cecan)$/i
handler.tags = ['random']
handler.help = ['cecan']
handler.premium = false
handler.limit = true

export default handler