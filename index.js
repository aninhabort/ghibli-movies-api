const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml') 
const PORT = 3000;

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const movies = [
    {
        id: 1,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1984-Nausica%C3%A4-do-Vale-do-Vento.jpg?w=279&ssl=1',
        name: 'Nausicaä do Vale do Vento',
        year: 1984,
    },
    {
        id: 2,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1986-O-Castelo-no-C%C3%A9u.jpg?w=279&ssl=1',
        name: 'O Castelo no Céu',
        year: 1986,
    },
    {
        id: 3,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1988-Meu-Amigo-Totoro.jpg?w=279&ssl=1',
        name: 'Meu Vizinho Totoro',
        year: 1988,
    },
    {
        id: 4,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/T%C3%BAmulo-dos-Vagalumes.jpg?w=279&ssl=1',
        name: 'Túmulo dos Vagalumes',
        year: 1988,
    },
    {
        id: 5,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1989-O-Servi%C3%A7o-de-Entregas-da-Kiki.jpg?w=279&ssl=1',
        name: 'O Serviço de Entregas da Kiki',
        year: 1989,
    },
    {
        id: 6,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Mem%C3%B3rias-de-Ontem.jpg?w=279&ssl=1',
        name: 'Memórias de Ontem',
        year: 1991,
    },
    {
        id: 7,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1992-Porco-Rosso.jpg?w=279&ssl=1',
        name: 'Porco Rosso: O Último Herói Romântico',
        year: 1992,
    },
    {
        id: 8,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Eu-Posso-Ouvir-o-Oceano.jpg?w=279&ssl=1',
        name: 'Eu Posso Ouvir o Oceano',
        year: 1993,
    },
    {
        id: 9,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Pom-Poko.jpg?w=279&ssl=1',
        name: 'PomPoko: A Grande Batalha dos Guaxinins',
        year: 1994,
    },
    {
        id: 10,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Sussurros-do-Cora%C3%A7%C3%A3o.jpg?w=279&ssl=1',
        name: 'Sussurros do Coração',
        year: 1995,
    },
    {
        id: 11,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1997-Princesa-Mononoke.jpg?w=279&ssl=1',
        name: 'Princesa Mononoke',
        year: 1997,
    },
    {
        id: 12,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Meus-Vizinhos-os-Yamadas-1.jpg?w=279&ssl=1',
        name: 'Meus Vizinhos os Yamadas',
        year: 1999,
    },
    {
        id: 13,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2001-A-Viagem-de-Chihiro.jpg?w=279&ssl=1',
        name: 'A Viagem de Chihiro',
        year: 2001,
    },
    {
        id: 14,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Reino-dos-Gatos.jpg?w=279&ssl=1',
        name: 'O Reino dos Gatos',
        year: 2002,
    },
    {
        id: 15,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2004-O-Castelo-Animado.jpg?w=279&ssl=1',
        name: 'O Castelo Animado',
        year: 2004,
    },
    {
        id: 16,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Contos-de-Terramar.jpg?w=279&ssl=1',
        name: 'Contos de Terramar',
        year: 2006,
    },
    {
        id: 17,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2008-Ponyo.jpg?w=279&ssl=1',
        name: 'Ponyo: Uma Amizade Que Veio do Mar',
        year: 2008,
    },
    {
        id: 18,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Mundo-dos-Pequeninos.jpg?w=279&ssl=1',
        name: 'O Mundo dos Pequeninos',
        year: 2010,
    },
    {
        id: 19,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Da-Colina-Kokuriko.jpg?w=279&ssl=1',
        name: 'Da Colina Kokuriko',
        year: 2011,
    },
    {
        id: 20,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2013-Vidas-ao-Vento.jpg?w=279&ssl=1',
        name: 'Vidas ao Vento',
        year: 2013,
    },
    {
        id: 21,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Conto-da-Princesa-kaguya.jpg?w=279&ssl=1',
        name: 'O Conto da Princesa Kaguya',
        year: 2013,
    },
    {
        id: 22,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/As-Mem%C3%B3rias-de-Marnie.jpg?w=279&ssl=1',
        name: 'As Memórias de Marnie',
        year: 2014,
    },
    {
        id: 23,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/08/Aya-e-a-Bruxa-Ghibli-filme.jpg?w=279&ssl=1',
        name: 'Aya e a Bruxa',
        year: 2020,
    },
    {
        id: 24,
        img: 'https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Como-Voc%C3%AAs-Vivem.jpg?w=279&ssl=1',
        name: 'O Menino e a Garça',
        year: 2023,
    }
];

app.get('/', (req, res) => {
    res.json(movies);
});

app.get('/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find((item) => item.id === movieId);

    if (movie) {
        res.json(movie);
    } else {
        res.json({ message: 'Movie not found' });
    }
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));