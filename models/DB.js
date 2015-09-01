var Cat = require('./Cat');
var CatDatabase = [];
CatDatabase.push(new Cat('Mittens', 'Cornish Rex', 'Orange'));
CatDatabase.push(new Cat('Socks', 'Tabby', 'Brown'));
CatDatabase.push(new Cat('clawz', 'Liger', 'A mess of colors'));

module.exports = CatDatabase;