const fs = require('fs'); //witam
module.exports = {
  addToTableZSDB: function(table, nowedane) {
    fs.appendFileSync(table, nowedane);
    return "dodano do tabeli";
  },
  readTableZSDB: function(table) {
    return fs.readFileSync(table, "utf-8");
  },
  readLinesfromTableZSDB: function(table, lineStart, lineEnd) {
    return fs.createReadStream(table, {start: lineStart, end: lineEnd});
  },
  rewriteTableZSDB: function(table, nowedane) {
    fs.writeFileSync(table, nowedane, 'utf-8');
    return "Wyczyszcono tabelę i dodano do niej nowy tekst";
  },
  clearTableZSDB: function(table) {
    fs.unlinkSync(table);
    fs.writeFileSync(table);
    return "Wyczyszcono tabelę";
  },
  createTableZSDB: function(table) {
    fs.writeFileSync(table);
    return "Stworzono tabelę";
  },
  deleteTableZSDB: function(table) {
    fs.unlinkSync(table);
    return "Usunięto tabelę";
  },
  editTableZSDB: function(table, replaced, replacing) {
    var data = fs.readFileSync(table, 'utf-8');

    var newValue = data.replace(replacing, replaced);

    fs.writeFileSync(table, newValue, 'utf-8');

    return "Zedytowano tabelę";
  },
  findInTableZSDB: function(table, whatToFind) {
    fs.readFile(table, {encoding: 'utf-8'}, function(err, whatToFind) {
      console.log(data)
      let dataArray = data.toString().split('\n');
      const searchKeyword = whatToFind;
      let lastIndex = -1;

      for (let index=0; index<dataArray.length; index++) {
          if (dataArray[index].includes(searchKeyword)) {
              lastIndex = index;
              break;
          }
      };
      return lastIndex;
    })
    // czy cokolwiek w tym kodzie może działać nie
    
  }
};
