import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/d2c5e644386f0c4cb7324.png`
    return conn.sendButton(m.chat, 'Donasi Pm Owner aja.\n❏  :v', 'Makasih, thanks for you donate...', img2, [["Touch Me >,<", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://saweria.co/SeanChann",
                mediaType: "VIDEO",
                title: 'Donasi To Bot',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler
