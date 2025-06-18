const categorias = [
  { nome: 'Alimentos', icone: '/assets/img/Alimentos.png', rota: 'alimentos.html' },
  { nome: 'Sentimentos', icone: '/assets/img/Sentimentos.png', rota: 'sentimentos.html' },
  { nome: 'Brincar', icone: '/assets/img/Brincar.png', rota: 'brincar.html' },
  { nome: 'Pessoas', icone: '/assets/img/Pessoas.png', rota: 'pessoas.html' },
  { nome: 'Necessidades', icone: '/assets/img/Necessidades.png', rota: 'necessidades.html' },
  { nome: 'Locais', icone: '/assets/img/Locais.png', rota: 'locais.html' },
];

const grid = document.querySelector('.grid');

categorias.forEach(categoria => {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => window.location.href = categoria.rota;

  card.innerHTML = `
    <img src="${categoria.icone}" alt="${categoria.nome}">
    <p>${categoria.nome}</p>
  `;

  grid.appendChild(card);
});
