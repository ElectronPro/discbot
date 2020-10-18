const Discord = require('discord.js');
const Client = new Discord.Client();


Client.on('ready', () =>{

console.log("!ready for action")

})

Client.on('message', msg=>{

if(msg.content === "Hi"){
msg.reply('hello user')
  //you can add more if statements like the above syntax for more responding
  }

})

Client.login(process.env.BOT_TOKEN);




