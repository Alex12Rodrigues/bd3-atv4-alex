const database = 'bd3-atv4';
const collection = 'mensagens';

use(database);

db[collection].find({ contato: "Alekinho" }).sort({ data_hora: 1 });

// db[collection].find({ contato: "Minato" }).sort({ data_hora: 1 });
