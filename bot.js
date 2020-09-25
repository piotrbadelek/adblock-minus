const Discord = require("discord.js");
const client = new Discord.Client();
const deeta = require("./zabij-sie-db.js");
let zablokowane = 0;

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity(`${zablokowane} zablokowanych reklam w tej sesji! - ${client.guilds.cache.size} serwerów`);
});

client.on("message", (message) => {
  //console.log(message);

  if (message.author.id == "702224385276379286") {
    //console.log(message.embeds)
    if(message.embeds[0].title.includes("Reklama")){
      const flyEmoji = client.emojis.cache.get('759055960323915837')
      message.delete();
      console.log("Zablokowano!") /* <:admlogo:759055960323915837>*/
      if (deeta.readTableZSDB("serw.txt").includes(message.guild.id)){
        //nic
      }else{
        message.channel.send(` ${flyEmoji} Zablokowano reklamę!`)
      }
      zablokowane++;
      client.user.setActivity(`${zablokowane} zablokowanych reklam w tej sesji! - ${client.guilds.cache.size} serwerów`);
    }
  }
  else if (message.content.includes("$invite")){
    //console.log(message.content);
    message.reply('https://discord.com/oauth2/authorize?client_id=689173316530864147&scope=bot&permissions=76800');
  }
  else if (message.content.includes("$confirmno")){
    deeta.addToTableZSDB("serw.txt", message.guild.id + "\n");
    message.reply('Wyłączono powiadomienia o blokadzie reklamy!');
  }
  else if (message.content.includes("$confirmyes")){
    let easports = deeta.readTableZSDB("serw.txt");
    easports -= message.guild.id;
    deeta.rewriteTableZSDB("serw.txt", easports);
    message.reply('Włączono powiadomienia o blokadzie reklamy!');
  }
});

client.login("ea sports, its in the game");