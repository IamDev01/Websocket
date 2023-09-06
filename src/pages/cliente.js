import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import styles from '@/componentes/styles.module.css';

const socket = io('http://127.0.0.1:3001');

export default function Cliente() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagensRecebidas, setMensagensRecebidas] = useState([]);
  const dialogoRef = useRef(null);

  useEffect(() => {
    socket.on('receber-mensagem', (mensagem) => {
      setMensagensRecebidas((mensagensAntigas) => [...mensagensAntigas, mensagem]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Rola o elemento de diálogo para o final sempre que o mensagensRecebidas mudar
    if (dialogoRef.current) {
      dialogoRef.current.scrollTop = dialogoRef.current.scrollHeight;
    }
  }, [mensagensRecebidas]);

  const enviarMensagem = () => {
    if (!nome) {
      alert('Por favor, insira seu nome antes de enviar mensagens.');
      return;
    }

    if (!mensagem.trim()) { // Verifica se a mensagem não está em branco (apenas espaços em branco)
      return;
    }

    const mensagemEnviada = {
      remetente: 'cliente',
      nome,
      texto: mensagem,
    };

    socket.emit('enviar-mensagem', mensagemEnviada);
    setMensagem('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      enviarMensagem();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pagetitle}>Cliente</h1>

      <input
        type="text"
        className={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <div className={styles.dialogoContainer}>
        <div className={styles.dialogoTitulo}>
          <h2>Diálogo</h2>
        </div>
      </div>
      <div className={styles.dialogo} ref={dialogoRef}>
        <div className={styles.dialogoMensagens}>
          {mensagensRecebidas.map((mensagem, index) => (
            <p
              key={index}
              className={
                mensagem.remetente === 'cliente'
                  ? `${styles.message} ${styles.cliente}`
                  : mensagem.remetente === 'operador'
                    ? `${styles.message} ${styles.operador}`
                    : styles.message
              }
            >
              {mensagem.remetente === 'cliente' ? `${mensagem.nome} (Eu): ` : mensagem.remetente === 'operador' ? `${mensagem.nome} (Operador): ` : ''}
              {mensagem.texto}
            </p>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          className={styles.input}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
