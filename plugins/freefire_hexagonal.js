let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/sBkL.jpeg`
let hexagonaltxt = `
» 𝙈𝘼𝙋𝘼 𝘿𝙀 𝙀𝙓𝘼𝙂𝙊𝙉𝘼𝙇 ✅
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/sBkL.jpeg', 'fantasy.jpg', hexagonaltxt.trim(),
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
thumbnailUrl: 'https://qu.ax/sBkL.jpeg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(hexagonal|hexagonal)$/i
export default handler
