const database = 'bd3-atv4';
const collection = 'mensagens';

use(database);

// db[collection].find({ contato: "Alekinho", msg: { $regex: "serenidade", $options: "i" } });
db[collection].find({ contato: "Minato", msg: { $regex: "serenidade", $options: "i" } });
