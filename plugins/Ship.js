let handler = async (m, { conn, command, text }) => {
if (!text) throw `⚠️ ESCRIBE EL NOMBRE DE DOS PERSONAS PARA CALCULAR SU AMOR`
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) throw `⚠️ ESCRIBE EL NOMBRE DE LA SEGUNDA PERSONA`
let loves = `❤️ ${text1} tu oportunidad de enamorarte de ${text2} es de ${Math.floor(Math.random() * 100)}%👩🏻‍❤️‍👨🏻 

`.trim()
m.reply(loves, null, { mentions: conn.parseMention(love) })
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^(ship)$/i
export default handler
