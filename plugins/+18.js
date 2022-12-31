let handler  = async (m, { conn }) => {
	
	await m.reply('Pengocok...`')
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['filebokep']
handler.tags = ['hentai']
handler.command = /^(filebokep)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bokep = [
'Nama : DilaPye Colmek\nFoto : -\nVideo : 1\nSize : 90 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://animeforallhuman.blogspot.com/ \n PASSWORD FILE : AA18+#29',
]
//KALAU MAU TAMBAHIN JUGA BISA