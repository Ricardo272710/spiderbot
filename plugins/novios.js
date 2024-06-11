let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg`
let noviostxt = `
💓estas apunto de ser venado🐐
Espera respuesta

RESPONDER CON
.siacepto
.noacepto
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg', 'fantasy.jpg', noviostxt.trim(),
//En esta imagen vas a poner el url de la imagen grande
 fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `novios`,
body: `vs`,
mediaType: 1,
sourceUrl: 'https://www.instagram.com/ricardoookadm_',
thumbnailUrl: 'https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(novios|novios)$/i
export default handler
