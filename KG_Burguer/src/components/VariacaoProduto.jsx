import React from 'react';
import styles from './VariacaoProduto.module.css';
import ProdutoCard from './ProdutoCard';

export default function VariacaoProduto({ produtoAtivo, selecionarVariacao, executarComAtraso, setProdutoAtivo }) {
  return (
    <div className={styles["options-container"]}>
      <button className={styles["btn-voltar-inline"]} onClick={() => executarComAtraso(() => setProdutoAtivo(null))}>Voltar</button>
      <h2>Escolha a opção:</h2>
      <div className={styles["produtos-grid"]}>
        {produtoAtivo.category.name.includes('Filmes') ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Meia-Entrada', 0)}
              nomeOpcao="Meia-Entrada"
              iconeVisual="🎫"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Inteira', produtoAtivo.price)}
              nomeOpcao="Inteira"
              precoExtra={produtoAtivo.price}
              iconeVisual="🎟️"
            />
          </>
        ) : produtoAtivo.category.name === 'Bomboniere' || produtoAtivo.category.name === 'Bebidas' ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Pequeno', 0)}
              nomeOpcao="Pequeno"
              fontSize="2rem"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Médio', 3.00)}
              nomeOpcao="Médio"
              precoExtra={3.00}
              fontSize="2.8rem"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Grande', 5.00)}
              nomeOpcao="Grande"
              precoExtra={5.00}
              fontSize="3.5rem"
            />
          </>
        ) : (
          <ProdutoCard
            produto={produtoAtivo}
            onClick={() => selecionarVariacao('Tamanho Único', 0)}
            nomeOpcao="Tamanho Único"
          />
        )}
      </div>
    </div>
  );
}
