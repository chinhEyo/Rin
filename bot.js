const Discord = request ('discord.js'); 
const client = new Discord.Client (); 

client.on ('ready', () => { 
console.log ('RinSuri đã online!'); 
}); 
client.on ('message', message => { 
if (message.content === 'ping') { 
message.reply ('pong'); 
} 
});
client.login (process.env.NzUxNzQ3NTI0MzUxNjIzMTc4.X1NlcA.252QQDO3Ee3ZMSNRQk0bWfDFLbM);