let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `🙌 ¡𝑯𝒐𝒍𝒂! 𝑨𝒈𝒓𝒂𝒅𝒆𝒄𝒆𝒓í𝒂 𝒎𝒖𝒄𝒉𝒐 𝒔𝒊 𝒑𝒖𝒅𝒊𝒆𝒓𝒂𝒔 𝒂𝒑𝒐𝒚𝒂𝒓𝒎𝒆 𝒄𝒐𝒏 𝒖𝒏𝒂 𝒅𝒐𝒏𝒂𝒄𝒊ó𝒏. 🎁 𝑬𝒔𝒕𝒐𝒚 𝒄𝒐𝒏𝒕𝒆𝒏𝒕𝒐 𝒄𝒐𝒏 𝒆𝒍 𝒕𝒓𝒂𝒃𝒂𝒋𝒐 𝒒𝒖𝒆 𝒉𝒆 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒅𝒐 𝒚 𝒍𝒐 𝒄𝒐𝒎𝒑𝒂𝒓𝒕𝒐 𝒄𝒐𝒏 𝒖𝒔𝒕𝒆𝒅𝒆𝒔. ¡𝑮𝒓𝒂𝒄𝒊𝒂𝒔!

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐏𝐚𝐲𝐏𝐚𝐥 𝐝𝐞 𝙨𝙥𝙞𝙙𝙚𝙧 𝙗𝙤𝙩
*https://paypal.me/RicardoSilva18160*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendButton(m.chat, str, `𝙨𝙥𝙞𝙙𝙚𝙧 𝙗𝙤𝙩 - 𝑨𝑺𝑰𝑺𝑻𝑬𝑵𝑪𝑰𝑨\n+593979133620\n\n` + wm, media, [
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], null, [
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', `https://paypal.me/RicardoSilva18160`]], fkontak)}
/*conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}*/
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
