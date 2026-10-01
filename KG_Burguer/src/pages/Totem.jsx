import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styles from './Totem.module.css';
import TotemSplash from './TotemSplash.jsx';
import TotemLocal from './TotemLocal.jsx';
import TotemMenu from './TotemMenu.jsx';
import TotemResumo from './TotemResumo.jsx';
import TotemModificarItem from './TotemModificarItem.jsx';
import TotemPagamento from './TotemPagamento.jsx';
import TotemProcessando from './TotemProcessando.jsx';
import TotemSucesso from './TotemSucesso.jsx';
import { categoriasDados, produtosDados } from '../data/menuDados';

export default function Totem() {
  const navegar = useNavigate();

  const [local, setLocal] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const [carrinho, setCarrinho] = useState([]);
  const [itemParaModificar, setItemParaModificar] = useState(null);
  const [indiceModificacao, setIndiceModificacao] = useState(-1);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [numeroPedido, setNumeroPedido] = useState(null);

  const executarComAtraso = (acao) => {
    setTimeout(() => {
      acao();
    }, 150);
  };

  useEffect(() => {
    setCategorias(categoriasDados);
    if (categoriasDados.length > 0) setCategoriaSelecionada(categoriasDados[0].id);
  }, []);

  useEffect(() => {
    if (categoriaSelecionada) {
      setProdutos(produtosDados.filter(p => p.categoryId === categoriaSelecionada));
    }
  }, [categoriaSelecionada]);

  const processarPagamento = (metodo) => {
    executarComAtraso(() => {
      setMetodoPagamento(metodo);
      navegar('/processando');

      // Simula o tempo de pagamento na maquininha (5 segundos)
      setTimeout(() => {
        const fakeOrderNumber = Math.floor(1000 + Math.random() * 9000);
        setNumeroPedido(fakeOrderNumber);
        navegar('/sucesso');

        // Volta para a totem inicial após 5 segundos na totem de sucesso
        setTimeout(() => {
          navegar('/');
          setCarrinho([]);
          setLocal('');
          setMetodoPagamento('');
        }, 5000);
      }, 5000);
    });
  };

  return (
    <div className={styles["totem-wrapper"]}>
      <Routes>
        <Route path="/" element={<TotemSplash executarComAtraso={executarComAtraso} />} />

        <Route path="/local" element={<TotemLocal executarComAtraso={executarComAtraso} setLocal={setLocal} />} />

        <Route path="/menu" element={
          <TotemMenu
            categorias={categorias}
            produtos={produtos}
            categoriaSelecionada={categoriaSelecionada}
            setCategoriaSelecionada={setCategoriaSelecionada}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            executarComAtraso={executarComAtraso}
          />
        } />

        <Route path="/resumo" element={
          <TotemResumo
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            executarComAtraso={executarComAtraso}
            setItemParaModificar={setItemParaModificar}
            setIndiceModificacao={setIndiceModificacao}
          />
        } />

        <Route path="/modificar" element={
          <TotemModificarItem
            itemParaModificar={itemParaModificar}
            setItemParaModificar={setItemParaModificar}
            indiceModificacao={indiceModificacao}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            executarComAtraso={executarComAtraso}
          />
        } />

        <Route path="/pagamento" element={
          <TotemPagamento
            executarComAtraso={executarComAtraso}
            processarPagamento={processarPagamento}
          />
        } />

        <Route path="/processando" element={<TotemProcessando metodoPagamento={metodoPagamento} />} />

        <Route path="/sucesso" element={<TotemSucesso numeroPedido={numeroPedido} />} />
      </Routes>
    </div>
  );
}