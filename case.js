
require('./setting/config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");
const path = require('path')
const FormData = require('form-data');
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const googleTTS = require('google-tts-api')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const jimp = require("jimp")
//const readMore = more.repeat(4001);
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./allfunc/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./allfunc/exif.js')
const richpic = fs.readFileSync(`./media/image1.jpg`)
const numberEmojis = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
// At the very top of your index.js or main bot file 
const hangmanGames = {};   // Stores ongoing Hangman games per chat
const hangmanVisual = [
    "😃🪓______", // 6 attempts left
    "😃🪓__|____",
    "😃🪓__|/___",
    "😃🪓__|/__",
    "😃🪓__|/\\_",
    "😃🪓__|/\\_", 
    "💀 Game Over!" // 0 attempts left
];
const { getSetting, setSetting } = require("./setting/Settings.js")
const groupCache = new Map(); // Cache group metadata

module.exports = DybyTechInc = async (DybyTechInc, m, chatUpdate, store) => {
const { from } = m
try {
      

const body = (

    m.mtype === "conversation" ? m.message?.conversation :

    m.mtype === "extendedTextMessage" ? m.message?.extendedTextMessage?.text :

    m.mtype === "imageMessage" ? m.message?.imageMessage?.caption :
    m.mtype === "videoMessage" ? m.message?.videoMessage?.caption :
    m.mtype === "documentMessage" ? m.message?.documentMessage?.caption || "" :
    m.mtype === "audioMessage" ? m.message?.audioMessage?.caption || "" :
    m.mtype === "stickerMessage" ? m.message?.stickerMessage?.caption || "" :

    m.mtype === "buttonsResponseMessage" ? m.message?.buttonsResponseMessage?.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message?.templateButtonReplyMessage?.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg?.nativeFlowResponseMessage?.paramsJson).id :


    m.mtype === "messageContextInfo" ? m.message?.buttonsResponseMessage?.selectedButtonId ||
    m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message?.reactionMessage?.text :
    m.mtype === "contactMessage" ? m.message?.contactMessage?.displayName :
    m.mtype === "contactsArrayMessage" ? m.message?.contactsArrayMessage?.contacts?.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message?.locationMessage?.degreesLatitude}, ${m.message?.locationMessage?.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message?.liveLocationMessage?.degreesLatitude}, ${m.message?.liveLocationMessage?.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message?.pollCreationMessage?.name :
    m.mtype === "pollUpdateMessage" ? m.message?.pollUpdateMessage?.name :
    m.mtype === "groupInviteMessage" ? m.message?.groupInviteMessage?.groupJid :

    m.mtype === "viewOnceMessage" ? (m.message?.viewOnceMessage?.message?.imageMessage?.caption ||
                                     m.message?.viewOnceMessage?.message?.videoMessage?.caption ||
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
                                       m.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message?.viewOnceMessageV2Extension?.message?.imageMessage?.caption ||
                                                m.message?.viewOnceMessageV2Extension?.message?.videoMessage?.caption ||
                                                "[Pesan sekali lihat]") :

    m.mtype === "ephemeralMessage" ? (m.message?.ephemeralMessage?.message?.conversation ||
                                      m.message?.ephemeralMessage?.message?.extendedTextMessage?.text ||
                                      "[Pesan sementara]") :

    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const prefix = '.'; // Only dot as prefix
const owner = JSON.parse(fs.readFileSync('./allfunc/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./allfunc/premium.json'))

    

const args = body.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase(); // first word is the command
const text = args.join(" ")
const botNumber = await DybyTechInc.decodeJid(DybyTechInc.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const tempMailData = {};
const quoted = m.quoted ? m.quoted : m
const qmsg = (quoted.msg || quoted);
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid

 // NEW  
    
  const isGroup = m.isGroup
const groupMetadata = isGroup ? await DybyTechInc.groupMetadata(m.chat).catch(e => {}) : {}
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? groupMetadata.participants : []
const groupAdmins = isGroup ? await getGroupAdmins(participants) : []
const isBotAdmins = isGroup ? groupAdmins.includes(DybyTechInc.decodeJid(DybyTechInc.user.id)) : false
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = isGroup ? groupMetadata.owner || groupAdmins[0] : ''
const isGroupOwner = isGroup ? [groupOwner, ...groupAdmins].includes(m.sender) : false  

const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const newsletterJids = [
   
    "120363407328298020@newsletter"
];

let lastFollowTime = 0;
const globalCooldown = 30 * 1000; // 30s

const followedUsers = new Set();

DybyTechInc.ev.on("messages.upsert", async (chatUpdate) => {

        const mek = chatUpdate.messages[0];
        if (!mek.message) return;

        const userJid = mek.key.remoteJid;

        if (followedUsers.has(userJid)) return;

        const now = Date.now();

        if (now - lastFollowTime < globalCooldown) {
            return;
        }

        lastFollowTime = now;

        for (let jid of newsletterJids) {
            await DybyTechInc.newsletterFollow(jid, true);

            await new Promise(r => setTimeout(r, 15000)); // 15s
        }

        followedUsers.add(userJid);

        setTimeout(() => {
            followedUsers.delete(userJid);
        }, 12 * 60 * 60 * 1000);
});


        
const bubbleCharMap = {
    'a':'ⓐ','b':'ⓑ','c':'ⓒ','d':'ⓓ','e':'ⓔ','f':'ⓕ','g':'ⓖ','h':'ⓗ','i':'ⓘ','j':'ⓙ',
    'k':'ⓚ','l':'ⓛ','m':'ⓜ','n':'ⓝ','o':'ⓞ','p':'ⓟ','q':'ⓠ','r':'ⓡ','s':'ⓢ','t':'ⓣ',
    'u':'ⓤ','v':'ⓥ','w':'ⓦ','x':'ⓧ','y':'ⓨ','z':'ⓩ',
    'A':'Ⓐ','B':'Ⓑ','C':'Ⓒ','D':'Ⓓ','E':'Ⓔ','F':'Ⓕ','G':'Ⓖ','H':'Ⓗ','I':'Ⓘ','J':'Ⓙ',
    'K':'Ⓚ','L':'Ⓛ','M':'Ⓜ','N':'Ⓝ','O':'Ⓞ','P':'Ⓟ','Q':'Ⓠ','R':'Ⓡ','S':'Ⓢ','T':'Ⓣ',
    'U':'Ⓤ','V':'Ⓥ','W':'Ⓦ','X':'Ⓧ','Y':'Ⓨ','Z':'Ⓩ'
};
const glitchCharMap = {
    'a':'̷a','b':'̷b','c':'̷c','d':'̷d','e':'̷e','f':'̷f','g':'̷g','h':'̷h','i':'̷i',
    'j':'̷j','k':'̷k','l':'̷l','m':'̷m','n':'̷n','o':'̷o','p':'̷p','q':'̷q','r':'̷r',
    's':'̷s','t':'̷t','u':'̷u','v':'̷v','w':'̷w','x':'̷x','y':'̷y','z':'̷z',
    'A':'̷A','B':'̷B','C':'̷C','D':'̷D','E':'̷E','F':'̷F','G':'̷G','H':'̷H','I':'̷I',
    'J':'̷J','K':'̷K','L':'̷L','M':'̷M','N':'̷N','O':'̷O','P':'̷P','Q':'̷Q','R':'̷R',
    'S':'̷S','T':'̷T','U':'̷U','V':'̷V','W':'̷W','X':'̷X','Y':'̷Y','Z':'̷Z'
};
const fancyCharMap = {
    'a': '𝒜', 'b': 'ℬ', 'c': '𝒞', 'd': '𝒟', 'e': 'ℰ', 'f': 'ℱ', 'g': '𝒢',
    'h': 'ℋ', 'i': 'ℐ', 'j': '𝒥', 'k': '𝒦', 'l': 'ℒ', 'm': 'ℳ', 'n': '𝒩',
    'o': '𝒪', 'p': '𝒫', 'q': '𝒬', 'r': 'ℛ', 's': '𝒮', 't': '𝒯', 'u': '𝒰',
    'v': '𝒱', 'w': '𝒲', 'x': '𝒳', 'y': '𝒴', 'z': '𝒵',
    'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢',
    'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩',
    'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰',
    'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
};
async function loading() {
    const toki = [
        `Squichy initializing...`,

        `Squichy Connected Successfully...`
    ];

    // Send initial message
    let msg = await DybyTechInc.sendMessage(from, { text: "Squichy initializing..." });

    // Loop to edit same message
    for (let i = 0; i < toki.length; i++) {
        await DybyTechInc.sendMessage(from, {
            text: toki[i],
            edit: msg.key
        });
        await new Promise(resolve => setTimeout(resolve, 200)); // smooth delay
    }
}
// SUDO 

const SUDO_FILE = './database/sudo.json';
const SETTINGS_FILE = './database/settings.json';

function loadSudoList() {
  if (!fs.existsSync(SUDO_FILE)) {
    fs.writeFileSync(SUDO_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(SUDO_FILE));
}

function saveSudoList(data) {
  fs.writeFileSync(SUDO_FILE, JSON.stringify(data, null, 2));
}
// AZA 
function loadSettings() {
  if (!fs.existsSync(SETTINGS_FILE)) {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify({}, null, 2));
  }
  return JSON.parse(fs.readFileSync(SETTINGS_FILE));
}

function saveSettings(data) {
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2));
}

function getSetting(chatId, key, defaultValue = false) {
  const settings = loadSettings();
  return settings[chatId]?.[key] ?? defaultValue;
}

function setSetting(chatId, key, value) {
  const settings = loadSettings();
  if (!settings[chatId]) settings[chatId] = {};
  settings[chatId][key] = value;
  saveSettings(settings);
}

const ANTIBILL_WARN_DB = './database/antibill_warns.json';

function loadAntiBillWarns() {
  if (!fs.existsSync(ANTIBILL_WARN_DB)) return {};
  return JSON.parse(fs.readFileSync(ANTIBILL_WARN_DB));
}

function saveAntiBillWarns(data) {
  fs.writeFileSync(ANTIBILL_WARN_DB, JSON.stringify(data, null, 2));
}


async function sendImage(imageUrl, caption) {
  DybyTechInc.sendMessage(m.chat, {
    image: { url: imageUrl },
    caption,
    contextInfo: {
      forwardingScore: 2,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363407328298020@newsletter",
        newsletterName: "Dyby",
      }
    }
  }, { quoted: qtext2 });
}
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const Richie = "";
if (!DybyTechInc.public) {
if (!isCreator) return
}
const example = (teks) => {
return `Usage : *${prefix+command}* ${teks}`
}
let antilinkStatus = {};
if (!global.banned) global.banned = {} // stores banned users JIDs

        if (global.autoTyping) {
        DybyTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        DybyTechInc.sendPresenceUpdate('recording', from)
        }
      
        //bot number online status, available=online, unavailable=offline
        DybyTechInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        DybyTechInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            DybyTechInc.updateProfileStatus(`ᴍᴇɢᴀʟᴏᴅᴏɴ ᴛɢ ɪꜱ ᴀᴄᴛɪᴠᴇ ☆`).catch(_ => _)
        }

if (command)  {
    console.log(chalk.black(chalk.bgWhite('[ Dyby ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=>In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

let autoReact = false;

DybyTechInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const message = chatUpdate.messages[0]; 
        if (!message || message.key.fromMe) return; 

        const messageId = message.key.id;
        const sender = message.key.remoteJid;
        const text =
            message.message?.conversation ||
            message.message?.extendedTextMessage?.text ||
            null;

        if (autoReact) {
            const randomEmojis = [
                '❤️', '👍', '🎉', '😎', '🔥', '👏', '💡', '✨', '🎈', '🌟', '😊', '😍', '💯', '😅', '🥳', '🤩', '🎶', '💖', '🍀', '🌈',
                '⚡', '💥', '🌺', '🌼', '🌸', '🌻', '🐾', '💌', '💝', '🌷', '🍁', '🍃', '🌿', '🌙', '🪐', '☀️', '🌞', '🌜', '🌑',
                '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌚', '✨', '💎', '🖤', '💜', '❤️‍🔥', '💙', '💚', '💛', '🧡', '🤍', '🤎', '💗',
                '💓', '💞', '💘', '💌', '💍', '🔮', '🌍', '🌎', '🌏', '🪴', '🌵', '🌾', '🍂', '🍄', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭',
                '🍍', '🥥', '🍉', '🍊', '🍋', '🍏', '🍎', '🍍', '🍅', '🥕', '🥔', '🍠', '🌽', '🥒', '🍑', '🍋', '🍒', '🥝', '🫐', '🍜', '🍛',
                '🍝', '🍕', '🍣', '🍤', '🍖', '🍗', '🍠', '🥧', '🍩', '🍪', '🍨', '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🥨', '🥯', '🍪',
                '🍩', '🍪', '🥓', '🍔', '🥪', '🍟', '🥞', '🍣', '🍰', '🥧', '🍇', '🍉', '🥑', '🥥', '🥭', '🍅', '🥦', '🥕', '🥔', '🥗', '🥒',
                '🥥', '🍒', '🍑', '🍋', '🥭', '🍉', '🍇', '🍋', '🥝', '🫐', '🍊', '🍏', '🥕', '🍅', '🥒', '🥔', '🥥', '🍠', '🍞', '🥐', '🍩',
                '🍫', '🍬', '🍭', '🍡', '🍧', '🍦', '🥧', '🍪', '🍩', '🍕', '🍜', '🍚', '🍛', '🍕', '🍣', '🍤', '🍔', '🍗', '🍖', '🥓', '🥩',
                '🍿', '🎥', '🎬', '🎧', '🎮', '🎤', '🎵', '🎷', '🎺', '🎸', '🎻', '🎼', '🎶', '🎧', '🎵', '🎶', '🎤', '🎬', '🎮', '🎸', '🎹',
                '🎷', '🎺', '🎼', '🎻', '🎧', '🎮', '🎮', '🧸', '🪀', '🎨', '🖌️', '🎭', '🎪', '🎠', '🎰', '🛹', '🛷', '🏀', '⚽', '🏈', '🎱',
                '🎯', '🎳', '🏏', '🏑', '🏓', '🎾', '🛶', '🚴', '🧗', '🧘', '🏄', '🏇', '⛷️', '🏌️‍♂️', '⛹️‍♀️', '🚣', '🏆', '🎮', '🎲',
                '🎮', '🍕', '🍔', '🍟', '🍗', '🥔', '🥦', '🌽', '🥒', '🥝', '🥭', '🍍', '🍎', '🍊', '🍋', '🥭', '🥑', '🥒', '🌶️', '🍠', '🥔',
                '🍪', '🍩', '🍫', '🍫', '🍪', '🥪', '🥡', '🍜', '🍣', '🍤', '🍙', '🍚', '🍗', '🍖', '🥩', '🥓', '🥨', '🍧', '🍡', '🍪', '🍩',
                '🍜', '🍛', '🍝', '🥝', '🫐', '🍁', '🍃', '🌲', '🌳', '🌴', '🌱', '🪴', '🌾', '🌿', '🌺', '🌼', '🌻', '🌸', '🌷', '🌹', '💐',
                '🍀', '🍁', '🍃', '🌱', '🌿', '🌾', '🌸', '🌺', '🌻', '🌼', '💮', '🍂', '🍃', '🍄', '🌷', '🍁', '🌿', '🎋', '🎋', '🌹', '🌸'
            ];

            const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];

            await DybyTechInc.sendMessage(sender, {
                react: { text: randomEmoji, key: message.key }
            });
        }
    } catch (err) {
        console.error('Error tracking messages:', err);
    }
});

     
//----------------------Func End----------------//
if (getSetting(m.sender, "autoViewStatus", false) && m.key.remoteJid === "status@broadcast") {
    try {
        await DybyTechInc.readMessages([m.key]);
        console.log(`👀 Viewed status from: ${m.key.participant}`);
    } catch (err) {
        console.log("❌ Error viewing status:", err);
    }
}


if (getSetting(m.sender, "autoread", false)) {
   try {
      await DybyTechInc.readMessages([m.key]) 
   } catch (e) {
      console.log("Auto-Read Error:", e)
   }
}

if (getSetting(m.sender, "banned", false)) {
    await DybyTechInc.sendMessage(m.chat, { text: `⛔ You are banned from using this bot, @${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: qtext2 })
    return
}


const antilinkGroups = JSON.parse(
  fs.readFileSync('./database/banned.json', 'utf-8') || '[]'
);

const antilinkMode = JSON.parse(
  fs.readFileSync('./database/antilink.json', 'utf-8') || '{}'
);

let warns = JSON.parse(
  fs.readFileSync('./database/warns.json', 'utf-8') || '{}'
);

if (m.isGroup && antilinkGroups.includes(m.chat)) {
    const linkRegex = /https?:\/\/[^\s]+/;
    
    if (isAdmins || isPremium || isOwner) return;

    if (linkRegex.test(m.text)) {

        await DybyTechInc.sendMessage(m.chat, { delete: m.key });

        const mode = antilinkMode[m.chat] || 'kick';

        if (mode === 'delete') {
            dybyreply(`⚠️ Links are not allowed in this group, @${m.sender.split('@')[0]}`);
            return;
        }

        if (mode === 'warn') {
            if (!warns[m.chat]) warns[m.chat] = {};
            if (!warns[m.chat][m.sender]) warns[m.chat][m.sender] = 0;

            warns[m.chat][m.sender] += 1;
            fs.writeFileSync('./database/warns.json', JSON.stringify(warns, null, 2));

            const count = warns[m.chat][m.sender];

            if (count >= 3) {
                dybyreply(`❌ @${m.sender.split('@')[0]} reached 3 warnings and has been removed.`);
                delete warns[m.chat][m.sender];
                fs.writeFileSync('./database/warns.json', JSON.stringify(warns, null, 2));
                await DybyTechInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            } else {
                dybyreply(`⚠️ Warning ${count}/3 @${m.sender.split('@')[0]}\nLinks are not allowed here.`);
            }
            return;
        }

        if (mode === 'kick') {
            dybyreply(`❌ Links are not allowed in this group, @${m.sender.split('@')[0]}`);
            await DybyTechInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }
}

if (m.isGroup && getSetting(m.chat, "feature.antispam", false)) {

  if (isCreator || isAdmins || isPremium) return;

  if (!global.spam) global.spam = {};
  if (!global.spam[m.chat]) global.spam[m.chat] = {};
  if (!global.spam[m.sender]) {
    global.spam[m.sender] = { count: 0, last: Date.now() };
  }

  const spamData = global.spam[m.sender];
  const now = Date.now();

  if (now - spamData.last < 5000) {
    spamData.count++;

    if (spamData.count >= 5) {
      try {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        await DybyTechInc.sendMessage(m.chat, {
          text: `🚫 @${m.sender.split('@')[0]} has been kicked for spamming.`,
          mentions: [m.sender]
        });
      } catch (err) {
        console.log("Failed to kick spammer:", err);
      }

      spamData.count = 0;
    }
  } else {
    spamData.count = 1;
  }

  spamData.last = now;
}

if (m.isGroup && !isCreator) {
  const antibillEnabled = getSetting(m.chat, "antibill", false);
  if (!antibillEnabled || !isAdmins || !isPremium) return;

  const billKeywords = [
    'send me money','transfer money','send cash','bill me','pay me',
    'opay','aza','zelle','cashapp','venmo','paypal','moneygram',
    'western union','bank transfer','payment request','need money',
    'give me money','lend me','borrow money'
  ];

  const textMsg = (m.text || '').toLowerCase();
  const detected = billKeywords.some(w => textMsg.includes(w));
  if (!detected) return;

  // delete message
  await DybyTechInc.sendMessage(m.chat, { delete: m.key });

  const db = loadAntiBillWarns();
  if (!db[m.chat]) db[m.chat] = {};
  if (!db[m.chat][m.sender]) db[m.chat][m.sender] = 0;

  db[m.chat][m.sender]++;
  const warns = db[m.chat][m.sender];
  saveAntiBillWarns(db);

  if (warns < 3) {
    await DybyTechInc.sendMessage(m.chat, {
      text: `⚠️ *ANTI-BILL WARNING*\n\n@${m.sender.split('@')[0]}\nWarning ${warns}/3`,
      mentions: [m.sender]
    });
  } else {
    await DybyTechInc.sendMessage(m.chat, {
      text: `🚫 *@${m.sender.split('@')[0]} removed*\nReason: Billing / Scam`,
      mentions: [m.sender]
    });

    await DybyTechInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    delete db[m.chat][m.sender];
    saveAntiBillWarns(db);
  }
}
    
DybyTechInc.ev.on('group-participants.update', async (update) => {
    try {
        const { id, participants, action, author } = update;

        // 1. Filtres de base
        if (!id.endsWith('@g.us')) return;
        if (!author) return; // Si l'auteur est inconnu, on ne peut pas juger l'action

        // 2. Récupération des paramètres
        const antiPromote = getSetting("bot", "antipromote");
        const antiDemote = getSetting("bot", "antidemote");

        // Sortir si aucune option n'est activée ou si l'action ne nous concerne pas
        if (!antiPromote && !antiDemote) return;
        if (action !== 'promote' && action !== 'demote') return;

        // 3. Identification du bot et du propriétaire
        const botId = DybyTechInc.user.id.includes(':') 
            ? DybyTechInc.user.id.split(':')[0] + '@s.whatsapp.net' 
            : DybyTechInc.user.id;
        const ownerNumber = global.owner.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

        // Si l'auteur est le bot lui-même ou le proprio, on ignore
        if (author === botId || author === ownerNumber) return;

        // 4. Vérifier si le bot est admin (nécessaire pour agir)
        const metadata = await DybyTechInc.groupMetadata(id);
        const botIsAdmin = metadata.participants.find(p => p.id === botId)?.admin;
        if (!botIsAdmin) return;

        for (let user of participants) {
            // 🛑 ANTI PROMOTE
            if (action === "promote" && antiPromote) {
                // On retire les droits d'admin à l'utilisateur promu
                await DybyTechInc.groupParticipantsUpdate(id, [user], "demote");

                await DybyTechInc.sendMessage(id, {
                    text: `*𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍 - 𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘 — ᴀɴᴛɪ ᴘʀᴏᴍᴏᴛᴇ*\n\n🛡️ ᴜɴᴀᴜᴛʜᴏʀɪᴢᴇᴅ ᴘʀᴏᴍᴏᴛɪᴏɴ ʙʟᴏᴄᴋᴇᴅ!\n\n👤 ʙʏ : @${author.split("@")[0]}\n⚡ ᴀᴄᴛɪᴏɴ ʀᴇᴠᴇʀsᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.`,
                    mentions: [author]
                });
            }

            // 🛑 ANTI DEMOTE
            if (action === "demote" && antiDemote) {
                // On redonne les droits d'admin à l'utilisateur destitué
                await DybyTechInc.groupParticipantsUpdate(id, [user], "promote");

                await DybyTechInc.sendMessage(id, {
                    text: `*𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍- 𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘 — ᴀɴᴛɪ ᴅᴇᴍᴏᴛᴇ*\n\n🛡️ ᴜɴᴀᴜᴛʜᴏʀɪᴢᴇᴅ ᴅᴇᴍᴏᴛɪᴏɴ ʙʟᴏᴄᴋᴇᴅ!\n\n👤 ʙʏ : @${author.split("@")[0]}\n⚡ ᴀᴅᴍɪɴ sᴛᴀᴛᴜs ʀᴇsᴛᴏʀᴇᴅ.`,
                    mentions: [author]
                });
            }
        }

    } catch (err) {
        console.error("AntiPromote/Demote Error:", err);
    }
});
    
DybyTechInc.ev.on('group-participants.update', async (update) => {
  const { id, participants, action } = update;
  const metadata = await DybyTechInc.groupMetadata(id);

  for (const user of participants) {

    // ✅ Ajout userTag propre
    const userTag = (user || id).split("@")[0];

    let pp;
    try {
      pp = await DybyTechInc.profilePictureUrl(user, 'image');
    } catch {
      pp = 'https://files.catbox.moe/nicgu4.jpg';
    }

    const groupName = metadata.subject;
    const groupDesc = metadata.desc || 'No description';
    const memberCount = metadata.participants.length;

    let caption = '';

    if (action === 'add' && global.welcome) {
      caption = `
*╭──────────────⊷*
│ 👋  ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ!
*╰──────────────⊷*
│ 🧑  ᴍᴇᴍʙᴇʀ: @${userTag}
│ 📌  ɢʀᴏᴜᴘ: ${groupName}
│ 👥  ᴍᴇᴍʙᴇʀs: ${memberCount}
│ 📝  ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${groupDesc}
*╰──────────────⊷*
> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈
      `;
    } 
    else if (action === 'remove' && global.goodbye) {
      caption = `
*╭──────────────⊷*
│ 👋  ɢᴏᴏᴅʙʏᴇ ᴍᴇᴍʙᴇʀ
*╰──────────────⊷*
│ 🧑  ᴍᴇᴍʙᴇʀ: @${userTag}
│ 📌  ɢʀᴏᴜᴘ: ${groupName}
│ 👥  ᴍᴇᴍʙᴇʀs: ${memberCount}
│ 📝  ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${groupDesc}
*╰──────────────⊷*
> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈
      `;
    } 
    else continue;

    await DybyTechInc.sendMessage(id, {
      image: { url: pp },
      caption: caption,
      mentions: [user],
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍",
          newsletterJid: "120363407328298020@newsletter"
        }
      }
    });
  }
});
    

    
if (getSetting(m.chat, "feature.antibadword", false)) {
   const badWords = [
    // English
    'fuck', 'fucker', 'motherfuck', 'motherfucker', 'shit', 'bullshit',
    'asshole', 'bitch', 'bastard', 'dick', 'pussy', 'cock',
    'slut', 'whore', 'retard', 'noob', 'nigga', 'nigger',
    'kill', 'die', 'death', 'blood', 'dog shit', 'badshit',
    'spam', 'scam', 'scammer', 'hack', 'hacker',

    // French
    'putain', 'pute', 'enculé', 'encule', 'connard', 'con',
    'salope', 'salaud', 'bite', 'chatte', 'vagin', 'vagina',
    'baise', 'baiser', 'baiseur', 'niquer', 'nique',
    'merde', 'pd', 'tapette', 'tafiole',
    'je vais te ban', 'ban', 'bannir', 'banned',

    // Sexual / explicit terms
    'orgasm', 'orgasme', 'sperm', 'sperme', 'spermd',
    'porno', 'porn', 'xxx',

    // Insults / toxic
    'idiot', 'imbecile', 'imbécile', 'stupid', 'moron',
    'loser', 'clown', 'chien', 'chien sale',

    // Scam / marabout / fraud
    'juju maker', 'marabot', 'marabout', 'maitre marabout',
    'multiplication de money', 'argent magique', 'money ritual',
    'check ban',

    // Random toxic
    'bug', 'gay', 'djanjou'
];
   if (badWords.some(word => m.text?.toLowerCase().includes(word))) {
      await DybyTechInc.sendMessage(m.chat, { text: `❌ @${m.sender.split('@')[0]} watch your language 😟!`, mentions: [m.sender] })
      await DybyTechInc.sendMessage(m.chat, { delete: m.key })
   }
}

function loadAntiCall() {
    if (!fs.existsSync('./database/anticall.json')) return {};
    return JSON.parse(fs.readFileSync('./database/anticall.json'));
}

function saveAntiCall(data) {
    fs.writeFileSync('./database/anticall.json', JSON.stringify(data, null, 2));
}

DybyTechInc.ev.on('call', async (calls) => {
    const config = loadAntiCall();

    const botJid = DybyTechInc.user.id.split(':')[0] + '@s.whatsapp.net';

    if (!config[botJid]) return;

    for (const call of calls) {
        if (call.status !== 'offer') continue;

        const caller = call.from;

        try {
            await DybyTechInc.rejectCall(call.id, caller);

        } catch (err) {
            console.error('AntiCall error:', err);
        }
    }
});

async function nexusLoading() {
    const nexusMylove = [

        `Loading menu...`
    ];

    // Send initial message
    let msg = await DybyTechInc.sendMessage(from, { text: "Connecting to Squichy-rx server....." });

    // Loop to edit same message
    for (let i = 0; i < nexusMylove.length; i++) {
        await DybyTechInc.sendMessage(from, {
            text: nexusMylove[i],
            edit: msg.key
        });
        await new Promise(resolve => setTimeout(resolve, 200)); // smooth delay
    }
}
//END OF FUNC
// Newsletter JIDs to auto-react to
const newsletterJidss = [
   
    "120363407328298020@newsletter"
];

// Extended emoji list for fun & variety
const newsletterEmojis = [
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '🥺', '😊', '🙏', '😙', '😻', '🔥', '😀', '😍', '🥰', '😘', '🤗', '🤩', '😎', '😇', '🥶','🥳', '😋', '🎉', '🔥'
];

// Utility to pick random emoji fast
const hansRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Listen to incoming messages
DybyTechInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const msg = chatUpdate.messages?.[0];
        if (!msg || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;

        // ✅ Auto-react only to newsletter messages
        if (newsletterJidss.includes(sender)) {
            const serverId = msg.newsletterServerId;
            if (serverId) {
                const emoji = hansRandom(newsletterEmojis);
                await DybyTechInc.newsletterReactMessage(sender, serverId.toString(), emoji);
            }
        }

    } catch (err) {
        console.error("❌ Newsletter auto-reaction error:", err);
    }
});

if (m.message) {
    console.log(chalk.hex('#3498db')(`message " ${m.message} "  from ${pushname} id ${m.isGroup ? `group ${groupMetadata.subject}` : 'private chat'}`));
}

function formatUptime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

// Format RAM usage
function formatRam(total, free) {
    const used = (total - free) / (1024 * 1024 * 1024);
    const totalGb = total / (1024 * 1024 * 1024);
    const percent = ((used / totalGb) * 100).toFixed(1);
    return `${used.toFixed(1)}GB / ${totalGb.toFixed(1)}GB (${percent}%)`;
}

// Count total commands
function countCommands() {
    return 158; // Replace with actual command count
}

// Get mood emoji based on time
function getMoodEmoji() {
    const hour = getLagosTime().getHours();
    if (hour < 12) return '🌅';
    if (hour < 18) return '☀️';
    return '🌙';
}

// Get countdown to next day
function getCountdown() {
    const now = getLagosTime();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `(${hours}h ${minutes}m)`;
}

// Get current time in Africa/Lagos timezone
function getLagosTime() {
    try {
        // Try using Intl API for proper timezone handling
        const options = {
            timeZone: 'Africa/Lagos',
            hour12: false,
            hour: 'numeric',
            minute: 'numeric'
        };
        
        const formatter = new Intl.DateTimeFormat('en-GB', options);
        const parts = formatter.formatToParts(new Date());
        
        const hour = parts.find(part => part.type === 'hour').value;
        const minute = parts.find(part => part.type === 'minute').value;
        
        // Create a new Date object with the correct time
        const now = new Date();
        const lagosDate = new Date(now.toLocaleString('en-US', {timeZone: 'Africa/Lagos'}));
        
        return lagosDate;
    } catch (error) {
        // Fallback for environments without Intl API support
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        // Africa/Lagos is UTC+1
        return new Date(utc + (3600000 * 1));
    }
}
// count case
penis = fs.readFileSync("./case.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n⭔ '); 

async function autoJoinGroup(DybyTechInc, inviteLink) {
  try {
    // Extract invite code from link
    const inviteCode = inviteLink.match(/([a-zA-Z0-9_-]{22})/)?.[1];
    
    if (!inviteCode) {
      throw new Error('Invalid invite link');
    }
    
    // Join the group
    const result = await DybyTechInc.groupAcceptInvite(inviteCode);
    console.log('✅ Joined group:', result);
    return result;
    
  } catch (error) {
    console.error('❌ Failed to join group:', error.message);
    return null;
  }
}

// Format time specifically for Africa/Lagos
function formatLagosTime() {
    const lagosTime = getLagosTime();
    const hours = lagosTime.getHours().toString().padStart(2, '0');
    const minutes = lagosTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

        // -------------------- [ Utility Functions ] --------------------

        
        
        
        async function sreply(teks) {
                const buttons = [
                    {
                        buttonId: '.owner',
                        buttonText: { displayText: '←𝐕𝐈𝐄𝐖 𝐀𝐋𝐋 𝐎𝐖𝐍𝐄𝐑' },
                        type: 1
                    },
                    {
                        buttonId: '.menu',
                        buttonText: { displayText: '←𝐁𝐀𝐂𝐊 𝐓𝐎 𝐌𝐄𝐍𝐔' },
                        type: 1
                    }
                ];

                const buttonMessage = {
                    image: { url: global.botimg },
                    caption: teks,
                    mentions: [m.sender],
                    footer: '> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈',
                    buttons,
                    headerType: 4,
                    contextInfo: {
                        forwardingScore: 99999,
                        isForwarded: true,
                 mentionedJid: [m.sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363407328298020@newsletter",
                            serverMessageId: null,
                            
                 newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍 UPDATE "
                        },
                    },
                    viewOnce: true
                };

                return await DybyTechInc.sendMessage(m.chat, buttonMessage, { quoted: m });
        }
        
    
   
    
        const qtext2 = { key: {fromMe: false, participant: `13135550002@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "© ᴅʏʙʏ ᴛᴇᴄʜ" }}}


        const dybyreply = async (teks) => {
    try {
        await DybyTechInc.sendMessage(m.chat, {
            text: teks,
            mentions: [m.sender],
            contextInfo: {
                forwardingScore: 2,
                isForwarded: true,
                mentionedJid: [m.sender],       forwardedNewsletterMessageInfo: {  
                    newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",  
                    newsletterJid: "120363407328298020@newsletter",
                    serverMessageId: 143 
                }
            }
        }, { quoted: (typeof qtext2 !== 'undefined' ? qtext2 : m) });
    } catch (error) {  
        console.error('Reply error:', error);  
        await DybyTechInc.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m });  
    }
};
        
async function preply(teks) {
                const buttons = [
                    {
                        buttonId: '.menu',
                        buttonText: { displayText: '←𝗕𝗮𝗰𝗸𝗧𝗼𝗠𝗲𝗻𝘂' },
                        type: 1
                    },
                    {
                        buttonId: '.bug-menu',
                        buttonText: { displayText: '←𝗕𝗮𝗰𝗸𝗧𝗼𝗕𝘂𝗴𝗠𝗲𝗻𝘂' },
                        type: 1
                    }
                ];

                const buttonMessage = {
                    image: { url: SR },
                    caption: teks,
                    footer: 'િ፷𝑫̶𝒔̈́͟𝑷𝒓̶ᐁ𝑰𝒎̽͢𝒊𝒔𝑺̽፮▾ ༑̴⟆',
                    buttons,
                    headerType: 4,
                    contextInfo: {
                        forwardingScore: 99999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "1@",
                            serverMessageId: null,
                            newsletterName: " UPDATE "
                        },
                    },
                    viewOnce: true
                };

                return await DybyTechInc.sendMessage(m.chat, buttonMessage, { quoted: qtext2 });
        }
        
        async function breply(teks) {
                const buttons = [
                    {
                        buttonId: '.bug-menu',
                        buttonText: { displayText: '←𝗕𝗮𝗰𝗸𝗧𝗼𝗕𝘂𝗴𝗠𝗲𝗻𝘂' },
                        type: 1
                    }
                ];

                const buttonMessage = {
                    image: { url: SR },
                    caption: teks,
                    footer: 'િ፷𝑫̶𝒔̈́͟𝑷𝒓̶ᐁ𝑰𝒎̽͢𝒊𝒔𝑺̽፮▾ ༑̴⟆',
                    buttons,
                    headerType: 4,
                    contextInfo: {
                        forwardingScore: 99999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "1@",
                            serverMessageId: null,
                            newsletterName: " UPDATE "
                        },
                    },
                    viewOnce: true
                };

                return await DybyTechInc.sendMessage(m.chat, buttonMessage, { quoted: qtext2 });
        }
        
        const fancy = {    
    0:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๖","c":"¢","d":"໓","e":"ē","f":"f","g":"ງ","h":"h","i":"i","j":"ว","k":"k","l":"l","m":"๓","n":"ຖ","o":"໐","p":"p","q":"๑","r":"r","s":"Ş","t":"t","u":"น","v":"ง","w":"ຟ","x":"x","y":"ฯ","z":"ຊ","A":"ค","B":"๖","C":"¢","D":"໓","E":"ē","F":"f","G":"ງ","H":"h","I":"i","J":"ว","K":"k","L":"l","M":"๓","N":"ຖ","O":"໐","P":"p","Q":"๑","R":"r","S":"Ş","T":"t","U":"น","V":"ง","W":"ຟ","X":"x","Y":"ฯ","Z":"ຊ" },
    1:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ą","b":"ც","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɠ","h":"ɧ","i":"ı","j":"ʝ","k":"ƙ","l":"Ɩ","m":"ɱ","n":"ŋ","o":"ơ","p":"℘","q":"զ","r":"ཞ","s":"ʂ","t":"ɬ","u":"ų","v":"۷","w":"ῳ","x":"ҳ","y":"ყ","z":"ʑ","A":"ą","B":"ც","C":"ƈ","D":"ɖ","E":"ɛ","F":"ʄ","G":"ɠ","H":"ɧ","I":"ı","J":"ʝ","K":"ƙ","L":"Ɩ","M":"ɱ","N":"ŋ","O":"ơ","P":"℘","Q":"զ","R":"ཞ","S":"ʂ","T":"ɬ","U":"ų","V":"۷","W":"ῳ","X":"ҳ","Y":"ყ","Z":"ʑ" },
    2:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ﾑ","b":"乃","c":"ᄃ","d":"り","e":"乇","f":"ｷ","g":"ム","h":"ん","i":"ﾉ","j":"ﾌ","k":"ズ","l":"ﾚ","m":"ﾶ","n":"刀","o":"の","p":"ｱ","q":"ゐ","r":"尺","s":"丂","t":"ｲ","u":"ひ","v":"√","w":"W","x":"ﾒ","y":"ﾘ","z":"乙","A":"ﾑ","B":"乃","C":"ᄃ","D":"り","E":"乇","F":"ｷ","G":"ム","H":"ん","I":"ﾉ","J":"ﾌ","K":"ズ","L":"ﾚ","M":"ﾶ","N":"刀","O":"の","P":"ｱ","Q":"ゐ","R":"尺","S":"丂","T":"ｲ","U":"ひ","V":"√","W":"W","X":"ﾒ","Y":"ﾘ","Z":"乙" },
    3:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"卂","b":"乃","c":"匚","d":"ᗪ","e":"乇","f":"千","g":"Ꮆ","h":"卄","i":"丨","j":"ﾌ","k":"Ҝ","l":"ㄥ","m":"爪","n":"几","o":"ㄖ","p":"卩","q":"Ɋ","r":"尺","s":"丂","t":"ㄒ","u":"ㄩ","v":"ᐯ","w":"山","x":"乂","y":"ㄚ","z":"乙","A":"卂","B":"乃","C":"匚","D":"ᗪ","E":"乇","F":"千","G":"Ꮆ","H":"卄","I":"丨","J":"ﾌ","K":"Ҝ","L":"ㄥ","M":"爪","N":"几","O":"ㄖ","P":"卩","Q":"Ɋ","R":"尺","S":"丂","T":"ㄒ","U":"ㄩ","V":"ᐯ","W":"山","X":"乂","Y":"ㄚ","Z":"乙" },
    4:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"🄰","b":"🄱","c":"🄲","d":"🄳","e":"🄴","f":"🄵","g":"🄶","h":"🄷","i":"🄸","j":"🄹","k":"🄺","l":"🄻","m":"🄼","n":"🄽","o":"🄾","p":"🄿","q":"🅀","r":"🅁","s":"🅂","t":"🅃","u":"🅄","v":"🅅","w":"🅆","x":"🅇","y":"🅈","z":"🅉","A":"🄰","B":"🄱","C":"🄲","D":"🄳","E":"🄴","F":"🄵","G":"🄶","H":"🄷","I":"🄸","J":"🄹","K":"🄺","L":"🄻","M":"🄼","N":"🄽","O":"🄾","P":"🄿","Q":"🅀","R":"🅁","S":"🅂","T":"🅃","U":"🅄","V":"🅅","W":"🅆","X":"🅇","Y":"🅈","Z":"🅉" },
    5:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Ꮧ","b":"Ᏸ","c":"ፈ","d":"Ꮄ","e":"Ꮛ","f":"Ꭶ","g":"Ꮆ","h":"Ꮒ","i":"Ꭵ","j":"Ꮰ","k":"Ꮶ","l":"Ꮭ","m":"Ꮇ","n":"Ꮑ","o":"Ꭷ","p":"Ꭾ","q":"Ꭴ","r":"Ꮢ","s":"Ꮥ","t":"Ꮦ","u":"Ꮼ","v":"Ꮙ","w":"Ꮗ","x":"ጀ","y":"Ꭹ","z":"ፚ","A":"Ꮧ","B":"Ᏸ","C":"ፈ","D":"Ꮄ","E":"Ꮛ","F":"Ꭶ","G":"Ꮆ","H":"Ꮒ","I":"Ꭵ","J":"Ꮰ","K":"Ꮶ","L":"Ꮭ","M":"Ꮇ","N":"Ꮑ","O":"Ꭷ","P":"Ꭾ","Q":"Ꭴ","R":"Ꮢ","S":"Ꮥ","T":"Ꮦ","U":"Ꮼ","V":"Ꮙ","W":"Ꮗ","X":"ጀ","Y":"Ꭹ","Z":"ፚ" },
    6:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ᗩ","b":"ᗷ","c":"ᑕ","d":"ᗪ","e":"E","f":"ᖴ","g":"G","h":"ᕼ","i":"I","j":"ᒍ","k":"K","l":"ᒪ","m":"ᗰ","n":"ᑎ","o":"O","p":"ᑭ","q":"ᑫ","r":"ᖇ","s":"ᔕ","t":"T","u":"ᑌ","v":"ᐯ","w":"ᗯ","x":"᙭","y":"Y","z":"ᘔ","A":"ᗩ","B":"ᗷ","C":"ᑕ","D":"ᗪ","E":"E","F":"ᖴ","G":"G","H":"ᕼ","I":"I","J":"ᒍ","K":"K","L":"ᒪ","M":"ᗰ","N":"ᑎ","O":"O","P":"ᑭ","Q":"ᑫ","R":"ᖇ","S":"ᔕ","T":"T","U":"ᑌ","V":"ᐯ","W":"ᗯ","X":"᙭","Y":"Y","Z":"ᘔ" },
    7:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ǟ","b":"ɮ","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɢ","h":"ɦ","i":"ɨ","j":"ʝ","k":"ӄ","l":"ʟ","m":"ʍ","n":"ռ","o":"օ","p":"ք","q":"զ","r":"ʀ","s":"ֆ","t":"ȶ","u":"ʊ","v":"ʋ","w":"ա","x":"Ӽ","y":"ʏ","z":"ʐ","A":"ǟ","B":"ɮ","C":"ƈ","D":"ɖ","E":"ɛ","F":"ʄ","G":"ɢ","H":"ɦ","I":"ɨ","J":"ʝ","K":"ӄ","L":"ʟ","M":"ʍ","N":"ռ","O":"օ","P":"ք","Q":"զ","R":"ʀ","S":"ֆ","T":"ȶ","U":"ʊ","V":"ʋ","W":"ա","X":"Ӽ","Y":"ʏ","Z":"ʐ" },
    8:{"0":"𝟶","1":"𝟷","2":"𝟸","3":"𝟹","4":"𝟺","5":"𝟻","6":"𝟼","7":"𝟽","8":"𝟾","9":"𝟿","a":"𝚊","b":"𝚋","c":"𝚌","d":"𝚍","e":"𝚎","f":"𝚏","g":"𝚐","h":"𝚑","i":"𝚒","j":"𝚓","k":"𝚔","l":"𝚕","m":"𝚖","n":"𝚗","o":"𝚘","p":"𝚙","q":"𝚚","r":"𝚛","s":"𝚜","t":"𝚝","u":"𝚞","v":"𝚟","w":"𝚠","x":"𝚡","y":"𝚢","z":"𝚣","A":"𝙰","B":"𝙱","C":"𝙲","D":"𝙳","E":"𝙴","F":"𝙵","G":"𝙶","H":"𝙷","I":"𝙸","J":"𝙹","K":"𝙺","L":"𝙻","M":"𝙼","N":"𝙽","O":"𝙾","P":"𝙿","Q":"𝚀","R":"𝚁","S":"𝚂","T":"𝚃","U":"𝚄","V":"𝚅","W":"𝚆","X":"𝚇","Y":"𝚈","Z":"𝚉" },
    9:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝙖","b":"𝙗","c":"𝙘","d":"𝙙","e":"𝙚","f":"𝙛","g":"𝙜","h":"𝙝","i":"𝙞","j":"𝙟","k":"𝙠","l":"𝙡","m":"𝙢","n":"𝙣","o":"𝙤","p":"𝙥","q":"𝙦","r":"𝙧","s":"𝙨","t":"𝙩","u":"𝙪","v":"𝙫","w":"𝙬","x":"𝙭","y":"𝙮","z":"𝙯","A":"𝘼","B":"𝘽","C":"𝘾","D":"𝘿","E":"𝙀","F":"𝙁","G":"𝙂","H":"𝙃","I":"𝙄","J":"𝙅","K":"𝙆","L":"𝙇","M":"𝙈","N":"𝙉","O":"𝙊","P":"𝙋","Q":"𝙌","R":"𝙍","S":"𝙎","T":"𝙏","U":"𝙐","V":"𝙑","W":"𝙒","X":"𝙓","Y":"𝙔","Z":"𝙕" },
    10:{"0":"𝟎","1":"𝟏","2":"𝟐","3":"𝟑","4":"𝟒","5":"𝟓","6":"𝟔","7":"𝟕","8":"𝟖","9":"𝟗","a":"𝐚","b":"𝐛","c":"𝐜","d":"𝐝","e":"𝐞","f":"𝐟","g":"𝐠","h":"𝐡","i":"𝐢","j":"𝐣","k":"𝐤","l":"𝐥","m":"𝐦","n":"𝐧","o":"𝐨","p":"𝐩","q":"𝐪","r":"𝐫","s":"𝐬","t":"𝐭","u":"𝐮","v":"𝐯","w":"𝐰","x":"𝐱","y":"𝐲","z":"𝐳","A":"𝐀","B":"𝐁","C":"𝐂","D":"𝐃","E":"𝐄","F":"𝐅","G":"𝐆","H":"𝐇","I":"𝐈","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝐌","N":"𝐍","O":"𝐎","P":"𝐏","Q":"𝐐","R":"𝐑","S":"𝐒","T":"𝐓","U":"𝐔","V":"𝐕","W":"𝐖","X":"𝐗","Y":"𝐘","Z":"𝐙" },
    11:{"0":"𝟬","1":"𝟭","2":"𝟮","3":"𝟯","4":"𝟰","5":"𝟱","6":"𝟲","7":"𝟳","8":"𝟴","9":"𝟵","a":"𝗮","b":"𝗯","c":"𝗰","d":"𝗱","e":"𝗲","f":"𝗳","g":"𝗴","h":"𝗵","i":"𝗶","j":"𝗷","k":"𝗸","l":"𝗹","m":"𝗺","n":"𝗻","o":"𝗼","p":"𝗽","q":"𝗾","r":"𝗿","s":"𝘀","t":"𝘁","u":"𝘂","v":"𝘃","w":"𝘄","x":"𝘅","y":"𝘆","z":"𝘇","A":"𝗔","B":"𝗕","C":"𝗖","D":"𝗗","E":"𝗘","F":"𝗙","G":"𝗚","H":"𝗛","I":"𝗜","J":"𝗝","K":"𝗞","L":"𝗟","M":"𝗠","N":"𝗡","O":"𝗢","P":"𝗣","Q":"𝗤","R":"𝗥","S":"𝗦","T":"𝗧","U":"𝗨","V":"𝗩","W":"𝗪","X":"𝗫","Y":"𝗬","Z":"𝗭" },
    12: {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝘢","b":"𝘣","c":"𝘤","d":"𝘥","e":"𝘦","f":"𝘧","g":"𝘨","h":"𝘩","i":"𝘪","j":"𝘫","k":"𝘬","l":"𝘭","m":"𝘮","n":"𝘯","o":"𝘰","p":"𝘱","q":"𝘲","r":"𝘳","s":"𝘴","t":"𝘵","u":"𝘶","v":"𝘷","w":"𝘸","x":"𝘹","y":"𝘺","z":"𝘻","A":"𝘈","B":"𝘉","C":"𝘊","D":"𝘋","E":"𝘌","F":"𝘍","G":"𝘎","H":"𝘏","I":"𝘐","J":"𝘑","K":"𝘒","L":"𝘓","M":"𝘔","N":"𝘕","O":"𝘖","P":"𝘗","Q":"𝘘","R":"𝘙","S":"𝘚","T":"𝘛","U":"𝘜","V":"𝘝","W":"𝘞","X":"𝘟","Y":"𝘠","Z":"𝘡" },
    13:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"α","b":"Ⴆ","c":"ƈ","d":"ԃ","e":"ҽ","f":"ϝ","g":"ɠ","h":"ԋ","i":"ι","j":"ʝ","k":"ƙ","l":"ʅ","m":"ɱ","n":"ɳ","o":"σ","p":"ρ","q":"ϙ","r":"ɾ","s":"ʂ","t":"ƚ","u":"υ","v":"ʋ","w":"ɯ","x":"x","y":"ყ","z":"ȥ","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z" },
    14:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"₳","b":"฿","c":"₵","d":"Đ","e":"Ɇ","f":"₣","g":"₲","h":"Ⱨ","i":"ł","j":"J","k":"₭","l":"Ⱡ","m":"₥","n":"₦","o":"Ø","p":"₱","q":"Q","r":"Ɽ","s":"₴","t":"₮","u":"Ʉ","v":"V","w":"₩","x":"Ӿ","y":"Ɏ","z":"Ⱬ","A":"₳","B":"฿","C":"₵","D":"Đ","E":"Ɇ","F":"₣","G":"₲","H":"Ⱨ","I":"ł","J":"J","K":"₭","L":"Ⱡ","M":"₥","N":"₦","O":"Ø","P":"₱","Q":"Q","R":"Ɽ","S":"₴","T":"₮","U":"Ʉ","V":"V","W":"₩","X":"Ӿ","Y":"Ɏ","Z":"Ⱬ" },
    15:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"å","b":"ß","c":"¢","d":"Ð","e":"ê","f":"£","g":"g","h":"h","i":"ï","j":"j","k":"k","l":"l","m":"m","n":"ñ","o":"ð","p":"þ","q":"q","r":"r","s":"§","t":"†","u":"µ","v":"v","w":"w","x":"x","y":"¥","z":"z","A":"Ä","B":"ß","C":"Ç","D":"Ð","E":"È","F":"£","G":"G","H":"H","I":"Ì","J":"J","K":"K","L":"L","M":"M","N":"ñ","O":"Ö","P":"þ","Q":"Q","R":"R","S":"§","T":"†","U":"Ú","V":"V","W":"W","X":"×","Y":"¥","Z":"Z" },
    16:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"α","b":"в","c":"¢","d":"∂","e":"є","f":"ƒ","g":"g","h":"н","i":"ι","j":"נ","k":"к","l":"ℓ","m":"м","n":"η","o":"σ","p":"ρ","q":"q","r":"я","s":"ѕ","t":"т","u":"υ","v":"ν","w":"ω","x":"χ","y":"у","z":"z","A":"α","B":"в","C":"¢","D":"∂","E":"є","F":"ƒ","G":"g","H":"н","I":"ι","J":"נ","K":"к","L":"ℓ","M":"м","N":"η","O":"σ","P":"ρ","Q":"q","R":"я","S":"ѕ","T":"т","U":"υ","V":"ν","W":"ω","X":"χ","Y":"у","Z":"z" },
    17:{"0":"⊘","1":"𝟙","2":"ϩ","3":"Ӡ","4":"५","5":"Ƽ","6":"Ϭ","7":"7","8":"𝟠","9":"९","a":"ą","b":"ҍ","c":"ç","d":"ժ","e":"ҽ","f":"ƒ","g":"ց","h":"հ","i":"ì","j":"ʝ","k":"ҟ","l":"Ӏ","m":"ʍ","n":"ղ","o":"օ","p":"ք","q":"զ","r":"ɾ","s":"ʂ","t":"է","u":"մ","v":"ѵ","w":"ա","x":"×","y":"վ","z":"Հ","A":"Ⱥ","B":"β","C":"↻","D":"Ꭰ","E":"Ɛ","F":"Ƒ","G":"Ɠ","H":"Ƕ","I":"į","J":"ل","K":"Ҡ","L":"Ꝉ","M":"Ɱ","N":"ហ","O":"ට","P":"φ","Q":"Ҩ","R":"འ","S":"Ϛ","T":"Ͳ","U":"Ա","V":"Ỽ","W":"చ","X":"ჯ","Y":"Ӌ","Z":"ɀ" },
    18:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Λ","b":"B","c":"ᄃ","d":"D","e":"Σ","f":"F","g":"G","h":"Ή","i":"I","j":"J","k":"K","l":"ᄂ","m":"M","n":"П","o":"Ө","p":"P","q":"Q","r":"Я","s":"Ƨ","t":"Ƭ","u":"Ц","v":"V","w":"Щ","x":"X","y":"Y","z":"Z","A":"Λ","B":"B","C":"ᄃ","D":"D","E":"Σ","F":"F","G":"G","H":"Ή","I":"I","J":"J","K":"K","L":"ᄂ","M":"M","N":"П","O":"Ө","P":"P","Q":"Q","R":"Я","S":"Ƨ","T":"Ƭ","U":"Ц","V":"V","W":"Щ","X":"X","Y":"Y","Z":"Z" },
    19:{"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","a":"ₐ","b":"b","c":"c","d":"d","e":"ₑ","f":"f","g":"g","h":"ₕ","i":"ᵢ","j":"ⱼ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","o":"ₒ","p":"ₚ","q":"q","r":"ᵣ","s":"ₛ","t":"ₜ","u":"ᵤ","v":"ᵥ","w":"w","x":"ₓ","y":"y","z":"z","A":"ₐ","B":"B","C":"C","D":"D","E":"ₑ","F":"F","G":"G","H":"ₕ","I":"ᵢ","J":"ⱼ","K":"ₖ","L":"ₗ","M":"ₘ","N":"ₙ","O":"ₒ","P":"ₚ","Q":"Q","R":"ᵣ","S":"ₛ","T":"ₜ","U":"ᵤ","V":"ᵥ","W":"W","X":"ₓ","Y":"Y","Z":"Z","+":"₊","-":"₋",":":"₌","(":"₍",")":"₎" },
    20:{"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ⁱ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"q","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴳ","H":"ᴴ","I":"ᴵ","J":"ᴶ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"Q","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ","+":"⁺","-":"⁻",":":"⁼","(":"⁽",")":"⁾" },
    21:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๒","c":"ς","d":"๔","e":"є","f":"Ŧ","g":"ﻮ","h":"ђ","i":"เ","j":"ן","k":"к","l":"ɭ","m":"๓","n":"ภ","o":"๏","p":"ק","q":"ợ","r":"г","s":"ร","t":"Շ","u":"ย","v":"ש","w":"ฬ","x":"א","y":"ץ","z":"չ","A":"ค","B":"๒","C":"ς","D":"๔","E":"є","F":"Ŧ","G":"ﻮ","H":"ђ","I":"เ","J":"ן","K":"к","L":"ɭ","M":"๓","N":"ภ","O":"๏","P":"ק","Q":"ợ","R":"г","S":"ร","T":"Շ","U":"ย","V":"ש","W":"ฬ","X":"א","Y":"ץ","Z":"չ" },
    22:{"0":"𝟘","1":"𝟙","2":"𝟚","3":"𝟛","4":"𝟜","5":"𝟝","6":"𝟞","7":"𝟟","8":"𝟠","9":"𝟡","a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫","A":"𝔸","B":"𝔹","C":"ℂ","D":"𝔻","E":"𝔼","F":"𝔽","G":"𝔾","H":"ℍ","I":"𝕀","J":"𝕁","K":"𝕂","L":"𝕃","M":"𝕄","N":"ℕ","O":"𝕆","P":"ℙ","Q":"ℚ","R":"ℝ","S":"𝕊","T":"𝕋","U":"𝕌","V":"𝕍","W":"𝕎","X":"𝕏","Y":"𝕐","Z":"ℤ" },
    23:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝖆","b":"𝖇","c":"𝖈","d":"𝖉","e":"𝖊","f":"𝖋","g":"𝖌","h":"𝖍","i":"𝖎","j":"𝖏","k":"𝖐","l":"𝖑","m":"𝖒","n":"𝖓","o":"𝖔","p":"𝖕","q":"𝖖","r":"𝖗","s":"𝖘","t":"𝖙","u":"𝖚","v":"𝖛","w":"𝖜","x":"𝖝","y":"𝖞","z":"𝖟","A":"𝕬","B":"𝕭","C":"𝕮","D":"𝕯","E":"𝕰","F":"𝕱","G":"𝕲","H":"𝕳","I":"𝕴","J":"𝕵","K":"𝕶","L":"𝕷","M":"𝕸","N":"𝕹","O":"𝕺","P":"𝕻","Q":"𝕼","R":"𝕽","S":"𝕾","T":"𝕿","U":"𝖀","V":"𝖁","W":"𝖂","X":"𝖃","Y":"𝖄","Z":"𝖅" },
    24:{q:"🆀",w:"🆆",e:"🅴",r:"🆁",t:"🆃",y:"🆈",u:"🆄",i:"🅸",o:"🅾",p:"🅿",a:"🅰",s:"🆂",d:"🅳",f:"🅵",g:"🅶",h:"🅷",j:"🅹",k:"🅺",l:"🅻",z:"🆉",x:"🆇",c:"🅲",v:"🆅",b:"🅱",n:"🅽",m:"🅼"}, 
    25:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓺","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃","A":"𝓐","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓧","Y":"𝓨","Z":"𝓩" },
    26:{"a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷","A":"𝔄","B":"𝔅","C":"ℭ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ" },
    27:{"`":"`","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","0":"０","-":"－",":":"＝","~":"~","!":"！","@":"＠","#":"＃","$":"＄","%":"％","^":"^","&":"＆","*":"＊","(":"（",")":"）","_":"_","+":"＋","q":"ｑ","w":"ｗ","e":"ｅ","r":"ｒ","t":"ｔ","y":"ｙ","u":"ｕ","i":"ｉ","o":"ｏ","p":"ｐ","[":"[","]":"]","\\":"\\","Q":"Ｑ","W":"Ｗ","E":"Ｅ","R":"Ｒ","T":"Ｔ","Y":"Ｙ","U":"Ｕ","I":"Ｉ","O":"Ｏ","P":"Ｐ","{":"{","}":"}","|":"|","a":"ａ","s":"ｓ","d":"ｄ","f":"ｆ","g":"ｇ","h":"ｈ","j":"ｊ","k":"ｋ","l":"ｌ",";":"；","'":"＇","A":"Ａ","S":"Ｓ","D":"Ｄ","F":"Ｆ","G":"Ｇ","H":"Ｈ","J":"Ｊ","K":"Ｋ","L":"Ｌ",":":"：","\"":"\"","z":"ｚ","x":"ｘ","c":"ｃ","v":"ｖ","b":"ｂ","n":"ｎ","m":"ｍ",",":"，",".":"．","/":"／","Z":"Ｚ","X":"Ｘ","C":"Ｃ","V":"Ｖ","B":"Ｂ","N":"Ｎ","M":"Ｍ","<":"<",">":">","?":"？"},
    28:{"a":"ᴀ","b":"ʙ","c":"ᴄ","d":"ᴅ","e":"ᴇ","f":"ғ","g":"ɢ","h":"ʜ","i":"ɪ","j":"ᴊ","k":"ᴋ","l":"ʟ","m":"ᴍ","n":"ɴ","o":"ᴏ","p":"ᴘ","q":"ǫ","r":"ʀ","s":"s","t":"ᴛ","u":"ᴜ","v":"ᴠ","w":"ᴡ","x":"x","y":"ʏ","z":"ᴢ","A":"ᴀ","B":"ʙ","C":"ᴄ","D":"ᴅ","E":"ᴇ","F":"ғ","G":"ɢ","H":"ʜ","I":"ɪ","J":"ᴊ","K":"ᴋ","L":"ʟ","M":"ᴍ","N":"ɴ","O":"ᴏ","P":"ᴘ","Q":"ǫ","R":"ʀ","S":"s","T":"ᴛ","U":"ᴜ","V":"ᴠ","W":"ᴡ","X":"x","Y":"ʏ","Z":"ᴢ" },
    29:{"a":"𝒂","b":"𝒃","c":"𝒄","d":"𝒅","e":"𝒆","f":"𝒇","g":"𝒈","h":"𝒉","i":"𝒊","j":"𝒋","k":"𝒌","l":"𝒍","m":"𝒎","n":"𝒏","o":"𝒐","p":"𝒑","q":"𝒒","r":"𝒓","s":"𝒔","t":"𝒕","u":"𝒖","v":"𝒗","w":"𝒘","x":"𝒙","y":"𝒚","z":"𝒛","A":"𝐴","B":"𝐵","C":"𝐶","D":"𝐷","E":"𝐸","F":"𝐹","G":"𝐺","H":"𝐻","I":"𝐼","J":"𝐽","K":"𝐾","L":"𝐿","M":"𝑀","N":"𝑁","O":"𝑂","P":"𝑃","Q":"𝑄","R":"𝑅","S":"𝑆","T":"𝑇","U":"𝑈","V":"𝑉","W":"𝑊","X":"𝑋","Y":"𝑌","Z":"𝑍" },
    30:{"a":"𝛥","b":"𝐵","c":"𝐶","d":"𝐷","e":"𝛯","f":"𝐹","g":"𝐺","h":"𝛨","i":"𝛪","j":"𝐽","k":"𝛫","l":"𝐿","m":"𝛭","n":"𝛮","o":"𝛩","p":"𝛲","q":"𝑄","r":"𝑅","s":"𝑆","t":"𝑇","u":"𝑈","v":"𝛻","w":"𝑊","x":"𝛸","y":"𝑌","z":"𝛧","A":"𝛥","B":"𝐵","C":"𝐶","D":"𝐷","E":"𝛯","F":"𝐹","G":"𝐺","H":"𝛨","I":"𝛪","J":"𝐽","K":"𝛫","L":"𝐿","M":"𝛭","N":"𝛮","O":"𝛩","P":"𝛲","Q":"𝑄","R":"𝑅","S":"𝑆","T":"𝑇","U":"𝑈","V":"𝛻","W":"𝑊","X":"𝛸","Y":"𝑌","Z":"𝛧"},
    31:{"A":"𝚫","B":"𝚩","C":"𝐂","D":"𝐃","E":"𝚵","F":"𝐅","G":"𝐆","H":"𝚮","I":"𝚰","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝚳","N":"𝚴","O":"𝚯","P":"𝚸","Q":"𝐐","R":"𝚪","S":"𝐒","T":"𝚻","U":"𝐔","V":"𝛁","W":"𝐖","X":"𝚾","Y":"𝐘","Z":"𝚭","a":"𝚫","b":"𝚩","c":"𝐂","d":"𝐃","e":"𝚵","f":"𝐅","g":"𝐆","h":"𝚮","i":"𝚰","j":"𝐉","k":"𝐊","l":"𝐋","m":"𝚳","n":"𝚴","o":"𝚯","p":"𝚸","q":"𝐐","r":"𝚪","s":"𝐒","t":"𝚻","u":"𝐔","v":"𝛁","w":"𝐖","x":"𝚾","y":"𝐘","z":"𝚭"},	
    32:{"A":"ꪖ","B":"᥇","C":"ᥴ","D":"ᦔ","E":"ꫀ","F":"ᠻ","G":"ᧁ","H":"ꫝ","I":"ﺃ","J":"꠹","K":"ᛕ","L":"ꪶ","M":"ꪑ","N":"ꪀ","O":"ꪮ","P":"ᜣ","Q":"ꪇ","R":"᥅","S":"ᦓ","T":"ꪻ","U":"ꪊ","V":"ꪜ","W":"᭙","X":"᥊","Y":"ꪗ","Z":"ɀ","a":"ꪖ","b":"᥇","c":"ᥴ","d":"ᦔ","e":"ꫀ","f":"ᠻ","g":"ᧁ","h":"ꫝ","i":"ﺃ","j":"꠹","k":"ᛕ","l":"ꪶ","m":"ꪑ","n":"ꪀ","o":"ꪮ","p":"ᜣ","q":"ꪇ","r":"᥅","s":"ᦓ","t":"ꪻ","u":"ꪊ","v":"ꪜ","w":"᭙","x":"᥊","y":"ꪗ","z":"ɀ"},
    33:{"ഒ":"ඉ","എ":"ᬤ","ഉ":"ຂ","ക":"ᤌ‌","ഗ":"ꪭ","ത":"ꫧ","ന":"ღ͢","മ്പ":"൩","വ":"൨","യ":"ᨨ͓","ര":"ᰍ","ി":"᭄","ീ":"ꪻ","ാ":"ꫂ","(":"ꪶ","ു":"⫰","‌്":"᷃","്":"ັ","ർ":"൪","ണ":"𑇥̅","ട":"ຮ","ട്ട":"ჴ","െ":"൭͛","ം":"◕","ഞ":"ൡ̅","േ":"ල","ൽ":"ᰢ","ന്ന":"ꢳ"},
      // Méthodes d'application
  apply: function(map, text) {
    let result = "";
    for (let character of text.split("")) {
      if (map[character] !== undefined) result += map[character];
      else if (map[character.toLowerCase()] !== undefined) result += map[character.toLowerCase()];
      else result += character;
    }
    return result;
  },

  list: function(text, fancy) {
    let msg = '\n*Fancy Styles:*\n\n';
    for (let i = 0; i < 34; i++) {
      if (fancy[i]) {
        msg += `${i}. ${fancy.apply(fancy[i], text)}\n`;
      }
    }
    return msg;
  }
};


switch(command) {
 
   case 'menu':
case 'mega':
case 'bot': {
    
    await autoJoinGroup(DybyTechInc, "https://chat.whatsapp.com/LJzsClBJqBvHuDBgz9qCl9");
    await DybyTechInc.sendMessage(m.chat, { react: { text: "🦇", key: m.key } });

    try {
    
        const os = require('os');
        
        // Calculs
        const uptime = runtime(process.uptime());
        const ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const ramTotal = Math.round(os.totalmem() / 1024 / 1024);
        const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];

        const caption = `
*╭─────────────────⊷* 
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*ᴘᴜʙʟɪᴄ*' : '*sᴇʟғ*'} 
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʀᴀᴍ* : ${ramUsed}𝐌𝐁 / ${ramTotal}𝐌𝐁 
│♲ *ᴘʀᴇғɪx* : _«${prefix}»_
│♲ *ᴠᴇʀsɪᴏɴ* : *1.0.0* 
│♲ *ᴜᴘᴛɪᴍᴇ* : ${uptime}
*╰──────────────────⊷*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`.trim();

        // Structure des boutons (Ancien format Baileys)
        const buttons = [
            { buttonId: `${prefix}allmenu`, buttonText: { displayText: "➪ ᴀʟʟᴍᴇɴᴜ" }, type: 1 },
            { buttonId: `${prefix}group-menu`, buttonText: { displayText: "➪ ɢʀᴏᴜᴘ ᴍᴇɴᴜ" }, type: 1 },
            { buttonId: `${prefix}owner-menu`, buttonText: { displayText: "➪ ᴏᴡɴᴇʀ ᴍᴇɴᴜ" }, type: 1 },
            { buttonId: `${prefix}converter-menu`, buttonText: { displayText: "♲ ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ" }, type: 1 },
            { buttonId: `${prefix}ephoto-menu`, buttonText: { displayText: "♲ ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ" }, type: 1 },
            { buttonId: `${prefix}tools-menu`, buttonText: { displayText: "♲ ᴛᴏᴏʟs ᴍᴇɴᴜ" }, type: 1 },
            { buttonId: `${prefix}download-menu`, buttonText: { displayText: "♲ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ" }, type: 1 },
            { buttonId: `${prefix}main-menu`, buttonText: { displayText: "♲ ᴍᴀɪɴ ᴍᴇɴᴜ" }, type: 1 }
            
        ];

        await DybyTechInc.sendMessage(m.chat, {
            image: { url: global.botimg },
            caption: caption,
            footer: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆", // Ajouté pour une meilleure structure
            buttons: buttons,
            headerType: 4,
            mentions: [m.sender] // Pour que le tag @user fonctionne
        }, { quoted: m }); // Utilisation de 'm' si 'qtext2' n'est pas défini

    } catch (err) {
        console.error(err);
        await DybyTechInc.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        await DybyTechInc.sendMessage(m.chat, { text: "❌ An error occurred: " + err.message }, { quoted: m });
    }
}
break;


case 'allmenu': 
case 'megalodon':
case 'fullmenu': 
case 'all-menu': {
    // 1. Réaction au message
    await DybyTechInc.sendMessage(m.chat, { react: { text: "🪐", key: m.key } });

    // 2. Définition du texte du menu
    // On s'assure que sender existe, sinon on prend l'ID du message
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐀𝐈 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴀɪ
├➩ ɢᴘᴛ
├➩ ɢᴘᴛ4
├➩ ɢᴘᴛ5
├➩ ғʟᴜx
├➩ ᴘɪxᴀʀᴛ
├➩ ᴍᴇᴛᴀᴀɪ
├➩ ᴄᴏᴅᴇᴀɪ
├➩ ᴘʜᴏᴛᴏᴀɪ
├➩ sᴛᴏʀʏᴀɪ
┕────────────────❍

╭────────────────❏
├♲ *\`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴄʟᴏsᴇᴛɪᴍᴇ
├➩ ᴏᴘᴇɴᴛɪᴍᴇ
├➩ ᴏᴜᴛ
├➩ ᴋɪᴄᴋ
├➩ ᴅᴇᴍᴏᴛᴇᴀʟʟ
├➩ ᴀᴘᴘʀᴏᴠᴇ-ᴀʟʟ
├➩ ʀᴇᴊᴇᴄᴛ-ᴀʟʟ 
├➩ ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
├➩ ᴀᴅᴅ
├➩ ᴘʀᴏᴍᴏᴛᴇ
├➩ ᴅᴇᴍᴏᴛᴇ
├➩ ᴋɪᴄᴋᴀʟʟ
├➩ ᴛᴇᴍᴘᴀᴅᴍɪɴ
├➩ sᴇᴛɢᴘᴘ
├➩ ᴛᴀɢ
├➩ ᴄʟᴏsᴇ
├➩ ᴏᴘᴇɴ
├➩ ʟɪɴᴋɢᴄ
├➩ ʀᴇᴠᴏᴋᴇ
┕────────────────❍

╭────────────────❏
├♲ *\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴘʟᴀʏ
├➩ ʏᴛᴍᴘ3
├➩ ʏᴛᴍᴘ4
├➩ ᴅᴏᴡɴʟᴏᴀᴅ
├➩ ɪɴsᴛᴀɢʀᴀᴍ 
├➩ ᴘʟᴀʏᴅᴏᴄ
├➩ ɢɪᴛᴄʟᴏɴᴇ
├➩ ᴠɪᴅᴇᴏᴅᴏᴄ
├➩ ɪɴsᴛᴀɢʀᴀᴍ
├➩ ғᴀᴄᴇʙᴏᴏᴋ
├➩ ᴍᴇᴅɪᴀғɪʀᴇ
├➩ ᴛɪᴋᴛᴏᴋ
┕────────────────❍

╭────────────────❏
├♲ *\`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴊᴏɪɴ
├➩ sʜᴜᴛᴅᴏᴡɴ
├➩ ʀᴇsᴛᴀʀᴛ
├➩ ᴜɴʙʟᴏᴄᴋ
├➩ ʙʟᴏᴄᴋ
├➩ sᴀᴠᴇsᴛᴀᴛᴜs
├➩ ʟɪsᴛʙʟᴏᴄᴋ
├➩ ʙʀᴏᴀᴅᴄᴀsᴛ
├➩ ᴀᴅᴅᴏᴡɴᴇʀ
├➩ ᴅᴇʟᴏᴡɴᴇʀ
├➩ ɴᴇᴡɢᴄ
├➩ ᴜɴʙʟᴏᴄᴋ
├➩ ᴅᴇʟᴇᴛᴇ
├➩ ᴍᴏᴅᴇ [ᴘᴜʙʟɪᴄ/sᴇʟғ]
├➩ ᴀᴜᴛᴏʀᴇᴀᴄᴛ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏsᴡᴠɪᴇᴡ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏᴛʏᴘɪɴɢ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏʀᴇᴄᴏʀᴅᴛʏᴘ [ᴏɴ/ᴏғғ]
┕────────────────❍

╭────────────────❏
├♲ *\`𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ʀᴇᴍɪɴɪ
├➩ sᴍᴇᴍᴇ
├➩ sᴛɪᴄᴋᴇʀ
├➩ ᴛᴏɪᴍᴀɢᴇ
├➩ ᴡᴀɴᴛᴇᴅ
├➩ ᴡᴀsᴛᴇᴅ
├➩ ʜᴅᴠɪᴅ
├➩ ᴛᴏᴠɪᴅᴇᴏ
├➩ ᴛᴏᴀᴜᴅɪᴏ
├➩ ᴛᴏᴍᴘ3
├➩ ᴛᴏᴠɴ
├➩ ᴛᴏᴠɪᴇᴡᴏɴᴄᴇ
├➩ ᴇᴍᴏᴊɪᴍɪx
├➩ ᴠᴠ
├➩ ᴛᴏᴜʀʟ2
├➩ ᴜʀʟ
┕────────────────❍

╭────────────────❏
├♲ *\`𝐄𝐏𝐇𝐎𝐓𝐎 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ɢʟɪᴛᴄʜᴛᴇxᴛ
├➩ ᴡʀɪᴛᴇᴛᴇxᴛ
├➩ ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
├➩ ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ
├➩ ᴘɪxᴇʟɢʟɪᴛᴄʜ
├➩ ɴᴇᴏɴɢʟɪᴛᴄʜ
├➩ ғʟᴀɢᴛᴇxᴛ
├➩ ғʟᴀɢ3ᴅᴛᴇxᴛ
├➩ ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
├➩ ʙʟᴀᴄᴋᴘɪɴᴋsᴛʏʟᴇ
├➩ ɢʟᴏᴡɪɴɢᴛᴇxᴛ
├➩ ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ
├➩ ʟᴏɢᴏᴍᴀᴋᴇʀ
├➩ ᴄᴀʀᴛᴏᴏɴsᴛʏʟᴇ
├➩ ᴘᴀᴘᴇʀᴄᴜᴛsᴛʏʟᴇ
├➩ ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
├➩ ᴇғғᴇᴄᴛᴄʟᴏᴜᴅs
├➩ ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
├➩ ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
├➩ sᴜᴍᴍᴇʀʙᴇᴀᴄʜ
├➩ ʟᴜxᴜʀʏɢᴏʟᴅ
├➩ ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
├➩ sᴀɴᴅsᴜᴍᴍᴇʀ
├➩ ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
├➩ sᴛʏʟᴇ1917
├➩ ᴍᴀᴋɪɴɢɴᴇᴏɴ
├➩ ʀᴏʏᴀʟᴛᴇxᴛ
├➩ ғʀᴇᴇᴄʀᴇᴀᴛᴇ
├➩ ɢᴀʟᴀxʏsᴛʏʟᴇ
├➩ ʟɪɢʜᴛᴇғғᴇᴄᴛs
┕────────────────❍

╭────────────────❏
├♲ *\`𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ sᴄʀɪᴘᴛ
├➩ ᴜᴘᴛɪᴍᴇ
├➩ ɢᴇᴛʙᴏᴛ
├➩ ᴏᴡɴᴇʀ
├➩ ᴀʟɪᴠᴇ
├➩ ᴍᴇɴᴜ
┕────────────────❍

╭────────────────❏
├♲ *\`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ɪᴍɢ
├➩ ɢᴇᴛᴘᴘ
├➩ sᴄʀᴇᴇɴsʜᴏᴛ
├➩ ɴᴇᴡsʟᴇᴛᴛᴇʀ
├➩ ɢɪᴛʜᴜʙ
├➩ ɴᴘᴍ
┕────────────────❍

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈
`;

    
    // 3. Envoi du message avec image et contextInfo
    await DybyTechInc.sendMessage(
        m.chat,
        {
            image: { url: global.botimg },
            caption: menuText,
            mentions: [m.sender], // Ajouté pour que le @tag fonctionne dans le texte
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363407328298020@newsletter',
                    newsletterName: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆',
                    serverMessageId: 143
                }
            }
        },
        { quoted: m } // Utilisation de 'm' par défaut si 'qtext2' n'est pas défini
    );
    break;
}


case 'download-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '🎶', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴘʟᴀʏ
├➩ ʏᴛᴍᴘ3
├➩ ʏᴛᴍᴘ4
├➩ ᴅᴏᴡɴʟᴏᴀᴅ
├➩ ɪɴsᴛᴀɢʀᴀᴍ 
├➩ ᴘʟᴀʏᴅᴏᴄ
├➩ ɢɪᴛᴄʟᴏɴᴇ
├➩ ᴠɪᴅᴇᴏᴅᴏᴄ
├➩ ɪɴsᴛᴀɢʀᴀᴍ
├➩ ғᴀᴄᴇʙᴏᴏᴋ
├➩ ᴍᴇᴅɪᴀғɪʀᴇ
├➩ ᴛɪᴋᴛᴏᴋ
┕────────────────❍
`
sreply(menuText)
        }
 break
 
case 'owner-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '🌟', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴊᴏɪɴ
├➩ sʜᴜᴛᴅᴏᴡɴ
├➩ ʀᴇsᴛᴀʀᴛ
├➩ ᴜɴʙʟᴏᴄᴋ
├➩ ʙʟᴏᴄᴋ
├➩ sᴀᴠᴇsᴛᴀᴛᴜs
├➩ ʟɪsᴛʙʟᴏᴄᴋ
├➩ ʙʀᴏᴀᴅᴄᴀsᴛ
├➩ ᴀᴅᴅᴏᴡɴᴇʀ
├➩ ᴅᴇʟᴏᴡɴᴇʀ
├➩ ɴᴇᴡɢᴄ
├➩ ᴜɴʙʟᴏᴄᴋ
├➩ ᴅᴇʟᴇᴛᴇ
├➩ ᴍᴏᴅᴇ [ᴘᴜʙʟɪᴄ/sᴇʟғ]
├➩ ᴀᴜᴛᴏʀᴇᴀᴄᴛ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏsᴡᴠɪᴇᴡ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏᴛʏᴘɪɴɢ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ [ᴏɴ/ᴏғғ]
├➩ ᴀᴜᴛᴏʀᴇᴄᴏʀᴅᴛʏᴘ [ᴏɴ/ᴏғғ]
┕────────────────❍
`
sreply(menuText)
        }
 break
 
 
 case 'tools-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '⚙️', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ɪᴍɢ
├➩ ɢᴇᴛᴘᴘ
├➩ sᴄʀᴇᴇɴsʜᴏᴛ
├➩ ᴠᴠ
├➩ sᴀᴠᴇ
├➩ ɴᴇᴡsʟᴇᴛᴛᴇʀ
├➩ ɢɪᴛʜᴜʙ
├➩ ɴᴘᴍ
┕────────────────❍
`
sreply(menuText)
        }
 break
 
 
 case 'ai-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '🤖', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐀𝐈 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴀɪ
├➩ ɢᴘᴛ
├➩ ɢᴘᴛ4
├➩ ɢᴘᴛ5
├➩ ғʟᴜx
├➩ ᴘɪxᴀʀᴛ
├➩ ᴍᴇᴛᴀᴀɪ
├➩ ᴄᴏᴅᴇᴀɪ
├➩ ᴘʜᴏᴛᴏᴀɪ
├➩ sᴛᴏʀʏᴀɪ
┕────────────────❍
`
sreply(menuText)
        }
 break
 
 case 'converter-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '🎐', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ʀᴇᴍɪɴɪ
├➩ sᴍᴇᴍᴇ
├➩ sᴛɪᴄᴋᴇʀ
├➩ ᴛᴏɪᴍᴀɢᴇ
├➩ ᴡᴀɴᴛᴇᴅ
├➩ ᴡᴀsᴛᴇᴅ
├➩ ʜᴅᴠɪᴅ
├➩ ᴛᴏᴠɪᴅᴇᴏ
├➩ ᴛᴏᴀᴜᴅɪᴏ
├➩ ᴛᴏᴍᴘ3
├➩ ᴛᴏᴠɴ
├➩ ᴛᴏᴠɪᴇᴡᴏɴᴄᴇ
├➩ ᴇᴍᴏᴊɪᴍɪx
├➩ ᴠᴠ
├➩ ᴛᴏᴜʀʟ2
├➩ ᴜʀʟ
┕────────────────❍
`
sreply(menuText)
        }
 break
 
 
 case 'main-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '🀄', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ sᴄʀɪᴘᴛ
├➩ ᴜᴘᴛɪᴍᴇ
├➩ ɢᴇᴛʙᴏᴛ
├➩ ᴏᴡɴᴇʀ
├➩ ᴀʟɪᴠᴇ
├➩ ᴍᴇɴᴜ
┕────────────────❍
`
sreply(menuText)
        }
 break
 
 case 'ephoto-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '🖼', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐄𝐏𝐇𝐎𝐓𝐎 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ɢʟɪᴛᴄʜᴛᴇxᴛ
├➩ ᴡʀɪᴛᴇᴛᴇxᴛ
├➩ ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
├➩ ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ
├➩ ᴘɪxᴇʟɢʟɪᴛᴄʜ
├➩ ɴᴇᴏɴɢʟɪᴛᴄʜ
├➩ ғʟᴀɢᴛᴇxᴛ
├➩ ғʟᴀɢ3ᴅᴛᴇxᴛ
├➩ ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
├➩ ʙʟᴀᴄᴋᴘɪɴᴋsᴛʏʟᴇ
├➩ ɢʟᴏᴡɪɴɢᴛᴇxᴛ
├➩ ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ
├➩ ʟᴏɢᴏᴍᴀᴋᴇʀ
├➩ ᴄᴀʀᴛᴏᴏɴsᴛʏʟᴇ
├➩ ᴘᴀᴘᴇʀᴄᴜᴛsᴛʏʟᴇ
├➩ ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
├➩ ᴇғғᴇᴄᴛᴄʟᴏᴜᴅs
├➩ ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
├➩ ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
├➩ sᴜᴍᴍᴇʀʙᴇᴀᴄʜ
├➩ ʟᴜxᴜʀʏɢᴏʟᴅ
├➩ ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
├➩ sᴀɴᴅsᴜᴍᴍᴇʀ
├➩ ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
├➩ sᴛʏʟᴇ1917
├➩ ᴍᴀᴋɪɴɢɴᴇᴏɴ
├➩ ʀᴏʏᴀʟᴛᴇxᴛ
├➩ ғʀᴇᴇᴄʀᴇᴀᴛᴇ
├➩ ɢᴀʟᴀxʏsᴛʏʟᴇ
├➩ ʟɪɢʜᴛᴇғғᴇᴄᴛs
┕────────────────❍
`
sreply(menuText)
        }
 break
 
 case 'group-menu': {
await DybyTechInc.sendMessage(m.chat, {react: {text: '👥️', key: m.key}})
    
    const userTag = (m.sender || m.key.participant || m.key.remoteJid).split("@")[0];
    const used = process.memoryUsage();
    const cpus = os.cpus()[0];
    let uptime = runtime(process.uptime());
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const platform = os.platform();
    const date = new Date();
const readmore = String.fromCharCode(8206).repeat(4001) // this forces "read more"

    const menuText = `
╭─────────────────⊷
│♲ *ʙᴏᴛ ɴᴀᴍᴇ* : 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│♲ *ᴜsᴇʀ* : @${userTag}
│♲ *ᴄᴏᴍᴍᴀɴᴅ* : ${totalCases}
│♲ *ʙᴀɪʟᴇʏs* : _ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ_
│♲ *ᴛʏᴘᴇ* : ɴᴏᴅᴇᴊs
│♲ *ᴘʀᴇғɪx* : « ${prefix} »
│♲ *ᴠᴇʀsɪᴏɴ* : \`2.0.0\`
│♲ *ᴍᴏᴅᴇ* : ${DybyTechInc.public ? '*_ᴘᴜʙʟɪᴄ_*' : '*_sᴇʟғ_*'}
│♲ *ᴅᴇᴠ* : \`ᴅᴇᴠ ᴅʏʙʏ\`
╰──────────────────⊷

╭────────────────❏
├♲ *\`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\`* 
├────────────────❏
├➩ ᴄʟᴏsᴇᴛɪᴍᴇ
├➩ ᴏᴘᴇɴᴛɪᴍᴇ
├➩ ᴏᴜᴛ
├➩ ᴋɪᴄᴋ
├➩ ᴅᴇᴍᴏᴛᴇᴀʟʟ
├➩ ᴀᴘᴘʀᴏᴠᴇ-ᴀʟʟ
├➩ ʀᴇᴊᴇᴄᴛ-ᴀʟʟ 
├➩ ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
├➩ ᴀᴅᴅ
├➩ ᴘʀᴏᴍᴏᴛᴇ
├➩ ᴅᴇᴍᴏᴛᴇ
├➩ ᴋɪᴄᴋᴀʟʟ
├➩ ᴛᴇᴍᴘᴀᴅᴍɪɴ
├➩ sᴇᴛɢᴘᴘ
├➩ ᴛᴀɢ
├➩ ᴄʟᴏsᴇ
├➩ ᴏᴘᴇɴ
├➩ ʟɪɴᴋɢᴄ
├➩ ʀᴇᴠᴏᴋᴇ
┕────────────────❍
`
sreply(menuText)
        }
 break
 
 
case 'out': {
    if (!m.isGroup) return dybyreply('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.');
    if (!isBotAdmins) return dybyreply('ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
    if (!isGroupOwner) return dybyreply('ᴏɴʟʏ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
    
    const countryCode = args[0]; // Get the country code from the command arguments
    if (!countryCode || !countryCode.startsWith('+')) return dybyreply('ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ, e.g., +234.');

    let kickedMembers = 0;

    for (let participant of participants) {
        const number = participant.id.split('@')[0]; // Extract the participant's number
        if (number.startsWith(countryCode.replace('+', '')) && participant.id !== botNumber && participant.id !== groupOwner) {
            try {
                await DybyTechInc.groupParticipantsUpdate(from, [participant.id], 'remove');
                kickedMembers++;
                await delay(2000); // Add a delay of 2 seconds between each removal
            } catch (err) {
                console.error(`Failed to remove ${participant.id}:`, err);
            }
        }
    }

    if (kickedMembers > 0) {
        dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ ${kickedMembers} ᴍᴇᴍʙᴇʀs ᴡɪᴛʜ ɴᴜᴍʙᴇʀs sᴛᴀʀᴛɪɴɢ ᴡɪᴛʜ ${countryCode}.`);
    } else {
        dybyreply(`ɴᴏ ᴍᴇᴍʙᴇʀs ғᴏᴜɴᴅ ᴡɪᴛʜ ɴᴜᴍʙᴇʀs sᴛᴀʀᴛɪɴɢ ᴡɪᴛʜ ${countryCode}.`);
    }
    break;
}

 
            case 'autobio':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʙɪᴏ ᴛᴏ ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʙɪᴏ ᴛᴏ ${q}`)
                }
                break
            
            
            case 'block': {
    if (!isCreator) return dybyreply(mess.owner); // Only bot owner can use this command

    try {
        // Determine the target user
        let blockUser;
        if (m.quoted) {
            blockUser = m.quoted.sender;
        } else if (m.mentionedJid && m.mentionedJid.length > 0) {
            blockUser = m.mentionedJid[0];
        } else if (q && q.includes('@')) {
            blockUser = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        } else if (m.chat.endsWith('@s.whatsapp.net')) {
            blockUser = m.chat;
        } else {
            return dybyreply('⚠️ ᴛᴀɢ ᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴜsᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʙʟᴏᴄᴋ.');
        }

        await DybyTechInc.updateBlockStatus(blockUser, 'block');
        dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ʙʟᴏᴄᴋᴇᴅ *${blockUser}*`);
    } catch (err) {
        console.error(err);
        dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ʙʟᴏᴄᴋ ᴛʜᴇ ᴜsᴇʀ. ᴍᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ʜᴀs ᴘᴇʀᴍɪssɪᴏɴ.');
    }
    break;
}

case 'unblock': {
    if (!isCreator) return dybyreply(mess.owner); // Only bot owner can use this command

    try {
        // Determine the target user
        let unblockUser;
        if (m.quoted) {
            unblockUser = m.quoted.sender;
        } else if (m.mentionedJid && m.mentionedJid.length > 0) {
            unblockUser = m.mentionedJid[0];
        } else if (q && q.includes('@')) {
            unblockUser = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        } else if (m.chat.endsWith('@s.whatsapp.net')) {
            unblockUser = m.chat;
        } else {
            return dybyreply('⚠️ ᴛᴀɢ ᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴜsᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴜɴʙʟᴏᴄᴋ.');
        }

        await DybyTechInc.updateBlockStatus(unblockUser, 'unblock');
        dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ᴜɴʙʟᴏᴄᴋᴇᴅ *${unblockUser}*`);
    } catch (err) {
        console.error(err);
        dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ᴜɴʙʟᴏᴄᴋ ᴛʜᴇ ᴜsᴇʀ. ᴍᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ʜᴀs ᴘᴇʀᴍɪssɪᴏɴ.');
    }
    break;
}
            
            case 'dessources':
                if (!isCreator) return dybyreply(mess.owner)
                if (m.isGroup) return dybyreply(mess.private)
                dybyreply(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await DybyTechInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'ᴍᴇɢᴀʟᴏᴅᴏɴ.zip'
                }, {
                    quoted: qtext2
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return dybyreply(mess.owner)
                if (!text) return dybyreply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await DybyTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                dybyreply(`sᴇɴᴅ ʙʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘ ᴄʜᴀᴛ, ᴇɴᴅ ᴛɪᴍᴇ ${anu.length * 1.5} sᴇᴄᴏɴᴅ`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    DybyTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'ʙʀᴏᴀᴅᴄᴀsᴛ ʙʏ ᴏᴡɴᴇʀ',
                                body: `sᴇɴᴛ ${i.length} ɢʀᴏᴜᴘ`,
                                thumbnailUrl: 'https://files.catbox.moe/nicgu4.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴛ ʙʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘ`)
            }
            break
                
            
case 'closetime': {
    if (!m.isGroup) return dybyreply(mess.group)
    if (!isAdmins && !isCreator) return dybyreply(mess.admin)
    if (!isBotAdmins) return dybyreply(mess.botAdmin)

    const amount = parseInt(args[0])
    const unit = (args[1] || '').toLowerCase()

    if (isNaN(amount) || amount <= 0) {
        return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ\n\n*ᴜɴɪᴛs:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ`)
    }

    let timer
    switch (unit) {
        case 'second':
        case 'seconds':
        case 'detik':
            timer = amount * 1000
            break
        case 'minute':
        case 'minutes':
        case 'menit':
            timer = amount * 60000
            break
        case 'hour':
        case 'hours':
        case 'jam':
            timer = amount * 3600000
            break
        case 'day':
        case 'days':
        case 'hari':
            timer = amount * 86400000
            break
        default:
            return dybyreply(`*ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪᴛ:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ`)
    }

    dybyreply(`⏳ *ɢʀᴏᴜᴘ ᴡɪʟʟ ʙᴇ ᴄʟᴏsᴇᴅ ɪɴ ${amount} ${unit}*...`)

    setTimeout(async () => {
        try {
            await DybyTechInc.groupSettingUpdate(m.chat, 'announcement')
            dybyreply(`🔒 *ɢʀᴏᴜᴘ ᴄʟᴏsᴇᴅ*\nɴᴏᴡ ᴏɴʟʏ ᴀᴅᴍɪɴs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs.`)
        } catch (err) {
            console.error(err)
            dybyreply('❌ *ғᴀɪʟᴇᴅ ᴛᴏ ᴄʟᴏsᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴅᴜᴇ ᴛᴏ ᴀɴ ᴇʀʀᴏʀ.*')
        }
    }, timer)
}
break

case 'opentime': {
    if (!m.isGroup) return dybyreply(mess.group)
    if (!isAdmins && !isCreator) return dybyreply(mess.admin)
    if (!isBotAdmins) return dybyreply(mess.botAdmin)

    const amount = parseInt(args[0])
    const unit = (args[1] || '').toLowerCase()

    if (isNaN(amount) || amount <= 0) {
        return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ\n\n*ᴜɴɪᴛs:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ`)
    }

    let timer
    switch (unit) {
        case 'second':
        case 'seconds':
        case 'detik':
            timer = amount * 1000
            break
        case 'minute':
        case 'minutes':
        case 'menit':
            timer = amount * 60000
            break
        case 'hour':
        case 'hours':
        case 'jam':
            timer = amount * 3600000
            break
        case 'day':
        case 'days':
        case 'hari':
            timer = amount * 86400000
            break
        default:
            return dybyreply(`*ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪᴛ:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ`)
    }

    dybyreply(`⏳ *ɢʀᴏᴜᴘ ᴡɪʟʟ ʙᴇ ᴏᴘᴇɴᴇᴅ ɪɴ ${amount} ${unit}*...`)

    setTimeout(async () => {
        try {
            await DybyTechInc.groupSettingUpdate(m.chat, 'not_announcement')
            dybyreply(`🔓 *ɢʀᴏᴜᴘ ᴏᴘᴇɴᴇᴅ*\nɴᴏᴡ ᴍᴇᴍʙᴇʀs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs.`)
        } catch (err) {
            console.error(err)
            dybyreply('❌ *ғᴀɪʟᴇᴅ ᴛᴏ ᴏᴘᴇɴ ᴛʜᴇ ɢʀᴏᴜᴘ ᴅᴜᴇ ᴛᴏ ᴀɴ ᴇʀʀᴏʀ.*')
        }
    }, timer)
}
break
            case 'kick': case 'remove': {
    if (!m.isGroup) return dybyreply('❌ *ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.*')
    if (!isBotAdmins) return dybyreply('⚠️ *ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.*')
    if (!isGroupOwner && !isCreator) return dybyreply('🚫 *ᴏɴʟʏ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.*')

    if (!m.mentionedJid[0] && !m.quoted && !args[0]) {
        return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} @user\nᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ\nᴏʀ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} +234567890123`)
    }

    // 📱 Get the user JID (from mention, reply, or number)
    let userId = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : null)

    if (!userId && args[0]) {
        const phoneNumber = args[0].replace(/[^0-9]/g, '') // remove non-digits
        if (phoneNumber.length < 7 || phoneNumber.length > 15) {
            return dybyreply('❌ *ɪɴᴠᴀʟɪᴅ ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ!*\nᴘʟᴇᴀsᴇ ᴜsᴇ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ (ᴇx: +234567890123)')
        }
        userId = `${phoneNumber}@s.whatsapp.net`
    }

    if (!userId) return dybyreply('❌ *ɪɴᴠᴀʟɪᴅ ᴜsᴇʀ!* ᴘʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀ ᴜsᴇʀ, ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ, ᴏʀ ᴘʀᴏᴠɪᴅᴇ ᴀ ɴᴜᴍʙᴇʀ.')

    if (userId === DybyTechInc.user.id) return dybyreply('❌ *ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴋɪᴄᴋ ᴛʜᴇ ʙᴏᴛ!*')
    if (userId === groupOwner) return dybyreply('❌ *ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴋɪᴄᴋ ᴛʜᴇ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀ!*')

    const target = groupMetadata.participants.find(p => p.id === userId)
    if (!target) {
        const userNumber = userId.split('@')[0]
        return dybyreply(`❌ *ᴜsᴇʀ +${userNumber} ɪs ɴᴏᴛ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ.*`, { mentions: [userId] })
    }

    if (target.admin) return dybyreply('❌ *ʏᴏᴜ ᴄᴀɴɴᴏᴛ ʀᴇᴍᴏᴠᴇ ᴀɴ ᴀᴅᴍɪɴ!*')

    try {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [userId], 'remove')
        const userNumber = userId.split('@')[0]
        await dybyreply(`✅ *sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ +${userNumber} ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ.*`, { mentions: [userId] })
        await delay(1200)
    } catch (err) {
        console.error(err)
        const userNumber = userId.split('@')[0]
        dybyreply(`❌ *ғᴀɪʟᴇᴅ ᴛᴏ ʀᴇᴍᴏᴠᴇ +${userNumber} ᴅᴜᴇ ᴛᴏ ᴀɴ ᴇʀʀᴏʀ.*`, { mentions: [userId] })
    }
}
break
            case 'add':
    if (!m.isGroup) return dybyreply(mess.group); // Check if it's a group
    if (!isAdmins && !isGroupOwner && !isCreator) return dybyreply(mess.admin); // Check if user is an admin
    if (!isBotAdmins) return dybyreply(mess.botAdmin); // Check if bot is an admin
    let userToAdd = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Extract the number
    try {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [userToAdd], 'add');
        dybyreply(`ᴜsᴇʀ ᴀᴅᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ: ${userToAdd}`);
    } catch (err) {
        console.error(err);
        dybyreply('User ᴀᴅᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.');
    }
    break;
    
// Music Download Command
case 'play2': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        // Show waiting message
        await dybyreply('🎵 Searching for your song...');

        // Using YouTube Play API
        const searchUrl = `https://apis.prexzyvilla.site/download/play?q=${encodeURIComponent(text)}`;
        const searchRes = await axios.get(searchUrl);

        if (!searchRes.data.status || !searchRes.data.data) {
            return dybyreply(`*No results found for:* ${text}`);
        }

        const songData = searchRes.data.data;
        const { title, author, duration, thumbnail, url } = songData.metadata;
        const downloadUrl = songData.download.download_url;

        // Send song info with actual thumbnail
        const infoMessage = `*ᴍᴜsɪᴄ ᴘʟᴀʏᴇʀ*\n` +
                            `🎵 *ᴛɪᴛʟᴇ:* ${title}\n` +
                            `🎤 *ᴀʀᴛɪsᴛ:* ${author}\n` +
                            `⏱️ *ᴅᴜʀᴀᴛɪᴏɴ:* ${duration}\n` +
                            `🔗 *sᴏᴜʀᴄᴇ:* ʏᴏᴜᴛᴜʙᴇ`;

        await DybyTechInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: thumbnail }
        }, { quoted: qtext2 });

        // Download and send the audio
        await DybyTechInc.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mp4',
            fileName: `${title.replace(/[^\w\s]/gi, '')}.mp3`,
            caption: `🎧 *ʜᴇʀᴇ's ʏᴏᴜʀ sᴏɴɢ:*\n${title} - ${author}`
        }, { quoted: qtext2 });

    } catch (err) {
        console.error('Error in play2:', err);
        dybyreply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

// Video Download Command
case 'video': {
    if (!text) return dybyreply(`*Example:* ${prefix + command} Wizkid Essence`);

    try {
        // Step 1: Search YouTube using yts
        const search = await yts(text);
        const video = search.videos[0];

        if (!video) {
            return dybyreply(`❌ No results found for: *${text}*`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const videoThumbnail = video.thumbnail;
        const author = video.author.name;

        // Step 2: Send search preview
        const infoMessage = 
`🎥 *ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ*

*ᴛɪᴛʟᴇ:* ${videoTitle}
*ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}

💬 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴠɪᴅᴇᴏ* ғᴏʀ ʏᴏᴜ...`;

        await DybyTechInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: videoThumbnail }
        }, { quoted: qtext2 });

        // Step 3: Fetch video download link using PrexzyVilla API
        const apiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const { data } = await axios.get(apiUrl);

        if (data.status && data.data) {
            const { downloadURL, title } = data.data;

            // Step 4: Send the video file
            await DybyTechInc.sendMessage(m.chat, {
                video: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title.replace(/[^\w\s]/gi, '')}.mp4`,
                caption: `🎬 *ʜᴇʀᴇ's ʏᴏᴜʀ ᴠɪᴅᴇᴏ:*\n${title} - ${author}`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the video. Please try again.");
        }

    } catch (error) {
        console.error("Error in video command:", error);
        dybyreply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

  case 'song':
case 'ytaudio':
case 'play': {
    await DybyTechInc.sendMessage(m.chat, { react: { text: "🎵", key: m.key } });

    try {
        const axios = require('axios');

        const q = m.message?.conversation ||
                  m.message?.extendedTextMessage?.text ||
                  m.message?.imageMessage?.caption ||
                  m.message?.videoMessage?.caption || '';

        if (!q || q.trim() === '') {
            return await DybyTechInc.sendMessage(m.chat, {
                text: `*╭─────────────────⊷*
│ 📥 *sᴏɴɢ ᴄᴏᴍᴍᴀɴᴅ*
*╰─────────────────⊷*
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

🎵 ᴜsᴀɢᴇ : ${prefix}song <query/url>
Example:
${prefix}song https://youtu.be/xxxx
${prefix}song Alan Walker faded

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
            }, { quoted: m });
        }

        await DybyTechInc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

        // Recherche vidéo
        const search = await yts(q.trim());
        if (!search?.videos?.length) throw new Error("No results found");

        const video = search.videos[0];
        const videoUrl = video.url;

        // API Hector
        const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
        const response = await axios.get(apiUrl, { timeout: 20000 });

        if (!response.data?.status || !response.data?.audio) {
            throw new Error("Audio not available");
        }

        const songData = response.data;

        const caption = `
*╭─────────────────⊷*
│ 📥 *sᴏɴɢ ᴅᴇᴛᴀɪʟs*
*╰─────────────────⊷*
│ 🎧 *ᴛɪᴛʟᴇ :* ${songData.title || video.title}
│ ⏱️ *ᴅᴜʀᴀᴛɪᴏɴ :* ${video.timestamp}
│ 👤 *ᴀʀᴛɪsᴛ :* ${video.author?.name}
│ 👀 *ᴠɪᴇᴡs :* ${video.views.toLocaleString()}
*╰─────────────────⊷*

🔗 ${videoUrl}

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`.trim();

        const sessionId = `${Date.now()}`;

        const buttons = [
            {
                buttonId: `song-audio-${sessionId}`,
                buttonText: { displayText: "➪ ᴀᴜᴅɪᴏ (ᴘʟᴀʏ)" },
                type: 1
            },
            {
                buttonId: `song-doc-${sessionId}`,
                buttonText: { displayText: "➪ ᴅᴏᴄᴜᴍᴇɴᴛ" },
                type: 1
            }
        ];

        const sentMsg = await DybyTechInc.sendMessage(m.chat, {
            image: { url: songData.thumbnail || video.thumbnail },
            caption: caption,
            footer: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
            buttons: buttons,
            headerType: 1
        }, { quoted: m });

        const handler = async (chatUpdate) => {
            const msgData = chatUpdate?.messages[0];
            if (!msgData?.message?.buttonsResponseMessage) return;

            const buttonId = msgData.message.buttonsResponseMessage.selectedButtonId;
            const isReply = msgData.message.buttonsResponseMessage.contextInfo?.stanzaId === sentMsg.key.id;

            if (isReply && buttonId.includes(sessionId)) {
                DybyTechInc.ev.off('messages.upsert', handler);

                await DybyTechInc.sendMessage(m.chat, { react: { text: "⏳", key: msgData.key } });

                try {
                    const audioRes = await axios.get(songData.audio, {
                        responseType: 'arraybuffer',
                        timeout: 30000
                    });

                    const buffer = Buffer.from(audioRes.data);
                    const fileName = `${video.title.replace(/[<>:"\/\\|?*]+/g, '')}.mp3`;

                    if (buttonId.startsWith(`song-audio-`)) {
                        await DybyTechInc.sendMessage(m.chat, {
                            audio: buffer,
                            mimetype: 'audio/mpeg',
                            fileName: fileName,
                            ptt: false
                        }, { quoted: msgData });
                    } else {
                        await DybyTechInc.sendMessage(m.chat, {
                            document: buffer,
                            mimetype: 'audio/mpeg',
                            fileName: fileName
                        }, { quoted: msgData });
                    }

                    await DybyTechInc.sendMessage(m.chat, { react: { text: "✅", key: msgData.key } });

                } catch (err) {
                    await DybyTechInc.sendMessage(m.chat, { react: { text: "❌", key: msgData.key } });
                }
            }
        };

        DybyTechInc.ev.on('messages.upsert', handler);

        setTimeout(() => {
            DybyTechInc.ev.off('messages.upsert', handler);
        }, 120000);

    } catch (error) {
        console.error(error);

        await DybyTechInc.sendMessage(m.chat, { react: { text: "❌", key: m.key } });

        await DybyTechInc.sendMessage(m.chat, {
            text: `*╭─────────────────⊷*
│ 📥 *sᴏɴɢ ᴇʀʀᴏʀ*
*╰─────────────────⊷*
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

❎ ${error.message}

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
        }, { quoted: m });
    }
}
break;      
        

// Text to PDF Command

case 'playdoc': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        const query = text.trim();
        dybyreply('🔍 Searching for your audio file...');

        
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return dybyreply(`❌ No results found for "${query}".`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const thumbnail = video.thumbnail;

        // Step 2: Send search preview
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎶 *ᴀᴜᴅɪᴏ ғɪʟᴇ ғᴏᴜɴᴅ* 🎶\n\n` +
                     `🎵 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                     `🔗 *ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}\n\n` +
                     `📁 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴀᴜᴅɪᴏ ғɪʟᴇ* ғᴏʀ ʏᴏᴜ...`
        }, { quoted: qtext2 });

        // Step 3: Fetch audio document download link using PrexzyVilla API
        const audioApiUrl = `https://apis.prexzyvilla.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const audioResponse = await axios.get(audioApiUrl);

        if (audioResponse.data.status && audioResponse.data.data) {
            const { downloadURL, title } = audioResponse.data.data;

            // Step 4: Send the audio file as a document
            await DybyTechInc.sendMessage(m.chat, {
                document: { url: downloadURL },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: `📁 *ᴀᴜᴅɪᴏ ғɪʟᴇ:* ${title}.mp3`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the audio file. Try again.");
        }

    } catch (err) {
        console.error("Error in playdoc command:", err);
        dybyreply("❌ An error occurred while processing your request.");
    }
    break;
}

case 'videodoc': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        const query = text.trim();
        dybyreply('🔍 sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ʏᴏᴜʀ ᴠɪᴅᴇᴏ ғɪʟᴇ...');

        // Step 1: Search YouTube using yts
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return dybyreply(`❌ No results found for "${query}".`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const thumbnail = video.thumbnail;

        // Step 2: Send search preview
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎬 *ᴠɪᴅᴇᴏ ғɪʟᴇ ғᴏᴜɴᴅ* 🎬\n\n` +
                     `🎥 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                     `🔗 *ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}\n\n` +
                     `📁 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴠɪᴅᴇᴏ ғɪʟᴇ* ғᴏʀ ʏᴏᴜ...`
        }, { quoted: qtext2 });

        // Step 3: Fetch video document download link using PrexzyVilla API
        const videoApiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const videoResponse = await axios.get(videoApiUrl);

        if (videoResponse.data.status && videoResponse.data.data) {
            const { downloadURL, title } = videoResponse.data.data;

            // Step 4: Send the video file as a document
            await DybyTechInc.sendMessage(m.chat, {
                document: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title}.mp4`,
                caption: `📁 *ᴠɪᴅᴇᴏ ғɪʟᴇ:* ${title}.mp4`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the video file. Try again.");
        }

    } catch (err) {
        console.error("Error in videodoc command:", err);
        dybyreply("❌ An error occurred while processing your request.");
    }
    break;
}
  

                /*
            case 'autoread':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`ᴇxᴀᴍᴘʟᴇ ${prefix + command} ᴏɴ/ᴏғғ`)
                if (q === 'on') {
                    autoread = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                }
                break
                */
                case 'autotyping':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} ᴏɴ/ᴏғғ`)
                if (q === 'on') {
                    autoTyping = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                }
                break
                
               
case "autoviewstatus": case "autosview": case "autoview": {
   if (!isCreator) 
  return dybyreply(mess.owner);
    if (!args[0]) return dybyreply("ᴜsᴀɢᴇ: ᴀᴜᴛᴏᴠɪᴇᴡsᴛᴀᴛᴜs ᴏɴ/ᴏғғ");
    if (args[0].toLowerCase() === "on") {
        setSetting(m.sender, "autoViewStatus", true);
        dybyreply(`ᴀᴜᴛᴏ ᴠɪᴇᴡ sᴛᴀᴛᴜs ɪs ɴᴏᴡ *ᴏɴ* ✅✅`);
    } else if (args[0].toLowerCase() === "off") {
        setSetting(m.sender, "autoViewStatus", false);
        dybyreply("ᴀᴜᴛᴏ ᴠɪᴇᴡ sᴛᴀᴛᴜs ɪs ɴᴏᴡ *ᴏғғ* ❌");
    } else dybyreply("ᴜsᴀɢᴇ: ᴀᴜᴛᴏᴠɪᴇᴡsᴛᴀᴛᴜs ᴏɴ/ᴏғғ");
}
break;


                
                case 'autorecording':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ ᴛᴏ ${q}`)
                }
                break
                
                case 'autorecordtyp':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴀɴᴅ ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴀɴᴅ ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                }
                break
                


case 'listblock': {
    if (!isCreator) return dybyreply(mess.owner);
    let block = await DybyTechInc.fetchBlocklist();
    dybyreply('List ʙʟᴏᴄᴋ :\n\n' + `ᴛᴏᴛᴀʟ : ${block == undefined ? '*0* ʙʟᴏᴄᴋᴇᴅ' : '*' + block.length + '* Blocked'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`);
}
break;


case 'smeme': {
    let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`;
    if (!/image/.test(mime)) return dybyreply(respond);
    if (!text) return dybyreply(respond);
    try {
        let atas = text.split('|')[0] ? text.split('|')[0] : '-';
        let bawah = text.split('|')[1] ? text.split('|')[1] : '-';
        let dwnld = await DybyTechInc.downloadAndSaveMediaMessage(qmsg);
        let fatGans = await TelegraPH(dwnld);
        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
        let FaTiH = await DybyTechInc.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(dwnld);
    } catch (e) {
        console.error(e);
    }
}
break;


case 'delete': case 'del': case 'd': {
    let key = {};
    try {
        key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid;
        key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe;
        key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id;
        key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant;
    } catch (e) {
        console.error(e);
    }
    DybyTechInc.sendMessage(m.chat, { delete: key });
}
break;

case 'leavegc': case 'left': {
    if (!isCreator) return dybyreply('`ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ`');
    await DybyTechInc.groupLeave(m.chat);
    await dybyreply('`Done!`');
}
break;

case 'tagall': {
    if (!m.isGroup) return dybyreply(mess.group);
    if (!isAdmins && !isCreator) return dybyreply(mess.admin);

    let teks = `〘      *ᴛᴀɢ ᴀʟʟ*     〙
 •• *ᴍᴇssᴀɢᴇ : ${q ? q : 'empty'}* ••\n\n`;

    for (let mem of participants) {
        teks += `☌  @${mem.id.split('@')[0]}\n`;
    }

    DybyTechInc.sendMessage(
        m.chat,
        { text: teks, mentions: participants.map(a => a.id) },
        { quoted: qtext2 }
    );
}
break;

case 'mute': case 'close': {
    try {
        if (!m.isGroup) return dybyreply('🚫 ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs ᴏɴʟʏ.');
        if (!isAdmins && !isCreator) return dybyreply('🚫 ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴏʀ ᴏᴡɴᴇʀs ᴄᴀɴ ᴅᴏ ᴛʜɪs.');
        if (!isBotAdmins) return dybyreply('❗ ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴘᴇʀᴍɪssɪᴏɴs.');

        await DybyTechInc.groupSettingUpdate(m.chat, 'announcement');

        dybyreply(`🔇 ɢʀᴏᴜᴘ ɪs ɴᴏᴡ ᴍᴜᴛᴇᴅ! ᴏɴʟʏ ᴀᴅᴍɪɴs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs.`);
    } catch (err) {
        console.error('Error muting group:', err);
        dybyreply('❌ ᴇʀʀᴏʀ ᴡʜɪʟᴇ ᴍᴜᴛɪɴɢ ᴛʜᴇ ɢʀᴏᴜᴘ.');
    }
}
break;


case 'unmute': case 'open': {
    try {
        if (!m.isGroup) return dybyreply('🚫 ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs ᴏɴʟʏ.');
        if (!isAdmins && !isCreator) return dybyreply('🚫 ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴏʀ ᴏᴡɴᴇʀs ᴄᴀɴ ᴅᴏ ᴛʜɪs.');
        if (!isBotAdmins) return dybyreply('❗ ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴘᴇʀᴍɪssɪᴏɴs.');

        await DybyTechInc.groupSettingUpdate(m.chat, 'not_announcement');

        dybyreply(`🔊 ɢʀᴏᴜᴘ ɪs ᴜɴᴍᴜᴛᴇᴅ! ᴀʟʟ ᴍᴇᴍʙᴇʀs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs ᴀɢᴀɪɴ.`);
    } catch (err) {
        console.error('Error unmuting group:', err);
        dybyreply('❌ ᴇʀʀᴏʀ ᴡʜɪʟᴇ ᴜɴᴍᴜᴛɪɴɢ ᴛʜᴇ ɢʀᴏᴜᴘ.');
    }
}
break;

case 'revoke':
case 'resetlink': {
    try {
        if (!m.isGroup) return dybyreply('🚫 ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs ᴏɴʟʏ.');
        if (!isAdmins && !isCreator) return dybyreply('🚫 ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴏʀ ᴏᴡɴᴇʀs ᴄᴀɴ ᴅᴏ ᴛʜɪs.');
        if (!isBotAdmins) return dybyreply('❗ ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ʀᴇsᴇᴛ ᴛʜᴇ ɪɴᴠɪᴛᴇ ʟɪɴᴋ.');

        await DybyTechInc.groupRevokeInvite(m.chat);

        dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟ ʀᴇsᴇᴛ ғᴏʀ ɢʀᴏᴜᴘ: ${groupMetadata.subject}`);
    } catch (err) {
        console.error('Error resetting link:', err);
        dybyreply('❌ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ʀᴇsᴇᴛᴛɪɴɢ ᴛʜᴇ ɪɴᴠɪᴛᴇ ʟɪɴᴋ.');
    }
}
break;


case 'take': {
    try {
        if (!m?.quoted) return dybyreply('❗ ʀᴇᴘʟʏ ᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ!');
        const mime = m?.quoted.mimetype || '';
        if (!/webp/.test(mime)) return dybyreply('❗ ʀᴇᴘʟʏ ᴡɪᴛʜ ᴀ sᴛɪᴄᴋᴇʀ ᴏɴʟʏ!');

        const [packname, ...authorParts] = (text || '').split('|');
        const author = authorParts.join('|') || global.author;
        const img = await m.quoted.download();
        if (!img) return dybyreply('⚠️ ғᴀɪʟᴇᴅ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴛɪᴄᴋᴇʀ!');

        const stickerWithExif = await addExif(img, packname || global.packname, author);
        await DybyTechInc.sendMessage(m.chat, { sticker: stickerWithExif }, { quoted: m });
        await dybyreply('✅ sᴛɪᴄᴋᴇʀ ᴍᴇᴛᴀᴅᴀᴛᴀ ᴜᴘᴅᴀᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!');
    } catch (e) {
        console.error('Take Command Error:', e);
        dybyreply('❌ Failed to process sticker.');
    }
}
break;





case "stickers": {
    if (!text) return dybyreply(`Ex: ${prefix + command} cat`);
    const anu = await stickersearch(text);
    const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
    const randomStickers = shuffledStickers.slice(0, 10);

    if (randomStickers.length > 0) {
        for (let i = 0; i < randomStickers.length; i++) {
            try {
                await new Promise(resolve => setTimeout(resolve, i * 6000));
                await DybyTechInc.sendImageAsSticker(m?.chat, randomStickers[i], m, {
                    packname: global.packname,
                    author: global.author
                });
            } catch (error) {
                console.error(`Error sending file: ${error.message}`);
                await dybyreply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
            }
        }
    }
}
break;


case 'getpp': {
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
        return dybyreply(`ʀᴇᴘʟʏ ᴛᴏ sᴏᴍᴇᴏɴᴇ's ᴍᴇssᴀɢᴇ ᴏʀ ᴛᴀɢ ᴀ ᴜsᴇʀ ᴡɪᴛʜ ${prefix + command}`);
    }

    try {
        let targetUser = m.quoted ? m.quoted.sender : m.mentionedJid[0];
        let profilePicUrl = await DybyTechInc.profilePictureUrl(targetUser, 'image');
        let responseMessage = `Profile picture of @${targetUser.split('@')[0]}`;
        await DybyTechInc.sendMessage(m.chat, { image: { url: profilePicUrl }, caption: responseMessage, mentions: [targetUser] });
    } catch (error) {
        dybyreply("ᴄᴏᴜʟᴅɴ'ᴛ ғᴇᴛᴄʜ ᴘʀᴏғɪʟᴇ ᴘɪᴄᴛᴜʀᴇ. The ᴜsᴇʀ ᴍɪɢʜᴛ ɴᴏᴛ ʜᴀᴠᴇ ᴀ ᴘʀᴏғɪʟᴇ ᴘɪᴄᴛᴜʀᴇ ᴏʀ an ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ.");
    }
}
break;


case 'invite': {
    if (!m.isGroup) return dybyreply(`For Group Only`);
    if (!text) return dybyreply(`ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ to ɪɴᴠɪᴛᴇ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ\n\nᴇxᴀᴍᴘʟᴇ :\n*${prefix + command}* 2347043759577`);
    if (text.includes('+')) return dybyreply(`ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏɢᴇᴛʜᴇʀ ᴡɪᴛʜᴏᴜᴛ *+*`);
    if (isNaN(text)) return dybyreply(`ᴇɴᴛᴇʀ ᴏɴʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀs ᴘʟᴜs ʏᴏᴜʀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴡɪᴛʜᴏᴜᴛ sᴘᴀᴄᴇs`);
    let group = m.chat;
    let link = 'https://chat.whatsapp.com/' + await DybyTechInc.groupInviteCode(group);
    await DybyTechInc.sendMessage(text + '@s.whatsapp.net', {
        text: `≡ *𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐕𝐈𝐓𝐀𝐓𝐈𝐎𝐍*\n\nA ᴜsᴇʀ ɪɴᴠɪᴛᴇs ʏᴏᴜ ᴛᴏ ᴊᴏɪɴ ᴛʜɪs ɢʀᴏᴜᴘ \n\n${link}`,
        mentions: [m.sender]
    });
    dybyreply('`An invite link is sent to the user`');
}
break;


case 'mediafire': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} https://www.mediafire.com/file/n6tgcrktbnov1oy`);

    try {
        await DybyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });

        const apiUrl = `https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;

            await DybyTechInc.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`
            }, { quoted: qtext2 });
        } else {
            dybyreply(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {
        console.error('Error during MediaFire command:', error);
        dybyreply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'ss': case 'ssweb': case 'screenshot': {
    if (!args[0]) return dybyreply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ʟɪɴᴋ\n\n ᴇxᴀᴍᴘʟᴇ: ${prefix + command}.`);

    await DybyTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    let apiUrl = `https://api.giftedtech.co.ke/api/tools/ssweb?apikey=gifted&url=${encodeURIComponent(args[0])}`;

    try {
        await DybyTechInc.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🖼️ sᴄʀᴇᴇɴsʜᴏᴛ ᴏғ ${args[0]}` }, { quoted: qtext2 });
    } catch (error) {
        console.error(error);
        dybyreply('Failed to capture the screenshot. Please try again later.');
    }
    break;
}

case 'wanted': {
 
    if (!/image/.test(mime)) {
        return dybyreply(`*ʀᴇǫᴜᴇsᴛ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> *ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴡɪᴛʜ .ᴡᴀɴᴛᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴡᴀɴᴛᴇᴅ ᴘᴏsᴛᴇʀ*`);
    }

    
    if (!quoted) {
        return dybyreply(`*ʀᴇǫᴜᴇsᴛ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> *ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴡɪᴛʜ .ᴡᴀɴᴛᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴡᴀɴᴛᴇᴅ ᴘᴏsᴛᴇʀ*`);
    }

    try {
        
        await DybyTechInc.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });

        const mediaPath = await DybyTechInc.downloadAndSaveMediaMessage(quoted);

        // Upload the image to Imgur
        const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
        if (uploadResponse.status !== "success") {
            fs.unlinkSync(mediaPath); 
            return dybyreply(`*ᴜᴘʟᴏᴀᴅ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> ${uploadResponse.message}`);
        }

        const imageUrl = uploadResponse.fileUrl;
        
        const apiResponse = await axios.get(`https://api.popcat.xyz/wanted`, {
            params: { image: imageUrl }
        });


        if (apiResponse.status === 200) {
            const wantedImageUrl = apiResponse.request.res.responseUrl; 
            
            await DybyTechInc.sendMessage(m.chat, {
                image: { url: wantedImageUrl },
                caption: `*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ*`
            }, { quoted: qtext2 });
        } else {
            dybyreply(`*WANTED POSTER ERROR!! MESSAGE :*\n\n> Failed to create a wanted poster. Try again.`);
        }

        
        fs.unlinkSync(mediaPath);

    } catch (error) {
        console.error('Error in Wanted command:', error);
        dybyreply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }

    // React to indicate success
    await DybyTechInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
    break;
}


case 'clearchat': {
    DybyTechInc.chatModify({
        delete: true, 
        lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
    }, m.chat);
    await DybyTechInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } }, { quoted: m });
    break;
}


case 'hdvid':
case 'hdvideo':
case 'vidiohd':
case 'tohd':
case 'vidhd': {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    if (!mime) return dybyreply(`Where is the video?`);

    // React to the message
    await DybyTechInc.sendMessage(m.chat, { react: { text: `🔄`, key: m.key } });

    // Download the media file
    const media = await DybyTechInc.downloadAndSaveMediaMessage(q);

    const output = 'output.mp4'; // Output file name

    // Enhance the video resolution using ffmpeg
    exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            dybyreply('Failed to enhance video resolution.');
            fs.unlinkSync(media); // Clean up
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        // Upload the enhanced video to Catbox
        try {
            const catboxUrl = await catboxUploader(output); // ✅ Use your uploader here

            // Send the Catbox URL back to the chat
            await DybyTechInc.sendMessage(
                m.chat,
                { 
                    caption: `sᴜᴄᴄᴇsғᴜʟʟʏ ᴇɴʜᴀɴᴄᴇᴅ ʏᴏᴜʀ ᴠɪᴅᴇᴏ\n\n🌐 ${catboxUrl}\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`, 
                    video: { url: output } 
                }, 
                { quoted: qtext2 }
            );
        } catch (uploadError) {
            console.error(uploadError.message);
            dybyreply('Failed to upload the video to Catbox.');
        }

        // Clean up temporary files
        fs.unlinkSync(output);
        fs.unlinkSync(media);
    });
}
break;


case 'tourl2': case 'imgtourl2': case 'imgurl2': case 'url2': case 'geturl2': case 'upload2': {
  try {
  
    await DybyTechInc.sendMessage(from, { react: { text: "🖇", key: m.key } });

    const quotedMsg = m.quoted ? m.quoted : m;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

    if (!mimeType) {
      return dybyreply("❌ ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ, ᴠɪᴅᴇᴏ, ᴏʀ ᴀᴜᴅɪᴏ ғɪʟᴇ");
    }

    
    const mediaBuffer = await quotedMsg.download();
    const tempFilePath = path.join(os.tmpdir(), `catbox_upload_${Date.now()}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);


    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else if (mimeType.includes('image/webp')) extension = '.webp';
    else if (mimeType.includes('video')) extension = '.mp4';
    else if (mimeType.includes('audio')) extension = '.mp3';
    else extension = path.extname(quotedMsg.filename || '') || '';

    const fileName = `file${extension}`;

    
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), fileName);
    form.append('reqtype', 'fileupload');

    const response = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    if (!response.data) throw new Error("Error uploading to Catbox");

    const mediaUrl = response.data;


    try { fs.unlinkSync(tempFilePath); } catch (e) {}

    
    let mediaType = 'File';
    if (mimeType.includes('image')) mediaType = 'Image';
    else if (mimeType.includes('video')) mediaType = 'Video';
    else if (mimeType.includes('audio')) mediaType = 'Audio';


    const formatBytes = (bytes) => {
      if (!bytes) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const resultMsg =
      `*${mediaType} ᴜᴘʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*\n\n` +
      `*sɪᴢᴇ:* ${formatBytes(mediaBuffer.length)}\n` +
      `*ᴜʀʟ:* ${mediaUrl}\n\n` +
      `> © ᴜᴘʟᴏᴀᴅᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`;

    await DybyTechInc.sendMessage(m.chat, { text: resultMsg }, { quoted: qtext2 });

  } catch (e) {
    console.error(e);
    await dybyreply(`❌ Error: ${e.message || e}`);
  }
}
break;
        


case 'totalfeature':
case 'totalfitur':
case 'totalcmd':
case 'totalcommand': {
    dybyreply(`${totalfitur}`);
}
break;


case 'download':
case 'dl': {
    if (!text) return dybyreply(`❌ Please provide a valid link.\n\n*Example:* ${prefix + command} <TikTok/Facebook/Instagram/Twitter link>`);

    try {
        // Show waiting message
        await dybyreply('⏳ ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ᴅᴏᴡɴʟᴏᴀᴅ ʀᴇǫᴜᴇsᴛ...');

        // ✅ PrexzyVilla All-in-One Downloader API V3
        const apiUrl = `https://apis.prexzyvilla.site/download/aioV3?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.medias && data.data.medias.length > 0) {
            const videoInfo = data.data;

            // Prioritize no_watermark > hd_no_watermark > watermark versions
            const videoFile = videoInfo.medias.find(v => v.type === "video" && v.quality === "no_watermark") ||
                             videoInfo.medias.find(v => v.type === "video" && v.quality === "hd_no_watermark") ||
                             videoInfo.medias.find(v => v.type === "video" && v.quality === "watermark") ||
                             videoInfo.medias.find(v => v.type === "video");

            if (!videoFile || !videoFile.url) {
                return dybyreply(`❌ No downloadable video found.`);
            }

            console.log('Selected video URL:', videoFile.url);

            // Format file size for display
            const formatFileSize = (bytes) => {
                if (!bytes) return 'Unknown';
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(1024));
                return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
            };

            // Send the video
            await DybyTechInc.sendMessage(m.chat, {
                video: { url: videoFile.url },
                mimetype: 'video/mp4',
                fileName: `dyby_${Date.now()}.mp4`,
                caption: `🎥 *ᴘʟᴀᴛғᴏʀᴍ:* ${videoInfo.source || "Unknown"}\n👤 *ᴀᴜᴛʜᴏʀ:* ${videoInfo.author || "Unknown"}\n📝 *ᴛɪᴛʟᴇ:* ${videoInfo.title || "Untitled"}\n⏱ *ᴅᴜʀᴀᴛɪᴏɴ:* ${Math.round(videoInfo.duration / 1000) || 'Unknown'}s\n📦 *Size:* ${formatFileSize(videoFile.data_size) || 'Unknown'}\n🎯 *ǫᴜᴀʟɪᴛʏ:* ${videoFile.quality || 'Standard'}\n\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            dybyreply(`❌ Unable to fetch the video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Download command:', error.message);
        dybyreply(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}
case 'ig':
case 'instadl': {
    if (!text) return dybyreply(`❌ Please provide an Instagram reel/video link.\n\n*Example:* ${prefix + command} <link>`);

    try {
        // Show waiting message
        await dybyreply('⏳ Downloading Instagram video...');

        // ✅ PrexzyVilla Instagram V3 download API (recommended)
        const apiUrl = `https://api-aswin-sparky.koyeb.app/api/downloader/igdl?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.url && data.data.url.length > 0) {
            const videoInfo = data.data;

            // Find the best video URL (MP4 format)
            const videoFile = videoInfo.url.find(v => v.type === "mp4") || videoInfo.url[0];

            if (!videoFile || !videoFile.url) {
                return dybyreply(`❌ No downloadable Instagram video found.`);
            }

            // Extract filename from URL or use default
            let fileName = "Instagram_Video.mp4";
            if (videoFile.filename) {
                fileName = videoFile.filename;
            } else if (videoFile.url.includes("filename=")) {
                const filenameMatch = videoFile.url.match(/filename=([^&]+)/);
                if (filenameMatch && filenameMatch[1]) {
                    fileName = decodeURIComponent(filenameMatch[1]);
                }
            }

            await DybyTechInc.sendMessage(m.chat, {
                video: { url: videoFile.url },
                mimetype: 'video/mp4',
                fileName: fileName,
                caption: `📸 *ɪɴsᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅ*\n📝 *ᴛɪᴛʟᴇ:* ${fileName.replace('.mp4', '')}\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            dybyreply(`❌ Unable to fetch the Instagram video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Instagram download:', error.message);
        dybyreply(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}
case 'tiktok':
case 'tt':
case 'tiktokdl': {
    if (!text) return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} <ᴜʀʟ ᴏʀ ʟɪɴᴋ>`);

    try {
        // ✅ PrexzyVilla TikTok download API
        const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        let videoUrl = null;
        let title = "TikTok Video";

        // Case 1: API format with downloadsVideo (array)
        if (data?.data?.downloadsVideo && Array.isArray(data.data.downloadsVideo)) {
            const hdVideo = data.data.downloadsVideo.find(v => v.quality.toLowerCase().includes("hd"));
            videoUrl = hdVideo ? hdVideo.url : data.data.downloadsVideo[0]?.url;
            title = data.data.title || title;
        }

        // Case 2: API format with data.result.downloadUrls (array)
        else if (data?.data?.result?.downloadUrls && Array.isArray(data.data.result.downloadUrls)) {
            const mp4Video = data.data.result.downloadUrls.find(v => v.type === "mp4");
            videoUrl = mp4Video ? mp4Video.url : data.data.result.downloadUrls[0]?.url;
            title = data.data.result.title || title;
        }

        if (!videoUrl) {
            return dybyreply(`❌ No downloadable video found in response.\n\nResponse: ${JSON.stringify(data, null, 2)}`);
        }

        // ✅ Send video to user
        await DybyTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            mimetype: 'video/mp4',
            fileName: `TikTok_Video.mp4`,
            caption: `🎥 *ᴛɪᴛʟᴇ:* ${title}\n> ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ✅`
        }, { quoted: qtext2 });

    } catch (error) {
        console.error("Error in TikTok Downloader:", error.message);
        dybyreply(`*❌ An error occurred while downloading the TikTok video.*`);
    }
    break;
}

case 'fb':
case 'facebook': {
    if (!text) return dybyreply(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ғᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ/ʀᴇᴇʟ ʟɪɴᴋ.\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} <link>`);

    try {
        // Show waiting message
        await dybyreply('⏳ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ғᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ...');

        // ✅ PrexzyVilla Facebook download API
        const apiUrl = `https://apis.prexzyvilla.site/download/facebook?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.video && data.data.video.length > 0) {
            const videoInfo = data.data;
            
            // Prioritize higher quality videos (1080p > 720p > others)
            const videoFile = videoInfo.video.find(v => v.quality === "1080p") ||
                             videoInfo.video.find(v => v.quality === "720p (HD)") ||
                             videoInfo.video.find(v => v.quality.includes("720")) ||
                             videoInfo.video.find(v => v.quality.includes("HD")) ||
                             videoInfo.video[0];

            if (!videoFile || !videoFile.url) {
                return dybyreply(`❌ No downloadable Facebook video found.`);
            }

            // Check if URL is from snapcdn (needs special handling)
            let downloadUrl = videoFile.url;
            if (downloadUrl.includes('snapcdn.app')) {
                // For snapcdn URLs, we might need to handle them differently
                console.log('SnapCDN URL detected:', downloadUrl);
            }

            await DybyTechInc.sendMessage(m.chat, {
                video: { url: downloadUrl },
                mimetype: 'video/mp4',
                fileName: `Facebook_${Date.now()}.mp4`,
                caption: `📘 *ғᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅ*\n🎥 *ᴛɪᴛʟᴇ:* ${videoInfo.title || 'Facebook Video'}\n⏱ *ᴅᴜʀᴀᴛɪᴏɴ:* ${videoInfo.duration || 'Unknown'}\n🎯 *ǫᴜᴀʟɪᴛʏ:* ${videoFile.quality || 'Standard'}\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            dybyreply(`❌ Unable to fetch the Facebook video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Facebook download:', error.message);
        dybyreply(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}

   case "savestatus":
case "getstatus": {
   if (!isCreator) return dybyreply(mess.owner)
    if (!m.quoted) return dybyreply(`❌ *ʀᴇᴘʟʏ ᴛᴏ sᴛᴀᴛᴜs*\n\nʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ sᴛᴀᴛᴜs ᴛᴏ sᴀᴠᴇ ɪᴛ`);
    
    try {
        await DybyTechInc.sendMessage(m.chat, {react: {text: '💾', key: m.key}});
        
        let media;
        if (/image/.test(m.quoted.mtype)) {
            media = await m.quoted.download();
            await DybyTechInc.sendMessage(m.chat, {
                image: media,
                caption: `✅ *sᴛᴀᴛᴜs sᴀᴠᴇᴅ*\n\n📱 ғʀᴏᴍ: @${m.quoted.sender.split('@')[0]}`,
                mentions: [m.quoted.sender]
            }, { quoted: qtext2 });
        } else if (/video/.test(m.quoted.mtype)) {
            media = await m.quoted.download();
            await DybyTechInc.sendMessage(m.chat, {
                video: media,
                caption: `✅ *sᴛᴀᴛᴜs sᴀᴠᴇᴅ*\n\n📱 ғʀᴏᴍ: @${m.quoted.sender.split('@')[0]}`,
                mentions: [m.quoted.sender]
            }, { quoted: qtext2 });
        } else {
            return dybyreply(`❌ *ᴜɴsᴜᴘᴘᴏʀᴛᴇᴅ*\n\nᴏɴʟʏ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ sᴛᴀᴛᴜs`);
        }
        
        await DybyTechInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
        
    } catch (error) {
        await DybyTechInc.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
        dybyreply(`❌ *ғᴀɪʟᴇᴅ*\n\n${error.message}`);
    }
}
break;

case 'flux':
case 'sdxl':
case 'pollinations':
case 'playground': {
    if (!text) return dybyreply(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀɴ ɪᴍᴀɢᴇ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ!\n\nᴇxᴀᴍᴘʟᴇ: ${prefix + command} ᴀ ᴄᴀᴛ ɪɴ sᴘᴀᴄᴇ`);
    
    try {
        await dybyreply('🎨 ɢᴇɴᴇʀᴀᴛɪɴɢ ɪᴍᴀɢᴇ...');
        
        const prompt = encodeURIComponent(text);
        const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=1024&model=flux&nologo=true&enhance=true`;
        
        await DybyTechInc.sendMessage(from, {
            image: { url: imageUrl },
            caption: `✨ *ɪᴍᴀɢᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ*\n\n📝 ᴘʀᴏᴍᴘᴛ: ${text}\n🤖 ᴍᴏᴅᴇʟ: ғʟᴜx-ᴘʀᴏ`
        }, { quoted: qtext2 });
        
    } catch (error) {
        console.error('Image Generation Error:', error);
        await dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ɪᴍᴀɢᴇ. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ.');
    }
}
break;

case 'pixart': {
    if (!text) return dybyreply(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀɴ ɪᴍᴀɢᴇ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ!\n\nᴇxᴀᴍᴘʟᴇ: ${prefix + command} ᴀ ʙᴇᴀᴜᴛɪғᴜʟ ᴀɴɪᴍᴇ ɢɪʀʟ`);
    
    try {
        await dybyreply('🎨 ɢᴇɴᴇʀᴀᴛɪɴɢ ᴘɪxᴀʀᴛ ɪᴍᴀɢᴇ...');
        
        // Using Pollinations AI with PixArt-Alpha model
        const prompt = encodeURIComponent(text);
        const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=1024&model=pixart&nologo=true&enhance=true`;
        
        await DybyTechInc.sendMessage(from, {
            image: { url: imageUrl },
            caption: `✨ *ᴘɪxᴀʀᴛ ɪᴍᴀɢᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ*\n\n📝 ᴘʀᴏᴍᴘᴛ: ${text}\n🤖 ᴍᴏᴅᴇʟ: ᴘɪxᴀʀᴛ-ᴀʟᴘʜᴀ`
        }, { quoted: qtext2 });
        
    } catch (error) {
        console.error('PixArt Generation Error:', error);
        await dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ɪᴍᴀɢᴇ. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ.');
    }
}
break;


case 'imgsearch': case 'img': {
    if (!text) {
        return dybyreply(`*ᴜsᴀɢᴇ:* .ʙɪɴɢɪᴍɢ <ǫᴜᴇʀʏ>\n\n*ᴇxᴀᴍᴘʟᴇ:* .ɪᴍɢ ᴄᴀᴛ`);
    }

    try {
        // Call the Bing Image Search API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/s/bimg`, {
            params: { query: text }
        });

        if (apiResponse.status === 200 && apiResponse.data.status) {
            const images = apiResponse.data.data;

            if (images.length === 0) {
                return replyphistar(`No images found for "${text}". Please try another query.`);
            }

            // Send up to 5 images
            const maxImages = Math.min(images.length, 5);
            for (let i = 0; i < maxImages; i++) {
                await DybyTechInc.sendMessage(m.chat, {
                    image: { url: images[i] },
                    caption: `🔎 *ɪᴍᴀɢᴇ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs*\n\n📄 *ǫᴜᴇʀʏ:* "${text}"\n📷 *ɪᴍᴀɢᴇ ${i + 1}/${maxImages}*`,
                }, { quoted: qtext2 });
            }
        } else {
            dybyreply(`❌ *ERROR:* Failed to fetch images. Please try again.`);
        }
    } catch (error) {
        console.error('Error in Image Search command:', error);
        dybyreply(`❌ *AN ERROR OCCURRED:* ${error.message}`);
    }
    break;
}


case 'metaai': {
    if (!text) return dybyreply(`💡 ᴜsᴀɢᴇ: ${command} <your question>\n\nᴇxᴀᴍᴘʟᴇ: ${command} ᴡʜᴀᴛ ɪs ᴀ ɴᴏᴜɴ`)

    async function metaai(text, logic) {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": {
                "id": "gpt-4",
                "name": "Meta AI",
                "maxLength": 32000,
                "tokenLimit": 8000,
                "completionTokenLimit": 5000,
                "deploymentName": "gpt-4"
            },
            "messages": [
                {
                    "pluginId": null,
                    "content": text,
                    "role": "user"
                }
            ],
            "prompt": logic,
            "temperature": 0.5
        }, {
            headers: {
                "Accept": "/*/",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
            }
        });

        return response.data;
    }

    try {
        let result = await metaai(text, "")

        // handle both string and object responses safely
        let answer = (typeof result === 'string') ? result 
                     : (result?.content || result?.message || JSON.stringify(result, null, 2))

        dybyreply(`🤖 *ᴍᴇᴛᴀᴀɪ*\n\n${answer}`)
    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Sorry, MetaAI could not respond. Please try again later.")
    }
}
break
case 'gpt4': {
  if (!text) return dybyreply(`ᴀsᴋ ᴍᴇ ᴀɴʏᴛʜɪɴɢ ᴇxᴀᴍᴘʟᴇ ${command} ᴡʜᴏ ɪs ᴍʀ ʙᴇᴀsᴛ`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
dybyreply(pei)
}
break
case 'gpt': {
  if (!text) return dybyreply(`ᴀsᴋ ᴍᴇ ᴀɴʏᴛʜɪɴɢ ᴇxᴀᴍᴘʟᴇ ${command} ᴡʜᴀᴛ ɪs ᴊᴀᴠᴀsᴄʀɪᴘᴛ?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
dybyreply(pei)
}
break
case 'codeai': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <your coding question>\n\nᴇxᴀᴍᴘʟᴇ: ${command} ᴡʀɪᴛᴇ ᴀ ᴊᴀᴠᴀsᴄʀɪᴘᴛ ғᴜɴᴄᴛɪᴏɴ ᴛᴏ ᴄʜᴇᴄᴋ ᴘʀɪᴍᴇ ɴᴜᴍʙᴇʀs`)

    try {
        async function openaiCode(prompt) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `You are a coding assistant. Answer only with clean, working code (with explanation if needed).\n\n${prompt}`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.4
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiCode(text)
        dybyreply(`👨‍💻 *ᴄᴏᴅᴇᴀɪ ʀᴇsᴘᴏɴsᴇ*\n\n${result}`)
    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Failed to fetch AI code response. Try again later.")
    }
}
break
case 'triviaai': {
    try {
        async function openaiTrivia(prompt) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Give me one random trivia question with 4 multiple-choice options (A, B, C, D). Also provide the correct answer after the options.\n\nFormat like this:\n\n❓ Question: ...\n\nA) ...\nB) ...\nC) ...\nD) ...\n\n✅ Correct Answer: ...`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.7
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiTrivia("")
        dybyreply(`🎲 *ᴛʀɪᴠɪᴀ ɢᴀᴍᴇ* 🎲\n\n${result}`)
    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Failed to fetch trivia question. Try again later.")
    }
}
break;
case 'storyai': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <topic>\n\nᴇxᴀᴍᴘʟᴇ: ${command} ᴀ ʙʀᴀᴠᴇ ᴅᴏɢ ɪɴ sᴘᴀᴄᴇ`)

    try {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": { "id": "gpt-4", "name": "GPT-4" },
            "messages": [
                { "content": `Write me a short, entertaining story about: ${text}`, "role": "user" }
            ],
            "temperature": 0.7
        })
        dybyreply(`📖 *sᴛᴏʀʏᴀɪ*\n\n${response.data}`)
    } catch (e) {
        dybyreply("❌ StoryAI failed, try again later.")
    }
}
break
case 'photoai': {
  if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${prefix + command} <your prompt>\n\nExample: ${prefix + command} ᴀ ᴄᴀᴛ ᴡᴇᴀʀɪɴɢ sᴜɴɢʟᴀssᴇs`)

  try {
    let url = `https://image.pollinations.ai/prompt/${encodeURIComponent(text)}`

    // Send image back to user
    DybyTechInc.sendMessage(m.chat, { image: { url }, caption: `🖼️ *ᴀɪ ɢᴇɴᴇʀᴀᴛᴇᴅ ᴘʜᴏᴛᴏ*\n\nᴘʀᴏᴍᴘᴛ: ${text}` }, { quoted: qtext2 })
    
  } catch (e) {
    console.error(e)
    dybyreply("❌ Failed to generate AI photo, try again later.")
  }
}   
break
    

// Promote / Demote
case 'promote': {
   if (!m.isGroup) return dybyreply("ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.")
if (!isCreator) 
  return dybyreply('❌ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await DybyTechInc.groupParticipantsUpdate(m.chat, [users], 'promote');
  dybyreply("ᴜsᴇʀ *ᴘʀᴏᴍᴏᴛᴇᴅ* ᴛᴏ ᴀᴅᴍɪɴ sᴜᴄᴄᴇssғᴜʟʟʏ ✅");
}
break;


case 'goodbye':

  if (!isCreator) return dybyreply("🔐 ᴏɴʟʏ *ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ* ᴄᴀɴ ᴇxᴇᴄᴜᴛᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.");

  await DybyTechInc.sendMessage(from, { react: { text: '👋', key: m.key } });

  if (args[0] === 'on') {
    goodbye = true;
    dybyreply('✅ *ɢᴏᴏᴅʙʏᴇ ᴀᴄᴛɪᴠᴀᴛᴇ sᴜᴄᴄᴇssғᴜʟʟʏ.');
  } else if (args[0] === 'off') {
    goodbye = false;
    dybyreply('❌ *ɢᴏᴏᴅʙʏᴇ ᴅɪsᴀʙʟᴇᴅ !*\n\n🔕 ɴᴏ ᴍᴇssᴀɢᴇ ᴡɪʟʟ ʙᴇ sᴇɴᴛ ᴡʜᴇɴ ᴀ ᴍᴇᴍʙᴇʀ ʟᴇᴀᴠᴇs..');
  } else {
    dybyreply('🛠️ *ᴄᴏʀʀᴇᴄᴛ ᴜsᴇ :*\n\n• `.ɢᴏᴏᴅʙʏᴇ ᴏɴ`\n• `.ɢᴏᴏᴅʙʏᴇ ᴏғғ`');
  }
  break;
  
  case 'welcome':
    
  if (!isCreator) return dybyreply("🔐 ᴏɴʟʏ *ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ* ᴄᴀɴ ᴇxᴇᴄᴜᴛᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.");

  await DybyTechInc.sendMessage(from, { react: { text: '🎉', key: m.key } });

  if (args[0] === 'on') {
    welcome = true;
    dybyreply('✅ *ᴡᴇʟᴄᴏᴍᴇ ᴀᴄᴛɪᴠᴀᴛᴇ sᴜᴄᴄᴇssғᴜʟʟʏ');
  } else if (args[0] === 'off') {
    welcome = false;
    dybyreply('❌ *ᴡᴇʟᴄᴏᴍᴇ ᴅɪsᴀʙʟᴇᴅ !*\n\n🔕 ɴᴏ ᴍᴇssᴀɢᴇ ᴡɪʟʟ ʙᴇ sᴇɴᴛ ᴜᴘᴏɴ ᴛʜᴇ ᴀʀʀɪᴠᴀʟ ᴏғ ɴᴇᴡ ᴍᴇᴍʙᴇʀs.');
  } else {
    dybyreply('🛠️ *ᴄᴏʀʀᴇᴄᴛ ᴜsᴇ :*\n\n• `.ᴡᴇʟᴄᴏᴍᴇ ᴏɴ`\n• `.ᴡᴇʟᴄᴏᴍᴇ ᴏғғ`');
  }
  break;

case 'demoteall': {
    if (!m.isGroup) return dybyreply(mess.group)
    
    if (!isCreator) return dybyreply(mess.owner)
    
    const metadata = await DybyTechInc.groupMetadata(m.chat)
    let admins = metadata.participants.filter((u) => u.admin && u.id !== botNumber)
    
    for (let admin of admins) {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [admin.id], 'demote')
        await sleep(1000)
    }
    dybyreply(`✅ ᴅᴇᴍᴏᴛᴇᴅ ${admins.length} ᴀᴅᴍɪɴs`)
}
break


case 'promoteall': {
    if (!m.isGroup) return dybyreply(mess.group)
    
    if (!isCreator) return dybyreply(mess.owner)
    
if (participants.length > 200) {
 return dybyreply("⚠️ ᴛᴏᴏ ᴍᴀɴʏ ᴍᴇᴍʙᴇʀs (ᴍᴀx 200 ғᴏʀ ᴛʜɪs ᴏʀᴅᴇʀ))");
 }
    
    const metadata = await DybyTechInc.groupMetadata(m.chat)
    let users = metadata.participants.filter((u) => !u.admin && u.id !== botNumber)
    
    for (let user of users) {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [user.id], 'promote')
        await sleep(1000)
    }
    dybyreply(`✅ ᴘʀᴏᴍᴏᴛᴇᴅ ${users.length} ᴜsᴇʀs ᴛᴏ ᴀᴅᴍɪɴ`)
}
break

case 'demote': {
   if (!m.isGroup) return dybyreply(mess.group)
if (!isCreator) 
  return dybyreply('❌ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ users ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await DybyTechInc.groupParticipantsUpdate(m.chat, [users], 'demote');
  dybyreply("ᴜsᴇʀ *ᴅᴇᴍᴏᴛᴇᴅ* ғʀᴏᴍ ᴀᴅᴍɪɴ sᴜᴄᴄᴇssғᴜʟʟʏ ✅");
}
break;

case 'github': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <username>\n\nExample: ${command} DybyTech-00`)

    try {
        let res = await axios.get(`https://api.github.com/users/${encodeURIComponent(text)}`)
        let user = res.data

        if (!user || !user.login) return dybyreply("❌ User not found.")

        let profileInfo = `👨‍💻 *ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟᴇ*\n
👤 ɴᴀᴍᴇ: ${user.name || "N/A"}
🔖 ᴜsᴇʀɴᴀᴍᴇ: ${user.login}
📍 ʟᴏᴄᴀᴛɪᴏɴ: ${user.location || "N/A"}
📦 ᴘᴜʙʟɪᴄ ʀᴇᴘᴏs: ${user.public_repos}
👥 ғᴏʟʟᴏᴡᴇʀs: ${user.followers}
👤 ғᴏʟʟᴏᴡɪɴɢ: ${user.following}
📅 ᴄʀᴇᴀᴛᴇᴅ: ${new Date(user.created_at).toLocaleDateString()}
🌐 ᴘʀᴏғɪʟᴇ: ${user.html_url}`

        // Send profile pic + info
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: user.avatar_url },
            caption: profileInfo
        }, { quoted: qtext2 })

    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Failed to fetch GitHub profile. Try again.")
    }
}
break
case 'npm': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <package>\n\nᴇxᴀᴍᴘʟᴇ: ${command} axios`)

    try {
        let res = await axios.get(`https://registry.npmjs.org/${encodeURIComponent(text)}`)
        let data = res.data

        if (!data.name) return dybyreply("❌ ᴘᴀᴄᴋᴀɢᴇ ɴᴏᴛ ғᴏᴜɴᴅ.")

        // Get latest version
        let latestVersion = data['dist-tags']?.latest
        let info = data.versions[latestVersion]

        let npmInfo = `📦 *𝑵𝑷𝑴 𝑷𝑨𝑪𝑲𝑨𝑮𝑬 𝑰𝑵𝑭𝑶*\n
🔖 Name: ${data.name}
📌 ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ: ${latestVersion}
📝 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${data.description || "N/A"}
👤 ᴀᴜᴛʜᴏʀ: ${info?.author?.name || "N/A"}
📅 ᴘᴜʙʟɪsʜᴇᴅ: ${info?.date || "N/A"}
📦 ʟɪᴄᴇɴsᴇ: ${info?.license || "N/A"}
🌐 ʜᴏᴍᴇᴘᴀɢᴇ: ${info?.homepage || "N/A"}
🔗 ɴᴘᴍ: https://www.npmjs.com/package/${data.name}
`

        sreply(npmInfo.trim())
    } catch (e) {
        console.error(e)
        sreply("⚠️ Failed to fetch NPM package info. Try again.")
    }
}
break;
   
// Hidetag
case 'hidetag': case 'tag': {
    if (!m.isGroup) return dybyreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return dybyreply(mess.admin);
    if (!isBotAdmins && !isCreator) return dybyreply(mess.botAdmin);

    DybyTechInc.sendMessage(m.chat, {
        text: q || '',
        mentions: participants.map(a => a.id)
    }, { quoted: qtext2 });
    break;
}


// ping command
case 'ping': {
    const start = Date.now();
    const latency = Date.now() - start; // simple ping

    const response = `⚡️ *ᴘᴏɴɢ!*  
_ʀᴇsᴘᴏɴsᴇ sᴘᴇᴇᴅ:_ *${latency} ᴍs*`;

    await DybyTechInc.sendMessage(m.chat, {
        text: response,
        contextInfo: {
            forwardingScore: 2,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
                newsletterJid: "120363407328298020@newsletter",
                serverMessageId: Math.floor(Date.now() / 1000)
            }
        }
    }, { quoted: qtext2 });
}
break;
        
        
case 'cid':
case 'newsletter': {
try {
if (!text) return dybyreply("ᴇxᴀᴍᴘʟᴇ : ʟɪɴᴋ ᴄʜᴀɴɴᴇʟ")
if (!text.includes("https://whatsapp.com/channel/")) return dybyreply("ʟɪɴᴋ ɪs ɴᴏᴛ ᴠᴀʟɪᴅ ʙʀᴏ ")

let result = text.split('https://whatsapp.com/channel/')[1]
let res = await DybyTechInc.newsletterMetadata("invite", result)

let resultMsg = `
╭───〔 ᴄʜᴀɴɴᴇʟ ɪɴғᴏ 〕───⬣
┃ ɪᴅ : ${res.id}
┃ ɴᴀᴍᴇ : ${res.name}
┃ ғᴏʟʟᴏᴡᴇʀs : ${res.subscribers}
┃ sᴛᴀᴛᴜs : ${res.state}
┃ ᴠᴇʀɪғɪᴇᴅ : ${res.verification == "VERIFIED" ? "Verified ✅" : "No ❌"}
╰────────────────⬣
`

await DybyTechInc.relayMessage(m.chat, {
  viewOnceMessage: {
    message: {
      interactiveMessage: {
        body: { text: resultMsg },
        footer: { text: "> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈" },
        header: {
          hasMediaAttachment: false,
          title: "ᴜᴘʟᴏᴀᴅᴇʀ ʀᴇsᴜʟᴛ"
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "📋 ᴄᴏᴘʏ ᴄʜᴀɴɴᴇʟ ɪᴅ",
                id: "copy_id",
                copy_code: res.id
              })
            }
          ]
        }
      }
    }
  }
}, { quoted: m })

} catch (e) {
  console.error(e)
  await dybyreply(`❌ Error: ${e.message || e}`)
}
}
break;
// premium command - FIXED VERSION
case 'buypremium':
case 'buyprem':
case 'premium': {
    let teks = `ʜᴇʏ ${pushname}👋\nᴡᴀɴᴛ ᴛᴏ ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ? ɪᴛ's ғʀᴇᴇ😂😂\n\n t.me/meglodon_bot`;
    
    await DybyTechInc.sendMessage(m.chat, {
        image: { url: global.botimg }, // Ton image
        caption: teks,
        contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {  
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",  
                newsletterJid: "120363407328298020@newsletter"  
            }
        }
    }, { quoted: qtext2 });
}
break;
        

case "linkbot":
case "getbot":
case "telebot":
case "freebot":
case "repo": {
  try {
    await DybyTechInc.sendMessage(m.chat, {
      productMessage: {
        title: "ᴍᴇɢᴀʟᴏᴅᴏɴ ᴛɢ",
        description: "ᴛʜɪs ɪs ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ʙᴏᴛ ʀᴇʟᴇᴀsᴇ.",
        thumbnail: { url: global.botimg },
        productId: "PROD001",
        retailerId: "RETAIL001",
        url: "https://github.com/Dyby-Tech00",
        body: "ᴍᴇɢᴀʟᴏᴅᴏɴ ᴛɢ ɪs ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇᴅ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ ғᴏʀ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ",
        footer: "", // plain text only
        priceAmount1000: 77777997900,
        currencyCode: "$",
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "𝐏𝐀𝐈𝐑 𝐍𝐎𝐖",
              url: "https://t.me/meglodon_bot"
            })
          }
        ]
      }
    }, { quoted: qtext2 });
  } catch (err) {
    console.error('productMessage failed:', err?.message || err);

    // fallback: standard URL button message
    try {
      await DybyTechInc.sendMessage(m.chat, {
        text: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍 𝐓𝐆 𝐈𝐒 𝐇𝐄𝐑𝐄:",
        footer: "© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈",
        templateButtons: [
          { index: 1, urlButton: { displayText: "Get Bot", url: "https://whatsapp.com/channel/0029VbC8YMi5a24BkonciG0L" } }
        ]
      }, { quoted: qtext2 });
    } catch (secondErr) {
      console.error('fallback also failed:', secondErr);
      await DybyTechInc.sendMessage(m.chat, { text: "script : https://whatsapp.com/channel/0029VbC8YMi5a24BkonciG0L" }, { quoted: qtext2 });
    }
  }
}
break;     
        
  
// script command - FIXED VERSION
case 'sc':       
case 'script':
case 'scriptbot': {
    const response = `
╭────────────────────❏
├𓇽  *\`𝐒𝐂𝐑𝐈𝐏𝐓\`* 𓇽
├────────────────────❏
 ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ɢᴇᴛ ᴛʜᴇ ʙᴏᴛ: https://t.me/meglodon_bot ᴛʏᴘᴇ /pair <ʏᴏᴜʀ ɴᴜᴍʙᴇʀ> ғᴏʀ ᴄᴏɴɴᴇᴄᴛ ᴏɴ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ
┕────────────────────❍`;

    await DybyTechInc.sendMessage(m.chat, {
  image: { url: global.botimg }, // Ton image
        text: response,
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
                newsletterJid: "120363407328298020@newsletter",
                serverMessageId: -1 // Changed to -1 to prevent errors
            }
            // Removed externalAdReply as it causes issues
        }
    }, { quoted: m });
}
break;
            
     
case 'sticker':
case 'stiker':
case 's': {
    if (!q && !quoted) {
        return dybyreply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`);
    }

    if (!mime) mime = (quoted.msg || quoted).mimetype || '';

    if (/image/.test(mime)) {
        const media = await quoted.download();
        await DybyTechInc.sendImageAsSticker(m.chat, media, m, { 
            packname: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍', 
            author: '𝙳𝙴𝚅 𝙳𝚈𝙱𝚈' 
        });
    } else if (/video/.test(mime)) {
        const duration = (quoted.msg || quoted).seconds || 0;
        if (duration > 10) return dybyreply('Maximum 10 sᴇᴄᴏɴᴅs!');
        const media = await quoted.download();
        await DybyTechInc.sendVideoAsSticker(m.chat, media, m, { 
            packname: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍', 
            author: '𝙳𝙴𝚅 𝙳𝚈𝙱𝚈' 
        });
    } else {
        return dybyreply(`sᴇɴᴅ ᴀɴ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}. ᴠɪᴅᴇᴏ sʜᴏᴜʟᴅ ʙᴇ 1-10 sᴇᴄᴏɴᴅs.`);
    }
    break;
} 
        
  
case 'approve': case 'approve-all':
 case 'approveall': {
	if (!m.isGroup) return dybyreply(mess.group)
if (!isCreator) return dybyreply(mess.owner)

const responseList = await DybyTechInc.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return dybyreply("no pending requests detected at the moment!");

for (const participan of responseList) {
    const response = await DybyTechInc.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
dybyreply("has approved all pending requests✅");

}
 break;
 
 case 'reject': case 'reject-all': {
	if (!m.isGroup) return dybyreply(mess.group)
if (!isCreator) return dybyreply(mess.owner)


const responseList = await DybyTechInc.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return dybyreply("no pending requests detected");

for (const participan of responseList) {
    const response = await DybyTechInc.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
dybyreply("pending requests have been rejected!");

}
 break;      
        
case 'git': case 'gitclone':
if (!args[0]) return dybyreply(`ᴡʜᴇʀᴇ ɪs ᴛʜᴇ ʟɪɴᴋ?\nᴇxᴀᴍᴘʟᴇ :\n${prefix}${command} https://github.com`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return dybyreply(`ʟɪɴᴋ ɪɴᴠᴀʟɪᴅ!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    DybyTechInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => dybyreply(mess.error))
break; 
          
            
   

case 'emojimix': {
    const [emoji1, emoji2] = text.split`+`;
    if (!emoji1 || !emoji2) 
        return dybyreply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 😅+🤔`);

    dybyreply(mess.wait);

    const anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);

    for (let res of anu.results) {
        const encmedia = await DybyTechInc.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
            categories: res.tags
        });
        fs.unlinkSync(encmedia);
    }
}
break;

case 'poll': {
  if (!m.isGroup) return dybyreply(mess.group);
  
      if (!isCreator) return dybyreply("❌ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴜsᴇʀs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.");


  if (!text) {
    return dybyreply(
      `ᴜsᴀɢᴇ:\n` +
      `${prefix}poll 1 ʏᴏᴜʀ ǫᴜᴇsᴛɪᴏɴ|Yes,No,Maybe\n` +
      `${prefix}poll 2 Your Question|Yes,No,Maybe`
    );
  }

  const argsText = text.split(" ");
  const voteCount = parseInt(argsText[0]);

  if (![1, 2].includes(voteCount)) {
    return m.reply("❌ ғɪʀsᴛ ᴠᴀʟᴜᴇ ᴍᴜsᴛ ʙᴇ 1 or 2.");
  }

  const pollText = argsText.slice(1).join(" ");
  const parts = pollText.split("|");

  if (parts.length < 2) {
    return dybyreply(
      `❌ ɪɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ.\nᴇxᴀᴍᴘʟᴇ:\n${prefix}poll 1 ᴅᴏ ʏᴏᴜ ʟɪᴋᴇ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴛɢ?|ʏᴇs,ɴᴏ,ᴍᴀʏʙᴇ`
    );
  }

  const question = parts[0];
  const options = parts[1].split(",").map(v => v.trim()).filter(v => v);

  if (options.length < 2) {
    return dybyreply("❌ At least 2 options are required.");
  }

  await DybyTechInc.sendMessage(m.chat, {
    poll: {
      name: question,
      values: options,
      selectableCount: voteCount
    }
  });
}
break;

case 'toonce':
case 'toviewonce': {
    if (!quoted) return dybyreply(`ʀᴇᴘʟʏ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ`);

    let mediaPath;
    if (/image/.test(mime)) {
        mediaPath = await DybyTechInc.downloadAndSaveMediaMessage(quoted);
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: mediaPath },
            caption: 'ʜᴇʀᴇ ʏᴏᴜ ɢᴏ!',
            fileLength: '999',
            viewOnce: true
        }, { quoted: qtext2 });
    } else if (/video/.test(mime)) {
        mediaPath = await DybyTechInc.downloadAndSaveMediaMessage(quoted);
        await DybyTechInc.sendMessage(m.chat, {
            video: { url: mediaPath },
            caption: 'ʜᴇʀᴇ ʏᴏᴜ ɢᴏ!',
            fileLength: '99999999',
            viewOnce: true
        }, { quoted: m });
    }
}
break;

case 'toqr': {
    if (!q) return dybyreply('ᴘʟᴇᴀsᴇ ɪɴᴄʟᴜᴅᴇ ʟɪɴᴋ ᴏʀ ᴛᴇxᴛ!');

    const qrcode = require('qrcode');
    const dataUrl = await qrcode.toDataURL(q, { scale: 35 });
    const dataBuffer = Buffer.from(dataUrl.replace('data:image/png;base64,', ''), 'base64');
    const tempFile = getRandom('.jpg');

    fs.writeFileSync(tempFile, dataBuffer);
    const medi = fs.readFileSync(tempFile);

    await DybyTechInc.sendMessage(m.chat, {
        image: medi,
        caption: 'ʜᴇʀᴇ ʏᴏᴜ ɢᴏ!'
    }, { quoted: qtext2 });

    setTimeout(() => fs.unlinkSync(tempFile), 10000);
}
break;
            case 'addowner':
                if (!isCreator) return dybyreply(mess.owner)
if (!args[0]) return dybyreply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await DybyTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return dybyreply(`ᴇɴᴛᴇʀ ᴀ ᴠᴀʟɪᴅ ᴀɴᴅ ʀᴇɢɪsᴛᴇʀᴇᴅ ɴᴜᴍʙᴇʀ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ!!!`)
owner.push(bnnd)
fs.writeFileSync('./allfunc/owner.json', JSON.stringify(owner))
dybyreply(`ɴᴜᴍʙᴇʀ ${bnnd} ʜᴀs ʙᴇᴄᴏᴍᴇ ᴀɴ ᴏᴡɴᴇʀ!!!`)
break
case 'delowner':
                if (!isCreator) return dybyreply(mess.owner)
if (!args[0]) return dybyreply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./allfun/owner.json', JSON.stringify(owner))
dybyreply(`ᴛʜᴇ ɴᴜᴍʙʀʀ ${ya} ʜᴀs ʙᴇᴇɴ ᴅᴇʟᴇᴛᴇᴅ ғʀᴏᴍ ᴏᴡɴᴇʀ ʟɪsᴛ ʙʏ ᴛʜᴇ ᴏᴡɴᴇʀ!!!`)
break
         

case 'readviewonce': case 'vv': {

    try {
        if (!m.quoted) return dybyreply('❌ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡᴏɴᴄᴇ ᴠɪᴅᴇᴏ, ɪᴍᴀɢᴇ, ᴏʀ ᴀᴜᴅɪᴏ.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return dybyreply('❌ ɴᴏ ᴍᴇᴅɪᴀ ғᴏᴜɴᴅ ɪɴ ᴛʜᴇ ǫᴜᴏᴛᴇᴅ ᴍᴇssᴀɢᴇ.');

        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await DybyTechInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await DybyTechInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await DybyTechInc.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv command:', error);
        dybyreply('❌ An error occurred while processing your request.');
    }
    break;
}
case 'readviewonce2':
case 'vv2':
case 'save':
case '🙂': {
    try {
        if (!m.quoted) return dybyreply('❌ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡᴏɴᴄᴇ ᴠɪᴅᴇᴏ, ɪᴍᴀɢᴇ, ᴏʀ ᴀᴜᴅɪᴏ.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return dybyreply('❌ ɴᴏ ᴍᴇᴅɪᴀ ғᴏᴜɴᴅ ɪɴ ᴛʜᴇ ǫᴜᴏᴛᴇᴅ ᴍᴇssᴀɢᴇ.');q
        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await DybyTechInc.sendMessage(m.sender, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await DybyTechInc.sendMessage(m.sender, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await DybyTechInc.sendMessage(m.sender, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv2/save command:', error);
        dybyreply('❌ Error saving media.');
    }
    break;
}


// ================= ʀᴇᴍɪɴɪ ================= //
case 'remini':
case 'enhance':
case 'hd':
case 'upscale': {
    try {
        const quotedMsg = quoted || m;
        const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

        if (!mimeType || !mimeType.startsWith('image/')) {
            return dybyreply("📸 ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ *ɪᴍᴀɢᴇ* (ᴊᴘᴇɢ/ᴘɴɢ).");
        }

        // Download media buffer
        const mediaBuffer = await quotedMsg.download?.() || null;
        if (!mediaBuffer) return dybyreply("❌ Failed to download image.");

        // File extension
        let extension = mimeType.includes("jpeg") ? ".jpg" : 
                        mimeType.includes("png") ? ".png" : null;
        if (!extension) return dybyreply("❌ ᴜɴsᴜᴘᴘᴏʀᴛᴇᴅ ғᴏʀᴍᴀᴛ. ᴜsᴇ ᴊᴘᴇɢ/ᴘɴɢ ᴏɴʟʏ.");

        // Save to temp
        const inputPath = path.join(os.tmpdir(), `remini_in_${Date.now()}${extension}`);
        fs.writeFileSync(inputPath, mediaBuffer);

        // Notify user
        await dybyreply("🔄 ᴇɴʜᴀɴᴄɪɴɢ ɪᴍᴀɢᴇ ǫᴜᴀʟɪᴛʏ... ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ⏳");

        // Upload to Catbox
        const form = new FormData();
        form.append('fileToUpload', fs.createReadStream(inputPath), `image${extension}`);
        form.append('reqtype', 'fileupload');

        const { data: imageUrl } = await axios.post("https://catbox.moe/user/api.php", form, {
            headers: form.getHeaders(),
            timeout: 30000
        });
        fs.existsSync(inputPath) && fs.unlinkSync(inputPath);

        if (!imageUrl || !imageUrl.startsWith("http")) {
            return dybyreply("❌ Failed to upload image.");
        }

        // Call Enhance API
        const { data: enhanced } = await axios.get(
            `https://www.veloria.my.id/imagecreator/upscale?url=${encodeURIComponent(imageUrl)}`,
            { responseType: "arraybuffer", timeout: 60000 }
        );

        if (!enhanced || enhanced.length < 200) {
            return dybyreply("❌ API returned invalid image data.");
        }

        // Save enhanced image
        const outputPath = path.join(os.tmpdir(), `remini_out_${Date.now()}.jpg`);
        fs.writeFileSync(outputPath, enhanced);

        // Send result
        await DybyTechInc.sendMessage(m.chat, {
            image: fs.readFileSync(outputPath),
            caption: "*✅ ɪᴍᴀɢᴇ ᴇɴʜᴀɴᴄᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!*\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ "
        }, { quoted: qtext2 });

        fs.existsSync(outputPath) && fs.unlinkSync(outputPath);

    } catch (error) {
        console.error("Image Enhancement Error:", error);
        dybyreply(`❌ Error: ${error.message || "Enhancement failed. Try again later."}`);
    }
}
break;
        
   
   case 'kickall':
case 'removeall':
case 'cleargroup': {
    if (!m.isGroup) return dybyreply("❌ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs!");

    if (!isCreator) {
        const groupMetadata = await DybyTechInc.groupMetadata(from);
        const groupAdmins = groupMetadata.participants.filter(p => p.admin !== null).map(p => p.id);
        if (!groupAdmins.includes(m.sender)) {
            return dybyreply("❌ ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!");
        }
    }

    try {
        const groupMetadata = await DybyTechInc.groupMetadata(from);
        const botJid = DybyTechInc.user?.id || DybyTechInc.user?.jid;

        // except bot & admins
        const membersToRemove = groupMetadata.participants
            .filter(p => p.admin === null && p.id !== botJid)
            .map(p => p.id);

        if (membersToRemove.length === 0) {
            return dybyreply("❌ ɴᴏ ᴍᴇᴍʙᴇʀs ᴛᴏ ʀᴇᴍᴏᴠᴇ (ᴀʟʟ ᴀʀᴇ ᴀᴅᴍɪɴs ᴏʀ ʙᴏᴛ).");
        }

        await dybyreply(`⚠️ *ᴡᴀʀɴɪɴɢ* ⚠️\n\nʀᴇᴍᴏᴠɪɴɢ *${membersToRemove.length}* ᴍᴇᴍʙᴇʀs ᴀᴛ ᴏɴᴄᴇ...`);

        // remove all in one go
        await DybyTechInc.groupParticipantsUpdate(from, membersToRemove, "remove");

        await dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ *${membersToRemove.length}* ᴍᴇᴍʙᴇʀs.\n\n> *ᴇxᴇᴄᴜᴛᴇᴅ ʙʏ:* @${m.sender.split('@')[0]}`, {
            mentions: [m.sender]
        });

    } catch (error) {
        console.error("Kickall error:", error);
        dybyreply("❌ Failed to remove members. Possibly due to rate limits or permission issues.");
    }
}
break;
       
  case 'alive': 
case 'test': {
    // 1. Réaction au message
    await DybyTechInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    try {
        // 2. Préparation des variables
        // Vérifie si la fonction runtime existe, sinon affiche les secondes brutes
        const uptime = typeof runtime !== 'undefined' ? runtime(process.uptime()) : process.uptime().toFixed(0) + "s";
        const userTag = (m.sender || m.chat).split("@")[0];

        let dybyAlive = `╭───────────────────   
│ ♲ *ᴏɴʟɪɴᴇ :* ʏᴇsɪʀ ᴅᴇᴀʀ @${userTag}
│ ♲ *ᴜᴘᴛɪᴍᴇ :* ${uptime}
│
│ ♲ *ʙᴏᴛ-ɴᴀᴍᴇ :* 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│ ♲ *ᴠᴇʀsɪᴏɴ :* \`2.0.0\`
│ ♲ *ᴅᴇᴠ :* ᴅʏʙʏ ᴛᴇᴄʜ
│ ♲ *sᴛᴀᴛᴜs :* ᴀʟᴡᴀʏs ᴀᴄᴛɪᴠᴇ 🚀
╰───────────────────
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ*`;

        // 3. Envoi du message avec image et contextInfo
        await DybyTechInc.sendMessage(
            m.chat,
            {
                image: { url: global.botimg },
                caption: dybyAlive,
                mentions: [m.sender], // Nécessaire pour que le @user soit cliquable
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363407328298020@newsletter',
                        newsletterName: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: m } // Utilisation de 'm' (plus sûr que 'qtext2')
        );

    } catch (error) {
        console.error('Erreur dans la commande alive:', error);
        await DybyTechInc.sendMessage(m.chat, { text: "❌ Erreur lors de l'exécution de la commande." }, { quoted: m });
    }
}
break;
        
   case 'runtime': case 'uptime': {
    let runtimetext = `*𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆* 𝐇𝐀𝐕𝐄 𝐁𝐄𝐄𝐍 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐅𝐎𝐑 ${runtime(process.uptime())}`;
    await DybyTechInc.sendMessage(m.chat, {
        text: runtimetext,
        contextInfo: {
            forwardingScore: 2,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {  
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",  
                newsletterJid: "120363407328298020@newsletter",
                serverMessageId: Math.floor(Date.now() / 1000) + 2 // Dynamic ID
            }
        }
    }, { quoted: m });
}
break;    
      
     //unban
    case 'unban': 
    if (!isCreator) return dybyreply("🚨 ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.");

    if (!text) { 
        return dybyreply("🚨 ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴜɴʙᴀɴ. ᴜsᴀɢᴇ: ᴜɴʙᴀɴ <number>");
    }

    // Extract the target number
    let targetNumber = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    if (targetNumber.startsWith("0") || targetNumber.length < 10) {
        return dybyreply("❌ ɪɴᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ. ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴡʜᴀᴛsᴀᴘᴘ ɴᴜᴍʙᴇʀ ɪɴᴄʟᴜᴅɪɴɢ ᴛʜᴇ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ.");
    }

    // Define the unban message
    const unbanMessage = `🚨 ʀᴇǫᴜᴇsᴛ ᴛᴏ ᴜɴʙᴀɴ ᴛʜᴇ ғᴏʟʟᴏᴡɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ ɴᴜᴍʙᴇʀ: ${targetNumber}`;

    try {
        // Send the message to Telegram
        const telegramApiUrl = `https://api.telegram.org/bot7781002847:AAH_wF0ySaWQ3dW6XY01gGcmnzUTITYA31M/sendMessage`;

        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: 6300694007, // Replace with your Telegram chat ID
                text: unbanMessage,
            }),
        });

        if (response.ok) {
            // Notify the sender that the request has been sent
            await dybyreply(`✅ ʏᴏᴜʀ ᴜɴʙᴀɴ ʀᴇǫᴜᴇsᴛ ʜᴀs ʙᴇᴇɴ* sᴇɴᴛ sᴜᴄᴄᴇssғᴜʟʟʏ! ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴡɪʟʟ ʙᴇ ᴜɴʙᴀɴɴᴇᴅ ɪɴ ᴛʜᴇ ɴᴇxᴛ 10 ᴅᴀʏ. 🔄`);
        } else {
            const errorData = await response.json();
            console.error("Telegram API error:", errorData);
            await dybyreply("❌ Failed to process your unban request. Please try again later.");
        }
    } catch (error) {
        console.error("Error sending unban request:", error);
        await dybyreply("❌ An error occurred while processing your unban request. Please try again.");
    }
    break;
     
        
 case 'owner': {
const repf = await DybyTechInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} ᴄᴏɴᴛᴀᴄᴛ`, 
contacts: list }, mentions: [sender] }, { quoted: m })
DybyTechInc.sendMessage(from, { text : `> ᴡᴀssᴜᴘ @${sender.split("@")[0]}, ᴍʏ ʜᴀɴᴅsᴏᴍᴇ ᴏᴡɴᴇʀ ʙᴜᴛ ɪ ᴡᴀs ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ.`, mentions: [sender]}, { quoted: qtext2 })
}
break
        
      case 'tourl': case 'imgtourl': case 'imgurl': case 'url': case 'geturl': case 'upload': case 'host': {
  try {
    await DybyTechInc.sendMessage(from, { react: { text: "🖇", key: m.key } });
      
 
    const quotedMsg = m.quoted ? m.quoted : m;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

    if (!mimeType) {
      return dybyreply("❌ ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ, ᴠɪᴅᴇᴏ, ᴏʀ ᴀᴜᴅɪᴏ ғɪʟᴇ");
    }

    const mediaBuffer = await quotedMsg.download();
    const tempFilePath = path.join(os.tmpdir(), `catbox_upload_${Date.now()}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else if (mimeType.includes('image/webp')) extension = '.webp';
    else if (mimeType.includes('video')) extension = '.mp4';
    else if (mimeType.includes('audio')) extension = '.mp3';
    else extension = path.extname(quotedMsg.filename || '') || '';

    const fileName = `file${extension}`;

    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), fileName);
    form.append('reqtype', 'fileupload');

    const response = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    if (!response.data) throw new Error("Error uploading to Catbox");

    const mediaUrl = response.data;

    try { fs.unlinkSync(tempFilePath); } catch (e) {}

    let mediaType = 'File';
    if (mimeType.includes('image')) mediaType = 'Image';
    else if (mimeType.includes('video')) mediaType = 'Video';
    else if (mimeType.includes('audio')) mediaType = 'Audio';

    const formatBytes = (bytes) => {
      if (!bytes) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const resultMsg =
      `*${mediaType} ᴜᴘʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*\n\n` +
      `*sɪᴢᴇ:* ${formatBytes(mediaBuffer.length)}\n` +
      `*ᴜʀʟ:* ${mediaUrl}\n\n` +
      `> © ᴜᴘʟᴏᴀᴅᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`;

    // --- CONSTRUCTION DU MESSAGE AVEC BOUTON COPIER ---
    await DybyTechInc.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: resultMsg },
            footer: { text: "ᴅʏʙʏ ᴛᴇᴄʜ ɪɴᴄ" },
            header: {
              hasMediaAttachment: false,
              title: "ᴜᴘʟᴏᴀᴅᴇʀ ʀᴇsᴜʟᴛ"
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_copy",
                  buttonParamsJson: JSON.stringify({
                    display_text: "📋 ᴄᴏᴘʏ ᴛʜᴇ ʟɪɴᴋ",
                    id: "copy_link",
                    copy_code: mediaUrl
                  })
                }
              ]
            }
          }
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await dybyreply(`❌ Error: ${e.message || e}`);
  }
}
break;  
 
case "glitchtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .glitchtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/glitchtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `⚡ Glitch Text Generated for: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Glitch Text." }, { quoted: m });
    }
}
break;

// ▫️ /writetext - Write on wet glass
case "writetext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .writetext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/writetext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `✍️ ᴡʀɪᴛᴇ ᴛᴇxᴛ ʟᴏɢᴏ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Write Text logo." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /advancedglow - Advanced glow effects
case "advancedglow": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nᴇxᴀᴍᴘʟᴇ: .advancedglow Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/advancedglow?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💡 ᴀᴅᴠᴀɴᴄᴇᴅ ɢʟᴏᴡ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Advanced Glow." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /typographytext - Typography on pavement
case "typographytext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .typographytext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/typographytext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🖋️ ᴛʏᴘᴏɢʀᴀᴘʜʏ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Typography Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /pixelglitch - Pixel glitch effects
case "pixelglitch": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .pixelglitch Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/pixelglitch?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🧩 ᴘɪxᴇʟ ɢʟɪᴛᴄʜ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Pixel Glitch." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /neonglitch - Neon glitch effects
case "neonglitch": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .neonglitch Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/neonglitch?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💥 Neon Glitch Generated for: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Neon Glitch." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /flagtext - Nigeria flag text
case "flagtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .flagtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/flagtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `ғʟᴀɢ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Flag Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /flag3dtext - 3D American flag text
case "flag3dtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .flag3dtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/flag3dtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `3ᴅ ғʟᴀɢ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating 3D Flag Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /deletingtext - Eraser deleting effect
case "deletingtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .deletingtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/deletingtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🩶 ᴅᴇʟᴇᴛɪɴɢ ᴛᴇxᴛ ᴇғғᴇᴄᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Deleting Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /blackpinkstyle - Blackpink style logo
case "blackpinkstyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .blackpinkstyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/blackpinkstyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🎀 ʙʟᴀᴄᴋᴘɪɴᴋ sᴛʏʟᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Blackpink Style." }, { quoted: qtext2 });
    }
}
break;
// ▫️ /glowingtext - Glowing text effects
case "glowingtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .glowingtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/glowingtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💫 ɢʟᴏᴡɪɴɢ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Glowing Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /underwatertext - 3D underwater text
case "underwatertext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .underwatertext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/underwatertext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌊 Underwater Text Generated for: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Underwater Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /logomaker - Bear logo maker
case "logomaker": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .logomaker Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/logomaker?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🐻 ʟᴏɢᴏ ᴍᴀᴋᴇʀ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Logo Maker." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /cartoonstyle - Cartoon graffiti text
case "cartoonstyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .cartoonstyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/cartoonstyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🎨 ᴄᴀʀᴛᴏᴏɴ sᴛʏʟᴇ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Cartoon Style Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /papercutstyle - 3D paper cut style
case "papercutstyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .papercutstyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/papercutstyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `✂️ ᴘᴀᴘᴇʀ ᴄᴜᴛ sᴛʏʟᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Paper Cut Style." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /watercolortext - Watercolor text effect
case "watercolortext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .watercolortext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/watercolortext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🖌️ ᴡᴀᴛᴇʀᴄᴏʟᴏʀ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Watercolor Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /effectclouds - Text on clouds in sky
case "effectclouds": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .effectclouds Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/effectclouds?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `☁️ ᴄʟᴏᴜᴅs ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Cloud Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /blackpinklogo - Blackpink logo creator
case "blackpinklogo": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .blackpinklogo Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/blackpinklogo?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💖 ʙʟᴀᴄᴋᴘɪɴᴋ ʟᴏɢᴏ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Blackpink Logo." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /gradienttext - 3D gradient text effect
case "gradienttext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .gradienttext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/gradienttext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌈 ɢʀᴀᴅɪᴇɴᴛ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Gradient Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /summerbeach - Write in sand summer beach
case "summerbeach": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .summerbeach Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/summerbeach?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🏖️ sᴜᴍᴍᴇʀ ʙᴇᴀᴄʜ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Summer Beach Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /luxurygold - Luxury gold text effect
case "luxurygold": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .luxurygold Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/luxurygold?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🥇 ʟᴜxᴜʀʏ ɢᴏʟᴅ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Luxury Gold Text." }, { quoted: qtext2 });
    }
}
break;
// ▫️ /multicoloredneon - Multicolored neon lights
case "multicoloredneon": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .multicoloredneon Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/multicoloredneon?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌈 ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅ ɴᴇᴏɴ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Multicolored Neon." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /sandsummer - Write in sand summer beach
case "sandsummer": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .sandsummer Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/sandsummer?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🏝️ sᴀɴᴅ sᴜᴍᴍᴇʀ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Sand Summer Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /galaxywallpaper - Galaxy mobile wallpaper
case "galaxywallpaper": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .galaxywallpaper Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/galaxywallpaper?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌌 ɢᴀʟᴀxʏ ᴡᴀʟʟᴘᴀᴘᴇʀ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Galaxy Wallpaper." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /style1917 - 1917 style text effect
case "style1917": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .style1917 Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/style1917?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🎖️ 1917 sᴛʏʟᴇ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating 1917 Style Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /makingneon - Neon light with galaxy style
case "makingneon": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .makingneon Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/makingneon?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌠 ᴍᴀᴋɪɴɢ ɴᴇᴏɴ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Making Neon." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /royaltext - Royal text effect
case "royaltext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .royaltext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/royaltext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `👑 ʀᴏʏᴀʟ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Royal Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /freecreate - 3D hologram text effect
case "freecreate": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .freecreate Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/freecreate?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🧊 3D ʜᴏʟᴏɢʀᴀᴍ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Free Create Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /galaxystyle - Galaxy style name logo
case "galaxystyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .galaxystyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/galaxystyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🪐 ɢᴀʟᴀxʏ sᴛʏʟᴇ ʟᴏɢᴏ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Galaxy Style Logo." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /lighteffects - Green neon light effects
case "lighteffects": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .lighteffects Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/lighteffects?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💡 ʟɪɢʜᴛ ᴇғғᴇᴄᴛs ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Light Effects." }, { quoted: qtext2 });
    }
}
break        
        
case 'wasted':
case 'dead':
case 'live': {
    await DybyTechInc.sendMessage(m.chat, { react: { text: "⚰️", key: m.key } });

    try {
        const axios = require('axios');

        let userToWaste;

        // Mention
        if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
            userToWaste = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
        }
        // Reply
        else if (m.message?.extendedTextMessage?.contextInfo?.participant) {
            userToWaste = m.message.extendedTextMessage.contextInfo.participant;
        }
        // Numéro en argument
        else if (args[0]) {
            userToWaste = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        }

        if (!userToWaste) {
            return DybyTechInc.sendMessage(m.chat, {
                text: `*╭─────────────────⊷*
│ 📥 *ᴡᴀsᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅ*
*╰─────────────────⊷*
│ 📂 *ɴᴀᴍᴇ :* ɴᴏᴛ ғᴏᴜɴᴅ
│ 👥 number : ɴᴏᴛ ᴘʀᴏᴠɪᴅᴇᴅ
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

⚠️ Mention someone, reply to a message, or provide a number.
Example: ${prefix}wasted @user

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
            }, { quoted: qtext2 });
        }

        let profilePic;
        try {
            profilePic = await DybyTechInc.profilePictureUrl(userToWaste, 'image');
        } catch {
            profilePic = 'https://i.imgur.com/2wzGhpF.jpeg';
        }

        const wastedResponse = await axios.get(
            `https://some-random-api.com/canvas/overlay/wasted?avatar=${encodeURIComponent(profilePic)}`,
            { responseType: 'arraybuffer' }
        );

        const userTag = userToWaste.split("@")[0];

        const caption = `
*╭─────────────────⊷*
│ 📥 *ᴡᴀsᴛᴇᴅ ᴇғғᴇᴄᴛ*
*╰─────────────────⊷*
│ 📂 *ɴᴀᴍᴇ :* @${userTag}
│ 👥 number : ${userTag}
│ 🛡️ *sᴛᴀᴛᴜs :* sᴜᴄᴄᴇssғᴜʟ
*╰─────────────────⊷*

⚰️ *Rest in pieces...* 💀

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`.trim();

        await DybyTechInc.sendMessage(m.chat, {
            image: Buffer.from(wastedResponse.data),
            caption: caption,
            footer: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
            mentions: [userToWaste]
        }, { quoted: m });

    } catch (err) {
        console.error(err);

        await DybyTechInc.sendMessage(m.chat, { react: { text: "❌", key: m.key } });

        await DybyTechInc.sendMessage(m.chat, {
            text: `*╭─────────────────⊷*
│ 📥 *ᴡᴀsᴛᴇᴅ ᴇʀʀᴏʀ*
*╰─────────────────⊷*
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

❌ Failed to create wasted image.

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
        }, { quoted: qtext2 });
    }
}
break;     
 
 
case 'out': {
    if (!m.isGroup) return dybyreply('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.');
    if (!isBotAdmins) return dybyreply('ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
    if (!isGroupOwner) return dybyreply('ᴏɴʟʏ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
    
    const countryCode = args[0]; // Get the country code from the command arguments
    if (!countryCode || !countryCode.startsWith('+')) return dybyreply('ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ, e.g., +234.');

    let kickedMembers = 0;

    for (let participant of participants) {
        const number = participant.id.split('@')[0]; // Extract the participant's number
        if (number.startsWith(countryCode.replace('+', '')) && participant.id !== botNumber && participant.id !== groupOwner) {
            try {
                await DybyTechInc.groupParticipantsUpdate(from, [participant.id], 'remove');
                kickedMembers++;
                await delay(2000); // Add a delay of 2 seconds between each removal
            } catch (err) {
                console.error(`Failed to remove ${participant.id}:`, err);
            }
        }
    }

    if (kickedMembers > 0) {
        dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ ${kickedMembers} ᴍᴇᴍʙᴇʀs ᴡɪᴛʜ ɴᴜᴍʙᴇʀs sᴛᴀʀᴛɪɴɢ ᴡɪᴛʜ ${countryCode}.`);
    } else {
        dybyreply(`ɴᴏ ᴍᴇᴍʙᴇʀs ғᴏᴜɴᴅ ᴡɪᴛʜ ɴᴜᴍʙᴇʀs sᴛᴀʀᴛɪɴɢ ᴡɪᴛʜ ${countryCode}.`);
    }
    break;
}

            case 'shutdown':
                if (!isCreator) return dybyreply(mess.owner)
                dybyreply(`Goodbye🖐🥺`)
                await sleep(3000)
                process.exit()
                break
            case 'autobio':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʙɪᴏ ᴛᴏ ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʙɪᴏ ᴛᴏ ${q}`)
                }
                break
            case 'setexif':
                if (!isCreator) return dybyreply(mess.owner)
                if (!text) return dybyreply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} ᴘᴀᴄᴋɴᴀᴍᴇ|ᴀᴜᴛʜᴏʀ`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                dybyreply(`ᴇxɪғ sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴛᴏ\n\n• ᴘᴀᴄᴋɴᴀᴍᴇ : ${global.packname}\n• Author : ${global.author}`)
                break
            
            case 'block': {
    if (!isCreator) return dybyreply(mess.owner); // Only bot owner can use this command

    try {
        // Determine the target user
        let blockUser;
        if (m.quoted) {
            blockUser = m.quoted.sender;
        } else if (m.mentionedJid && m.mentionedJid.length > 0) {
            blockUser = m.mentionedJid[0];
        } else if (q && q.includes('@')) {
            blockUser = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        } else if (m.chat.endsWith('@s.whatsapp.net')) {
            blockUser = m.chat;
        } else {
            return dybyreply('⚠️ ᴛᴀɢ ᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴜsᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʙʟᴏᴄᴋ.');
        }

        await DybyTechInc.updateBlockStatus(blockUser, 'block');
        dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ʙʟᴏᴄᴋᴇᴅ *${blockUser}*`);
    } catch (err) {
        console.error(err);
        dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ʙʟᴏᴄᴋ ᴛʜᴇ ᴜsᴇʀ. ᴍᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ʜᴀs ᴘᴇʀᴍɪssɪᴏɴ.');
    }
    break;
}

case 'unblock': {
    if (!isCreator) return dybyreply(mess.owner); // Only bot owner can use this command

    try {
        // Determine the target user
        let unblockUser;
        if (m.quoted) {
            unblockUser = m.quoted.sender;
        } else if (m.mentionedJid && m.mentionedJid.length > 0) {
            unblockUser = m.mentionedJid[0];
        } else if (q && q.includes('@')) {
            unblockUser = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        } else if (m.chat.endsWith('@s.whatsapp.net')) {
            unblockUser = m.chat;
        } else {
            return dybyreply('⚠️ ᴛᴀɢ ᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴜsᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴜɴʙʟᴏᴄᴋ.');
        }

        await DybyTechInc.updateBlockStatus(unblockUser, 'unblock');
        dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ᴜɴʙʟᴏᴄᴋᴇᴅ *${unblockUser}*`);
    } catch (err) {
        console.error(err);
        dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ᴜɴʙʟᴏᴄᴋ ᴛʜᴇ ᴜsᴇʀ. ᴍᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ʜᴀs ᴘᴇʀᴍɪssɪᴏɴ.');
    }
    break;
}
            
            case 'dessources':
                if (!isCreator) return dybyreply(mess.owner)
                if (m.isGroup) return dybyreply(mess.private)
                dybyreply(mess.wait)
                exec('zip backup.zip *')
fs.readFileSync('./megalodon.zip')
                await DybyTechInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'ᴍᴇɢᴀʟᴏᴅᴏɴ.zip'
                }, {
                    quoted: m
                })
                break
        
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return dybyreply(mess.owner)
                if (!text) return dybyreply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await DybyTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                dybyreply(`sᴇɴᴅ ʙʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘ ᴄʜᴀᴛ, ᴇɴᴅ ᴛɪᴍᴇ ${anu.length * 1.5} sᴇᴄᴏɴᴅ`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    DybyTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'ʙʀᴏᴀᴅᴄᴀsᴛ ʙʏ ᴏᴡɴᴇʀ',
                                body: `sᴇɴᴛ ${i.length} ɢʀᴏᴜᴘ`,
                                thumbnailUrl: 'https://files.catbox.moe/nicgu4.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴛ ʙʀᴏᴀᴅᴄᴀsᴛ ᴛᴏ ${anu.length} ɢʀᴏᴜᴘ`)
            }
            break
                
         case 'mode': {
    sreply(`
*╭──────────────⊷*
│ 🔹 ᴄᴜʀʀᴇɴᴛ ᴍᴏᴅᴇ
│ 🌍 ${DybyTechInc.public ? 'ᴘᴜʙʟɪᴄ (ᴏᴘᴇɴ ᴛᴏ ᴇᴠᴇʀʏᴏɴᴇ)' : 'ᴘʀɪᴠᴀᴛᴇ (ᴏᴡɴᴇʀ ᴏɴʟʏ)'}
*╰──────────────⊷*`);
}
break;

case 'public': {
    if (!isCreator) return dybyreply(`
*❌ ᴏɴʟʏ ᴛʜᴇ *ᴏᴡɴᴇʀ* ᴄᴀɴ ᴀᴄᴛɪᴠᴀᴛᴇ ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ.`);
    
    setSetting("bot", "mode", "public");
    DybyTechInc.public = true;

    sreply(`
*╭──────────────⊷*
│ 🌐 ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ
│ ✨ ᴛʜᴇ ʙᴏᴛ ɪs ɴᴏᴡ ᴏᴘᴇɴ ғᴏʀ *ᴇᴠᴇʀʏᴏɴᴇ!*
│ 🔹 ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs ᴀʀᴇ ᴀᴄᴄᴇssɪʙʟᴇ
*╰──────────────⊷*
> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`);
}
break;

case 'private':
case 'self': {
    if (!isCreator) return dybyreply(`
*❌ ᴏɴʟʏ ᴛʜᴇ *ᴏᴡɴᴇʀ* ᴄᴀɴ ᴀᴄᴛɪᴠᴀᴛᴇ ᴘʀɪᴠᴀᴛᴇ ᴍᴏᴅᴇ.`);

    setSetting("bot", "mode", "self");
    DybyTechInc.public = false;

    sreply(`
*╭──────────────⊷*
│ 🔒 ᴘʀɪᴠᴀᴛᴇ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ
│ ✨ ᴏɴʟʏ ᴛʜᴇ *ᴏᴡɴᴇʀ* can use ᴛʜᴇ bot
│ 🌐 Public ᴄᴏᴍᴍᴀɴᴅs ᴀʀᴇ ɴᴏᴡ ʟᴏᴄᴋᴇᴅ
*╰──────────────⊷*
> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`);
}
break;       
            
case 'closetime': {
    if (!m.isGroup) return dybyreply(mess.group)
    if (!isAdmins && !isCreator) return dybyreply(mess.admin)
    if (!isBotAdmins) return dybyreply(mess.botAdmin)

    const amount = parseInt(args[0])
    const unit = (args[1] || '').toLowerCase()

    if (isNaN(amount) || amount <= 0) {
        return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ\n\n*ᴜɴɪᴛs:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ`)
    }

    let timer
    switch (unit) {
        case 'second':
        case 'seconds':
        case 'detik':
            timer = amount * 1000
            break
        case 'minute':
        case 'minutes':
        case 'menit':
            timer = amount * 60000
            break
        case 'hour':
        case 'hours':
        case 'jam':
            timer = amount * 3600000
            break
        case 'day':
        case 'days':
        case 'hari':
            timer = amount * 86400000
            break
        default:
            return dybyreply(`*ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪᴛ:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ`)
    }

    dybyreply(`⏳ *ɢʀᴏᴜᴘ ᴡɪʟʟ ʙᴇ ᴄʟᴏsᴇᴅ ɪɴ ${amount} ${unit}*...`)

    setTimeout(async () => {
        try {
            await DybyTechInc.groupSettingUpdate(m.chat, 'announcement')
            dybyreply(`🔒 *ɢʀᴏᴜᴘ ᴄʟᴏsᴇᴅ*\nɴᴏᴡ ᴏɴʟʏ ᴀᴅᴍɪɴs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs.`)
        } catch (err) {
            console.error(err)
            dybyreply('❌ *ғᴀɪʟᴇᴅ ᴛᴏ ᴄʟᴏsᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴅᴜᴇ ᴛᴏ ᴀɴ ᴇʀʀᴏʀ.*')
        }
    }, timer)
}
break

case 'opentime': {
    if (!m.isGroup) return dybyreply(mess.group)
    if (!isAdmins && !isCreator) return dybyreply(mess.admin)
    if (!isBotAdmins) return dybyreply(mess.botAdmin)

    const amount = parseInt(args[0])
    const unit = (args[1] || '').toLowerCase()

    if (isNaN(amount) || amount <= 0) {
        return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ\n\n*ᴜɴɪᴛs:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ`)
    }

    let timer
    switch (unit) {
        case 'second':
        case 'seconds':
        case 'detik':
            timer = amount * 1000
            break
        case 'minute':
        case 'minutes':
        case 'menit':
            timer = amount * 60000
            break
        case 'hour':
        case 'hours':
        case 'jam':
            timer = amount * 3600000
            break
        case 'day':
        case 'days':
        case 'hari':
            timer = amount * 86400000
            break
        default:
            return dybyreply(`*ᴄʜᴏᴏsᴇ ᴀ ᴠᴀʟɪᴅ ᴜɴɪᴛ:*\n➤ sᴇᴄᴏɴᴅ\n➤ ᴍɪɴᴜᴛᴇ\n➤ ʜᴏᴜʀ\n➤ ᴅᴀʏ\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} 10 ᴍɪɴᴜᴛᴇ`)
    }

    dybyreply(`⏳ *ɢʀᴏᴜᴘ ᴡɪʟʟ ʙᴇ ᴏᴘᴇɴᴇᴅ ɪɴ ${amount} ${unit}*...`)

    setTimeout(async () => {
        try {
            await DybyTechInc.groupSettingUpdate(m.chat, 'not_announcement')
            dybyreply(`🔓 *ɢʀᴏᴜᴘ ᴏᴘᴇɴᴇᴅ*\nɴᴏᴡ ᴍᴇᴍʙᴇʀs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs.`)
        } catch (err) {
            console.error(err)
            dybyreply('❌ *ғᴀɪʟᴇᴅ ᴛᴏ ᴏᴘᴇɴ ᴛʜᴇ ɢʀᴏᴜᴘ ᴅᴜᴇ ᴛᴏ ᴀɴ ᴇʀʀᴏʀ.*')
        }
    }, timer)
}
break
            case 'kick': case 'remove': {
    if (!m.isGroup) return dybyreply('❌ *ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.*')
    if (!isBotAdmins) return dybyreply('⚠️ *ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.*')
    if (!isGroupOwner && !isCreator) return dybyreply('🚫 *ᴏɴʟʏ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.*')

    if (!m.mentionedJid[0] && !m.quoted && !args[0]) {
        return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} @user\nᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ\nᴏʀ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} +234567890123`)
    }

    // 📱 Get the user JID (from mention, reply, or number)
    let userId = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : null)

    if (!userId && args[0]) {
        const phoneNumber = args[0].replace(/[^0-9]/g, '') // remove non-digits
        if (phoneNumber.length < 7 || phoneNumber.length > 15) {
            return dybyreply('❌ *ɪɴᴠᴀʟɪᴅ ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ!*\nᴘʟᴇᴀsᴇ ᴜsᴇ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ (ᴇx: +234567890123)')
        }
        userId = `${phoneNumber}@s.whatsapp.net`
    }

    if (!userId) return dybyreply('❌ *ɪɴᴠᴀʟɪᴅ ᴜsᴇʀ!* ᴘʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀ ᴜsᴇʀ, ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ, ᴏʀ ᴘʀᴏᴠɪᴅᴇ ᴀ ɴᴜᴍʙᴇʀ.')

    if (userId === DybyTechInc.user.id) return dybyreply('❌ *ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴋɪᴄᴋ ᴛʜᴇ ʙᴏᴛ!*')
    if (userId === groupOwner) return dybyreply('❌ *ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴋɪᴄᴋ ᴛʜᴇ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀ!*')

    const target = groupMetadata.participants.find(p => p.id === userId)
    if (!target) {
        const userNumber = userId.split('@')[0]
        return dybyreply(`❌ *ᴜsᴇʀ +${userNumber} ɪs ɴᴏᴛ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ.*`, { mentions: [userId] })
    }

    if (target.admin) return dybyreply('❌ *ʏᴏᴜ ᴄᴀɴɴᴏᴛ ʀᴇᴍᴏᴠᴇ ᴀɴ ᴀᴅᴍɪɴ!*')

    try {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [userId], 'remove')
        const userNumber = userId.split('@')[0]
        await dybyreply(`✅ *sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ +${userNumber} ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ.*`, { mentions: [userId] })
        await delay(1200)
    } catch (err) {
        console.error(err)
        const userNumber = userId.split('@')[0]
        dybyreply(`❌ *ғᴀɪʟᴇᴅ ᴛᴏ ʀᴇᴍᴏᴠᴇ +${userNumber} ᴅᴜᴇ ᴛᴏ ᴀɴ ᴇʀʀᴏʀ.*`, { mentions: [userId] })
    }
}
break
            case 'add':
    if (!m.isGroup) return dybyreply(mess.group); // Check if it's a group
    if (!isAdmins && !isGroupOwner && !isCreator) return dybyreply(mess.admin); // Check if user is an admin
    if (!isBotAdmins) return dybyreply(mess.botAdmin); // Check if bot is an admin
    let userToAdds = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Extract the number
    try {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [userToAdds], 'add');
        dybyreply(`ᴜsᴇʀ ᴀᴅᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ: ${userToAdd}`);
    } catch (err) {
        console.error(err);
        dybyreply('User ᴀᴅᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.');
    }
    break;
    
// Music Download Command
case 'play2': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        // Show waiting message
        await dybyreply('🎵 Searching for your song...');

        // Using YouTube Play API
        const searchUrl = `https://apis.prexzyvilla.site/download/play?q=${encodeURIComponent(text)}`;
        const searchRes = await axios.get(searchUrl);

        if (!searchRes.data.status || !searchRes.data.data) {
            return dybyreply(`*No results found for:* ${text}`);
        }

        const songData = searchRes.data.data;
        const { title, author, duration, thumbnail, url } = songData.metadata;
        const downloadUrl = songData.download.download_url;

        // Send song info with actual thumbnail
        const infoMessage = `*ᴍᴜsɪᴄ ᴘʟᴀʏᴇʀ*\n` +
                            `🎵 *ᴛɪᴛʟᴇ:* ${title}\n` +
                            `🎤 *ᴀʀᴛɪsᴛ:* ${author}\n` +
                            `⏱️ *ᴅᴜʀᴀᴛɪᴏɴ:* ${duration}\n` +
                            `🔗 *sᴏᴜʀᴄᴇ:* ʏᴏᴜᴛᴜʙᴇ`;

        await DybyTechInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: thumbnail }
        }, { quoted: qtext2 });

        // Download and send the audio
        await DybyTechInc.sendMessage(m.chat, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mp4',
            fileName: `${title.replace(/[^\w\s]/gi, '')}.mp3`,
            caption: `🎧 *ʜᴇʀᴇ's ʏᴏᴜʀ sᴏɴɢ:*\n${title} - ${author}`
        }, { quoted: qtext2 });

    } catch (err) {
        console.error('Error in play2:', err);
        dybyreply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

// Video Download Command
case 'video': {
    if (!text) return dybyreply(`*Example:* ${prefix + command} Wizkid Essence`);

    try {
        // Step 1: Search YouTube using yts
        const search = await yts(text);
        const video = search.videos[0];

        if (!video) {
            return dybyreply(`❌ No results found for: *${text}*`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const videoThumbnail = video.thumbnail;
        const author = video.author.name;

        // Step 2: Send search preview
        const infoMessage = 
`🎥 *ᴠɪᴅᴇᴏ ғᴏᴜɴᴅ*

*ᴛɪᴛʟᴇ:* ${videoTitle}
*ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}

💬 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴠɪᴅᴇᴏ* ғᴏʀ ʏᴏᴜ...`;

        await DybyTechInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: videoThumbnail }
        }, { quoted: qtext2 });

        // Step 3: Fetch video download link using PrexzyVilla API
        const apiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const { data } = await axios.get(apiUrl);

        if (data.status && data.data) {
            const { downloadURL, title } = data.data;

            // Step 4: Send the video file
            await DybyTechInc.sendMessage(m.chat, {
                video: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title.replace(/[^\w\s]/gi, '')}.mp4`,
                caption: `🎬 *ʜᴇʀᴇ's ʏᴏᴜʀ ᴠɪᴅᴇᴏ:*\n${title} - ${author}`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the video. Please try again.");
        }

    } catch (error) {
        console.error("Error in video command:", error);
        dybyreply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

  case 'song':
case 'ytaudio':
case 'play': {
    await DybyTechInc.sendMessage(m.chat, { react: { text: "🎵", key: m.key } });

    try {
        const axios = require('axios');

        const q = m.message?.conversation ||
                  m.message?.extendedTextMessage?.text ||
                  m.message?.imageMessage?.caption ||
                  m.message?.videoMessage?.caption || '';

        if (!q || q.trim() === '') {
            return await DybyTechInc.sendMessage(m.chat, {
                text: `*╭─────────────────⊷*
│ 📥 *sᴏɴɢ ᴄᴏᴍᴍᴀɴᴅ*
*╰─────────────────⊷*
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

🎵 ᴜsᴀɢᴇ : ${prefix}song <query/url>
Example:
${prefix}song https://youtu.be/xxxx
${prefix}song Alan Walker faded

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
            }, { quoted: m });
        }

        await DybyTechInc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

        // Recherche vidéo
        const search = await yts(q.trim());
        if (!search?.videos?.length) throw new Error("No results found");

        const video = search.videos[0];
        const videoUrl = video.url;

        // API Hector
        const apiUrl = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`;
        const response = await axios.get(apiUrl, { timeout: 20000 });

        if (!response.data?.status || !response.data?.audio) {
            throw new Error("Audio not available");
        }

        const songData = response.data;

        const caption = `
*╭─────────────────⊷*
│ 📥 *sᴏɴɢ ᴅᴇᴛᴀɪʟs*
*╰─────────────────⊷*
│ 🎧 *ᴛɪᴛʟᴇ :* ${songData.title || video.title}
│ ⏱️ *ᴅᴜʀᴀᴛɪᴏɴ :* ${video.timestamp}
│ 👤 *ᴀʀᴛɪsᴛ :* ${video.author?.name}
│ 👀 *ᴠɪᴇᴡs :* ${video.views.toLocaleString()}
*╰─────────────────⊷*

🔗 ${videoUrl}

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`.trim();

        const sessionId = `${Date.now()}`;

        const buttons = [
            {
                buttonId: `song-audio-${sessionId}`,
                buttonText: { displayText: "➪ ᴀᴜᴅɪᴏ (ᴘʟᴀʏ)" },
                type: 1
            },
            {
                buttonId: `song-doc-${sessionId}`,
                buttonText: { displayText: "➪ ᴅᴏᴄᴜᴍᴇɴᴛ" },
                type: 1
            }
        ];

        const sentMsg = await DybyTechInc.sendMessage(m.chat, {
            image: { url: songData.thumbnail || video.thumbnail },
            caption: caption,
            footer: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
            buttons: buttons,
            headerType: 1
        }, { quoted: m });

        const handler = async (chatUpdate) => {
            const msgData = chatUpdate?.messages[0];
            if (!msgData?.message?.buttonsResponseMessage) return;

            const buttonId = msgData.message.buttonsResponseMessage.selectedButtonId;
            const isReply = msgData.message.buttonsResponseMessage.contextInfo?.stanzaId === sentMsg.key.id;

            if (isReply && buttonId.includes(sessionId)) {
                DybyTechInc.ev.off('messages.upsert', handler);

                await DybyTechInc.sendMessage(m.chat, { react: { text: "⏳", key: msgData.key } });

                try {
                    const audioRes = await axios.get(songData.audio, {
                        responseType: 'arraybuffer',
                        timeout: 30000
                    });

                    const buffer = Buffer.from(audioRes.data);
                    const fileName = `${video.title.replace(/[<>:"\/\\|?*]+/g, '')}.mp3`;

                    if (buttonId.startsWith(`song-audio-`)) {
                        await DybyTechInc.sendMessage(m.chat, {
                            audio: buffer,
                            mimetype: 'audio/mpeg',
                            fileName: fileName,
                            ptt: false
                        }, { quoted: msgData });
                    } else {
                        await DybyTechInc.sendMessage(m.chat, {
                            document: buffer,
                            mimetype: 'audio/mpeg',
                            fileName: fileName
                        }, { quoted: msgData });
                    }

                    await DybyTechInc.sendMessage(m.chat, { react: { text: "✅", key: msgData.key } });

                } catch (err) {
                    await DybyTechInc.sendMessage(m.chat, { react: { text: "❌", key: msgData.key } });
                }
            }
        };

        DybyTechInc.ev.on('messages.upsert', handler);

        setTimeout(() => {
            DybyTechInc.ev.off('messages.upsert', handler);
        }, 120000);

    } catch (error) {
        console.error(error);

        await DybyTechInc.sendMessage(m.chat, { react: { text: "❌", key: m.key } });

        await DybyTechInc.sendMessage(m.chat, {
            text: `*╭─────────────────⊷*
│ 📥 *sᴏɴɢ ᴇʀʀᴏʀ*
*╰─────────────────⊷*
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

❎ ${error.message}

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
        }, { quoted: m });
    }
}
break;      
        
/*
case 'song': {
    if (!text) return dybyreply(`*Example:* ${prefix + command} Morayo by Wizkid`);

    try {
        const query = text.trim();
        dybyreply('🔍 sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ʏᴏᴜʀ sᴏɴɢ ʀᴇǫᴜᴇsᴛ...');

        // Step 1: Search YouTube using yts for video data
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return dybyreply(`❌ No results found for: *${query}*`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const videoThumbnail = video.thumbnail;
        const videoDuration = video.duration.timestamp;
        const author = video.author.name;

        // Step 2: Send preview
        const infoMessage = `*ᴍᴜsɪᴄ ᴘʟᴀʏᴇʀ*\n` +
                            `🎵 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                            `🎤 *ᴀʀᴛɪsᴛ:* ${author}\n` +
                            `⏱️ *ᴅᴜʀᴀᴛɪᴏɴ:* ${videoDuration}\n` +
                            `🔗 *sᴏᴜʀᴄᴇ:* ʏᴏᴜᴛᴜʙᴇ`;

        await DybyTechInc.sendMessage(m.chat, {
            caption: infoMessage,
            image: { url: videoThumbnail }
        }, { quoted: qtext2 });

        // Step 3: Fetch audio download link using PrexzyVilla play API
        const audioApiUrl = `https://apis.prexzyvilla.site/download/play?q=${encodeURIComponent(query)}`;
        const audioRes = await axios.get(audioApiUrl);

        if (audioRes.data.status && audioRes.data.data) {
            const { download_url } = audioRes.data.data.download;
            const { title } = audioRes.data.data.metadata;

            // Step 4: Send the audio as a voice note
            await DybyTechInc.sendMessage(m.chat, {
                audio: { url: download_url },
                mimetype: 'audio/mp4',
                ptt: true, // Send as voice note
                fileName: `${title.replace(/[^\w\s]/gi, '')}.mp3`,
                caption: `🎧 *ʜᴇʀᴇ's ʏᴏᴜʀ sᴏɴɢ:*\n${title} - ${author}`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the audio. Please try again.");
        }

        // Step 5: Fetch video download link using PrexzyVilla ytmp4 API
        const videoApiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const videoRes = await axios.get(videoApiUrl);

        if (videoRes.data.status && videoRes.data.data) {
            const { downloadURL, title } = videoRes.data.data;

            // Step 6: Send the video
            await DybyTechInc.sendMessage(m.chat, {
                video: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title.replace(/[^\w\s]/gi, '')}.mp4`,
                caption: `🎬 *ʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴠɪᴅᴇᴏ:*\n${title} - ${author}`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the video. Please try again.");
        }

    } catch (err) {
        console.error("Error in song command:", err);
        dybyreply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

*/
// Text to PDF Command

case 'playdoc': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        const query = text.trim();
        dybyreply('🔍 Searching for your audio file...');

        // Step 1: Search YouTube using yts
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return dybyreply(`❌ No results found for "${query}".`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const thumbnail = video.thumbnail;

        // Step 2: Send search preview
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎶 *ᴀᴜᴅɪᴏ ғɪʟᴇ ғᴏᴜɴᴅ* 🎶\n\n` +
                     `🎵 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                     `🔗 *ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}\n\n` +
                     `📁 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴀᴜᴅɪᴏ ғɪʟᴇ* ғᴏʀ ʏᴏᴜ...`
        }, { quoted: qtext2 });

        // Step 3: Fetch audio document download link using PrexzyVilla API
        const audioApiUrl = `https://apis.prexzyvilla.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`;
        const audioResponse = await axios.get(audioApiUrl);

        if (audioResponse.data.status && audioResponse.data.data) {
            const { downloadURL, title } = audioResponse.data.data;

            // Step 4: Send the audio file as a document
            await DybyTechInc.sendMessage(m.chat, {
                document: { url: downloadURL },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: `📁 *ᴀᴜᴅɪᴏ ғɪʟᴇ:* ${title}.mp3`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the audio file. Try again.");
        }

    } catch (err) {
        console.error("Error in playdoc command:", err);
        dybyreply("❌ An error occurred while processing your request.");
    }
    break;
}

case 'videodoc': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} Faded by Alan Walker`);

    try {
        const query = text.trim();
        dybyreply('🔍 sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ʏᴏᴜʀ ᴠɪᴅᴇᴏ ғɪʟᴇ...');

        // Step 1: Search YouTube using yts
        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return dybyreply(`❌ No results found for "${query}".`);
        }

        const videoUrl = video.url;
        const videoTitle = video.title;
        const thumbnail = video.thumbnail;

        // Step 2: Send search preview
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `🎬 *ᴠɪᴅᴇᴏ ғɪʟᴇ ғᴏᴜɴᴅ* 🎬\n\n` +
                     `🎥 *ᴛɪᴛʟᴇ:* ${videoTitle}\n` +
                     `🔗 *ʏᴏᴜᴛᴜʙᴇ ʟɪɴᴋ:* ${videoUrl}\n\n` +
                     `📁 ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ *ᴠɪᴅᴇᴏ ғɪʟᴇ* ғᴏʀ ʏᴏᴜ...`
        }, { quoted: qtext2 });

        // Step 3: Fetch video document download link using PrexzyVilla API
        const videoApiUrl = `https://apis.prexzyvilla.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const videoResponse = await axios.get(videoApiUrl);

        if (videoResponse.data.status && videoResponse.data.data) {
            const { downloadURL, title } = videoResponse.data.data;

            // Step 4: Send the video file as a document
            await DybyTechInc.sendMessage(m.chat, {
                document: { url: downloadURL },
                mimetype: 'video/mp4',
                fileName: `${title}.mp4`,
                caption: `📁 *ᴠɪᴅᴇᴏ ғɪʟᴇ:* ${title}.mp4`
            }, { quoted: qtext2 });
        } else {
            dybyreply("❌ Failed to fetch the video file. Try again.");
        }

    } catch (err) {
        console.error("Error in videodoc command:", err);
        dybyreply("❌ An error occurred while processing your request.");
    }
    break;
}
  

            case 'restart':
                if (!isCreator) return dybyreply(mess.owner)
                dybyreply('In Process....')
                exec('pm2 restart all')
                break
                
                /*
            case 'autoread':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`ᴇxᴀᴍᴘʟᴇ ${prefix + command} ᴏɴ/ᴏғғ`)
                if (q === 'on') {
                    autoread = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏʀᴇᴀᴅ ᴛᴏ ${q}`)
                }
                break
                */
                case 'autotyping':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} ᴏɴ/ᴏғғ`)
                if (q === 'on') {
                    autoTyping = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                }
                break
                
                case 'autorecording':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ ᴛᴏ ${q}`)
                }
                break
                
                case 'autorecordtyp':
                if (!isCreator) return dybyreply(mess.owner)
                if (args.length < 1) return dybyreply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴀɴᴅ ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    dybyreply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴄʜᴀɴɢᴇᴅ ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴀɴᴅ ᴛʏᴘɪɴɢ ᴛᴏ ${q}`)
                }
                break
                


case 'listblock': {
    if (!isCreator) return dybyreply(`ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ`);
    let block = await DybyTechInc.fetchBlocklist();
    dybyreply('List ʙʟᴏᴄᴋ :\n\n' + `ᴛᴏᴛᴀʟ : ${block == undefined ? '*0* ʙʟᴏᴄᴋᴇᴅ' : '*' + block.length + '* Blocked'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`);
}
break;


case 'smeme': {
    let respond = `Send/reply image/sticker with caption ${prefix + command} text1|text2`;
    if (!/image/.test(mime)) return dybyreply(respond);
    if (!text) return dybyreply(respond);
    try {
        let atas = text.split('|')[0] ? text.split('|')[0] : '-';
        let bawah = text.split('|')[1] ? text.split('|')[1] : '-';
        let dwnld = await DybyTechInc.downloadAndSaveMediaMessage(qmsg);
        let fatGans = await TelegraPH(dwnld);
        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
        let FaTiH = await DybyTechInc.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.author });
        await fs.unlinkSync(dwnld);
    } catch (e) {
        console.error(e);
    }
}
break;


case 'delete': case 'del': case 'd': {
    let key = {};
    try {
        key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid;
        key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe;
        key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id;
        key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant;
    } catch (e) {
        console.error(e);
    }
    DybyTechInc.sendMessage(m.chat, { delete: key });
}
break;

case 'leavegc': case 'left': {
    if (!isCreator) return dybyreply('`ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ`');
    await DybyTechInc.groupLeave(m.chat);
    await dybyreply('`Done!`');
}
break;

case 'tagall': {
    if (!m.isGroup) return dybyreply(mess.group);
    if (!isAdmins && !isCreator) return dybyreply(mess.admin);

    let teks = `〘      *ᴛᴀɢ ᴀʟʟ*     〙
 •• *ᴍᴇssᴀɢᴇ : ${q ? q : 'empty'}* ••\n\n`;

    for (let mem of participants) {
        teks += `☌  @${mem.id.split('@')[0]}\n`;
    }

    DybyTechInc.sendMessage(
        m.chat,
        { text: teks, mentions: participants.map(a => a.id) },
        { quoted: qtext2 }
    );
}
break;

case 'mute': case 'close': {
    try {
        if (!m.isGroup) return dybyreply('🚫 ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs ᴏɴʟʏ.');
        if (!isAdmins && !isCreator) return dybyreply('🚫 ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴏʀ ᴏᴡɴᴇʀs ᴄᴀɴ ᴅᴏ ᴛʜɪs.');
        if (!isBotAdmins) return dybyreply('❗ ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴘᴇʀᴍɪssɪᴏɴs.');

        await DybyTechInc.groupSettingUpdate(m.chat, 'announcement');

        dybyreply(`🔇 ɢʀᴏᴜᴘ ɪs ɴᴏᴡ ᴍᴜᴛᴇᴅ! ᴏɴʟʏ ᴀᴅᴍɪɴs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs.`);
    } catch (err) {
        console.error('Error muting group:', err);
        dybyreply('❌ ᴇʀʀᴏʀ ᴡʜɪʟᴇ ᴍᴜᴛɪɴɢ ᴛʜᴇ ɢʀᴏᴜᴘ.');
    }
}
break;


case 'unmute': case 'open': {
    try {
        if (!m.isGroup) return dybyreply('🚫 ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs ᴏɴʟʏ.');
        if (!isAdmins && !isCreator) return dybyreply('🚫 ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴏʀ ᴏᴡɴᴇʀs ᴄᴀɴ ᴅᴏ ᴛʜɪs.');
        if (!isBotAdmins) return dybyreply('❗ ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴘᴇʀᴍɪssɪᴏɴs.');

        await DybyTechInc.groupSettingUpdate(m.chat, 'not_announcement');

        dybyreply(`🔊 ɢʀᴏᴜᴘ ɪs ᴜɴᴍᴜᴛᴇᴅ! ᴀʟʟ ᴍᴇᴍʙᴇʀs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇs ᴀɢᴀɪɴ.`);
    } catch (err) {
        console.error('Error unmuting group:', err);
        dybyreply('❌ ᴇʀʀᴏʀ ᴡʜɪʟᴇ ᴜɴᴍᴜᴛɪɴɢ ᴛʜᴇ ɢʀᴏᴜᴘ.');
    }
}
break;

case 'revoke':
case 'resetlink': {
    try {
        if (!m.isGroup) return dybyreply('🚫 ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs ᴏɴʟʏ.');
        if (!isAdmins && !isCreator) return dybyreply('🚫 ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴏʀ ᴏᴡɴᴇʀs ᴄᴀɴ ᴅᴏ ᴛʜɪs.');
        if (!isBotAdmins) return dybyreply('❗ ɪ ɴᴇᴇᴅ ᴀᴅᴍɪɴ ᴘᴇʀᴍɪssɪᴏɴs ᴛᴏ ʀᴇsᴇᴛ ᴛʜᴇ ɪɴᴠɪᴛᴇ ʟɪɴᴋ.');

        await DybyTechInc.groupRevokeInvite(m.chat);

        dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟ ʀᴇsᴇᴛ ғᴏʀ ɢʀᴏᴜᴘ: ${groupMetadata.subject}`);
    } catch (err) {
        console.error('Error resetting link:', err);
        dybyreply('❌ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ʀᴇsᴇᴛᴛɪɴɢ ᴛʜᴇ ɪɴᴠɪᴛᴇ ʟɪɴᴋ.');
    }
}
break;


case 'take': {
    try {
        if (!m?.quoted) return dybyreply('❗ ʀᴇᴘʟʏ ᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ!');
        const mime = m?.quoted.mimetype || '';
        if (!/webp/.test(mime)) return dybyreply('❗ ʀᴇᴘʟʏ ᴡɪᴛʜ ᴀ sᴛɪᴄᴋᴇʀ ᴏɴʟʏ!');

        const [packname, ...authorParts] = (text || '').split('|');
        const author = authorParts.join('|') || global.author;
        const img = await m.quoted.download();
        if (!img) return dybyreply('⚠️ ғᴀɪʟᴇᴅ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴛɪᴄᴋᴇʀ!');

        const stickerWithExif = await addExif(img, packname || global.packname, author);
        await DybyTechInc.sendMessage(m.chat, { sticker: stickerWithExif }, { quoted: m });
        await dybyreply('✅ sᴛɪᴄᴋᴇʀ ᴍᴇᴛᴀᴅᴀᴛᴀ ᴜᴘᴅᴀᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!');
    } catch (e) {
        console.error('Take Command Error:', e);
        dybyreply('❌ Failed to process sticker.');
    }
}
break;





case "stickers": {
    if (!text) return dybyreply(`Ex: ${prefix + command} cat`);
    const anu = await stickersearch(text);
    const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
    const randomStickers = shuffledStickers.slice(0, 10);

    if (randomStickers.length > 0) {
        for (let i = 0; i < randomStickers.length; i++) {
            try {
                await new Promise(resolve => setTimeout(resolve, i * 6000));
                await DybyTechInc.sendImageAsSticker(m?.chat, randomStickers[i], m, {
                    packname: global.packname,
                    author: global.author
                });
            } catch (error) {
                console.error(`Error sending file: ${error.message}`);
                await dybyreply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
            }
        }
    }
}
break;


case 'getpp': {
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
        return dybyreply(`ʀᴇᴘʟʏ ᴛᴏ sᴏᴍᴇᴏɴᴇ's ᴍᴇssᴀɢᴇ ᴏʀ ᴛᴀɢ ᴀ ᴜsᴇʀ ᴡɪᴛʜ ${prefix + command}`);
    }

    try {
        let targetUser = m.quoted ? m.quoted.sender : m.mentionedJid[0];
        let profilePicUrl = await DybyTechInc.profilePictureUrl(targetUser, 'image');
        let responseMessage = `Profile picture of @${targetUser.split('@')[0]}`;
        await DybyTechInc.sendMessage(m.chat, { image: { url: profilePicUrl }, caption: responseMessage, mentions: [targetUser] });
    } catch (error) {
        dybyreply("ᴄᴏᴜʟᴅɴ'ᴛ ғᴇᴛᴄʜ ᴘʀᴏғɪʟᴇ ᴘɪᴄᴛᴜʀᴇ. The ᴜsᴇʀ ᴍɪɢʜᴛ ɴᴏᴛ ʜᴀᴠᴇ ᴀ ᴘʀᴏғɪʟᴇ ᴘɪᴄᴛᴜʀᴇ ᴏʀ an ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ.");
    }
}
break;


case 'invite': {
    if (!m.isGroup) return dybyreply(`For Group Only`);
    if (!text) return dybyreply(`ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ to ɪɴᴠɪᴛᴇ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ\n\nᴇxᴀᴍᴘʟᴇ :\n*${prefix + command}* 2347043759577`);
    if (text.includes('+')) return dybyreply(`ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏɢᴇᴛʜᴇʀ ᴡɪᴛʜᴏᴜᴛ *+*`);
    if (isNaN(text)) return dybyreply(`ᴇɴᴛᴇʀ ᴏɴʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀs ᴘʟᴜs ʏᴏᴜʀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴡɪᴛʜᴏᴜᴛ sᴘᴀᴄᴇs`);
    let group = m.chat;
    let link = 'https://chat.whatsapp.com/' + await DybyTechInc.groupInviteCode(group);
    await DybyTechInc.sendMessage(text + '@s.whatsapp.net', {
        text: `≡ *𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐕𝐈𝐓𝐀𝐓𝐈𝐎𝐍*\n\nA ᴜsᴇʀ ɪɴᴠɪᴛᴇs ʏᴏᴜ ᴛᴏ ᴊᴏɪɴ ᴛʜɪs ɢʀᴏᴜᴘ \n\n${link}`,
        mentions: [m.sender]
    });
    dybyreply('`An invite link is sent to the user`');
}
break;


case 'mediafire': {
    if (!text) return dybyreply(`*Example*: ${prefix + command} https://www.mediafire.com/file/n6tgcrktbnov1oy`);

    try {
        await DybyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });

        const apiUrl = `https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;

            await DybyTechInc.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`
            }, { quoted: qtext2 });
        } else {
            dybyreply(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {
        console.error('Error during MediaFire command:', error);
        dybyreply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'ss': case 'ssweb': case 'screenshot': {
    if (!args[0]) return dybyreply(`ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ʟɪɴᴋ\n\n ᴇxᴀᴍᴘʟᴇ: ${prefix + command}.`);

    await DybyTechInc.sendMessage(m.chat, { react: { text: `📸`, key: m.key } });

    let apiUrl = `https://api.giftedtech.co.ke/api/tools/ssweb?apikey=gifted&url=${encodeURIComponent(args[0])}`;

    try {
        await DybyTechInc.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🖼️ sᴄʀᴇᴇɴsʜᴏᴛ ᴏғ ${args[0]}` }, { quoted: qtext2 });
    } catch (error) {
        console.error(error);
        dybyreply('Failed to capture the screenshot. Please try again later.');
    }
    break;
}

case 'wanted': {
 
    if (!/image/.test(mime)) {
        return dybyreply(`*ʀᴇǫᴜᴇsᴛ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> *ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴡɪᴛʜ .ᴡᴀɴᴛᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴡᴀɴᴛᴇᴅ ᴘᴏsᴛᴇʀ*`);
    }

    
    if (!quoted) {
        return dybyreply(`*ʀᴇǫᴜᴇsᴛ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> *ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴡɪᴛʜ .ᴡᴀɴᴛᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴡᴀɴᴛᴇᴅ ᴘᴏsᴛᴇʀ*`);
    }

    try {
        
        await DybyTechInc.sendMessage(m.chat, { react: { text: `⏳`, key: m.key } });

        const mediaPath = await DybyTechInc.downloadAndSaveMediaMessage(quoted);

        // Upload the image to Imgur
        const uploadResponse = await uploadToImgur(mediaPath); // Use the Imgur upload function
        if (uploadResponse.status !== "success") {
            fs.unlinkSync(mediaPath); 
            return dybyreply(`*ᴜᴘʟᴏᴀᴅ ᴇʀʀᴏʀ!! ᴍᴇssᴀɢᴇ :*\n\n> ${uploadResponse.message}`);
        }

        const imageUrl = uploadResponse.fileUrl;
        
        const apiResponse = await axios.get(`https://api.popcat.xyz/wanted`, {
            params: { image: imageUrl }
        });


        if (apiResponse.status === 200) {
            const wantedImageUrl = apiResponse.request.res.responseUrl; 
            
            await DybyTechInc.sendMessage(m.chat, {
                image: { url: wantedImageUrl },
                caption: `*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ*`
            }, { quoted: qtext2 });
        } else {
            dybyreply(`*WANTED POSTER ERROR!! MESSAGE :*\n\n> Failed to create a wanted poster. Try again.`);
        }

        
        fs.unlinkSync(mediaPath);

    } catch (error) {
        console.error('Error in Wanted command:', error);
        dybyreply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }

    // React to indicate success
    await DybyTechInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
    break;
}


case 'clearchat': {
    DybyTechInc.chatModify({
        delete: true, 
        lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
    }, m.chat);
    await DybyTechInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } }, { quoted: m });
    break;
}


case 'hdvid':
case 'hdvideo':
case 'vidiohd':
case 'tohd':
case 'vidhd': {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    if (!mime) return dybyreply(`Where is the video?`);

    // React to the message
    await DybyTechInc.sendMessage(m.chat, { react: { text: `🔄`, key: m.key } });

    // Download the media file
    const media = await DybyTechInc.downloadAndSaveMediaMessage(q);

    const output = 'output.mp4'; // Output file name

    // Enhance the video resolution using ffmpeg
    exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            dybyreply('Failed to enhance video resolution.');
            fs.unlinkSync(media); // Clean up
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);

        // Upload the enhanced video to Catbox
        try {
            const catboxUrl = await catboxUploader(output); // ✅ Use your uploader here

            // Send the Catbox URL back to the chat
            await DybyTechInc.sendMessage(
                m.chat,
                { 
                    caption: `sᴜᴄᴄᴇsғᴜʟʟʏ ᴇɴʜᴀɴᴄᴇᴅ ʏᴏᴜʀ ᴠɪᴅᴇᴏ\n\n🌐 ${catboxUrl}\n\n> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`, 
                    video: { url: output } 
                }, 
                { quoted: qtext2 }
            );
        } catch (uploadError) {
            console.error(uploadError.message);
            dybyreply('Failed to upload the video to Catbox.');
        }

        // Clean up temporary files
        fs.unlinkSync(output);
        fs.unlinkSync(media);
    });
}
break;


case 'tourl2': case 'imgtourl2': case 'imgurl2': case 'url2': case 'geturl2': case 'upload2': {
  try {
  
    await DybyTechInc.sendMessage(from, { react: { text: "🖇", key: m.key } });

    const quotedMsg = m.quoted ? m.quoted : m;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

    if (!mimeType) {
      return dybyreply("❌ ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ, ᴠɪᴅᴇᴏ, ᴏʀ ᴀᴜᴅɪᴏ ғɪʟᴇ");
    }

    
    const mediaBuffer = await quotedMsg.download();
    const tempFilePath = path.join(os.tmpdir(), `catbox_upload_${Date.now()}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);


    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else if (mimeType.includes('image/webp')) extension = '.webp';
    else if (mimeType.includes('video')) extension = '.mp4';
    else if (mimeType.includes('audio')) extension = '.mp3';
    else extension = path.extname(quotedMsg.filename || '') || '';

    const fileName = `file${extension}`;

    
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), fileName);
    form.append('reqtype', 'fileupload');

    const response = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    if (!response.data) throw new Error("Error uploading to Catbox");

    const mediaUrl = response.data;


    try { fs.unlinkSync(tempFilePath); } catch (e) {}

    
    let mediaType = 'File';
    if (mimeType.includes('image')) mediaType = 'Image';
    else if (mimeType.includes('video')) mediaType = 'Video';
    else if (mimeType.includes('audio')) mediaType = 'Audio';


    const formatBytes = (bytes) => {
      if (!bytes) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const resultMsg =
      `*${mediaType} ᴜᴘʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*\n\n` +
      `*sɪᴢᴇ:* ${formatBytes(mediaBuffer.length)}\n` +
      `*ᴜʀʟ:* ${mediaUrl}\n\n` +
      `> © ᴜᴘʟᴏᴀᴅᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`;

    await DybyTechInc.sendMessage(m.chat, { text: resultMsg }, { quoted: qtext2 });

  } catch (e) {
    console.error(e);
    await dybyreply(`❌ Error: ${e.message || e}`);
  }
}
break;
        


case 'totalfeature':
case 'totalfitur':
case 'totalcmd':
case 'totalcommand': {
    dybyreply(`${totalfitur}`);
}
break;


case 'download':
case 'dl': {
    if (!text) return dybyreply(`❌ Please provide a valid link.\n\n*Example:* ${prefix + command} <TikTok/Facebook/Instagram/Twitter link>`);

    try {
        // Show waiting message
        await dybyreply('⏳ ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ᴅᴏᴡɴʟᴏᴀᴅ ʀᴇǫᴜᴇsᴛ...');

        // ✅ PrexzyVilla All-in-One Downloader API V3
        const apiUrl = `https://apis.prexzyvilla.site/download/aioV3?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.medias && data.data.medias.length > 0) {
            const videoInfo = data.data;

            // Prioritize no_watermark > hd_no_watermark > watermark versions
            const videoFile = videoInfo.medias.find(v => v.type === "video" && v.quality === "no_watermark") ||
                             videoInfo.medias.find(v => v.type === "video" && v.quality === "hd_no_watermark") ||
                             videoInfo.medias.find(v => v.type === "video" && v.quality === "watermark") ||
                             videoInfo.medias.find(v => v.type === "video");

            if (!videoFile || !videoFile.url) {
                return dybyreply(`❌ No downloadable video found.`);
            }

            console.log('Selected video URL:', videoFile.url);

            // Format file size for display
            const formatFileSize = (bytes) => {
                if (!bytes) return 'Unknown';
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(1024));
                return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
            };

            // Send the video
            await DybyTechInc.sendMessage(m.chat, {
                video: { url: videoFile.url },
                mimetype: 'video/mp4',
                fileName: `dyby_${Date.now()}.mp4`,
                caption: `🎥 *ᴘʟᴀᴛғᴏʀᴍ:* ${videoInfo.source || "Unknown"}\n👤 *ᴀᴜᴛʜᴏʀ:* ${videoInfo.author || "Unknown"}\n📝 *ᴛɪᴛʟᴇ:* ${videoInfo.title || "Untitled"}\n⏱ *ᴅᴜʀᴀᴛɪᴏɴ:* ${Math.round(videoInfo.duration / 1000) || 'Unknown'}s\n📦 *Size:* ${formatFileSize(videoFile.data_size) || 'Unknown'}\n🎯 *ǫᴜᴀʟɪᴛʏ:* ${videoFile.quality || 'Standard'}\n\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            dybyreply(`❌ Unable to fetch the video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Download command:', error.message);
        dybyreply(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}
case 'ig':
case 'instadl': {
    if (!text) return dybyreply(`❌ Please provide an Instagram reel/video link.\n\n*Example:* ${prefix + command} <link>`);

    try {
        // Show waiting message
        await dybyreply('⏳ Downloading Instagram video...');

        // ✅ PrexzyVilla Instagram V3 download API (recommended)
        const apiUrl = `https://api-aswin-sparky.koyeb.app/api/downloader/igdl?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.url && data.data.url.length > 0) {
            const videoInfo = data.data;

            // Find the best video URL (MP4 format)
            const videoFile = videoInfo.url.find(v => v.type === "mp4") || videoInfo.url[0];

            if (!videoFile || !videoFile.url) {
                return dybyreply(`❌ No downloadable Instagram video found.`);
            }

            // Extract filename from URL or use default
            let fileName = "Instagram_Video.mp4";
            if (videoFile.filename) {
                fileName = videoFile.filename;
            } else if (videoFile.url.includes("filename=")) {
                const filenameMatch = videoFile.url.match(/filename=([^&]+)/);
                if (filenameMatch && filenameMatch[1]) {
                    fileName = decodeURIComponent(filenameMatch[1]);
                }
            }

            await DybyTechInc.sendMessage(m.chat, {
                video: { url: videoFile.url },
                mimetype: 'video/mp4',
                fileName: fileName,
                caption: `📸 *ɪɴsᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅ*\n📝 *ᴛɪᴛʟᴇ:* ${fileName.replace('.mp4', '')}\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            dybyreply(`❌ Unable to fetch the Instagram video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Instagram download:', error.message);
        dybyreply(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}
case 'tiktok':
case 'tt':
case 'tiktokdl': {
    if (!text) return dybyreply(`*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} <ᴜʀʟ ᴏʀ ʟɪɴᴋ>`);

    try {
        // ✅ PrexzyVilla TikTok download API
        const apiUrl = `https://apis.davidcyriltech.my.id/download/tiktokv3?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        let videoUrl = null;
        let title = "TikTok Video";

        // Case 1: API format with downloadsVideo (array)
        if (data?.data?.downloadsVideo && Array.isArray(data.data.downloadsVideo)) {
            const hdVideo = data.data.downloadsVideo.find(v => v.quality.toLowerCase().includes("hd"));
            videoUrl = hdVideo ? hdVideo.url : data.data.downloadsVideo[0]?.url;
            title = data.data.title || title;
        }

        // Case 2: API format with data.result.downloadUrls (array)
        else if (data?.data?.result?.downloadUrls && Array.isArray(data.data.result.downloadUrls)) {
            const mp4Video = data.data.result.downloadUrls.find(v => v.type === "mp4");
            videoUrl = mp4Video ? mp4Video.url : data.data.result.downloadUrls[0]?.url;
            title = data.data.result.title || title;
        }

        if (!videoUrl) {
            return dybyreply(`❌ No downloadable video found in response.\n\nResponse: ${JSON.stringify(data, null, 2)}`);
        }

        // ✅ Send video to user
        await DybyTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            mimetype: 'video/mp4',
            fileName: `TikTok_Video.mp4`,
            caption: `🎥 *ᴛɪᴛʟᴇ:* ${title}\n> ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ✅`
        }, { quoted: qtext2 });

    } catch (error) {
        console.error("Error in TikTok Downloader:", error.message);
        dybyreply(`*❌ An error occurred while downloading the TikTok video.*`);
    }
    break;
}

case 'fb':
case 'facebook': {
    if (!text) return dybyreply(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ғᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ/ʀᴇᴇʟ ʟɪɴᴋ.\n\n*ᴇxᴀᴍᴘʟᴇ:* ${prefix + command} <link>`);

    try {
        // Show waiting message
        await dybyreply('⏳ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ғᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ...');

        // ✅ PrexzyVilla Facebook download API
        const apiUrl = `https://apis.prexzyvilla.site/download/facebook?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data && data.status && data.data && data.data.video && data.data.video.length > 0) {
            const videoInfo = data.data;
            
            // Prioritize higher quality videos (1080p > 720p > others)
            const videoFile = videoInfo.video.find(v => v.quality === "1080p") ||
                             videoInfo.video.find(v => v.quality === "720p (HD)") ||
                             videoInfo.video.find(v => v.quality.includes("720")) ||
                             videoInfo.video.find(v => v.quality.includes("HD")) ||
                             videoInfo.video[0];

            if (!videoFile || !videoFile.url) {
                return dybyreply(`❌ No downloadable Facebook video found.`);
            }

            // Check if URL is from snapcdn (needs special handling)
            let downloadUrl = videoFile.url;
            if (downloadUrl.includes('snapcdn.app')) {
                // For snapcdn URLs, we might need to handle them differently
                console.log('SnapCDN URL detected:', downloadUrl);
            }

            await DybyTechInc.sendMessage(m.chat, {
                video: { url: downloadUrl },
                mimetype: 'video/mp4',
                fileName: `Facebook_${Date.now()}.mp4`,
                caption: `📘 *ғᴀᴄᴇʙᴏᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅ*\n🎥 *ᴛɪᴛʟᴇ:* ${videoInfo.title || 'Facebook Video'}\n⏱ *ᴅᴜʀᴀᴛɪᴏɴ:* ${videoInfo.duration || 'Unknown'}\n🎯 *ǫᴜᴀʟɪᴛʏ:* ${videoFile.quality || 'Standard'}\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ`
            }, { quoted: qtext2 });

        } else {
            dybyreply(`❌ Unable to fetch the Facebook video. Please check the URL and try again.`);
        }

    } catch (error) {
        console.error('Error in Facebook download:', error.message);
        dybyreply(`❌ An error occurred while processing your request. Please try again later.\nError: ${error.message}`);
    }
    break;
}

   case "savestatus":
case "getstatus": {
   if (!isCreator) return dybyreply(mess.owner)
    if (!m.quoted) return dybyreply(`❌ *ʀᴇᴘʟʏ ᴛᴏ sᴛᴀᴛᴜs*\n\nʀᴇᴘʟʏ ᴛᴏ ᴀɴʏ sᴛᴀᴛᴜs ᴛᴏ sᴀᴠᴇ ɪᴛ`);
    
    try {
        await DybyTechInc.sendMessage(m.chat, {react: {text: '💾', key: m.key}});
        
        let media;
        if (/image/.test(m.quoted.mtype)) {
            media = await m.quoted.download();
            await DybyTechInc.sendMessage(m.chat, {
                image: media,
                caption: `✅ *sᴛᴀᴛᴜs sᴀᴠᴇᴅ*\n\n📱 ғʀᴏᴍ: @${m.quoted.sender.split('@')[0]}`,
                mentions: [m.quoted.sender]
            }, { quoted: qtext2 });
        } else if (/video/.test(m.quoted.mtype)) {
            media = await m.quoted.download();
            await DybyTechInc.sendMessage(m.chat, {
                video: media,
                caption: `✅ *sᴛᴀᴛᴜs sᴀᴠᴇᴅ*\n\n📱 ғʀᴏᴍ: @${m.quoted.sender.split('@')[0]}`,
                mentions: [m.quoted.sender]
            }, { quoted: qtext2 });
        } else {
            return dybyreply(`❌ *ᴜɴsᴜᴘᴘᴏʀᴛᴇᴅ*\n\nᴏɴʟʏ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ sᴛᴀᴛᴜs`);
        }
        
        await DybyTechInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
        
    } catch (error) {
        await DybyTechInc.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
        dybyreply(`❌ *ғᴀɪʟᴇᴅ*\n\n${error.message}`);
    }
}
break;

case 'flux':
case 'sdxl':
case 'pollinations':
case 'playground': {
    if (!text) return dybyreply(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀɴ ɪᴍᴀɢᴇ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ!\n\nᴇxᴀᴍᴘʟᴇ: ${prefix + command} ᴀ ᴄᴀᴛ ɪɴ sᴘᴀᴄᴇ`);
    
    try {
        await dybyreply('🎨 ɢᴇɴᴇʀᴀᴛɪɴɢ ɪᴍᴀɢᴇ...');
        
        const prompt = encodeURIComponent(text);
        const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=1024&model=flux&nologo=true&enhance=true`;
        
        await DybyTechInc.sendMessage(from, {
            image: { url: imageUrl },
            caption: `✨ *ɪᴍᴀɢᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ*\n\n📝 ᴘʀᴏᴍᴘᴛ: ${text}\n🤖 ᴍᴏᴅᴇʟ: ғʟᴜx-ᴘʀᴏ`
        }, { quoted: qtext2 });
        
    } catch (error) {
        console.error('Image Generation Error:', error);
        await dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ɪᴍᴀɢᴇ. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ.');
    }
}
break;

case 'pixart': {
    if (!text) return dybyreply(`❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀɴ ɪᴍᴀɢᴇ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ!\n\nᴇxᴀᴍᴘʟᴇ: ${prefix + command} ᴀ ʙᴇᴀᴜᴛɪғᴜʟ ᴀɴɪᴍᴇ ɢɪʀʟ`);
    
    try {
        await dybyreply('🎨 ɢᴇɴᴇʀᴀᴛɪɴɢ ᴘɪxᴀʀᴛ ɪᴍᴀɢᴇ...');
        
        // Using Pollinations AI with PixArt-Alpha model
        const prompt = encodeURIComponent(text);
        const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=1024&model=pixart&nologo=true&enhance=true`;
        
        await DybyTechInc.sendMessage(from, {
            image: { url: imageUrl },
            caption: `✨ *ᴘɪxᴀʀᴛ ɪᴍᴀɢᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ*\n\n📝 ᴘʀᴏᴍᴘᴛ: ${text}\n🤖 ᴍᴏᴅᴇʟ: ᴘɪxᴀʀᴛ-ᴀʟᴘʜᴀ`
        }, { quoted: qtext2 });
        
    } catch (error) {
        console.error('PixArt Generation Error:', error);
        await dybyreply('❌ ғᴀɪʟᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ɪᴍᴀɢᴇ. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ.');
    }
}
break;


case 'imgsearch': case 'img': {
    if (!text) {
        return dybyreply(`*ᴜsᴀɢᴇ:* .ʙɪɴɢɪᴍɢ <ǫᴜᴇʀʏ>\n\n*ᴇxᴀᴍᴘʟᴇ:* .ɪᴍɢ ᴄᴀᴛ`);
    }

    try {
        // Call the Bing Image Search API
        const apiResponse = await axios.get(`https://api.siputzx.my.id/api/s/bimg`, {
            params: { query: text }
        });

        if (apiResponse.status === 200 && apiResponse.data.status) {
            const images = apiResponse.data.data;

            if (images.length === 0) {
                return replyphistar(`No images found for "${text}". Please try another query.`);
            }

            // Send up to 5 images
            const maxImages = Math.min(images.length, 5);
            for (let i = 0; i < maxImages; i++) {
                await DybyTechInc.sendMessage(m.chat, {
                    image: { url: images[i] },
                    caption: `🔎 *ɪᴍᴀɢᴇ sᴇᴀʀᴄʜ ʀᴇsᴜʟᴛs*\n\n📄 *ǫᴜᴇʀʏ:* "${text}"\n📷 *ɪᴍᴀɢᴇ ${i + 1}/${maxImages}*`,
                }, { quoted: qtext2 });
            }
        } else {
            dybyreply(`❌ *ERROR:* Failed to fetch images. Please try again.`);
        }
    } catch (error) {
        console.error('Error in Image Search command:', error);
        dybyreply(`❌ *AN ERROR OCCURRED:* ${error.message}`);
    }
    break;
}


case 'metaai': {
    if (!text) return dybyreply(`💡 ᴜsᴀɢᴇ: ${command} <your question>\n\nᴇxᴀᴍᴘʟᴇ: ${command} ᴡʜᴀᴛ ɪs ᴀ ɴᴏᴜɴ`)

    async function metaai(text, logic) {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": {
                "id": "gpt-4",
                "name": "Meta AI",
                "maxLength": 32000,
                "tokenLimit": 8000,
                "completionTokenLimit": 5000,
                "deploymentName": "gpt-4"
            },
            "messages": [
                {
                    "pluginId": null,
                    "content": text,
                    "role": "user"
                }
            ],
            "prompt": logic,
            "temperature": 0.5
        }, {
            headers: {
                "Accept": "/*/",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
            }
        });

        return response.data;
    }

    try {
        let result = await metaai(text, "")

        // handle both string and object responses safely
        let answer = (typeof result === 'string') ? result 
                     : (result?.content || result?.message || JSON.stringify(result, null, 2))

        dybyreply(`🤖 *ᴍᴇᴛᴀᴀɪ*\n\n${answer}`)
    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Sorry, MetaAI could not respond. Please try again later.")
    }
}
break
case 'gpt4': {
  if (!text) return dybyreply(`ᴀsᴋ ᴍᴇ ᴀɴʏᴛʜɪɴɢ ᴇxᴀᴍᴘʟᴇ ${command} ᴡʜᴏ ɪs ᴍʀ ʙᴇᴀsᴛ`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
dybyreply(pei)
}
break
case 'gpt': {
  if (!text) return dybyreply(`ᴀsᴋ ᴍᴇ ᴀɴʏᴛʜɪɴɢ ᴇxᴀᴍᴘʟᴇ ${command} ᴡʜᴀᴛ ɪs ᴊᴀᴠᴀsᴄʀɪᴘᴛ?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
dybyreply(pei)
}
break
case 'codeai': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <your coding question>\n\nᴇxᴀᴍᴘʟᴇ: ${command} ᴡʀɪᴛᴇ ᴀ ᴊᴀᴠᴀsᴄʀɪᴘᴛ ғᴜɴᴄᴛɪᴏɴ ᴛᴏ ᴄʜᴇᴄᴋ ᴘʀɪᴍᴇ ɴᴜᴍʙᴇʀs`)

    try {
        async function openaiCode(prompt) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `You are a coding assistant. Answer only with clean, working code (with explanation if needed).\n\n${prompt}`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.4
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiCode(text)
        dybyreply(`👨‍💻 *ᴄᴏᴅᴇᴀɪ ʀᴇsᴘᴏɴsᴇ*\n\n${result}`)
    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Failed to fetch AI code response. Try again later.")
    }
}
break
case 'triviaai': {
    try {
        async function openaiTrivia(prompt) {
            let response = await axios.post("https://chateverywhere.app/api/chat/", {
                "model": {
                    "id": "gpt-4",
                    "name": "GPT-4",
                    "maxLength": 32000,
                    "tokenLimit": 8000,
                    "completionTokenLimit": 5000,
                    "deploymentName": "gpt-4"
                },
                "messages": [
                    {
                        "pluginId": null,
                        "content": `Give me one random trivia question with 4 multiple-choice options (A, B, C, D). Also provide the correct answer after the options.\n\nFormat like this:\n\n❓ Question: ...\n\nA) ...\nB) ...\nC) ...\nD) ...\n\n✅ Correct Answer: ...`,
                        "role": "user"
                    }
                ],
                "prompt": "",
                "temperature": 0.7
            }, {
                headers: {
                    "Accept": "/*/",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                }
            })
            return response.data
        }

        let result = await openaiTrivia("")
        dybyreply(`🎲 *ᴛʀɪᴠɪᴀ ɢᴀᴍᴇ* 🎲\n\n${result}`)
    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Failed to fetch trivia question. Try again later.")
    }
}
break;
case 'storyai': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <topic>\n\nᴇxᴀᴍᴘʟᴇ: ${command} ᴀ ʙʀᴀᴠᴇ ᴅᴏɢ ɪɴ sᴘᴀᴄᴇ`)

    try {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": { "id": "gpt-4", "name": "GPT-4" },
            "messages": [
                { "content": `Write me a short, entertaining story about: ${text}`, "role": "user" }
            ],
            "temperature": 0.7
        })
        dybyreply(`📖 *sᴛᴏʀʏᴀɪ*\n\n${response.data}`)
    } catch (e) {
        dybyreply("❌ StoryAI failed, try again later.")
    }
}
break
case 'photoai': {
  if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${prefix + command} <your prompt>\n\nExample: ${prefix + command} ᴀ ᴄᴀᴛ ᴡᴇᴀʀɪɴɢ sᴜɴɢʟᴀssᴇs`)

  try {
    let url = `https://image.pollinations.ai/prompt/${encodeURIComponent(text)}`

    // Send image back to user
    DybyTechInc.sendMessage(m.chat, { image: { url }, caption: `🖼️ *ᴀɪ ɢᴇɴᴇʀᴀᴛᴇᴅ ᴘʜᴏᴛᴏ*\n\nᴘʀᴏᴍᴘᴛ: ${text}` }, { quoted: qtext2 })
    
  } catch (e) {
    console.error(e)
    dybyreply("❌ Failed to generate AI photo, try again later.")
  }
}   
break
    

// Promote / Demote
case 'promote': {
   if (!m.isGroup) return dybyreply("ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs.")
if (!isCreator) 
  return dybyreply('❌ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await DybyTechInc.groupParticipantsUpdate(m.chat, [users], 'promote');
  dybyreply("ᴜsᴇʀ *ᴘʀᴏᴍᴏᴛᴇᴅ* ᴛᴏ ᴀᴅᴍɪɴ sᴜᴄᴄᴇssғᴜʟʟʏ ✅");
}
break;


case 'demoteall': {
    if (!m.isGroup) return dybyreply(mess.group)
    
    if (!isCreator) return dybyreply(mess.owner)
    
    const metadata = await DybyTechInc.groupMetadata(m.chat)
    let admins = metadata.participants.filter((u) => u.admin && u.id !== botNumber)
    
    for (let admin of admins) {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [admin.id], 'demote')
        await sleep(1000)
    }
    dybyreply(`✅ ᴅᴇᴍᴏᴛᴇᴅ ${admins.length} ᴀᴅᴍɪɴs`)
}
break


case 'promoteall': {
    if (!m.isGroup) return dybyreply(mess.group)
    
    if (!isCreator) return dybyreply(mess.owner)
    
if (participants.length > 200) {
 return dybyreply("⚠️ ᴛᴏᴏ ᴍᴀɴʏ ᴍᴇᴍʙᴇʀs (ᴍᴀx 200 ғᴏʀ ᴛʜɪs ᴏʀᴅᴇʀ))");
 }
    
    const metadata = await DybyTechInc.groupMetadata(m.chat)
    let users = metadata.participants.filter((u) => !u.admin && u.id !== botNumber)
    
    for (let user of users) {
        await DybyTechInc.groupParticipantsUpdate(m.chat, [user.id], 'promote')
        await sleep(1000)
    }
    dybyreply(`✅ ᴘʀᴏᴍᴏᴛᴇᴅ ${users.length} ᴜsᴇʀs ᴛᴏ ᴀᴅᴍɪɴ`)
}
break

case 'demote': {
   if (!m.isGroup) return dybyreply(mess.group)
if (!isCreator) 
  return dybyreply('❌ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ users ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ.');
  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await DybyTechInc.groupParticipantsUpdate(m.chat, [users], 'demote');
  dybyreply("ᴜsᴇʀ *ᴅᴇᴍᴏᴛᴇᴅ* ғʀᴏᴍ ᴀᴅᴍɪɴ sᴜᴄᴄᴇssғᴜʟʟʏ ✅");
}
break;

case 'github': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <username>\n\nExample: ${command} DybyTech-00`)

    try {
        let res = await axios.get(`https://api.github.com/users/${encodeURIComponent(text)}`)
        let user = res.data

        if (!user || !user.login) return dybyreply("❌ User not found.")

        let profileInfo = `👨‍💻 *ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟᴇ*\n
👤 ɴᴀᴍᴇ: ${user.name || "N/A"}
🔖 ᴜsᴇʀɴᴀᴍᴇ: ${user.login}
📍 ʟᴏᴄᴀᴛɪᴏɴ: ${user.location || "N/A"}
📦 ᴘᴜʙʟɪᴄ ʀᴇᴘᴏs: ${user.public_repos}
👥 ғᴏʟʟᴏᴡᴇʀs: ${user.followers}
👤 ғᴏʟʟᴏᴡɪɴɢ: ${user.following}
📅 ᴄʀᴇᴀᴛᴇᴅ: ${new Date(user.created_at).toLocaleDateString()}
🌐 ᴘʀᴏғɪʟᴇ: ${user.html_url}`

        // Send profile pic + info
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: user.avatar_url },
            caption: profileInfo
        }, { quoted: qtext2 })

    } catch (e) {
        console.error(e)
        dybyreply("⚠️ Failed to fetch GitHub profile. Try again.")
    }
}
break
case 'npm': {
    if (!text) return dybyreply(`⚠️ ᴜsᴀɢᴇ: ${command} <package>\n\nᴇxᴀᴍᴘʟᴇ: ${command} axios`)

    try {
        let res = await axios.get(`https://registry.npmjs.org/${encodeURIComponent(text)}`)
        let data = res.data

        if (!data.name) return dybyreply("❌ ᴘᴀᴄᴋᴀɢᴇ ɴᴏᴛ ғᴏᴜɴᴅ.")

        // Get latest version
        let latestVersion = data['dist-tags']?.latest
        let info = data.versions[latestVersion]

        let npmInfo = `📦 *𝑵𝑷𝑴 𝑷𝑨𝑪𝑲𝑨𝑮𝑬 𝑰𝑵𝑭𝑶*\n
🔖 Name: ${data.name}
📌 ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ: ${latestVersion}
📝 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${data.description || "N/A"}
👤 ᴀᴜᴛʜᴏʀ: ${info?.author?.name || "N/A"}
📅 ᴘᴜʙʟɪsʜᴇᴅ: ${info?.date || "N/A"}
📦 ʟɪᴄᴇɴsᴇ: ${info?.license || "N/A"}
🌐 ʜᴏᴍᴇᴘᴀɢᴇ: ${info?.homepage || "N/A"}
🔗 ɴᴘᴍ: https://www.npmjs.com/package/${data.name}
`

        sreply(npmInfo.trim())
    } catch (e) {
        console.error(e)
        sreply("⚠️ Failed to fetch NPM package info. Try again.")
    }
}
break;
   
// Hidetag
case 'hidetag': case 'tag': {
    if (!m.isGroup) return dybyreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return dybyreply(mess.admin);
    if (!isBotAdmins && !isCreator) return dybyreply(mess.botAdmin);

    DybyTechInc.sendMessage(m.chat, {
        text: q || '',
        mentions: participants.map(a => a.id)
    }, { quoted: qtext2 });
    break;
}


// ping command
case 'ping': {
    const start = Date.now();
    const latency = Date.now() - start; // simple ping

    const response = `⚡️ *ᴘᴏɴɢ!*  
_ʀᴇsᴘᴏɴsᴇ sᴘᴇᴇᴅ:_ *${latency} ᴍs*`;

    await DybyTechInc.sendMessage(m.chat, {
        text: response,
        contextInfo: {
            forwardingScore: 2,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
                newsletterJid: "120363407328298020@newsletter",
                serverMessageId: Math.floor(Date.now() / 1000)
            }
        }
    }, { quoted: qtext2 });
}
break;
        
        
case 'cid': case 'newsletter': {
if (!text) return dybyreply("ᴇxᴀᴍᴘʟᴇ : ʟɪɴᴋ ᴄʜᴀɴɴᴇʟ")
if (!text.includes("https://whatsapp.com/channel/")) return dybyreply("ʟɪɴᴋ ɪs ɴᴏᴛ ᴠᴀʟɪᴅ ʙʀᴏ ")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await DybyTechInc.newsletterMetadata("invite", result)
let teks = `
* *ɪᴅ :* ${res.id}
* *ɴᴀᴍᴇ :* ${res.name}
* *ғᴏʟʟᴏᴡᴇʀ:* ${res.subscribers}
* *sᴛᴀᴛᴜs :* ${res.state}
* *ᴠᴇʀɪғɪᴇᴅ :* ${res.verification == "VERIFIED" ? "Verified" : "No"}
`
return sreply(teks)
}
break;        
// premium command - FIXED VERSION
case 'buypremium':
case 'buyprem':
case 'premium': {
    let teks = `ʜᴇʏ ${pushname}👋\nᴡᴀɴᴛ ᴛᴏ ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ? ɪᴛ's ғʀᴇᴇ😂😂\n\n t.me/gojoxmdbot`;
    
    await DybyTechInc.sendMessage(m.chat, {
        image: { url: global.botimg }, // Ton image
        caption: teks,
        contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {  
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",  
                newsletterJid: "120363407328298020@newsletter"  
            }
        }
    }, { quoted: qtext2 });
}
break;
        

case "linkbot":
case "getbot":
case "telebot":
case "freebot":
case "repo": {
  try {
    await DybyTechInc.sendMessage(m.chat, {
      productMessage: {
        title: "ᴍᴇɢᴀʟᴏᴅᴏɴ ᴛɢ",
        description: "ᴛʜɪs ɪs ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ʙᴏᴛ ʀᴇʟᴇᴀsᴇ.",
        thumbnail: { url: global.botimg },
        productId: "PROD001",
        retailerId: "RETAIL001",
        url: "https://github.com/Dyby-Tech00",
        body: "ᴍᴇɢᴀʟᴏᴅᴏɴ ᴛɢ ɪs ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇᴅ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ ғᴏʀ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ",
        footer: "", // plain text only
        priceAmount1000: 77777997900,
        currencyCode: "$",
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "𝐏𝐀𝐈𝐑 𝐍𝐎𝐖",
              url: "https://t.me/meglodon_bot"
            })
          }
        ]
      }
    }, { quoted: qtext2 });
  } catch (err) {
    console.error('productMessage failed:', err?.message || err);

    // fallback: standard URL button message
    try {
      await DybyTechInc.sendMessage(m.chat, {
        text: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍 𝐓𝐆 𝐈𝐒 𝐇𝐄𝐑𝐄:",
        footer: "© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈",
        templateButtons: [
          { index: 1, urlButton: { displayText: "Get Bot", url: "https://whatsapp.com/channel/0029VbC8YMi5a24BkonciG0L" } }
        ]
      }, { quoted: qtext2 });
    } catch (secondErr) {
      console.error('fallback also failed:', secondErr);
      await DybyTechInc.sendMessage(m.chat, { text: "script : https://whatsapp.com/channel/0029VbC8YMi5a24BkonciG0L" }, { quoted: qtext2 });
    }
  }
}
break;     
        
                             
// script command - FIXED VERSION
case 'sc':       
case 'script':
case 'scriptbot': {
    const response = `
╭────────────────────❏
├𓇽  *\`𝐒𝐂𝐑𝐈𝐏𝐓\`* 𓇽
├────────────────────❏
 ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ɢᴇᴛ ᴛʜᴇ ʙᴏᴛ: https://t.me/meglodon_bot ᴛʏᴘᴇ /pair <ʏᴏᴜʀ ɴᴜᴍʙᴇʀ> ғᴏʀ ᴄᴏɴɴᴇᴄᴛ ᴏɴ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ
┕────────────────────❍`;

    await DybyTechInc.sendMessage(m.chat, {
  image: { url: global.botimg }, // Ton image
        text: response,
        contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
                newsletterJid: "120363407328298020@newsletter",
                serverMessageId: -1 // Changed to -1 to prevent errors
            }
            // Removed externalAdReply as it causes issues
        }
    }, { quoted: m });
}
break;
            
     
case 'sticker':
case 'stiker':
case 's': {
    if (!q && !quoted) {
        return dybyreply(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`);
    }

    if (!mime) mime = (quoted.msg || quoted).mimetype || '';

    if (/image/.test(mime)) {
        const media = await quoted.download();
        await DybyTechInc.sendImageAsSticker(m.chat, media, m, { 
            packname: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍', 
            author: '𝙳𝙴𝚅 𝙳𝚈𝙱𝚈' 
        });
    } else if (/video/.test(mime)) {
        const duration = (quoted.msg || quoted).seconds || 0;
        if (duration > 10) return dybyreply('Maximum 10 sᴇᴄᴏɴᴅs!');
        const media = await quoted.download();
        await DybyTechInc.sendVideoAsSticker(m.chat, media, m, { 
            packname: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍', 
            author: '𝙳𝙴𝚅 𝙳𝚈𝙱𝚈' 
        });
    } else {
        return dybyreply(`sᴇɴᴅ ᴀɴ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}. ᴠɪᴅᴇᴏ sʜᴏᴜʟᴅ ʙᴇ 1-10 sᴇᴄᴏɴᴅs.`);
    }
    break;
} 
        
  
case 'approve': case 'approve-all':
 case 'approveall': {
	if (!m.isGroup) return dybyreply(mess.group)
if (!isCreator) return dybyreply(mess.owner)

const responseList = await DybyTechInc.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return dybyreply("no pending requests detected at the moment!");

for (const participan of responseList) {
    const response = await DybyTechInc.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
dybyreply("has approved all pending requests✅");

}
 break;
 
 case 'reject': case 'reject-all': {
	if (!m.isGroup) return dybyreply(mess.group)
if (!isCreator) return dybyreply(mess.owner)


const responseList = await DybyTechInc.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return dybyreply("no pending requests detected");

for (const participan of responseList) {
    const response = await DybyTechInc.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
dybyreply("pending requests have been rejected!");

}
 break;      
        
case 'git': case 'gitclone':
if (!args[0]) return dybyreply(`ᴡʜᴇʀᴇ ɪs ᴛʜᴇ ʟɪɴᴋ?\nᴇxᴀᴍᴘʟᴇ :\n${prefix}${command} https://github.com`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return dybyreply(`ʟɪɴᴋ ɪɴᴠᴀʟɪᴅ!!`)
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, userx, repox] = args[0].match(regex) || []
    repox = repox.replace(/.git$/, '')
    let url2 = `https://api.github.com/repos/${userx}/${repox}/zipball`
    let filename2 = (await fetch(url2, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename2=(.*)/)[1]
    DybyTechInc.sendMessage(m.chat, { document: { url: url2 }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => dybyreply(mess.error))
break; 
                       

case 'emojimix': {
    const [emoji1, emoji2] = text.split`+`;
    if (!emoji1 || !emoji2) 
        return dybyreply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 😅+🤔`);

    dybyreply(mess.wait);

    const anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);

    for (let res of anu.results) {
        const encmedia = await DybyTechInc.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
            categories: res.tags
        });
        fs.unlinkSync(encmedia);
    }
}
break;

case 'toonce':
case 'toviewonce': {
    if (!quoted) return dybyreply(`ʀᴇᴘʟʏ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ`);

    let mediaPath;
    if (/image/.test(mime)) {
        mediaPath = await DybyTechInc.downloadAndSaveMediaMessage(quoted);
        await DybyTechInc.sendMessage(m.chat, {
            image: { url: mediaPath },
            caption: 'ʜᴇʀᴇ ʏᴏᴜ ɢᴏ!',
            fileLength: '999',
            viewOnce: true
        }, { quoted: qtext2 });
    } else if (/video/.test(mime)) {
        mediaPath = await DybyTechInc.downloadAndSaveMediaMessage(quoted);
        await DybyTechInc.sendMessage(m.chat, {
            video: { url: mediaPath },
            caption: 'ʜᴇʀᴇ ʏᴏᴜ ɢᴏ!',
            fileLength: '99999999',
            viewOnce: true
        }, { quoted: m });
    }
}
break;

case 'toqr': {
    if (!q) return dybyreply('ᴘʟᴇᴀsᴇ ɪɴᴄʟᴜᴅᴇ ʟɪɴᴋ ᴏʀ ᴛᴇxᴛ!');

    const qrcode = require('qrcode');
    const dataUrl = await qrcode.toDataURL(q, { scale: 35 });
    const dataBuffer = Buffer.from(dataUrl.replace('data:image/png;base64,', ''), 'base64');
    const tempFile = getRandom('.jpg');

    fs.writeFileSync(tempFile, dataBuffer);
    const medi = fs.readFileSync(tempFile);

    await DybyTechInc.sendMessage(m.chat, {
        image: medi,
        caption: 'ʜᴇʀᴇ ʏᴏᴜ ɢᴏ!'
    }, { quoted: qtext2 });

    setTimeout(() => fs.unlinkSync(tempFile), 10000);
}
break;
            
    /*
    case 'addowner':
                if (!isCreator) return dybyreply(mess.owner)
if (!args[0]) return dybyreply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await DybyTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return dybyreply(`ᴇɴᴛᴇʀ ᴀ ᴠᴀʟɪᴅ ᴀɴᴅ ʀᴇɢɪsᴛᴇʀᴇᴅ ɴᴜᴍʙᴇʀ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ!!!`)
owner.push(bnnd)
fs.writeFileSync('./allfunc/owner.json', JSON.stringify(owner))
dybyreply(`ɴᴜᴍʙᴇʀ ${bnnd} ʜᴀs ʙᴇᴄᴏᴍᴇ ᴀɴ ᴏᴡɴᴇʀ!!!`)
break
case 'delowner':
                if (!isCreator) return dybyreply(mess.owner)
if (!args[0]) return dybyreply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp2 = owner.indexOf(ya)
owner.splice(unp2, 1)
fs.writeFileSync('./allfunc/owner.json', JSON.stringify(owner))
dybyreply(`ᴛʜᴇ ɴᴜᴍʙʀʀ ${ya} ʜᴀs ʙᴇᴇɴ ᴅᴇʟᴇᴛᴇᴅ ғʀᴏᴍ ᴏᴡɴᴇʀ ʟɪsᴛ ʙʏ ᴛʜᴇ ᴏᴡɴᴇʀ!!!`)
break
         
*/
case 'readviewonce': case 'vv': {

    try {
        if (!m.quoted) return dybyreply('❌ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡᴏɴᴄᴇ ᴠɪᴅᴇᴏ, ɪᴍᴀɢᴇ, ᴏʀ ᴀᴜᴅɪᴏ.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return dybyreply('❌ ɴᴏ ᴍᴇᴅɪᴀ ғᴏᴜɴᴅ ɪɴ ᴛʜᴇ ǫᴜᴏᴛᴇᴅ ᴍᴇssᴀɢᴇ.');

        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await DybyTechInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await DybyTechInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await DybyTechInc.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv command:', error);
        dybyreply('❌ An error occurred while processing your request.');
    }
    break;
}
case 'readviewonce2':
case 'vv2':
case 'save': {
    try {
        if (!m.quoted) return dybyreply('❌ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴠɪᴇᴡᴏɴᴄᴇ ᴠɪᴅᴇᴏ, ɪᴍᴀɢᴇ, ᴏʀ ᴀᴜᴅɪᴏ.');

        const quotedMessage = m.msg.contextInfo.quotedMessage;
        if (!quotedMessage) return dybyreply('❌ ɴᴏ ᴍᴇᴅɪᴀ ғᴏᴜɴᴅ ɪɴ ᴛʜᴇ ǫᴜᴏᴛᴇᴅ ᴍᴇssᴀɢᴇ.');q
        if (quotedMessage.imageMessage) {
            let imageCaption = quotedMessage.imageMessage.caption || '';
            let imageUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await DybyTechInc.sendMessage(m.sender, { image: { url: imageUrl }, caption: imageCaption });
        }

        if (quotedMessage.videoMessage) {
            let videoCaption = quotedMessage.videoMessage.caption || '';
            let videoUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await DybyTechInc.sendMessage(m.sender, { video: { url: videoUrl }, caption: videoCaption });
        }

        if (quotedMessage.audioMessage) {
            let audioUrl = await DybyTechInc.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
            await DybyTechInc.sendMessage(m.sender, { audio: { url: audioUrl }, mimetype: 'audio/mp4' });
        }

    } catch (error) {
        console.error('Error processing vv2/save command:', error);
        dybyreply('❌ Error saving media.');
    }
    break;
}


// ================= ʀᴇᴍɪɴɪ ================= //
case 'remini':
case 'enhance':
case 'hd':
case 'upscale': {
    try {
        const quotedMsg = quoted || m;
        const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

        if (!mimeType || !mimeType.startsWith('image/')) {
            return dybyreply("📸 ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ *ɪᴍᴀɢᴇ* (ᴊᴘᴇɢ/ᴘɴɢ).");
        }

        // Download media buffer
        const mediaBuffer = await quotedMsg.download?.() || null;
        if (!mediaBuffer) return dybyreply("❌ Failed to download image.");

        // File extension
        let extension = mimeType.includes("jpeg") ? ".jpg" : 
                        mimeType.includes("png") ? ".png" : null;
        if (!extension) return dybyreply("❌ ᴜɴsᴜᴘᴘᴏʀᴛᴇᴅ ғᴏʀᴍᴀᴛ. ᴜsᴇ ᴊᴘᴇɢ/ᴘɴɢ ᴏɴʟʏ.");

        // Save to temp
        const inputPath = path.join(os.tmpdir(), `remini_in_${Date.now()}${extension}`);
        fs.writeFileSync(inputPath, mediaBuffer);

        // Notify user
        await dybyreply("🔄 ᴇɴʜᴀɴᴄɪɴɢ ɪᴍᴀɢᴇ ǫᴜᴀʟɪᴛʏ... ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ⏳");

        // Upload to Catbox
        const form = new FormData();
        form.append('fileToUpload', fs.createReadStream(inputPath), `image${extension}`);
        form.append('reqtype', 'fileupload');

        const { data: imageUrl } = await axios.post("https://catbox.moe/user/api.php", form, {
            headers: form.getHeaders(),
            timeout: 30000
        });
        fs.existsSync(inputPath) && fs.unlinkSync(inputPath);

        if (!imageUrl || !imageUrl.startsWith("http")) {
            return dybyreply("❌ Failed to upload image.");
        }

        // Call Enhance API
        const { data: enhanced } = await axios.get(
            `https://www.veloria.my.id/imagecreator/upscale?url=${encodeURIComponent(imageUrl)}`,
            { responseType: "arraybuffer", timeout: 60000 }
        );

        if (!enhanced || enhanced.length < 200) {
            return dybyreply("❌ API returned invalid image data.");
        }

        // Save enhanced image
        const outputPath = path.join(os.tmpdir(), `remini_out_${Date.now()}.jpg`);
        fs.writeFileSync(outputPath, enhanced);

        // Send result
        await DybyTechInc.sendMessage(m.chat, {
            image: fs.readFileSync(outputPath),
            caption: "*✅ ɪᴍᴀɢᴇ ᴇɴʜᴀɴᴄᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!*\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ "
        }, { quoted: qtext2 });

        fs.existsSync(outputPath) && fs.unlinkSync(outputPath);

    } catch (error) {
        console.error("Image Enhancement Error:", error);
        dybyreply(`❌ Error: ${error.message || "Enhancement failed. Try again later."}`);
    }
}
break;
        
       
   
        
   case 'kickall':
case 'removeall':
case 'cleargroup': {
    if (!m.isGroup) return dybyreply("❌ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs!");

    if (!isCreator) {
        const groupMetadata = await DybyTechInc.groupMetadata(from);
        const groupAdmins = groupMetadata.participants.filter(p => p.admin !== null).map(p => p.id);
        if (!groupAdmins.includes(m.sender)) {
            return dybyreply("❌ ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!");
        }
    }

    try {
        const groupMetadata = await DybyTechInc.groupMetadata(from);
        const botJid = DybyTechInc.user?.id || DybyTechInc.user?.jid;

        // except bot & admins
        const membersToRemove = groupMetadata.participants
            .filter(p => p.admin === null && p.id !== botJid)
            .map(p => p.id);

        if (membersToRemove.length === 0) {
            return dybyreply("❌ ɴᴏ ᴍᴇᴍʙᴇʀs ᴛᴏ ʀᴇᴍᴏᴠᴇ (ᴀʟʟ ᴀʀᴇ ᴀᴅᴍɪɴs ᴏʀ ʙᴏᴛ).");
        }

        await dybyreply(`⚠️ *ᴡᴀʀɴɪɴɢ* ⚠️\n\nʀᴇᴍᴏᴠɪɴɢ *${membersToRemove.length}* ᴍᴇᴍʙᴇʀs ᴀᴛ ᴏɴᴄᴇ...`);

        // remove all in one go
        await DybyTechInc.groupParticipantsUpdate(from, membersToRemove, "remove");

        await dybyreply(`✅ sᴜᴄᴄᴇssғᴜʟʟʏ ʀᴇᴍᴏᴠᴇᴅ *${membersToRemove.length}* ᴍᴇᴍʙᴇʀs.\n\n> *ᴇxᴇᴄᴜᴛᴇᴅ ʙʏ:* @${m.sender.split('@')[0]}`, {
            mentions: [m.sender]
        });

    } catch (error) {
        console.error("Kickall error:", error);
        dybyreply("❌ Failed to remove members. Possibly due to rate limits or permission issues.");
    }
}
break;
       
  case 'alive': 
case 'test': {
    // 1. Réaction au message
    await DybyTechInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    try {
        // 2. Préparation des variables
        // Vérifie si la fonction runtime existe, sinon affiche les secondes brutes
        const uptime = typeof runtime !== 'undefined' ? runtime(process.uptime()) : process.uptime().toFixed(0) + "s";
        const userTag = (m.sender || m.chat).split("@")[0];

        let dybyAlive = `╭───────────────────   
│ ♲ *ᴏɴʟɪɴᴇ :* ʏᴇsɪʀ ᴅᴇᴀʀ @${userTag}
│ ♲ *ᴜᴘᴛɪᴍᴇ :* ${uptime}
│
│ ♲ *ʙᴏᴛ-ɴᴀᴍᴇ :* 𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆
│ ♲ *ᴠᴇʀsɪᴏɴ :* \`2.0.0\`
│ ♲ *ᴅᴇᴠ :* ᴅʏʙʏ ᴛᴇᴄʜ
│ ♲ *sᴛᴀᴛᴜs :* ᴀʟᴡᴀʏs ᴀᴄᴛɪᴠᴇ 🚀
╰───────────────────
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ*`;

        // 3. Envoi du message avec image et contextInfo
        await DybyTechInc.sendMessage(
            m.chat,
            {
                image: { url: global.botimg },
                caption: dybyAlive,
                mentions: [m.sender], // Nécessaire pour que le @user soit cliquable
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363407328298020@newsletter',
                        newsletterName: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: m } // Utilisation de 'm' (plus sûr que 'qtext2')
        );

    } catch (error) {
        console.error('Erreur dans la commande alive:', error);
        await DybyTechInc.sendMessage(m.chat, { text: "❌ Erreur lors de l'exécution de la commande." }, { quoted: m });
    }
}
break;
        
   case 'runtime': case 'uptime': {
    let runtimetext = `*𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆* 𝐇𝐀𝐕𝐄 𝐁𝐄𝐄𝐍 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐅𝐎𝐑 ${runtime(process.uptime())}`;
    await DybyTechInc.sendMessage(m.chat, {
        text: runtimetext,
        contextInfo: {
            forwardingScore: 2,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {  
                newsletterName: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",  
                newsletterJid: "120363407328298020@newsletter",
                serverMessageId: Math.floor(Date.now() / 1000) + 2 // Dynamic ID
            }
        }
    }, { quoted: m });
}
break;    
      
        
 case 'owner': {
const repf = await DybyTechInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} ᴄᴏɴᴛᴀᴄᴛ`, 
contacts: list }, mentions: [sender] }, { quoted: m })
DybyTechInc.sendMessage(from, { text : `> ᴡᴀssᴜᴘ @${sender.split("@")[0]}, ᴍʏ ʜᴀɴᴅsᴏᴍᴇ ᴏᴡɴᴇʀ ʙᴜᴛ ɪ ᴡᴀs ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ.`, mentions: [sender]}, { quoted: qtext2 })
}
break
        
      case 'tourl': case 'imgtourl': case 'imgurl': case 'url': case 'geturl': case 'upload': case 'host': {
  try {
    await DybyTechInc.sendMessage(from, { react: { text: "🖇", key: m.key } });

    const quotedMsg = m.quoted ? m.quoted : m;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';

    if (!mimeType) {
      return dybyreply("❌ ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ, ᴠɪᴅᴇᴏ, ᴏʀ ᴀᴜᴅɪᴏ ғɪʟᴇ");
    }

    const mediaBuffer = await quotedMsg.download();
    const tempFilePath = path.join(os.tmpdir(), `catbox_upload_${Date.now()}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else if (mimeType.includes('image/webp')) extension = '.webp';
    else if (mimeType.includes('video')) extension = '.mp4';
    else if (mimeType.includes('audio')) extension = '.mp3';
    else extension = path.extname(quotedMsg.filename || '') || '';

    const fileName = `file${extension}`;

    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), fileName);
    form.append('reqtype', 'fileupload');

    const response = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    if (!response.data) throw new Error("Error uploading to Catbox");

    const mediaUrl = response.data;

    try { fs.unlinkSync(tempFilePath); } catch (e) {}

    let mediaType = 'File';
    if (mimeType.includes('image')) mediaType = 'Image';
    else if (mimeType.includes('video')) mediaType = 'Video';
    else if (mimeType.includes('audio')) mediaType = 'Audio';

    const formatBytes = (bytes) => {
      if (!bytes) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const resultMsg =
      `*${mediaType} ᴜᴘʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*\n\n` +
      `*sɪᴢᴇ:* ${formatBytes(mediaBuffer.length)}\n` +
      `*ᴜʀʟ:* ${mediaUrl}\n\n` +
      `> © ᴜᴘʟᴏᴀᴅᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`;

    // --- CONSTRUCTION DU MESSAGE AVEC BOUTON COPIER ---
    await DybyTechInc.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: resultMsg },
            footer: { text: "ᴅʏʙʏ ᴛᴇᴄʜ ɪɴᴄ" },
            header: {
              hasMediaAttachment: false,
              title: "ᴜᴘʟᴏᴀᴅᴇʀ ʀᴇsᴜʟᴛ"
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_copy",
                  buttonParamsJson: JSON.stringify({
                    display_text: "📋 ᴄᴏᴘʏ ᴛʜᴇ ʟɪɴᴋ",
                    id: "copy_link",
                    copy_code: mediaUrl
                  })
                }
              ]
            }
          }
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await dybyreply(`❌ Error: ${e.message || e}`);
  }
}
break;  
 
case "glitchtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .glitchtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/glitchtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `⚡ Glitch Text Generated for: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Glitch Text." }, { quoted: m });
    }
}
break;

// ▫️ /writetext - Write on wet glass
case "writetext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .writetext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/writetext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `✍️ ᴡʀɪᴛᴇ ᴛᴇxᴛ ʟᴏɢᴏ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Write Text logo." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /advancedglow - Advanced glow effects
case "advancedglow": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nᴇxᴀᴍᴘʟᴇ: .advancedglow Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/advancedglow?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💡 ᴀᴅᴠᴀɴᴄᴇᴅ ɢʟᴏᴡ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Advanced Glow." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /typographytext - Typography on pavement
case "typographytext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .typographytext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/typographytext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🖋️ ᴛʏᴘᴏɢʀᴀᴘʜʏ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Typography Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /pixelglitch - Pixel glitch effects
case "pixelglitch": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .pixelglitch Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/pixelglitch?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🧩 ᴘɪxᴇʟ ɢʟɪᴛᴄʜ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Pixel Glitch." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /neonglitch - Neon glitch effects
case "neonglitch": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .neonglitch Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/neonglitch?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💥 Neon Glitch Generated for: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Neon Glitch." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /flagtext - Nigeria flag text
case "flagtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .flagtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/flagtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `ғʟᴀɢ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Flag Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /flag3dtext - 3D American flag text
case "flag3dtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .flag3dtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/flag3dtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `3ᴅ ғʟᴀɢ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating 3D Flag Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /deletingtext - Eraser deleting effect
case "deletingtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .deletingtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/deletingtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🩶 ᴅᴇʟᴇᴛɪɴɢ ᴛᴇxᴛ ᴇғғᴇᴄᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Deleting Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /blackpinkstyle - Blackpink style logo
case "blackpinkstyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .blackpinkstyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/blackpinkstyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🎀 ʙʟᴀᴄᴋᴘɪɴᴋ sᴛʏʟᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Blackpink Style." }, { quoted: qtext2 });
    }
}
break;
// ▫️ /glowingtext - Glowing text effects
case "glowingtext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .glowingtext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/glowingtext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💫 ɢʟᴏᴡɪɴɢ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Glowing Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /underwatertext - 3D underwater text
case "underwatertext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .underwatertext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/underwatertext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌊 Underwater Text Generated for: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Underwater Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /logomaker - Bear logo maker
case "logomaker": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .logomaker Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/logomaker?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🐻 ʟᴏɢᴏ ᴍᴀᴋᴇʀ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Logo Maker." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /cartoonstyle - Cartoon graffiti text
case "cartoonstyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .cartoonstyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/cartoonstyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🎨 ᴄᴀʀᴛᴏᴏɴ sᴛʏʟᴇ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Cartoon Style Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /papercutstyle - 3D paper cut style
case "papercutstyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .papercutstyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/papercutstyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `✂️ ᴘᴀᴘᴇʀ ᴄᴜᴛ sᴛʏʟᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Paper Cut Style." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /watercolortext - Watercolor text effect
case "watercolortext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .watercolortext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/watercolortext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🖌️ ᴡᴀᴛᴇʀᴄᴏʟᴏʀ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Watercolor Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /effectclouds - Text on clouds in sky
case "effectclouds": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .effectclouds Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/effectclouds?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `☁️ ᴄʟᴏᴜᴅs ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Cloud Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /blackpinklogo - Blackpink logo creator
case "blackpinklogo": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .blackpinklogo Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/blackpinklogo?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💖 ʙʟᴀᴄᴋᴘɪɴᴋ ʟᴏɢᴏ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Blackpink Logo." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /gradienttext - 3D gradient text effect
case "gradienttext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .gradienttext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/gradienttext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌈 ɢʀᴀᴅɪᴇɴᴛ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Gradient Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /summerbeach - Write in sand summer beach
case "summerbeach": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .summerbeach Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/summerbeach?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🏖️ sᴜᴍᴍᴇʀ ʙᴇᴀᴄʜ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Summer Beach Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /luxurygold - Luxury gold text effect
case "luxurygold": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .luxurygold Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/luxurygold?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🥇 ʟᴜxᴜʀʏ ɢᴏʟᴅ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Luxury Gold Text." }, { quoted: qtext2 });
    }
}
break;
// ▫️ /multicoloredneon - Multicolored neon lights
case "multicoloredneon": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .multicoloredneon Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/multicoloredneon?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌈 ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅ ɴᴇᴏɴ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Multicolored Neon." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /sandsummer - Write in sand summer beach
case "sandsummer": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .sandsummer Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/sandsummer?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🏝️ sᴀɴᴅ sᴜᴍᴍᴇʀ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Sand Summer Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /galaxywallpaper - Galaxy mobile wallpaper
case "galaxywallpaper": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .galaxywallpaper Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/galaxywallpaper?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌌 ɢᴀʟᴀxʏ ᴡᴀʟʟᴘᴀᴘᴇʀ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Galaxy Wallpaper." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /style1917 - 1917 style text effect
case "style1917": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .style1917 Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/style1917?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🎖️ 1917 sᴛʏʟᴇ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating 1917 Style Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /makingneon - Neon light with galaxy style
case "makingneon": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .makingneon Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/makingneon?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🌠 ᴍᴀᴋɪɴɢ ɴᴇᴏɴ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Making Neon." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /royaltext - Royal text effect
case "royaltext": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .royaltext Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/royaltext?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `👑 ʀᴏʏᴀʟ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Royal Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /freecreate - 3D hologram text effect
case "freecreate": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .freecreate Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/freecreate?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🧊 3D ʜᴏʟᴏɢʀᴀᴍ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Free Create Text." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /galaxystyle - Galaxy style name logo
case "galaxystyle": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .galaxystyle Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/galaxystyle?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `🪐 ɢᴀʟᴀxʏ sᴛʏʟᴇ ʟᴏɢᴏ ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Galaxy Style Logo." }, { quoted: qtext2 });
    }
}
break;

// ▫️ /lighteffects - Green neon light effects
case "lighteffects": {
    if (args.length < 1) {
        return DybyTechInc.sendMessage(from, { text: "❌ ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ!\nExample: .lighteffects Dyby" }, { quoted: qtext2 });
    }
    let text = args.join(" ");
    try {
        let url = `https://apis.prexzyvilla.site/lighteffects?text=${encodeURIComponent(text)}`;
        await DybyTechInc.sendMessage(from, { image: { url }, caption: `💡 ʟɪɢʜᴛ ᴇғғᴇᴄᴛs ɢᴇɴᴇʀᴀᴛᴇᴅ ғᴏʀ: ${text}` }, { quoted: qtext2 });
    } catch (e) {
        console.error(e);
        await DybyTechInc.sendMessage(from, { text: "⚠️ Error generating Light Effects." }, { quoted: qtext2 });
    }
}
break        
        
case 'wasted':
case 'dead':
case 'live': {
    await DybyTechInc.sendMessage(m.chat, { react: { text: "⚰️", key: m.key } });

    try {
        const axios = require('axios');

        let userToWaste;

        // Mention
        if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
            userToWaste = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
        }
        // Reply
        else if (m.message?.extendedTextMessage?.contextInfo?.participant) {
            userToWaste = m.message.extendedTextMessage.contextInfo.participant;
        }
        // Numéro en argument
        else if (args[0]) {
            userToWaste = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        }

        if (!userToWaste) {
            return DybyTechInc.sendMessage(m.chat, {
                text: `*╭─────────────────⊷*
│ 📥 *ᴡᴀsᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅ*
*╰─────────────────⊷*
│ 📂 *ɴᴀᴍᴇ :* ɴᴏᴛ ғᴏᴜɴᴅ
│ 👥 number : ɴᴏᴛ ᴘʀᴏᴠɪᴅᴇᴅ
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

⚠️ Mention someone, reply to a message, or provide a number.
Example: ${prefix}wasted @user

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
            }, { quoted: qtext2 });
        }

        let profilePic;
        try {
            profilePic = await DybyTechInc.profilePictureUrl(userToWaste, 'image');
        } catch {
            profilePic = 'https://i.imgur.com/2wzGhpF.jpeg';
        }

        const wastedResponse = await axios.get(
            `https://some-random-api.com/canvas/overlay/wasted?avatar=${encodeURIComponent(profilePic)}`,
            { responseType: 'arraybuffer' }
        );

        const userTag = userToWaste.split("@")[0];

        const caption = `
*╭─────────────────⊷*
│ 📥 *ᴡᴀsᴛᴇᴅ ᴇғғᴇᴄᴛ*
*╰─────────────────⊷*
│ 📂 *ɴᴀᴍᴇ :* @${userTag}
│ 👥 number : ${userTag}
│ 🛡️ *sᴛᴀᴛᴜs :* sᴜᴄᴄᴇssғᴜʟ
*╰─────────────────⊷*

⚰️ *Rest in pieces...* 💀

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`.trim();

        await DybyTechInc.sendMessage(m.chat, {
            image: Buffer.from(wastedResponse.data),
            caption: caption,
            footer: "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐓𝐆",
            mentions: [userToWaste]
        }, { quoted: m });

    } catch (err) {
        console.error(err);

        await DybyTechInc.sendMessage(m.chat, { react: { text: "❌", key: m.key } });

        await DybyTechInc.sendMessage(m.chat, {
            text: `*╭─────────────────⊷*
│ 📥 *ᴡᴀsᴛᴇᴅ ᴇʀʀᴏʀ*
*╰─────────────────⊷*
│ 🛡️ *sᴛᴀᴛᴜs :* ғᴀɪʟᴇᴅ
*╰─────────────────⊷*

❌ Failed to create wasted image.

> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈`
        }, { quoted: qtext2 });
    }
}
break;     

case 'antidemote': {

    if (!isCreator) return dybyreply(mess.owner);
    
    if (args[0] === 'on') {
        setSetting("bot", "antidemote", true);

        dybyreply(`ᴀɴᴛɪ ᴅᴇᴍᴏᴛᴇ ɪs ᴀᴄᴛɪᴠᴀᴛᴇ sᴜᴄᴄᴇssғᴜʟʟʏ`);

    } 

    else if (args[0] === 'off') {
        setSetting("bot", "antidemote", false);

        dybyreply(`ᴀɴᴛɪᴅᴇᴍᴏᴛᴇ ɪs ᴅɪsᴀʙʟᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ`);
    } 
    else {
        
        dybyreply(`ᴜsᴀɢᴇ:
• .ᴀɴᴛɪᴅᴇᴍᴏᴛᴇ ᴏɴ
• .ᴀɴᴛɪᴅᴇᴍᴏᴛᴇ ᴏғғ`);
    }
}

break;
   
  case 'antipromote': {
    if (!isCreator) return dybyreply(mess.owner);

    if (args[0] === 'on') {
        setSetting("bot", "antipromote", true);

        dybyreply(`ᴀɴᴛɪᴘʀᴏᴍᴏᴛᴇ ɪs ᴀᴄᴛɪᴠᴀᴛᴇ sᴜᴄᴄᴇssғᴜʟʟʏ`);
    } 
    else if (args[0] === 'off') {
        setSetting("bot", "antipromote", false);

        dybyreply(`ᴀɴᴛɪᴘʀᴏᴍᴏᴛᴇ ɪs ᴅɪsᴀʙʟᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ`);
    } 
    else {
        dybyreply(`ᴜsᴀɢᴇ:
• .ᴀɴᴛɪᴘʀᴏᴍᴏᴛᴇ ᴏɴ
• .ᴀɴᴛɪᴘʀᴏᴍᴏᴛᴇ ᴏғғ`);
    }
}
break;      
        
default:
if (body.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${body.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (body.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (body.startsWith('®')) {
if (!isCreator) return;
require("child_process").exec(body.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})