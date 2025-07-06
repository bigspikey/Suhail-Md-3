const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_17_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFVQ0hPK283cG9ZSnpRV1A4Z3dKQ3JPZys2Zzg0dWxUM3Y1TE9wd3dvdTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjA3cG5OY0FmVERtUm42Ynh1aEZ3MFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzE2NWQzNWYtZjY4Ni00MDRiLThkNDgtYjY2MjIxY2ZmZmEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDUxLFxuICAgICAgMjksXG4gICAgICAxOTIsXG4gICAgICAxNzksXG4gICAgICAxMjUsXG4gICAgICA0MixcbiAgICAgIDE1MyxcbiAgICAgIDE0NCxcbiAgICAgIDEzNixcbiAgICAgIDExLFxuICAgICAgOSxcbiAgICAgIDM4LFxuICAgICAgNjAsXG4gICAgICA3LFxuICAgICAgNjEsXG4gICAgICAyNDAsXG4gICAgICAzMyxcbiAgICAgIDEyNyxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDExMCxcbiAgICAgIDI0NCxcbiAgICAgIDc2LFxuICAgICAgOTQsXG4gICAgICA4MixcbiAgICAgIDEyNCxcbiAgICAgIDE2OSxcbiAgICAgIDE2MyxcbiAgICAgIDc4LFxuICAgICAgMTk1LFxuICAgICAgOTYsXG4gICAgICAyNDMsXG4gICAgICA4OCxcbiAgICAgIDIzOSxcbiAgICAgIDE1MSxcbiAgICAgIDIxLFxuICAgICAgMjA0LFxuICAgICAgMjUzLFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS0Mrb0VLRU0yMnFjTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVCcEx3YzhOUG1lSEM0ZzV3bzVjaG5ZMzYrK3VnMDkzQ0dZWFVINERtRFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZTcrQ3RneHhxSkxZRFJTalViM0tMOXFqcW9tbUFpQ2JQTTM3eWF1SDU2cjR5UmZTK0pHVDBJZjJJcGo0UktCWGN4MTh2N05hdlNaQUJWNVRDbk11Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUczSW1ZdFhNd0VkNHc4Vjk3WDR4RnZpUkVyUlVWdW80VVd6amo1enVkakR0WmxpZlhsQ0FoUE85cWRBa0dKVkNodUFCY01OMUNVSkgrd3NyZjF4amc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY1MzIzMzgwOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDEwMDAyNzUxNzc2ODg6NTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTXItTm9uY2hhbGFudFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NTMyMzM4MDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTE4MDA2NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMDZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwNi5qc29uIjogIntcImtleURhdGFcIjpcIlZJZm44ZHJ0R05nQyt1UzRJT1BFSFpQcFkxUkJXSjd1MVVRVEpHM3owM009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY4ODQ1MDg2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUxODAwNjU4NjAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
