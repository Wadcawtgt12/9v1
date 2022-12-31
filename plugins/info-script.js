let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Thanks To*
    
Allah SWT
My parents
All Friends
All Contributors
All Creator Bot
Adiwajshing
Nurutomo
BochilGaming`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'Hayooo Mau Ngapain?'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
