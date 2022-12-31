import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/mikasa?apikey=ibeng'
	conn.sendButton(m.chat, 'Uhmmm Bau Titan (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(mikasa)$/i
handler.tags = ['anime']
handler.help = ['mikasa']
handler.premium = false
handler.limit = true

export default handler