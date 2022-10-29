function handler(m) {
  
  const kontak = {
	"displayName": 'Gilzz x Code',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6285730794089@s.whatsapp.net')}\nitem1.TEL;waid=6285730794089:6285730794089\nitem1.X-ABLabel:Busy.\nURL;My Web: https://t.me/sampun_penak\nEMAIL;Email Owner: gilzzbotz@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=77784019706:77784019706\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
