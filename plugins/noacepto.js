let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg`
let noaceptotxt = `
𝙣𝙤 𝙖𝙘𝙚𝙥𝙩𝙖 𝙨𝙚𝙧 𝙘𝙖𝙘𝙝𝙪𝙙@ , 𝙖𝙨𝙞 𝙦𝙪𝙚 𝙗𝙪𝙨𝙘𝙖𝙩𝙚 𝙪𝙣𝙖 𝙛𝙖𝙘𝙞𝙡 😜
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg', 'fantasy.jpg', noaceptotxt.trim(),
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
thumbnailUrl: 'https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(noacepto|noacepto)$/i
export default handler
