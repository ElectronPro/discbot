const Discord = require('discord.js');
const Client = new Discord.Client();


Client.on('ready', () =>{

console.log("!ready for action")

})

Client.on('message', msg=>{

if(msg.content === "Hi"){
msg.reply('hello user')

})

Client.login(process.env.BOT_TOKEN);




