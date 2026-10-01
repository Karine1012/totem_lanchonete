import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TotemLocal.module.css';

export default function TotemLocal({ executarComAtraso, setLocal }) {
  const navegar = useNavigate();

  const escolherLocal = (opcaoLocal) => {
    executarComAtraso(() => {
      setLocal(opcaoLocal);
      navegar('/menu');
    });
  };

  return (
    <div className={styles["totem-local"]}>
      <h2 className={styles["titulo"]}>O que você deseja?</h2>
      <div className={styles["opcoes-local"]}>
        <div className={styles["opcao-card"]} onClick={() => escolherLocal('Comer aqui')}>
          <span className={styles["icone-local"]}>🪑</span>
          <h2>Comer Aqui</h2>
        </div>
        <div className={styles["opcao-card"]} onClick={() => escolherLocal('Levar')}>
          <span className={styles["icone-local"]}>🛍️</span>
          <h2>Levar</h2>
        </div>
      </div>
    </div>
  );
}