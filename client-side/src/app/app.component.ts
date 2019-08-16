import { Component, OnDestroy, OnInit } from '@angular/core';
import { StompWebsocketService } from './stomp-websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private stompWebsocketService: StompWebsocketService) { }

  ngOnInit() {
    this.stompWebsocketService.subscribe();
  }

  ngOnDestroy() {
    this.stompWebsocketService.unsubscribe();
  }
}
