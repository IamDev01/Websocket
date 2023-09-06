const app = require('http').createServer();
const io = require('socket.io')(app, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);
  
    socket.on('enviar-mensagem', (mensagem) => {
      io.emit('receber-mensagem', mensagem);
    });
  
    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor WebSocket iniciado na porta ${PORT}`);
});