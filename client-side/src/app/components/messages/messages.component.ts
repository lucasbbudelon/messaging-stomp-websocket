import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { StompWebsocketService } from 'src/app/stomp-websocket.service';
import { Message } from '../../app.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public enableMessages: boolean;
  public messages: Message[];

  constructor(private stompWebsocketService: StompWebsocketService) {
    this.messages = [];
  }

  ngOnInit() {

    this.stompWebsocketService.senderName
      .pipe(
        filter(value => Boolean(value)),
        tap(() => this.enableMessages = true)
      )
      .subscribe();

    this.stompWebsocketService.messageListener
      .pipe(
        filter(message => Boolean(message)),
        tap(message => this.messages.push(message))
      )
      .subscribe();
  }

  sendMessage(inputText) {
    this.stompWebsocketService.sendMessage(inputText.value);
    inputText.value = null;
    inputText.focus();
  }
}
