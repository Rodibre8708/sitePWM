"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link'; 
import styles from './page.module.css';

const PALAVRAS = [
  "ABACAXI", "CACHORRO", "GIRAFA", "ELEFANTE", "FUTEBOL", "COMPUTADOR", "CHOCOLATE",
  "VENTILADOR", "TELEFONE", "MESA", "CADEIRA", "JANELA", "CELULAR", "VIAGEM",
  "UNIVERSO", "APRENDER", "PROGRAMACAO", "TECNOLOGIA", "NEXTJS", "REACT",
  "JAVASCRIPT", "PYTHON", "ARANHA", "DINOSSAURO", "ALIMENTO", "CONHECIMENTO",
  "ESTUDAR", "FELICIDADE", "NATUREZA", "SOLUCAO"
];

const FORCA_PARTES = [
  <circle key="cabeca" cx="120" cy="60" r="20" />,          
  <line key="tronco" x1="120" y1="80" x2="120" y2="130" />, 
  <line key="bracoEsq" x1="120" y1="90" x2="100" y2="120" />, 
  <line key="bracoDir" x1="120" y1="90" x2="140" y2="120" />, 
  <line key="pernaEsq" x1="120" y1="130" x2="100" y2="160" />, 
  <line key="pernaDir" x1="120" y1="130" x2="140" y2="160" />  
];

const MAX_ERROS = FORCA_PARTES.length;

const Forca = () => {
  const [palavra, setPalavra] = useState('');
  const [letrasTentadas, setLetrasTentadas] = useState(new Set());
  const [erros, setErros] = useState(0);
  const [statusJogo, setStatusJogo] = useState('jogando'); 

  const alfabeto = useMemo(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), []);

  const iniciarNovoJogo = () => {
    const novaPalavra = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(novaPalavra);
    setLetrasTentadas(new Set());
    setErros(0);
    setStatusJogo('jogando');
  };

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  const palavraExibida = palavra
    .split('')
    .map(letra => (letrasTentadas.has(letra) ? letra : '_'))
    .join(' ');

  const handleTentativa = (letra) => {
    if (statusJogo !== 'jogando' || letrasTentadas.has(letra)) {
      return;
    }

    setLetrasTentadas(prev => new Set(prev).add(letra));

    if (!palavra.includes(letra)) {
      setErros(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (!palavra) return; 

    if (erros >= MAX_ERROS) {
      setStatusJogo('perdeu');
    } else if (palavraExibida.replace(/ /g, '') === palavra) {
      setStatusJogo('venceu');
    }
  }, [letrasTentadas, erros, palavraExibida, palavra]);

  const renderMensagem = () => {
    if (statusJogo === 'venceu') {
      return <h2 className={styles.mensagemVitoria}>PARABÉNS! VOCÊ VENCEU!</h2>;
    } else if (statusJogo === 'perdeu') {
      return (
        <h2 className={styles.mensagemDerrota}>
        VOCÊ PERDEU!{' '}
        <span style={{ color: 'var(--foreground)' }}>
          A palavra era: <span className={styles.palavraFinal}>{palavra}</span>
        </span>
      </h2>
      );
    }
    return <p className={styles.tentativasRestantes}>Tentativas restantes: {MAX_ERROS - erros}</p>;
  };

  const renderForca = () => {
    return (
      <svg className={styles.forcaSvg} viewBox="0 0 200 200">
        <line x1="10" y1="180" x2="150" y2="180" className={styles.forcaEixo} />
        <line x1="50" y1="180" x2="50" y2="20" className={styles.forcaEixo} />
        <line x1="50" y1="20" x2="120" y2="20" className={styles.forcaEixo} />
        <line x1="120" y1="20" x2="120" y2="40" className={styles.forcaEixo} />
        {FORCA_PARTES.slice(0, erros)}
      </svg>
    );
  };

  return (
    <main className={styles.forcaContainer}>
      <div className={styles.botoesNavegacao}>
        <Link href="/">
          <button className={styles.botaoVoltar}>Voltar para o Currículo</button>
        </Link>
      </div>

      <h1 className={styles.titulo}>Jogo da Forca</h1>
      {renderForca()}
      <div className={styles.palavraExibida}>{palavraExibida}</div>
      {renderMensagem()}
      {statusJogo === 'jogando' ? (
        <div className={styles.teclado}>
          {alfabeto.map(letra => (
            <button
              key={letra}
              className={`${styles.botaoLetra} ${letrasTentadas.has(letra) ? styles.letraTentada : ''}`}
              onClick={() => handleTentativa(letra)}
              disabled={letrasTentadas.has(letra)}
            >
              {letra}
            </button>
          ))}
        </div>
      ) : (
        <button onClick={iniciarNovoJogo} className={styles.botaoReiniciarFinal}>
          Jogar Novamente
        </button>
      )}
    </main>
  );
};

export default Forca;