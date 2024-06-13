import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(katashiMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `〘  𝕊ℙ𝕀𝔻𝔼ℝ 𝕄𝔸ℕ 𝔹𝕆𝕋  〙
───────────❍
┃🥇〘𝙲𝚁𝙴𝙰𝙳𝙾𝚁𝙴𝚂 𝙾𝙵𝙲〙
┃ 🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️
┃   👨🏼‍💻𝗥𝗜𝗖𝗔𝗥𝗗𝗢 𝗔𝗗𝗠 🥷🏻
┃   👨🏽‍💻𝗔𝗡𝗧𝗛𝗢𝗡𝗬 𝗢𝗥𝗚🤴
┃🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️
┃ 🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️║▌│█║▌│█║▌│█│║▌║
┃🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️🕷️    ║▌│█║▌│█║▌│█│║▌║
┃🕸️ 𝗦𝗣𝗜𝗗𝗘𝗥 𝗠𝗔𝗡 𝗕𝗢𝗧🕷️
┃🕷️🕸️🕷️🕸️🕷️🕸️🕷️🕸️🕷️
╰──────────❍
╰══════════⊷❍

★ 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ★
 ───────────❍
┃➺ 🎫 .donarsala
┃➺ 🎟️ .sorteo 
┃➺ 🏝️ .𝘉𝘦𝘳𝘮𝘶𝘥𝘢
┃➺ 🏖️ .𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
┃➺ 🏜️ .𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
┃➺ 🏔️ .𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
┃➺ 🌋 .𝘈𝘭𝘱𝘦𝘴
┃➺ ☄️ .cuadrilatero
┃➺ 🪐 .exagonal
╰──────────❍
╰══════════⊷❍

★ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 ★
 ───────────❍
┃➺ 📝 .𝟦𝘷𝘴𝟦 + hora
┃➺ 📝 .𝟨𝘷𝘴𝟨
┃➺ 📝 .𝟪𝘷𝘴𝟪
┃➺ 📝 .𝟣𝟤𝘷𝘴𝟣𝟤
┃➺ 📝 .𝟣𝟨𝘷𝘴𝟣𝟨
┃➺ 📝 .𝟤𝟢𝘷𝘴𝟤𝟢
┃➺ 📝 .𝟤𝟦𝘷𝘴𝟤𝟦
┃➺ 📝 .𝘴𝘤𝘳𝘪𝘮
┃➺ 📝 .s𝘤𝘳𝘪𝘮2
┃➺ 📝 .𝘨𝘶𝘦𝘳𝘳𝘢
┃➺ 📝 .cuadrilista
┃➺ 📝 .hexalista
╰──────────❍
╰══════════⊷❍

  〘 ENTRETENIMIENTO 〙
────────────❍
┃🎮 .trivia 
┃🎮 .acertijo
┃🎮 .palabra | ordenar
┃🎮  .pelicula | adv
┃🎮 .mates | matemáticas
┃🎮 .ppt piedra/papel/tijera
┃🎮 .lanzar cara | cruz
┃🎮 .tictactoe | ttt sala
┃🎮 .deltictactoe | delttt
┃🎮 .topgays
┃🎮 .topotakus
┃🎮 .toppajer@s
┃🎮 .topput@s
┃🎮 .topintegrantes
┃🎮 .toplagrasa | topgrasa
┃🎮 .toppanafrescos 
┃🎮 .topshiposters
┃🎮 .toplindos | toplind@s
┃🎮 .topfamos@s
┃🎮 .topparejas 
┃🎮 .gay | gay @tag
┃🎮 .gay2 nombre : @tag
┃🎮 .lesbiana nombre :@tag 
┃🎮 .manca nombre : @tag
┃🎮 .manco nombre : @tag
┃🎮 .pajero nombre : @tag
┃🎮 .pajera nombre : @tag
┃🎮 .puto nombre : @tag
┃🎮 .puta nombre : @tag
┃🎮 .rata nombre : @tag
┃🎮 .love nombre : @tag
┃🎮 .ship | nombre1y2
┃🎮 .doxear nombre : @tag
┃🎮 .doxxeame
┃🎮 .apostar 
┃🎮 .pregunta texto
┃🎮 .formarpareja
┃🎮 .dado
┃🎮 .verdad
┃🎮 .reto
┃🎮 .juegos
╰──────────❍
╰══════════⊷❍

  〘 IA SPIDER MAN BOT 〙
────────────❍
┃🔎puedes buscar lo que deseas usando:
┃👩‍💼.simi | ia texto
┃👩‍💼.simsimi | bixby texto ╰─────────
╰══════════⊷❍

       〘 DESCARGAS 〙
────────────❍
┃🖼️ .imagen | image texto
┃🖼️ .pinterest | texto
┃🖼️ .wallpaper|wp texto
┃🎧 .play | play2 texto 
┃🎧 .play.1 texto o link
┃🎧 .play.2 texto o link 
┃🎧 .ytmp3 | yta link
┃🎧 .ytmp4 | ytv link
┃🎧 .pdocaudio | ytadoc link
┃🎧 .pdocvieo | ytvdoc link
┃🔅 .tw |twdl | twitter link
┃🔅 .facebook | fb link
┃🔅.instagram url vid/img
┃🔅.verig | igstalk usuario(a)
┃🔅.ighistoria | usuario
┃🔅.tiktok link
┃🔅.tiktokimagen / link
┃🔅.tiktokfoto | usuario(a)
┃🔅.vertiktok | usuario(a)
┃🔅.mediafire | link
┃🌡️.clima país / ciudad
┃🧏🏼‍♂️.consejo
┃💌.fraseromantica
┃📜.historia
╰───────────❍
╰══════════⊷❍

    〘 CHAT ANONIMO 〙
────────────❍
┃podras enviar msj a otra
┃ P. usando a 𝙨𝙥𝙞𝙙𝙚𝙧 𝙗𝙤𝙩 
┃🤖 .chatanonimo 
┃🤖 .anonimoch
┃🤖 .start
┃🤖 .next
┃🤖 .leave
╰───────────
╰══════════⊷❍
 
        〘 GRUPO, ADM  〙
────────────❍
┃🎯.add numero
┃🎯.sacar | ban | kick @tag
┃🎯.grupo abrir : cerrar
┃🎯.daradmin | @tag
┃🎯.quitar | @tag
┃🎯.banchat
┃🎯.unbanchat
┃🎯.banuser  @tag
┃🎯.unbanuser  @tag
┃🎯.admins  texto
┃🎯.invocar  texto
┃🎯.tagall  texto
┃🎯.hidetag  texto
┃🎯.infogrupo | infogroup
┃🎯.advertencia  @tag 
┃🎯.deladvertencia  @tag
┃🎯.delwarn  @tag
┃🎯.enlace | link
┃🎯.newnombre | texto
┃🎯.newdesc | texto
┃🎯.setwelcome | texto  
┃🎯.setbye | texto
┃🎯.nuevoenlace | resetlink
┃✅.on
┃❌.off
╰───────────❍
╰══════════⊷❍
 
           〘 PAREJAS 〙
────────────❍
┃👫 .listanovios
┃👩‍❤️‍💋‍👨 .minovi@ 
┃👩‍❤️‍👨 .novios | @tag
┃💘 .siacepto | @tag
┃💔 .noacepto | @tag
┃🖤 .divorsio | @tag
╰───────────❍
╰══════════⊷❍
 
    〘 COMANDOS +18 〙
────────────❍
┃🔞.hornymenu
╰───────────❍
╰══════════⊷❍
 
   〘 CONVERTIDORES 〙
────────────❍
┃🕹️ .toimg | img/ jpg /sticker
┃🕹️ .toanime | foto
┃🕹️ .tomp3 | nota de voz
┃🕹️.tovn | vn video o audio
┃🕹️ .tovideo audio
┃🕹️ .tourl video/ imagen
┃🕹️.toenlace /vd/img/audi
╰───────────❍
╰══════════⊷❍ 

          〘 OTHER 〙
────────────❍
┃🎭 .simpcard  @tag
┃🎭 .hornycard  @tag
┃🎭 .lolice  @tag
┃🎭 .ytcomment  texto
┃🎭 .itssostupid
┃🎭 .pixelar
┃🎭 .blur
╰───────────❍
╰══════════⊷❍

   〘 IMG-ANIME Y MAS 〙
────────────❍
┃📸 .cristianoronaldo
┃📸 .messi
┃📸 .meme
┃📸 .meme2
┃📸 .itzy
┃📸 .blackpink
┃📸 .kpop blackpink/exo/bts
┃📸 .lolivid
┃📸 .loli
┃📸 .navidad
┃📸 .ppcouple
┃📸 .neko
┃📸 .waifu
┃📸 .akira
┃📸 .akiyama
┃📸 .anna
┃📸 .asuna
┃📸 .ayuzawa
┃📸 .boruto
┃📸 .chiho
┃📸 .chitoge
┃📸 .deidara
┃📸 .erza
┃📸 .elaina
┃📸 .eba
┃📸 .emilia
┃📸 .hestia
┃📸 .hinata
┃📸 .inori
┃📸 .isuzu
┃📸 .itachi
┃📸 .itori
┃📸 .kaga
┃📸 .kagura
┃📸 .kaori
┃📸 .keneki
┃📸 .kotori
┃📸 .kurumi
┃📸 .madara
┃📸 .mikasa
┃📸 .miku
┃📸 .minato
┃📸 .naruto
┃📸 .nezuko
┃📸 .sagiri
┃📸 .sasuke
┃📸 .sakura
┃📸 .cosplay
╰───────────❍
╰══════════⊷❍

  〘 MODIFICAR AUDIOS 〙
 ────────────❍
┃🥁 .bass
┃🥁 .blown
┃🥁 .deep
┃🥁 .earrape
┃🥁 .fat
┃🥁 .fast
┃🥁 .nightcore
┃🥁 .reverse
┃🥁 .robot
┃🥁 .slow
┃🥁 .smooth
┃🥁 .tupai
╰───────────❍
╰══════════⊷❍

     〘 BÚSQUEDA〙 ──────────❍
┃🌏 .animeinfo texto
┃🌏 .mangainfo texto
┃🌏 .google texto
┃🌏 .letra | lirik texto
┃🌏 .ytsearch | yts texto
┃🌏 .wiki | wikipedia texto
╰───────────❍
╰══════════⊷❍

  〘 MENU AUDIOS 〙
──────────❍
┃🔊 .menuaudios
╰───────────❍
╰══════════⊷❍


〘 HERRAMIENTAS 〙
──────────❍
┃〽️ .afk / motivo
┃〽️ .acortar / url
┃〽️ .calc
┃⚠️ .del
┃⚠️ .qrcode texto
┃⚠️ .readmore texto1|texto2
┃⚠️ .spamwa #|texto|veces
┃💬 .styletext texto
┃💻 .traducir texto
┃🆘 .morse codificar texto
┃📊 .encuesta | poll Motivo
┃🕝 .horario
╰───────────❍
╰═════════⊷❍

〘 RPG SUBIR DE NIVEL〙 ────────────❍
┃💸 .transfer tipo cantidd @
┃🎯 .dar tipo cantidad @tag
┃🧧 .enviar tipo cantidad @
┃⚖️ .balance
┃💳 .cartera | wallet
┃🧠 .experiencia | exp
┃📉 .nivel | level | lvl
┃🎖️ .rol | rango
┃📝 .inventario | inventory
┃🎢 .aventura | adventure 
┃🔫 .caza | cazar | hunt
┃🎣 .pescar | fishing
┃🕷️ .animales
┃🍔 .alimentos
┃❤️‍🩹 .curar | heal
┃🛒 .buy
┃🕳️ .sell
┃®️ .verificar | registrar
┃🪪 .perfil | profile
┃🧾 .myns
┃🔢 .unreg /numero de serie
┃💎 .minargemas
┃🪙 .minarcoins
┃🧠 .minarexp
┃⛏️ .minar /minar2 /minar3
┃🎁 .reclamar | regalo |
┃🕰️ .cadahora | hourly
┃📆 .cadasemana | semanal
┃📅 .cadames | mes |
┃📦 .cofre | abrircofre |
┃🧑‍💻 .trabajar | work
╰───────────❍
╰══════════⊷❍

TABLA DE CLASIFICACIÓN
 ───────────❍
┃🔝.top | lb | leaderboard
╰───────────❍
╰══════════⊷❍

      〘 STICKERS 〙
──────────❍
┃♻️.sticker | IMG/VIDEO
┃♻️.emojimix 
┃🗣️ .ttp texto
┃🗣️ .ttp2 texto
┃🗣️ .ttp3 texto
┃🗣️ .ttp4 texto
┃🗣️ .ttp5 texto
┃🗣️ .ttp6 texto
┃🎲 .dado
┃🎨 .stickermarker efecto : R a imagen
┃🎨 .stickerfilter efecto : R a imagen
┃🎨 .cs  : cs2
╰───────────❍
╰══════════⊷❍

    〘EDITAR STICKER〙 
───────────❍
┃🪢 .wm packname|author
┃🪢 .wm texto1|texto2
╰──────────❍
╰══════════⊷❍

     〘CREA STICKERS〙 ───────────❍
┃🧶.palmaditas | pat @tag
┃🧶.bofetada | slap @tag
┃🧶.golpear @tag
┃🧶.besar | kiss @tag
┃🧶.alimentar | food @tag
╰──────────❍
╰══════════⊷❍`.trim()
const vi = [' https://qu.ax/rgnB.mp4',
'https://qu.ax/rgnB.mp4',
'https://qu.ax/rgnB.mp4']
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
