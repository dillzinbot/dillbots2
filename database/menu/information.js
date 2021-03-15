const information = (prefix, ownerBot, botName) => {
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
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}kbbi
  ├─ ❏ ${prefix}fakta
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}jadwaltvnow
  └─ ❏ ${prefix}covidcountry`
}
exports.information = information
