const downloader = (prefix, botName, ownerName) => {
	return `
γ *π­ππ ππ π―πππ πΊπ π±πππ* γ

βͺ *INFO*
  β Prefix: γ  ${prefix}  γ
  β Creator: OWNER_NAME
βͺ *ABOUT*
  β
  ββ β ${prefix}info
  ββ β ${prefix}blocklist
  ββ β ${prefix}chatlist
  ββ β ${prefix}ping
  ββ β ${prefix}bugreport
βͺ *DOWNLOADER*
  β
  ββ β ${prefix}pinterest
  ββ β ${prefix}ytmp3
  ββ β ${prefix}ytmp4
  ββ β ${prefix}tiktok`
}
exports.downloader = downloader
