# Sistema de Chat em Tempo Real

## Visão Geral
Este projeto consiste em um sistema de chat em tempo real, desenvolvido em React e Socket.io. Ele permite que os clientes se conectem a operadores e troquem mensagens instantaneamente.

## Tecnologias Utilizadas
React (front-end)
Socket.io (comunicação em tempo real)
Node.js (servidor)
CSS (estilização)

## Componentes Principais
O projeto é dividido em dois componentes principais: Cliente e Operador. Ambos compartilham uma estrutura semelhante e funcionam de maneira semelhante, mas representam diferentes tipos de usuários.

## Cliente
O componente Cliente representa o lado do cliente do chat.
Os clientes podem inserir seu nome e enviar mensagens.
As mensagens enviadas são exibidas na interface e enviadas ao servidor para distribuição aos operadores.

## Operador
O componente Operador representa o lado do operador do chat.
Os operadores podem inserir seu nome e enviar mensagens.
As mensagens enviadas são exibidas na interface e enviadas ao servidor para distribuição aos clientes.

## Comunicação em Tempo Real
A comunicação em tempo real é habilitada por meio da biblioteca Socket.io. O servidor Node.js atua como um intermediário para encaminhar mensagens entre os clientes e os operadores.

Quando um cliente envia uma mensagem, o servidor a distribui para todos os operadores conectados.
Quando um operador envia uma mensagem, o servidor a distribui para todos os clientes conectados.
As mensagens são categorizadas por remetente ('cliente' ou 'operador') e exibidas de acordo na interface.

## Estrutura do Projeto
A estrutura do projeto inclui os seguintes diretórios e arquivos principais:

Cliente.js: Componente para o lado do cliente.
Operador.js: Componente para o lado do operador.
styles.module.css: Arquivo CSS para estilização.
server.js: O arquivo principal do servidor Node.js que configura o WebSocket com Socket.io e gerencia a comunicação em tempo real.

## Executando o Projeto
Certifique-se de ter o Node.js instalado em sua máquina.

Clone o repositório do projeto.

Navegue até a raiz do projeto no terminal e execute os seguintes comandos:

`npm install -y` Instala as dependencias do projeto.
`node server.js` Inicia o servidor websocket.
Abra um novo terminal e execute `npm run dev`
Abra o navegador e acesse http://localhost:3000 ou http://localhost:3000/operador para acessar a interface do chat. Você pode abrir várias abas para simular clientes e operadores.

## Considerações Finais
Este projeto é uma implementação básica de um sistema de chat em tempo real e pode ser expandido com recursos adicionais, como autenticação de usuários, armazenamento de mensagens, notificações e muito mais.
