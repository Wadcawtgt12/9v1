let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/874d01cac3fbe3a23adf2.jpg'
let text = `━━ꕥ〔 *Sewa & Premium* 〕ꕥ━⬣

┏━ꕥ〔 Sewa 〕
┃
┃✾ 15 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
┃✾ 45 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ
┃✾ 60 ʜᴀʀɪ 30ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 50ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 Premium 〕
┃
┃✾ 15 ʜᴀʀɪ 10ᴋ 
┃✾ 30 ʜᴀʀɪ 15ᴋ 
┃✾ 45 ʜᴀʀɪ 25ᴋ 
┃✾ 60 ʜᴀʀɪ 30ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 50ᴋ
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 570+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/62895411143170?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler
