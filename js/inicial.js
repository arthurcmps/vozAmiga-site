const categorias = [
  { nome: 'Alimentos', icone: '/assets/icon/Alimentos.png', rota: 'alimentos.html' },
  { nome: 'Sentimentos', icone: '/assets/icon/Sentimentos.png', rota: 'sentimentos.html' },
  { nome: 'Brincar', icone: '/assets/icon/Brincar.png', rota: 'brincar.html' },
  { nome: 'Pessoas', icone: '/assets/icon/Pessoas.png', rota: 'pessoas.html' },
  { nome: 'Necessidades', icone: '/assets/icon/Necessidades.png', rota: 'necessidades.html' },
  { nome: 'Locais', icone: '/assets/icon/Locais.png', rota: 'locais.html' },
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
