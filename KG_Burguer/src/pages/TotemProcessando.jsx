import React from 'react';
import styles from './TotemSplash.module.css';

export default function TotemProcessando({ metodoPagamento }) {
  return (
    <div className={styles["totem-splash"]}>
      <h1 className={styles["texto-iniciar"]}>⏳ Processando seu pedido...</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>
        {metodoPagamento === 'Dinheiro' ? "Dirija-se ao caixa para realizar o pagamento." : "Siga as instruções na máquina de cartão."}
      </p>
    </div>
  );
}