import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { StompWebsocketService } from 'src/app/stomp-websocket.service';
import { Message } from '../../app.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @ViewChild('containerMessages', { static: false }) private containerMessages: ElementRef;

  public messages: Message[];
  public senderName: string;

  constructor(private stompWebsocketService: StompWebsocketService) {
    this.messages = [];
  }

  ngOnInit() {

    this.stompWebsocketService.senderName
      .pipe(
        filter(value => Boolean(value)),
        tap(value => this.senderName = value)
      )
      .subscribe();

    this.stompWebsocketService.messageListener
      .pipe(
        filter(message => Boolean(message)),
        tap((message) => {
          this.messages.push(message);
          this.scrollDown();
        })
      )
      .subscribe();
  }

  sendMessage(inputText) {
    this.stompWebsocketService.sendMessage(inputText.value);
    inputText.value = null;
    inputText.focus();
  }

  scrollDown() {
    setTimeout(() => {
      const container = this.containerMessages.nativeElement;
      container.scrollTop = container.scrollHeight + container.scrollTop;
    }, 0);
  }
}
