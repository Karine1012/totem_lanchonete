import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TelaSplash.module.css';

export default function TelaSplash({ executarComAtraso }) {
  const navegar = useNavigate();
  return (
    <div className={styles["tela-splash"]} onClick={() => executarComAtraso(() => navegar('/local'))}>
      <div className={styles["banner-placeholder"]}>
        Banner Promocional
      </div>
      <h1 className={styles["texto-iniciar"]}>Toque para iniciar</h1>
    </div>
  );
}