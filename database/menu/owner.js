const owner = (prefix, ownerBot, botName) => {
        return `
γ *${π­ππ ππ π―πππ πΊπ π±πππ}* γ

βͺ *INFO*
  β Prefix: γ  ${prefix}  γ
  β Creator: ${ownerBot}
βͺ *ABOUT*
  β
  ββ β ${prefix}info
  ββ β ${prefix}blocklist
  ββ β ${prefix}chatlist
  ββ β ${prefix}ping
  ββ β ${prefix}bugreport
βͺ *OWNER*
  β
  ββ β ${prefix}setprefix
  ββ β ${prefix}block
  ββ β ${prefix}bc
  ββ β ${prefix}bcgc
  ββ β ${prefix}clone
  ββ β ${prefix}clearall`
}
exports.owner = owner
