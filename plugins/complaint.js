import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*Loading . . .*`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Customer Service',
                        url: 'wa.me/62895411143170',
                    }
                },
                {
                    urlButton: {
                        displayText: 'Owner',
                        url: 'https://wa.me/62895411143170',

                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'OKE',
                        id: 'Ok'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Report main² tidak akan di respon', sourceUrl: snh, thumbnail: await (await fetch(`https://telegra.ph/file/874d01cac3fbe3a23adf2.jpg`)).buffer()  }}})
}
handler.help = ['complaint']
handler.tags = ['group','info']
handler.command = /^(complaint)$/i

handler.register = true
handler.exp = 3

export default handler
