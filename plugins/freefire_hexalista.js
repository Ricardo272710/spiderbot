let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://qu.ax/sBkL.jpeg`
let hexalistatxt = `
 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 SPIDERBOT🧜🏼‍♂️
🔱𝙼𝙾𝙳𝙰𝙻𝙸𝙳𝙰𝙳: 𝙷𝙴𝚇𝙰𝙶𝙾𝙽𝙰𝙻
🐚𝙷𝙾𝚁𝙰: 
🐳𝙲𝙾𝙻𝙾𝚁:
💦𝙲𝙰𝚂𝙸𝙻𝙻𝙰𝚂:

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1

🔱•
🌊•
🧜🏼‍♂️•
🌊•

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2

🔱•
🌊•
🐳•
🌊•

𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦/𝗥𝗢𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦

🦈•
🦈•


•𝘾𝙐𝘼𝙇𝙌𝙐𝙄𝙀𝙍 𝘿𝙐𝘿𝘼 𝙌𝙐𝙀 𝙏𝙀𝙉𝙂𝘼𝙉 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼𝙍 

•𝗖𝗨𝗠𝗣𝗟𝗜𝗥 𝗖𝗢𝗡 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦 𝗤𝗨𝗘 𝗦𝗘 𝗟𝗘𝗦 𝗗𝗔 𝗬 𝗘𝗦𝗧𝗔𝗥 10 𝗠𝗜𝗡𝗨𝗧𝗢𝗦 𝗔𝗡𝗧𝗘𝗦 EN DC
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://qu.ax/sBkL.jpeg', 'fantasy.jpg', hexalistatxt.trim(),
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
handler.command = /^(hexalist|hexalista)$/i
export default handler
