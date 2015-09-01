var Cat = require('./Cat');
var CatDatabase = [];
CatDatabase.push(new Cat('Mittens', 'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg', 'Orange'));
CatDatabase.push(new Cat('Socks', 'http://www.cgdev.org/sites/default/files/cat8.jpg', 'Brown'));
CatDatabase.push(new Cat('clawz', 'http://wac.450f.edgecastcdn.net/80450F/hudsonvalleycountry.com/files/2015/01/cat4.jpg', 'A mess of colors'));

module.exports = CatDatabase;