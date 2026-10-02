import React from 'react';
import styles from './ProdutoCard.module.css';

export default function ProdutoCard({ produto, onClick, nomeOpcao, precoExtra, iconeVisual, fontSize }) {
  const precoCalculado = produto.price + (precoExtra || 0);
  const nomeExibicao = nomeOpcao || produto.name;

  return (
    <div className={styles["produto-card"]} onClick={onClick}>
      <div className={styles["produto-img"]} style={fontSize ? { fontSize } : {}}>
        {iconeVisual ? (
          <span>{iconeVisual}</span>
        ) : (
          <img
            src={produto.image}
            alt={produto.name}
            style={{ width: '100%', height: '100px', objectFit: 'cover' }}
          />
        )}
      </div>
      <h3>{nomeExibicao}</h3>
      <p>R$ {precoCalculado.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}