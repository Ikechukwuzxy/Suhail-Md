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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_49_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm85ckN3QmpiaVhtcXZQNVZ3UlJHM2Q3QVVJTnRkQjdRYkJRWXAxM2ttTUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndGNGFkck9xUl9Hd2hhNU5JWGJxV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjk2MWNhOGUtODg2Mi00Y2UzLWFiM2ItMmExZTRjYWE2YmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDE1MixcbiAgICAgIDMsXG4gICAgICAyMzAsXG4gICAgICA3OSxcbiAgICAgIDE5MixcbiAgICAgIDY0LFxuICAgICAgODIsXG4gICAgICAxMzMsXG4gICAgICAyNDAsXG4gICAgICAxMDMsXG4gICAgICA2OCxcbiAgICAgIDM3LFxuICAgICAgMTE4LFxuICAgICAgOSxcbiAgICAgIDExNyxcbiAgICAgIDIyNCxcbiAgICAgIDIyNSxcbiAgICAgIDE1NyxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICA5OSxcbiAgICAgIDIyOCxcbiAgICAgIDIyMSxcbiAgICAgIDE4OCxcbiAgICAgIDE2OCxcbiAgICAgIDE5OCxcbiAgICAgIDE1MixcbiAgICAgIDE0MixcbiAgICAgIDE5LFxuICAgICAgNzQsXG4gICAgICAxOTYsXG4gICAgICAxNjQsXG4gICAgICAxNzAsXG4gICAgICAxMyxcbiAgICAgIDEyOSxcbiAgICAgIDIxMixcbiAgICAgIDE2NixcbiAgICAgIDU2LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZXWVRYNks3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY5Njc1Mzg1OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODg4MDMwNTQ1NzE2MDA6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3loanJJRkVKcWF2N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZanhsM2tFMk96WU1VOGFsR01haW9LQ21VV3BNMTFCOVBCcWVrUUE3OHhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlIempRZWU2VGdvTHlnVGYwa2dud2pzbitGbUtNWnlLRWVsMnZWcDJRNTg5elEzRVJ2VWxxSVFKZXI4ZXVDbnB6UjVUdXpFbzEwMFNlZ0tqQVczRER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtLWWFaeXFPSFBMTFRqNmxDSGFqaE5QS1lpemNHNW93RDJXWWFqT2RpTVZVZHIzcHE2K1VlcGtvamlGT2tmdEhJZzRUMUphTlBoQ3E3dzRTdzk1eGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjk2NzUzODU6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3OTczNDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQ1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVDVS5qc29uIjogIntcImtleURhdGFcIjpcIkVyWGtOd3JvdnVIWXh1WEVtL2pSRWFXT2lYYWV2VEpQbUNKTCsvYWx3OWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0NzI2ODU4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjc5MzczODQxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
