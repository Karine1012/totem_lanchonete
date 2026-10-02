import React from 'react';
import styles from './VariacaoProduto.module.css';
import ProdutoCard from './ProdutoCard';

export default function VariacaoProduto({ produtoAtivo, selecionarVariacao, executarComAtraso, setProdutoAtivo }) {
  const categoriaNome = produtoAtivo?.category?.name ?? '';
  const categoriaNormalizada = categoriaNome.toLowerCase();
  const eCategoriaLanches = categoriaNormalizada.includes('lanche');
  const eCategoriaComTamanho = ['bomboniere', 'bebidas', 'acompanhamentos'].includes(categoriaNormalizada);

  return (
    <div className={styles["options-container"]}>
      <button className={styles["btn-voltar-inline"]} onClick={() => executarComAtraso(() => setProdutoAtivo(null))}>Voltar</button>
      <h2>Escolha a opção:</h2>
      <div className={styles["produtos-grid"]}>
        {eCategoriaLanches ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('lanches', 0)}
              nomeOpcao="Lanches"
              iconeVisual="🍔"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('combos', produtoAtivo.price)}
              nomeOpcao="combos"
              precoExtra={produtoAtivo.price}
              iconeVisual="🍟"
            />
          </>
        ) : eCategoriaComTamanho ? (
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