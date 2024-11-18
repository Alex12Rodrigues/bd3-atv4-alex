const database = 'bd3-atv4';
const collection = 'mensagens';

use(database);

db[collection].insertMany(
    [
        {
            "contato": "Alekinho",
            "data_hora": "2024-11-17T09:30:00Z",
            "msg": "Minato, você já se perguntou como encontrar serenidade quando tudo ao redor parece caótico?"
        },
        {
            "contato": "Minato",
            "data_hora": "2024-11-17T09:32:00Z",
            "msg": "A serenidade não é um estado de ausência de caos, mas uma presença interior que nos permite enfrentar as tempestades. Devemos olhar para o que nos desafia e entender que cada obstáculo é uma oportunidade de crescimento."
        },
        {
            "contato": "Alekinho",
            "data_hora": "2024-11-17T09:34:00Z",
            "msg": "Mas e se ficarmos constantemente em dúvida sobre os caminhos que escolhemos? Como lidar com essa incerteza?"
        },
        {
            "contato": "Minato",
            "data_hora": "2024-11-17T09:36:00Z",
            "msg": "A incerteza é parte do caminho, Alekinho. A coragem não é a ausência de dúvida, mas a persistência em seguir em frente, mesmo sem todas as respostas. Cada passo revela um pouco mais do caminho."
        },
        {
            "contato": "Alekinho",
            "data_hora": "2024-11-17T09:38:00Z",
            "msg": "E quando tudo parece desmoronar, de onde tiramos forças para seguir?"
        },
        {
            "contato": "Minato",
            "data_hora": "2024-11-17T09:40:00Z",
            "msg": "Quando tudo parece desmoronar, é o momento de buscar dentro de nós a essência do que realmente importa. A força está na resiliência, na capacidade de se levantar a cada queda e aprender com cada desafio."
        },
        {
            "contato": "Alekinho",
            "data_hora": "2024-11-17T09:42:00Z",
            "msg": "Às vezes, parece que estamos sempre lutando contra nós mesmos. Como podemos viver em paz com quem somos?"
        },
        {
            "contato": "Minato",
            "data_hora": "2024-11-17T09:44:00Z",
            "msg": "A aceitação de quem somos é o primeiro passo para a paz interior. Enfrentar nossas fraquezas nos torna mais fortes, pois nos ensina a nos ver com compaixão e buscar constantemente a melhoria pessoal."
        },
        {
            "contato": "Alekinho",
            "data_hora": "2024-11-17T09:46:00Z",
            "msg": "Então, qual conselho você daria para alguém que quer viver com propósito, apesar das dificuldades?"
        },
        {
            "contato": "Minato",
            "data_hora": "2024-11-17T09:48:00Z",
            "msg": "Viver com propósito é buscar um significado maior em tudo que fazemos. Concentre-se no que realmente importa, mantenha a integridade e nunca perca de vista a esperança. A vida com propósito é aquela que encontra sentido em cada passo, mesmo nos momentos difíceis."
        }
    ]
);
