let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/hDq.png`
let anthonygeytxt = `
si , le encanta el pito y es demasiado gay

🏳️‍🌈 𝙊𝙍𝙂𝙐𝙇𝙇𝙊 𝙎𝙀𝙍 𝙂𝘼𝙔 𝙂𝘼𝙔 !! 🏳️‍🌈
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/hDq.png', 'fantasy.jpg', anthonygeytxt.trim(),
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
thumbnailUrl: 'https://qu.ax/hDq.png'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(anthonygey|geyanthony)$/i
export default handler
