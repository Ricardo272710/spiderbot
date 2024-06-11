let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/oktJ.jpeg`
let nexterratxt = `
» 𝙈𝘼𝙋𝘼 𝙉𝙀𝙓𝙏𝙀𝙍𝙍𝘼 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ✅
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/oktJ.jpeg', 'fantasy.jpg', nexterratxt.trim(),
//En esta imagen vas a poner el url de la imagen grande
 fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `Free Fire`,
body: `vs`,
mediaType: 1,
sourceUrl: 'https://www.instagram.com/ricardoookadm_',
thumbnailUrl: 'https://qu.ax/oktJ.jpeg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(nexte|nexterra)$/i
export default handler
