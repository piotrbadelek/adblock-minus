const deeta = require("../zabij-sie-db.js");
module.exports = {
    name: 'confirmyes',
    description: 'Włącz powiadomienia',
    execute(message, args) {
        let easports = deeta.readTableZSDB("./serw.txt");
        easports -= message.guild.id;
        deeta.rewriteTableZSDB("./serw.txt", easports);
        message.reply('Włączono powiadomienia o blokadzie reklamy!');
    },
};