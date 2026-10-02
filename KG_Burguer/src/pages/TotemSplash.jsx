import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TotemSplash.module.css';
import banner from '../../public/img/banner.jpeg'

export default function TotemSplash({ executarComAtraso }) {
  const navegar = useNavigate();
  return (
    <div className={styles["totem-splash"]} onClick={() => executarComAtraso(() => navegar('/local'))}>
      <div className={styles["banner-placeholder"]}>
        <img src={banner} />
      </div>
      <h1 className={styles["texto-iniciar"]}>Toque na tela para iniciar</h1>
    </div>
  );
}