  require('dotenv').config();
require('./setting/config');
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');
const os = require('os');
const { sleep } = require('./nexstore/utils');
const { BOT_TOKEN } = require('./nexstore/token');
const { autoLoadPairs } = require('./autoload');
 
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const reply = (msg, text, options = {}) => {
  return bot.sendMessage(msg.chat.id, text, {
    reply_to_message_id: msg.message_id,
    ...options
  });
};
const replyPhoto = (msg, photo, options = {}) => {
  return bot.sendPhoto(msg.chat.id, photo, {
    reply_to_message_id: msg.message_id,
    ...options
  });
};
const fileExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};
const adminFilePath = path.join(__dirname, 'nexstore', 'admin.json');
let adminIDs = [];

// Store for user tracking
const userFilePath = path.join(__dirname, 'nexstore', 'users.json');
let userIDs = new Set();

const REQUIRED_CHANNELS = [ '@dobertomrlitdevcanal' ];
const REQUIRED_CHATS = [ '@dobertomrlitdevcanal' ];
  const REQUIRED_GROUPS = ['@dobertomrlitdevcanal'];
const SOCIAL_LINKS = {
  group1: 'https://t.me/dobertomrlitdevcanal',
 
  developer: 'https://t.me/dobertomrlitdevcanal',
};
const premiumFile = path.join(__dirname, 'nexstore', 'premium.json');

let pairCooldown = {};

const loadAdminIDs = async () => {
  const ownerID = '7208911032';
  const defaultAdmins = [ownerID];

  if (!(await fileExists(adminFilePath))) {
    await fs.writeFile(adminFilePath, JSON.stringify(defaultAdmins, null, 2));
    adminIDs = defaultAdmins;
    console.log('✅ created admin.json with default owner id');
  } else {
    try {
      const raw = await fs.readFile(adminFilePath, 'utf8');
      adminIDs = JSON.parse(raw);
    } catch (err) {
      console.error('❌ error loading admin.json:', err);
      adminIDs = defaultAdmins;
    }
  }
  console.log('📥 loaded admin ids:', adminIDs);
};

function runtime(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}
// Load user IDs
const loadUserIDs = async () => {
  if (await fileExists(userFilePath)) {
    try {
      const raw = await fs.readFile(userFilePath, 'utf8');
      const users = JSON.parse(raw);
      userIDs = new Set(users);
      console.log(`📥 loaded ${userIDs.size} users`);
    } catch (err) {
      console.error('❌ error loading users.json:', err);
      userIDs = new Set();
    }
  }
};

// Save user IDs
const saveUserIDs = async () => {
  try {
    await fs.writeFile(userFilePath, JSON.stringify([...userIDs], null, 2));
  } catch (err) {
    console.error('❌ error saving users.json:', err);
  }
};

// Track user
const trackUser = async (userId) => {
  const userIdStr = userId.toString();
  if (!userIDs.has(userIdStr)) {
    userIDs.add(userIdStr);
    await saveUserIDs();
    console.log(`➕ new user tracked: ${userIdStr}`);
  }
};

// State management
let isShuttingDown = false;
let isAutoLoadRunning = false;

// Auto-load functionality
const runAutoLoad = async () => {
  if (isAutoLoadRunning || isShuttingDown) return;
  isAutoLoadRunning = true;

  try {
    console.log('⏱️ initializing auto-load');
    await autoLoadPairs();
    console.log('✅ auto-load completed');
  } catch (e) {
    console.error('❌ auto-load failed:', e);
  } finally {
    isAutoLoadRunning = false;
  }
};

const startAutoLoadLoop = () => {
  runAutoLoad();
  setInterval(runAutoLoad, 60 * 60 * 1000);
};

// Graceful shutdown
const gracefulShutdown = (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  
  console.log(`🛑 received ${signal}. shutting down gracefully...`);
  bot.stopPolling();
  console.log('✅ bot stopped successfully');
  process.exit(0);
};
const PRIVATE_COMMANDS = [
  '/start',
  '/pair',
  '/delpair',
  '/listpair',
  '/runtime',
  '/report',
  '/referral',
  '/buyprem',
  '/supprem',
  '/supnum',
  '/owner'
];

const banFilePath = path.join(__dirname, 'nexstore', 'bans.json');
let bannedUsers = new Set();

const loadBans = async () => {
  if (await fileExists(banFilePath)) {
    try {
      const raw = await fs.readFile(banFilePath, 'utf8');
      bannedUsers = new Set(JSON.parse(raw));
    } catch {
      bannedUsers = new Set();
    }
  }
};

const saveBans = async () => {
  await fs.writeFile(banFilePath, JSON.stringify([...bannedUsers], null, 2));
};

const isBanned = (userId) => bannedUsers.has(userId.toString());

const banUser = async (userId) => {
  bannedUsers.add(userId.toString());
  await saveBans();
};

const unbanUser = async (userId) => {
  bannedUsers.delete(userId.toString());
  await saveBans();
};

async function hasJoinedAll(userId) {

  const allChats = [
    ...REQUIRED_GROUPS
  ];

  for (const chat of allChats) {
    try {

      const member = await bot.getChatMember(chat, userId);

      if (!member || ['left', 'kicked'].includes(member.status)) {
        return false;
      }

    } catch (e) {
      return false;
    }
  }

  return true;
}

  async function getMissingChats(userId, list) {

  const missing = [];

  for (const chat of list) {
    try {

      const member = await bot.getChatMember(chat, userId);

      if (!member || ['left', 'kicked'].includes(member.status)) {
        missing.push(chat);
      }

    } catch {
      missing.push(chat);
    }
  }

  return missing;
}
// ========================
// COMMAND HANDLING
// ========================

bot.onText(/^\/broadcast\s+(.+)/, async (msg, match) => {

  const chatId = msg.chat.id;
  const senderId = msg.from.id.toString();

  // Admin only
  if (!adminIDs.includes(senderId)) {
    return reply(msg, "❌ Owner only.");
  }

  const text = match[1];

  if (!text) {
    return reply(msg,
      "⚠️ Usage:\n/broadcast your message"
    );
  }

  // Tous les users depuis users.json
  const users = [...userIDs];

  if (users.length === 0) {
    return reply(msg, "❌ No users found.");
  }

  let success = 0;
  let failed = 0;

  reply(msg, "📢 Broadcasting started...");

  for (const userId of users) {

    try {

      await bot.sendMessage(userId, text, {
        parse_mode: "Markdown"
      });

      success++;

      // Anti-flood
      await new Promise(r => setTimeout(r, 80));

    } catch (err) {

      failed++;
      console.log("Broadcast fail:", userId, err.message);

    }

  }

  reply(msg,
`✅ Broadcast finished!

📨 Sent: ${success}
❌ Failed: ${failed}
👥 Total: ${users.length}`
  );

});

bot.onText(/^\/ban(?:\s+(\d+))?$/, async (msg, match) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\nᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 JOIN CHAT GROUP', url: SOCIAL_LINKS.group1 }
  ],
  
 
          [{ text: '✅ CHECK', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }
  
  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

  if (!adminIDs.includes(userId)) {
    return reply(msg, '❌ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ʀᴇsᴛʀɪᴄᴛᴇᴅ ᴛᴏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ');
  }

  const targetId = match[1];
  if (!targetId) {
    return reply(msg, '⚠️ Usage: /ban <user_id>');
  }

  if (bannedUsers.has(targetId)) {
    return reply(msg, `⚠️ User ${targetId} is already banned.`);
  }

  bannedUsers.add(targetId);
  await saveBans();
  reply(msg, `🚫 User ${targetId} banned.`);
});

bot.onText(/^\/unban(?:\s+(\d+))?$/, async (msg, match) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();

const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\nJoin our ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 JOIN CHAT GROUP', url: SOCIAL_LINKS.group1 }
  ],
          [{ text: '✅ CHECK', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }
  
  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nContact ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

  if (!adminIDs.includes(userId)) {
    return reply(msg, '❌ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ʀᴇsᴛʀɪᴄᴛᴇᴅ ᴛᴏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ');
  }

  const targetId = match[1];
  if (!targetId) {
    return reply(msg, '⚠️ Usage: /unban <user_id>');
  }

  if (!bannedUsers.has(targetId)) {
    return reply(msg, `⚠️ User ${targetId} is not banned.`);
  }

  bannedUsers.delete(targetId);
  await saveBans();
  reply(msg, `✅ ᴜsᴇʀ ${targetId} ᴜɴʙᴀɴɴᴇᴅ.`);
});

bot.onText(/^\/listban$/, async (msg) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();

const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *Access denied*\n\nJoin our channel & group first.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 JOIN CHAT GROUP', url: SOCIAL_LINKS.group1 }
  ],
  

          [{ text: '✅ CHECK', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }
  
  if (isBanned(userId)) {
  return reply(msg,
    '🚫 You are banned from using this bot.\n\nContact the owner for appeal.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 Contact Owner', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

  if (!adminIDs.includes(userId)) {
    return reply(msg, '❌ This command is restricted to the bot owner');
  }

  if (bannedUsers.size === 0) {
    return reply(msg, '❌ No banned users.');
  }

  const list = [...bannedUsers]
    .map((id, i) => `${i + 1}. ${id}`)
    .join('\n');

  reply(msg,
    `📋 Banned users:\n\n${list}\n\nTotal: ${bannedUsers.size}`
  );
});

bot.onText(/\/runtime/, async (msg) => {
  try {
if (msg.chat.type !== 'private') return;

    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();

const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *Access denied*\n\nJoin our channel & group first.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 JOIN CHAT GROUP', url: SOCIAL_LINKS.group1 }
  ],
  
          [{ text: '✅ CHECK', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

    if (isBanned(userId)) {
  return reply(msg,
    '🚫 You are banned from using this bot.\n\nContact the owner for appeal.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 Contact Owner', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

    const caption = `ʙᴏᴛ ɪs ʀᴜɴɴɪɴɢ ғᴏʀ ${runtime(process.uptime())}
`;

    await reply(msg, caption, {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
          
        ]
      }
    });
  } catch (err) {
    console.error('RUNTIME CMD ERROR:', err);
    try {
      await reply(msg, '⚠️ Failed to get runtime info.');
    } catch (e) { /* ignore */ }
  }
});

bot.onText(/\/owner/, async (msg) => {
if (msg.chat.type !== 'private') return;
  const userId = msg.from.id.toString();
  
const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *Access denied*\n\nJoin our channel & group first.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }
  ],

          [{ text: '✅ 𝐂𝐇𝐄𝐂𝐊', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  reply(msg,
    "👑 Bot Owner\n\nClick below to contact:",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🧑‍💻 Contact Owner",
              url: "https://t.me/dobertomrlitdevcanal"
            }
          ]
        ]
      }
    }
  );

});

bot.onText(/\/start(?:\s+(\d+))?/, async (msg, match) => {
  if (msg.chat.type !== 'private') return; 
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const firstName = msg.from.first_name;
  await trackUser(userId);
    const username = msg.from.username ? `@${msg.from.username}` : 'No username';

  const joined = await hasJoinedAll(userId);

  if (!joined) {

    return reply(msg,
      '🚫 *Access denied*\n\nJoin our channels & groups first.',
      {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [

            [{ text: '📢 𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }],
            

            [{ text: '✅ 𝐂𝐇𝐄𝐂𝐊', callback_data: 'check_join' }]
          ]
        }
      }
    );
  }

  if (isBanned(userId)) {
    return reply(msg, '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.', {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    });
  }
  const caption = `<blockquote>╭───────────────────  
┋♲ 𝚄𝚂𝙴𝚁: ${pushname}✌
┋♲ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: 𝐃𝐎𝐁𝐄𝐑𝐓𝐎 𝐗𝐌𝐃-𝐓𝐆
┋♲ 𝙿𝚁𝙴𝙵𝙸𝚇 : /
┋♲ 𝙳𝙴𝚅 : 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈 𓅓
╰─────────────╶╶···

╭───────────────────   
│➪ /pair  - ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ
│➪ /remini  - ᴜᴘᴅᴀᴛᴇ ǫᴜᴀʟɪᴛʏ ʜᴅ
│➪ /listpair - ʟɪsᴛ sᴇssɪᴏɴs
│➪ /delpair - ᴅᴇʟᴇᴛᴇ sᴇssɪᴏɴ
│➪ /tiktok - ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴛɪᴋᴛᴏᴋ
│➪ /ping - ᴄʜᴇᴄᴋ ᴘɪɴɢ
│➪ /ban - ʙᴀɴ ᴀ ᴜsᴇʀ
│➪ /unban - ᴜɴʙᴀɴ ᴀ ᴜsᴇʀ
│➪ /listban - ᴠɪᴇᴡ ᴀʟʟ ᴜsᴇʀ ʙᴀɴ
│➪ /toqr - ᴛʀᴀɴsғᴏʀᴍ ᴀɴ ǫʀ
│➪ /owner - ᴠɪᴇᴡ ʙᴏᴛ ᴏᴡɴᴇʀ
│➪ /runtime - ʙᴏᴛ ᴜᴘᴛɪᴍᴇ
╰───────────────────
 © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈</blockquote>`;

  await replyPhoto(msg,
    "https://files.catbox.moe/nicgu4.jpg",
    {
      caption: caption,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
          [{ text: '🧑‍💻 𝗢𝘄𝗻𝗲𝗿', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
});

bot.on('message', (msg) => {
    if (!msg.text) return;

    const chatType = msg.chat.type;
    if (chatType === 'private') return;

    const text = msg.text.split(' ')[0];

    if (PRIVATE_COMMANDS.includes(text)) {
        reply(msg,
            '🚫 *ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴡᴏʀᴋs ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴏɴʟʏ ʙʀᴏ.*\n\n👉 ᴄʟɪᴄᴋ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ:',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: '💬 𝐖𝐑𝐈𝐓𝐄 𝐌𝐄 𝐈𝐍 𝐏𝐑𝐈𝐕𝐀𝐓𝐄',
                            url: `https://t.me/dobertomrlitdevcanal?start=from_group`
                        }]
                    ]
                }
            }
        );
    }
});

// Handle bare /pair command

// Handle bare /pair command
bot.onText(/^\/pair\s*$/, async (msg) => {
if (msg.chat.type !== 'private') return;

  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\nJoin our ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }
  ],
  

          [{ text: '✅ 𝐂𝐇𝐄𝐂𝐊', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}
  reply(msg,
    '💡 Usage: /pair 509xxx',
    { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝐆𝐑𝐎𝐔𝐏 𝐓𝐆', url: SOCIAL_LINKS.group1 }],
          [{ text: '📢 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐓𝐆', url: SOCIAL_LINKS.channel1 }]
        ]
      }
    }
  );
});

bot.onText(/\/pair (.+)/, async (msg, match) => {
if (msg.chat.type !== 'private') return;

  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const input = match[1].trim();

const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\nᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }
  ],
 

          [{ text: '✅ ᴄʜᴇᴄᴋ', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

  /* COOLDOWN (2 min) */
  const now = Date.now();

  if (pairCooldown[userId] && now - pairCooldown[userId] < 120000) {
    return reply(msg,
      "⏳ ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ 2 ᴍɪɴᴜᴛᴇs ʙᴇғᴏʀᴇ sᴇɴᴅɪɴɢ ᴀɴᴏᴛʜᴇʀ ᴘᴀɪʀ ʀᴇǫᴜᴇsᴛ."
    );
  }

  pairCooldown[userId] = now;

  try {
    if (!input || /[a-z]/i.test(input) || !/^\d{7,15}$/.test(input) || input.startsWith('0')) {
      return reply(msg, '💡 ᴜsᴀɢᴇ: /pair 509xxxxxx');
    }

    const senderNumber = input.replace(/[^0-9]/g, '');
const jid = senderNumber + '@s.whatsapp.net';

// ===== CHECK SERVER LIMIT =====
const pairingFolder = path.join(__dirname, 'nexstore', 'pairing');

if (!(await fileExists(pairingFolder))) {
  await fs.mkdir(pairingFolder, { recursive: true });
}

const files = await fs.readdir(pairingFolder);

const pairedCount = files.filter(file =>
  file.endsWith('@s.whatsapp.net')
).length;

if (pairedCount >= 50) {
  return reply(msg,
    "🚫 sᴇʀᴠᴇʀ ɪs ғᴜʟʟ.\n\nᴘʟᴇᴀsᴇ use another sᴇʀᴠᴇʀ.",
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🚀 sᴇʀᴠᴇʀ 2", url: "https://t.me/dobertomrlitdevcanal" }],
          [{ text: "🧑‍💻 ᴏᴡɴᴇʀ", url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

const startpairing = require('./pair.js');
await startpairing(jid);
    await sleep(4000);

    const pairingFile = path.join(__dirname, 'nexstore', 'pairing', 'pairing.json');
    const raw = await fs.readFile(pairingFile, 'utf-8');
    const data = JSON.parse(raw);
    const code = data.code;

    // Code sent directly to the user in private chat (no group needed for now)
    await reply(msg,
      `🔑 *ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ*\n\n\`${code}\`\n\nOuvri WhatsApp > Aparèy ki konekte > Lye ak nimewo telefòn, epi antre kòd la anwo a.`,
      { parse_mode: 'Markdown' }
    );

  } catch (err) {
    console.error('PAIR ERROR:', err);
    reply(msg, '❌ Pairing failed. Try again later.');
  }
});
bot.onText(/^\/delpair\s*$/, async (msg) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();

const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\nᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }
  ],

          [{ text: '✅ 𝐂𝐇𝐄𝐂𝐊', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}
  reply(msg, 'Usage: /delpair 509xxx',
        { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
          [{ text: '📢 𝗖𝗵𝗮𝗻𝗻𝗲𝗹', url: SOCIAL_LINKS.channel1 }]
          ]
          }
      });
});

bot.onText(/\/delpair (.+)/, async (msg, match) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  const input = match[1].trim();

const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *Access denied*\n\nJoin our channel & group first.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 JOIN CHAT GROUP', url: SOCIAL_LINKS.group1 }
  ],
 

          [{ text: '✅ CHECK', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  if (isBanned(userId)) {
  return reply(msg,
    '🚫 You are banned from using this bot.\n\nContact the owner for appeal.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 Contact Owner', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}
  try {
    if (!input || /[a-z]/i.test(input) || !/^\d{7,15}$/.test(input) || input.startsWith('0')) {
      return reply(msg, 'ʏour ᴡʜᴀᴛsᴀᴘᴘ ɴᴜᴍʙᴇʀ ᴄᴀɴɴᴏᴛ sᴛᴀʀᴛ ᴡɪᴛʜ 0',
            { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
          
          ]
          }
          });
    }

    const jidSuffix = `${input}@s.whatsapp.net`;
    const pairingPath = path.join(__dirname, 'nexstore', 'pairing');

    if (!(await fileExists(pairingPath))) {
      return reply(msg, 'The session you are trying to delete does bot exist in the bot database',
            { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
          ]
          }
          });
    }

    const entries = await fs.readdir(pairingPath, { withFileTypes: true });
    const matched = entries.find(entry => entry.isDirectory() && entry.name.endsWith(jidSuffix));

    if (!matched) {
      return reply(msg, `${input} is not found in the bot database`,
            { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
          ]
          }
          });
      }

    const targetPath = path.join(pairingPath, matched.name);
    await fs.rm(targetPath, { recursive: true, force: true });

    reply(msg, `${input} ʜᴀs ʙᴇᴇɴ ᴅᴇʟᴇᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ`,
          { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],

          ]
          }
        });
  } catch (err) {
    console.error('delpair error:', err);
    reply(msg, 'opps, i have failed to delete session',
          { 
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
         
          ]
          }
        });
  }
});

bot.onText(/\/listpair/, async (msg) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\n ᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 ᴊᴏɪɴ ᴄʜᴀᴛ ɢʀᴏᴜᴘ', url: SOCIAL_LINKS.group1 }
  ],
  
 

          [{ text: '✅ CHECK', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 Contact Owner', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}
  if (!adminIDs.includes(userId)) {
    return reply(msg, '❌ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ʀᴇsᴛʀɪᴄᴛᴇᴅ ᴛᴏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ', {
      parse_mode: 'Markdown'
    });
  }

  try {
    const pairingPath = path.join(__dirname, 'nexstore', 'pairing');

    if (!(await fileExists(pairingPath))) {
      return reply(msg, '❌ No connected devices found', { parse_mode: 'Markdown' });
    }

    const entries = await fs.readdir(pairingPath, { withFileTypes: true });
    const pairedDevices = entries
      .filter(entry => entry.isDirectory()) // only folders
      .map(entry => entry.name);           // folder name represents the number

    if (pairedDevices.length === 0) {
      return reply(msg, '❌ No connected devices found', { parse_mode: 'Markdown' });
    }

    const deviceList = pairedDevices.map((num, index) => `${index + 1}. ${num}`).join('\n');

    reply(msg,
      `📋 ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴅᴇᴠɪᴄᴇs ʟɪsᴛ:\n\n${deviceList}\n\nᴛᴏᴛᴀʟ: ${pairedDevices.length}`,
      { parse_mode: 'Markdown' }
    );

  } catch (err) {
    console.error('listpair error:', err);
    reply(msg, '❌ Failed to list connected devices', { parse_mode: 'Markdown' });
  }
});

bot.onText(/^\/report$/, async (msg) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\nᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }
  ],
 
          [{ text: '✅ 𝐂𝐇𝐄𝐂𝐊', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

  reply(msg,
    `🛠️ *ʀᴇᴘᴏʀᴛ ᴜsᴀɢᴇ*

You ᴄᴀɴ ʀᴇᴘᴏʀᴛ ᴀ ᴘʀᴏʙʟᴇᴍ ᴜsɪɴɢ *ᴛᴇxᴛ ᴏʀ ᴍᴇᴅɪᴀ*.

📌 *ᴛᴇxᴛ ʀᴇᴘᴏʀᴛ*
\`/report ʏᴏᴜʀ ᴘʀᴏʙʟᴇᴍ \`

📌 *ᴍᴇᴅɪᴀ ʀᴇᴘᴏʀᴛ*
sᴇɴᴅ ᴀ ᴘʜᴏᴛᴏ, ᴠɪᴅᴇᴏ
ᴡɪᴛʜ ᴛʜɪs ᴄᴀᴘᴛɪᴏɴ:
\`/report ʏᴏᴜʀ ᴘʀᴏʙʟᴇᴍ\`

⚠️ ʀᴇᴘᴏʀᴛs ᴡɪᴛʜᴏᴜᴛ ᴀ ᴄʟᴇᴀʀ ᴍᴇssᴀɢᴇ ᴍᴀʏʙᴇ ɪɢɴᴏʀᴇᴅ.`,
    { parse_mode: 'Markdown' }
  );
});

bot.onText(/\/report (.+)/, async (msg, match) => {
if (msg.chat.type !== 'private') return;
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const firstName = msg.from.first_name || 'User';
  const username = msg.from.username ? `@${msg.from.username}` : 'No username';
  const text = match[1].trim();

const joined = await hasJoinedAll(userId);
    if (!joined) {
        return reply(msg,
            '🚫 *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\n\nᴊᴏɪɴ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ & ɢʀᴏᴜᴘ ғɪʀsᴛ.',
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
  [
    { text: '📢 𝐉𝐎𝐈𝐍 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }
  ],

          [{ text: '✅ ᴄʜᴇᴄᴋ', callback_data: 'check_join' }]
         ]
                }
            }
        );
    }

  if (isBanned(userId)) {
  return reply(msg,
    '🚫 ʏᴏᴜ ᴀʀᴇ ʙᴀɴɴᴇᴅ ғʀᴏᴍ ᴜsɪɴɢ ᴛʜɪs ʙᴏᴛ.\n\nᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ғᴏʀ ᴀᴘᴘᴇᴀʟ.',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🧑‍💻 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ', url: SOCIAL_LINKS.developer }]
        ]
      }
    }
  );
}

  if (!text) {
    return reply(msg, '⚠️ ᴜsᴀɢᴇ: /report ʏᴏᴜʀ ᴘʀᴏʙʟᴇᴍ');
  }

  const reportText = `
🛠️ 𝐍𝐄𝐖 𝐑𝐄𝐏𝐎𝐑𝐓

👤 Name: ${firstName}
🔖 ᴜsᴇʀɴᴀᴍᴇ: ${username}
🆔 ᴜsᴇʀ ɪᴅ: ${userId}

📩 ᴍᴇssᴀɢᴇ:
${text}
`;

  for (const adminId of adminIDs) {
    await bot.sendMessage(adminId, reportText);
  }

  reply(msg, '✅ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ ʜᴀs ʙᴇᴇɴ sᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀᴅᴍɪɴs.');
});

bot.on('message', async (msg) => {
  if (!msg.caption || !msg.caption.startsWith('/report')) return;

  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const firstName = msg.from.first_name || 'User';
  const username = msg.from.username ? `@${msg.from.username}` : 'No username';

  const reportText = msg.caption.replace('/report', '').trim();
  if (!reportText) {
    return reply(msg, '⚠️ ᴘʟᴇᴀsᴇ ᴀᴅᴅ ᴀ ᴍᴇssᴀɢᴇ ᴡɪᴛʜ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ.');
  }

  const caption = `
🛠️ 𝐍𝐄𝐖 𝐑𝐄𝐏𝐎𝐑𝐓 (𝐌𝐄𝐃𝐈𝐀)

👤 ɴᴀᴍᴇ: ${firstName}
🔖 ᴜsᴇʀɴᴀᴍᴇ: ${username}
🆔 ᴜsᴇʀ ɪᴅ: ${userId}

📩 ᴍᴇssᴀɢᴇ:
${reportText}
`;

  for (const adminId of adminIDs) {
    if (msg.photo) {
      const fileId = msg.photo[msg.photo.length - 1].file_id;
      await bot.sendPhoto(adminId, fileId, { caption });
    } else if (msg.video) {
      await bot.sendVideo(adminId, msg.video.file_id, { caption });
    } else if (msg.audio) {
      await bot.sendAudio(adminId, msg.audio.file_id, { caption });
    } else if (msg.voice) {
      await bot.sendVoice(adminId, msg.voice.file_id, { caption });
    }
  }

  reply(msg, '✅ ʏᴏᴜʀ ᴍᴇᴅɪᴀ ʀᴇᴘᴏʀᴛ ʜᴀs ʙᴇᴇɴ sᴇɴᴛ ᴛᴏ ᴛʜᴇ ᴀᴅᴍɪɴs.');
});

bot.on('message', async (msg) => {
  if (!msg.reply_to_message) return;

  const adminId = msg.from.id.toString();
  if (!adminIDs.includes(adminId)) return;

  const originalText =
    msg.reply_to_message.text || msg.reply_to_message.caption;

  if (!originalText || !originalText.includes('User ID:')) return;

  const match = originalText.match(/User ID:\s*(\d+)/);
  if (!match) return;

  const targetUserId = match[1];
  const adminReply = msg.text;

  if (!adminReply) return;

  try {
    await bot.sendMessage(
      targetUserId,
      `📩 *ᴀᴅᴍɪɴ ʀᴇᴘʟʏ*\n\n${adminReply}`,
      { parse_mode: 'HTML' }
    );

    reply(msg, '✅ ʀᴇᴘʟʏ sᴇɴᴛ ᴛᴏ ᴜsᴇʀ.');
  } catch (e) {
    reply(msg, '❌ Failed to send reply.');
  }
});

// Handle text messages for admin replies
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  // Check if this is an admin replying to a user
  if (adminIDs.includes(userId) && msg.reply_to_message) {
    const replyToText = msg.reply_to_message.text;
    
    // Check if the replied message is a report
    if (replyToText && replyToText.includes('ɴᴇᴡ ʀᴇᴘᴏʀᴛ')) {
      // Extract user ID from the report
      const userIdMatch = replyToText.match(/ᴜsᴇʀ ɪᴅ: (\d+)/);
      
      if (userIdMatch && userIdMatch[1]) {
        const targetUserId = userIdMatch[1];
        const adminReply = msg.text;
        
        try {
          // Send admin's reply to the user
          await bot.sendMessage(
            targetUserId,
            `ᴀᴅᴍɪɴ ʀᴇᴘʟʏ\n\n${adminReply}\n\n`,
            {
              reply_markup: {
                inline_keyboard: [
                  [{ text: '👨‍💻 ᴏᴡɴᴇʀ ', url: SOCIAL_LINKS.developer }]
                ]
              }
            }
          );
          
          // Confirm to admin
          reply(msg, 'ʀᴇᴘʟʏ sᴇɴᴛ ᴛᴏ ᴜsᴇʀ');
          
          console.log(chalk.green(`📬 Admin ${userId} replied to user ${targetUserId}`));
        } catch (error) {
          console.error('Error sending admin reply:', error);
          reply(msg, 'ғᴀɪʟᴇᴅ ᴛᴏ sᴇɴᴅ ʀᴇᴘʟʏ');
        }
      }
    }
  }
});

// Enhanced Callback handler
bot.on('callback_query', async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;
  const userId = callbackQuery.from.id;
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;
    const username = msg.from.username ? `@${msg.from.username}` : 'No username';
  // Track user
  await trackUser(userId);

 if (data === "check_join") {

  const missingChannels = await getMissingChats(userId, REQUIRED_CHANNELS);
  const missingGroups = await getMissingChats(userId, REQUIRED_GROUPS);

  if (missingChannels.length === 0 && missingGroups.length === 0) {
  
    await bot.editMessageText(
      "🎉 ᴀᴄᴄᴇss ɢʀᴀɴᴛᴇᴅ!\n\n✅ ʏᴏᴜ ʜᴀᴠᴇ ᴊᴏɪɴᴇᴅ ᴀʟʟ ʀᴇǫᴜɪʀᴇᴅ ᴄʜᴀɴɴᴇʟs ᴀɴᴅ ɢʀᴏᴜᴘs.",
      {
        chat_id: chatId,
        message_id: msg.message_id,
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [{ text: '🌹 𝐒𝐓𝐀𝐑𝐓 𝐁𝐎𝐓', callback_data: 'start_bot' }],
            [{ text: '👥 𝐆𝐑𝐎𝐔𝐏', url: SOCIAL_LINKS.group1 }],

          ]
        }
      }
    );

    await bot.answerCallbackQuery(callbackQuery.id);
    return;
  }

  let text = "🚫 ʏᴏᴜ ʜᴀᴠᴇɴ'ᴛ ᴊᴏɪɴᴇᴅ ᴇᴠᴇʀʏᴛʜɪɴɢ ʏᴇᴛ.\n\n";
  

  text += "\n📢 ɢʀᴏᴜᴘs:\n";
  if (missingGroups.length === 0) {
    text += "✔️ ᴀʟʟ ɢʀᴏᴜᴘs ᴊᴏɪɴᴇᴅ\n";
  } else {
    missingGroups.forEach((g, i) => {
      text += `${i + 1}: ${g}\n`;
    });
  }

  await bot.editMessageText(text, {
    chat_id: chatId,
    message_id: msg.message_id,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔄 ʀᴇ-ᴄʜᴇᴄᴋ", callback_data: "check_join" }]
      ]
    }
  });

  await bot.answerCallbackQuery(callbackQuery.id);
} else if (data === 'start_bot') {
    await bot.answerCallbackQuery(callbackQuery.id);
    
    const caption = `<blockquote>
    ╭───────────────────  
┋♲ 𝚄𝚂𝙴𝚁: ${pushname}✌
┋♲ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: 𝐃𝐎𝐁𝐄𝐑𝐓𝐎 𝐗𝐌𝐃-𝐓𝐆
┋♲ 𝙿𝚁𝙴𝙵𝙸𝚇 : /
┋♲ 𝙳𝙴𝚅 : 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈 𓅓
╰─────────────╶╶···

╭───────────────────   
│➪ /pair  - ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ
│➪ /remini  - ᴜᴘᴅᴀᴛᴇ ǫᴜᴀʟɪᴛʏ ʜᴅ
│➪ /listpair - ʟɪsᴛ sᴇssɪᴏɴs
│➪ /delpair - ᴅᴇʟᴇᴛᴇ sᴇssɪᴏɴ
│➪ /tiktok - ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ ᴛɪᴋᴛᴏᴋ
│➪ /ping - ᴄʜᴇᴄᴋ ᴘɪɴɢ
│➪ /ban - ʙᴀɴ ᴀ ᴜsᴇʀ
│➪ /unban - ᴜɴʙᴀɴ ᴀ ᴜsᴇʀ
│➪ /listban - ᴠɪᴇᴡ ᴀʟʟ ᴜsᴇʀ ʙᴀɴ
│➪ /toqr - ᴛʀᴀɴsғᴏʀᴍ ᴀɴ ǫʀ
│➪ /owner - ᴠɪᴇᴡ ʙᴏᴛ ᴏᴡɴᴇʀ
│➪ /runtime - ʙᴏᴛ ᴜᴘᴛɪᴍᴇ
╰───────────────────
 © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅 𝙳𝚈𝙱𝚈</blockquote>`;

  await bot.sendPhoto(
  chatId,
  "https://files.catbox.moe/nicgu4.jpg",
  {
    caption: caption,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: '👥 𝗚𝗿𝗼𝘂𝗽', url: SOCIAL_LINKS.group1 }],
        [{ text: '🧑‍💻 𝗢𝘄𝗻𝗲𝗿', url: SOCIAL_LINKS.developer }]
      ]
    }
  }
);
  }
});


bot.onText(/\/(remini|enhance|hd|upscale)/, async (msg) => {
    const chatId = msg.chat.id;
    const replyMsg = msg.reply_to_message;

    
    if (!replyMsg || !replyMsg.photo) {
        return bot.sendMessage(chatId, "📸 ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ *ɪᴍᴀɢᴇ* ᴛᴏ ᴇɴʜᴀɴᴄᴇ ɪᴛ.", { parse_mode: 'Markdown' });
    }

    
    const fileId = replyMsg.photo[replyMsg.photo.length - 1].file_id;
    const waitMsg = await bot.sendMessage(chatId, "🔄 ᴇɴʜᴀɴᴄɪɴɢ ɪᴍᴀɢᴇ ǫᴜᴀʟɪᴛʏ... ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ⏳");

    let inputPath, outputPath;

    try {
       
        inputPath = await bot.downloadFile(fileId, os.tmpdir());

        
        const form = new FormData();
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', fs.createReadStream(inputPath));

        const catboxRes = await axios.post("https://catbox.moe/user/api.php", form, {
            headers: form.getHeaders(),
            timeout: 30000
        });

        const imageUrl = catboxRes.data;
        if (!imageUrl || !imageUrl.startsWith("http")) {
            throw new Error("Failed to get URL from Catbox");
        }

        
        const apiUri = `https://www.veloria.my.id/imagecreator/upscale?url=${encodeURIComponent(imageUrl)}`;
        const { data: enhancedBuffer } = await axios.get(apiUri, { 
            responseType: "arraybuffer", 
            timeout: 90000 
        });

        if (!enhancedBuffer || enhancedBuffer.length < 500) {
            throw new Error("API returned empty data");
        }

        
        outputPath = path.join(os.tmpdir(), `remini_${Date.now()}.jpg`);
        fs.writeFileSync(outputPath, enhancedBuffer);

        await bot.sendPhoto(chatId, fs.createReadStream(outputPath), {
            caption: "✅ *ɪᴍᴀɢᴇ ᴇɴʜᴀɴᴄᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!*\n\n © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ",
            parse_mode: 'Markdown',
            reply_to_message_id: msg.message_id
        });

        // Nettoyage de la barre d'attente
        bot.deleteMessage(chatId, waitMsg.message_id);

    } catch (error) {
        console.error("Remini Error:", error);
        bot.sendMessage(chatId, `❌ *ᴇʀʀᴏʀ:* ${error.message || "Enhancement failed. Try again later."}`, { parse_mode: 'Markdown' });
    } finally {
        // Supprimer les fichiers temporaires pour économiser de l'espace
        if (inputPath && fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
        if (outputPath && fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    }
});


bot.onText(/\/(tiktok|tt|tiktokdl)(?:\s+(.+))?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[2];

    if (!url) {
        return bot.sendMessage(chatId, "❌ *ᴜsᴀɢᴇ:* `/tiktok <url>`", { parse_mode: 'Markdown' });
    }

    const waitMsg = await bot.sendMessage(chatId, "⏳ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ... ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ", { parse_mode: 'Markdown' });

    try {
        const apiUrl = `https://apis.prexzyvilla.site/download/tiktokV5?url=${encodeURIComponent(url)}`;
        const { data } = await axios.get(apiUrl);

        let videoUrl = null;
        let title = "TikTok Video";

        if (data?.data?.downloadsVideo) {
            const hdVideo = data.data.downloadsVideo.find(v => v.quality.toLowerCase().includes("hd"));
            videoUrl = hdVideo ? hdVideo.url : data.data.downloadsVideo[0]?.url;
            title = data.data.title || title;
        } else if (data?.data?.result?.downloadUrls) {
            const mp4Video = data.data.result.downloadUrls.find(v => v.type === "mp4");
            videoUrl = mp4Video ? mp4Video.url : data.data.result.downloadUrls[0]?.url;
            title = data.data.result.title || title;
        }

        if (!videoUrl) throw new Error("Video not found");

        await bot.sendVideo(chatId, videoUrl, {
            caption: `🎥 *ᴛɪᴛʟᴇ:* ${title}\n\n✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ!\n © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`,
            parse_mode: 'Markdown',
            reply_to_message_id: msg.message_id
        });

        bot.deleteMessage(chatId, waitMsg.message_id);
    } catch (e) {
        bot.editMessageText(`❌ *ᴇʀʀᴏʀ:* ${e.message}`, { chat_id: chatId, message_id: waitMsg.message_id, parse_mode: 'Markdown' });
    }
});

bot.onText(/\/tourl/, async (msg) => {
    const chatId = msg.chat.id;
    const replyMsg = msg.reply_to_message;
    if (!replyMsg) return bot.sendMessage(chatId, "❌ ᴘʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇᴅɪᴀ ғɪʟᴇ.");

    let fileId;
    let mediaLabel = 'File';
    if (replyMsg.photo) { fileId = replyMsg.photo[replyMsg.photo.length - 1].file_id; mediaLabel = 'Image'; }
    else if (replyMsg.video) { fileId = replyMsg.video.file_id; mediaLabel = 'Video'; }
    else if (replyMsg.audio || replyMsg.voice) { fileId = (replyMsg.audio || replyMsg.voice).file_id; mediaLabel = 'Audio'; }
    else if (replyMsg.document) { fileId = replyMsg.document.file_id; mediaLabel = 'Document'; }

    if (!fileId) return bot.sendMessage(chatId, "❌ ᴜɴsᴜᴘᴘᴏʀᴛᴇᴅ ᴍᴇᴅɪᴀ.");
    bot.sendMessage(chatId, "⏳ ᴜᴘʟᴏᴀᴅɪɴɢ ᴛᴏ ᴄᴀᴛʙᴏx...");

    try {
        const filePath = await bot.downloadFile(fileId, TEMP_PATH);
        const form = new FormData();
        form.append('fileToUpload', fs.createReadStream(filePath));
        form.append('reqtype', 'fileupload');

        const response = await axios.post("https://catbox.moe/user/api.php", form, { headers: form.getHeaders() });
        const size = fs.statSync(filePath).size;
        
        await bot.sendMessage(chatId, `✅ *${mediaLabel.toUpperCase()} ᴜᴘʟᴏᴀᴅᴇᴅ*\n\n📦 *sɪᴢᴇ:* \`${formatBytes(size)}\`\n🌍 *ᴜʀʟ:* ${response.data}\n\n © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`, { parse_mode: 'Markdown' });
        fs.unlinkSync(filePath);
    } catch (e) { bot.sendMessage(chatId, `❌ *ᴜᴘʟᴏᴀᴅ ғᴀɪʟᴇᴅ:* ${e.message}`); }
});



bot.onText(/\/toqr/, async (msg) => {
    const chatId = msg.chat.id;
    const replyMsg = msg.reply_to_message;
    
    // 1. Récupération du texte (si présent après la commande)
    let textToEncode = msg.text.split(/\s+/).slice(1).join(' ');

    try {
        // 2. Vérification si on répond à une image
        if (replyMsg && replyMsg.photo) {
            const waitMsg = await bot.sendMessage(chatId, "⏳ ᴜᴘʟᴏᴀᴅɪɴɢ ɪᴍᴀɢᴇ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ǫʀ... ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ");
            
            // Récupérer l'ID de la photo
            const fileId = replyMsg.photo[replyMsg.photo.length - 1].file_id;
            const inputPath = await bot.downloadFile(fileId, os.tmpdir());

            // Upload sur Catbox
            const form = new FormData();
            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', fs.createReadStream(inputPath));

            const catboxRes = await axios.post("https://catbox.moe/user/api.php", form, {
                headers: form.getHeaders()
            });

            textToEncode = catboxRes.data; // Le lien devient le texte du QR Code
            
            // Nettoyage fichier tempo
            if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
            bot.deleteMessage(chatId, waitMsg.message_id);
        }

        // 3. Si aucun texte et aucune image en réponse
        if (!textToEncode) {
            return bot.sendMessage(chatId, "❌ *ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴛᴇxᴛ ᴏʀ ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ*\n\nᴇx: `/toqr Hello` or ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ᴡɪᴛʜ `/toqr`", { parse_mode: 'Markdown' });
        }

        // 4. Génération du QR Code
        const qrBuffer = await qrcode.toBuffer(textToEncode, {
            errorCorrectionLevel: 'H',
            margin: 2,
            scale: 12
        });

        await bot.sendPhoto(chatId, qrBuffer, {
            caption: `✅ ǫʀ ᴄᴏᴅᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ!\n\n🌍 *ᴅᴀᴛᴀ:* ${textToEncode}\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ`,
            parse_mode: 'Markdown',
            reply_to_message_id: msg.message_id
        });

    } catch (e) {
        console.error("QR Error:", e);
        bot.sendMessage(chatId, `❌ *ᴇʀʀᴏʀ:* ${e.message}`);
    }
});

// Sauvegarde du moment où le bot a démarré
const botStartTime = Date.now();

// Fonction pour formater le temps d'uptime
function formatRuntime(seconds) {
    const pad = (s) => (s < 10 ? '0' + s : s);
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
}

bot.onText(/\/ping/, (msg) => {
    const start = Date.now();
    bot.sendMessage(msg.chat.id, "🏓 *ᴘᴏɴɢ!*").then(m => {
        bot.editMessageText(`🏓 *ᴘᴏɴɢ!*\nsᴘᴇᴇᴅ: \`${Date.now() - start}ᴍs\``, { chat_id: msg.chat.id, message_id: m.message_id, parse_mode: 'Markdown' });
    });
});



// Initialize and start
(async () => {
  await loadAdminIDs();
  await loadUserIDs();
  await loadBans();
  //startAutoLoadLoop(); // Uncomment if you want auto-load
  
  const restartCount = parseInt(process.env.RESTART_COUNT || '0', 10);
  console.log(`♻️ restart #${restartCount + 1}`);
  process.env.RESTART_COUNT = String(restartCount + 1);

  console.log(chalk.magenta('🤖 bot is running...'));
  console.log('🔗 social links updated:');
  console.log(chalk.yellow(`   👨‍💻 developer: ${SOCIAL_LINKS.developer}`));
  console.log('');
  console.log(chalk.green('✅ Membership checking: ENABLED'));
  console.log(chalk.green('✅ Report system: ENABLED'));
  console.log(chalk.yellow('⚠️  Make sure bot is admin in group and channels!'));
})();

// Shutdown handlers
process.once('SIGINT', () => gracefulShutdown('SIGINT'));
process.once('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('message', (msg) => {
  if (msg === 'shutdown') gracefulShutdown('PM2_SHUTDOWN');
});
