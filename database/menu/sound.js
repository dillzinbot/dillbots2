const sound = (prefix, ownerBot, botName) => {
        return `
「 *${𝕭𝖔𝖙 𝖉𝖔 𝕯𝖎𝖑𝖑 𝕺𝖓 𝕱𝖎𝖗𝖊}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *SOUND*
  │
  └─ ❏ ${prefix}tts`
}
exports.sound = sound