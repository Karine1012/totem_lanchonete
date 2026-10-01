export const categoriasDados = [
  { id: 'filmes2d', name: 'Filmes 2D' },
  { id: 'filmes3d', name: 'Filmes 3D' },
  { id: 'bomboniere', name: 'Bomboniere' },
  { id: 'bebidas', name: 'Bebidas' }
];

export const produtosDados = [
  // Filmes 2D (Preço base = Meia-entrada)
  { id: 'f1', name: 'O Código Matrix', price: 15, image: '🕶️', categoryId: 'filmes2d', category: { name: 'Filmes 2D' } },
  { id: 'f2', name: 'Vingadores da Web', price: 15, image: '🦸‍♂️', categoryId: 'filmes2d', category: { name: 'Filmes 2D' } },
  { id: 'f3', name: 'Senhor dos Servidores', price: 15, image: '🧙‍♂️', categoryId: 'filmes2d', category: { name: 'Filmes 2D' } },
  { id: 'f4', name: 'De Volta para o Front', price: 15, image: '🚗', categoryId: 'filmes2d', category: { name: 'Filmes 2D' } },

  // Filmes 3D (Preço base = Meia-entrada)
  { id: 'f5', name: 'Avatar: O Caminho do Dado', price: 20, image: '👽', categoryId: 'filmes3d', category: { name: 'Filmes 3D' } },
  { id: 'f6', name: 'Jurassic Byte', price: 20, image: '🦖', categoryId: 'filmes3d', category: { name: 'Filmes 3D' } },

  // Bomboniere
  { id: 'b1', name: 'Pipoca Salgada', price: 15, image: '🍿', categoryId: 'bomboniere', category: { name: 'Bomboniere' } },
  { id: 'b2', name: 'Pipoca Doce', price: 18, image: '🍿', categoryId: 'bomboniere', category: { name: 'Bomboniere' } },
  { id: 'b3', name: 'Nachos c/ Cheddar', price: 20, image: '🧀', categoryId: 'bomboniere', category: { name: 'Bomboniere' } },
  { id: 'b4', name: 'Balas M&Ms', price: 10, image: '🍬', categoryId: 'bomboniere', category: { name: 'Bomboniere' } },

  // Bebidas
  { id: 'd1', name: 'Refri Cola', price: 10, image: '🥤', categoryId: 'bebidas', category: { name: 'Bebidas' } },
  { id: 'd2', name: 'Refri Guaraná', price: 10, image: '🥤', categoryId: 'bebidas', category: { name: 'Bebidas' } },
  { id: 'd3', name: 'Suco de Laranja', price: 8, image: '🧃', categoryId: 'bebidas', category: { name: 'Bebidas' } },
  { id: 'd4', name: 'Água Mineral', price: 5, image: '💧', categoryId: 'bebidas', category: { name: 'Bebidas' } }
];
