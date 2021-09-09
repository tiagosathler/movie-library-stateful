const setupFormInputs = {
  tit: {
    type: 'text',
    id: 'title',
    name: 'title',
    content: 'Título',
  },
  sub: {
    type: 'text',
    id: 'subtitle',
    name: 'subtitle',
    content: 'Subtítulo',
  },
  img: {
    type: 'text',
    id: 'image',
    name: 'imagePath',
    content: 'Imagem',
  },
  rat: {
    type: 'number',
    id: 'rating',
    name: 'rating',
    content: 'Avaliação',
  },
  txt: {
    type: 'text',
    id: 'storyline',
    name: 'storyline',
    content: 'Sinopse',
  },
  sel: {
    id: 'genre',
    name: 'genre',
    content: 'Gênero',
    optionTag: {
      optionTagValue: ['action', 'comedy', 'thriller'],
      optionTagContent: ['Ação', 'Comédia', 'Suspense'],
    },
  },
  btn: {
    type: 'button',
    form: 'add-movie-form',
    id: 'send',
    content: 'Adicionar filme',
  },
};

export default setupFormInputs;
