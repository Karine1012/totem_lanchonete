import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TelaLocal.module.css';

export default function TelaLocal({ executarComAtraso, setLocal }) {
  const navegar = useNavigate();

  const escolherLocal = (opcaoLocal) => {
    executarComAtraso(() => {
      setLocal(opcaoLocal);
      navegar('/menu');
    });
  };

  return (
    <div className={styles["tela-local"]}>
      <h2 className={styles["titulo"]}>O que você deseja?</h2>
      <div className={styles["opcoes-local"]}>
        <div className={styles["opcao-card"]} onClick={() => escolherLocal('Comprar Ingressos')}>
          <span className={styles["icone-local"]}>🎫</span>
          <h2>Comprar Ingressos</h2>
        </div>
        <div className={styles["opcao-card"]} onClick={() => escolherLocal('Apenas Bomboniere')}>
          <span className={styles["icone-local"]}>🍿</span>
          <h2>Apenas Bomboniere</h2>
        </div>
      </div>
    </div>
  );
}