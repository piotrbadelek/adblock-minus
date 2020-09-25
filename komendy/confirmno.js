const deeta = require("../zabij-sie-db.js");
module.exports = {
    name: 'confirmno',
    description: 'Wyłącz powiadomienia',
    execute(message, args) {
        deeta.addToTableZSDB("./serw.txt", message.guild.id + "\n");
        message.reply('Wyłączono powiadomienia o blokadzie reklamy!');
    },
};