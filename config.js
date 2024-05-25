const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkcyLzRvUFAwamJNTEtKVlZPZ01ybFZVZzRGK1RITTl0ampVelFVTDlEK289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjIxNjY3MjAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMDhGMUYyNkU0RDRBNUU1MDE4MkVEMzE0NDZDNUQ4M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2MzY2MzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI2MjE2NjcyMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY4RUIxOUIzMDFCNUNEQUM0OTE5RUVCRDUxN0UyOEE3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjYzNjYzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjYyMTY2NzIwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjM0RjEwODQ0N0QyMDFBREMyMUNFRTYxRTcyNzcxRjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjM2NjM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNjIxNjY3MjAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMUZCMEQ3QzJEQjBCREY0NEI4RDg1MEIzMzczOThGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2MzY2MzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmU4VVlCOFlURHF6aThHeUdseG5zUVwiLFxuICBcInBob25lSWRcIjogXCIwZmQzNGFjOS0zNTVjLTRmZTktYTUzNC1kMDg5OTk1NmQ4YWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMjA5LFxuICAgICAgNixcbiAgICAgIDE5OSxcbiAgICAgIDU2LFxuICAgICAgMzIsXG4gICAgICAyNixcbiAgICAgIDI4LFxuICAgICAgNTcsXG4gICAgICAyMzEsXG4gICAgICA1NixcbiAgICAgIDE0NCxcbiAgICAgIDIzNSxcbiAgICAgIDMxLFxuICAgICAgNjMsXG4gICAgICAxNzQsXG4gICAgICAxMDAsXG4gICAgICAyNTMsXG4gICAgICA2OCxcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICA5NyxcbiAgICAgIDIwMSxcbiAgICAgIDE0MSxcbiAgICAgIDE3MCxcbiAgICAgIDIxMCxcbiAgICAgIDEyMixcbiAgICAgIDg2LFxuICAgICAgMjUxLFxuICAgICAgMTY1LFxuICAgICAgNjcsXG4gICAgICA1MSxcbiAgICAgIDE5NCxcbiAgICAgIDE3NixcbiAgICAgIDExLFxuICAgICAgNTksXG4gICAgICAzOSxcbiAgICAgIDI4LFxuICAgICAgMTYwLFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNTQ0gxRUg3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI2MjE2NjcyMDI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyOTkxODY1OTExMzAzMToxN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCT1QgQUwzQU1FXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdDdnM0Q0VOV1h4N0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQNFhQOWdLYlJFQThpYWorRXZObWlTTnBVdkFhaWtycnBQWFd1QlpWVGhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh4SDg5ejBpUmw0Uk9ueVFRUkdMbWhxUXc5cStFdlpza25sUHRzNG5lUWY1QnJYR3Qwa2xBSWdqWEM4SndEdUxubkNWejc0enpJdUJrdXRyYzQveUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkg3SnFMNU9JNWx2OVlZVlM5cXp4cEZqWnhsSUJrL2xZSGtxNERqcHdyM1dqWFgvU1dldU9tamgrWHFCaWtYc0Z4R1JXNVRWbWpRMGxXRDNhWWZSK2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjYyMTY2NzIwMjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYzNjYzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA0OVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDQ5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUlp0MGpqZHRzTXRGbWlpR1JYeEVlVnMyUGdmRzNwV01KaXR5c2x1Zi9WOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDE0NjQ4OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjYzNjYzNjc0M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
