# MESSAGING-STOMP-WEBSOCKET
POC utilizando Java Spring Boot e Angular para validar uma aplicação interativa entre client-side e server-side utilizando web socket.

[Live Preview](http://messaging-stomp-websocket.surge.sh)

## Stack

- [Angular](https://angular.io)
- [Surge](https://surge.sh)
- [Spring Initializr](https://start.spring.io)
- [stomp.github](https://stomp.github.io)
- [STOMP Documentation (Client)](https://stomp-js.github.io/stomp-websocket/codo/class/Client.html)

### O que são Web Sockets e onde pode ser utilizado?

WebSockets são normalmente usados para tornar os aplicativos da Web mais interativos. Eles podem ser úteis ao implementar feeds sociais, bate-papos on-line, atualizações de notícias ou aplicativos baseados em localização.

### Como funciona um Web Socket?

Os WebSockets fornecem um canal de comunicação bidirecional através de uma única conexão TCP. O cliente estabelece uma conexão persistente por meio de um processo conhecido como handshake do WebSocket. A conexão permite trocar mensagens em tempo real.

### O que é Spring Boot e porque utilizar?

O Spring Boot é uma estrutura baseada em Java que facilita a implementação de aplicativos independentes ou microsserviços. É comumente usado porque simplifica muito a integração com vários produtos e estruturas. Ele também contém um servidor da Web incorporado, portanto, não há necessidade de implementar arquivos WAR.

### O que é Stomp?

STOMP é o protocolo de mensagens orientadas por texto simples (ou streaming). Ele usa um conjunto de comandos como CONNECT, SEND ou SUBSCRIBE para gerenciar a conversa. Os clientes STOMP, escritos em qualquer idioma, podem conversar com qualquer intermediário de mensagens que suporte o protocolo.

## Links Úteis
- [messaging-stomp-websocket](https://spring.io/guides/gs/messaging-stomp-websocket)
- [stomp-spring-boot-websocket](https://www.toptal.com/java/stomp-spring-boot-websocket)
- [stompjs](https://github.com/stomp-js/stompjs)
- [rx-stomp](https://github.com/stomp-js/rx-stomp)
- [stomp-websocket](http://jmesnil.net/stomp-websocket/doc)

