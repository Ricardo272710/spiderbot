let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/LEag.jpeg`
let kalaharitxt = `
» 𝙈𝘼𝙋𝘼 𝙆𝘼𝙇𝘼𝙃𝘼𝙍𝙄 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ✅
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/LEag.jpeg', 'fantasy.jpg', kalaharitxt.trim(),
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
thumbnailUrl: 'https://qu.ax/LEag.jpeg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(kalahari|kalahari)$/i
export default handler
