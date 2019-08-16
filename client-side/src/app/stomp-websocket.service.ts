import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { environment } from '../environments/environment';
import { Connection, ConnectionStatus, Message } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class StompWebsocketService {

  private appDestination = 'app';
  private messageMapping = 'chat';
  private topic = '/chatroom/messages';
  private stompClient: any;

  public messageListener = new BehaviorSubject<Message>(null);
  public connection = new BehaviorSubject<Connection>(null);
  public senderName = new BehaviorSubject<string>(null);

  constructor() { }

  subscribe() {

    const webSocket = new SockJS(environment.webSocketEndPoint);
    this.stompClient = Stomp.over(webSocket);

    this.stompClient.connect({},
      (success) => {

        this.connection.next({
          text: `CONNECTION OPEN: ${success}`,
          status: ConnectionStatus.OPEN
        });

        this.stompClient.subscribe(this.topic, (sdkEvent) => {
          const message = JSON.parse(sdkEvent.body);
          this.messageListener.next(message);
        });

      },
      (error) => {
        this.connection.next({
          text: `CONNECTION FAILED: ${error}`,
          status: ConnectionStatus.FAILED
        });
      });
  }

  unsubscribe() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
      this.connection.next({
        text: `CONNECTION CLOSED: Web Socket connection is close`,
        status: ConnectionStatus.CLOSED
      });
    }
  }

  sendMessage(text: string) {
    const message = { sender: this.senderName.value, text };
    this.stompClient.send(`/${this.appDestination}/${this.messageMapping}`, {}, JSON.stringify(message));
  }

  setSenderName(value: string) {
    this.senderName.next(value);
  }
}
