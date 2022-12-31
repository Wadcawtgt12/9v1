import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/chitoge?apikey=ibeng'
	conn.sendButton(m.chat, 'Waifu Nya Kak (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next Image',`.${command}`]],m)
}
handler.command = /^(nezuko)$/i
handler.tags = ['anime']
handler.help = ['nezuko']
handler.premium = false

export default handler