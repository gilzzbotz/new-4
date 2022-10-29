let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'https://lynk.id/gilzzx' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 22222222222222,
'pageCount': 222,
'contextInfo':{
'forwardingScore':222,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'https://lynk.id/gilzzx',
'mediaType': 2,
'previewType': 2,
'title': 'Searching Source Code?',
'body': me,
'thumbnail': thumb2,
'sourceUrl': 'https://instagram.com/rdtyzagilz'}},
'caption': 'https://lynk.id/gilzzx',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'ʀᴜɴᴛɪᴍᴇ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
