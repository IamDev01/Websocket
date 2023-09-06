# Servidor Websocket

## server.js:

Esse código configura um servidor WebSocket simples que pode receber mensagens dos clientes e transmiti-las para todos os clientes conectados. É um exemplo básico de uso do Socket.IO para criar comunicações em tempo real. Lembre-se de que você pode adicionar lógica adicional, como autenticação de clientes ou manipulação de eventos personalizados, conforme necessário para o seu aplicativo. Vou explicar cada parte do código:

Importação das dependências:

O código começa importando o módulo http do Node.js e a biblioteca Socket.IO.
Criação do servidor HTTP:

O servidor HTTP é criado usando o método http.createServer(). Este servidor será usado como base para o servidor WebSocket.
Configuração do Socket.IO:

A biblioteca Socket.IO é inicializada passando o servidor HTTP criado anteriormente como argumento.
É configurada uma política CORS para permitir que qualquer origem ('*') se conecte ao servidor WebSocket. Isso é útil para permitir conexões de diferentes domínios.
Lida com conexões WebSocket:

Quando um cliente WebSocket se conecta, a função passada para io.on('connection', ...) é executada.
O servidor imprime o ID do socket recém-conectado no console, que é uma identificação única para cada cliente.
Lida com mensagens enviadas pelos clientes:

Quando um cliente envia uma mensagem com o evento 'enviar-mensagem', o servidor emite essa mensagem para todos os clientes conectados usando io.emit('receber-mensagem', mensagem).
Lida com desconexões de clientes:

Quando um cliente se desconecta, o servidor imprime o ID do socket desconectado no console.
Inicialização do servidor WebSocket:

O servidor WebSocket é inicializado na porta 3001 usando app.listen(). O console exibe uma mensagem informando que o servidor WebSocket foi iniciado com sucesso na porta especificada.

## Passos para executar o projeto

Você precisará ter instalado o Nodejs, em seu terminal vá para a pasta do projeto e execute os seguintes comandos:
`npm install -y`
`node server.js`

Abra um novo terminal e execute `npm run dev` agora você pode acessar a aplicação em locahost:3000 ou localhost:3000/operador
