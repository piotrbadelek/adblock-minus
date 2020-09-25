const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const deeta = require("./zabij-sie-db.js");
let zablokowane = 0;
let prefix = "$";
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./komendy').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./komendy/${file}`);
	client.commands.set(command.name, command);
}
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity(`${zablokowane} zablokowanych reklam w tej sesji! - ${client.guilds.cache.size} serwerów`);
});

client.on("message", (message) => {
  //console.log(message);

  if (message.author.id == "702224385276379286") {
    //console.log(message.embeds)
    if (message.embeds[0].title){
      if (message.embeds[0].title.includes("Reklama")) {
        const flyEmoji = client.emojis.cache.get('759055960323915837')
        message.delete();
        console.log("Zablokowano!") /* <:admlogo:759055960323915837>*/
        if (deeta.readTableZSDB("serw.txt").includes(message.guild.id)) {
          //nic
        } else {
          message.channel.send(` ${flyEmoji} Zablokowano reklamę!`)
        }
        zablokowane++;
        client.user.setActivity(`${zablokowane} zablokowanych reklam w tej sesji! - ${client.guilds.cache.size} serwerów`);
      }
    }
  }
  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Adblock Minus dostał zawału i się zamienił w Adblocka Podzielić. Kod Błędu: RANDOMOWYERROROKTORYMNICNIEWIEM');
	}
});

client.login("klient dostał depresji, bo nie wpisałeś tokena");
