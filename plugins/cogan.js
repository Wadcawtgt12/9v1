import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/cogan?apikey=ibeng'
	conn.sendButton(m.chat, '*Nih Kak*', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(cogan)$/i
handler.tags = ['random']
handler.help = ['cogan']
handler.premium = false
handler.limit = true

export default handler