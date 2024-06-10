let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/BZfp.jpeg`
let cuadrilaterotxt = `
MAPA DE CUADRILATERO
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/BZfp.jpeg', 'fantasy.jpg', cuadrilaterotxt.trim(),
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
sourceUrl: ig,
thumbnailUrl: 'https://qu.ax/BZfp.jpeg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(cuadrilatero|cuadri)$/i
export default handler
