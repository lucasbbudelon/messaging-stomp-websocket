import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { Connection, ConnectionStatus } from 'src/app/app.model';
import { StompWebsocketService } from 'src/app/stomp-websocket.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  public connection: Connection;

  constructor(private stompWebsocketService: StompWebsocketService) {
    this.connection = {
      text: 'CONNECTING: Wait while connection is established!',
      status: null
    };
  }

  ngOnInit() {
    this.stompWebsocketService.connection
      .pipe(
        filter(connection => Boolean(connection)),
        tap(connection => this.connection = connection)
      )
      .subscribe();
  }

  get bg() {
    switch (this.connection.status) {
      case ConnectionStatus.OPEN: return 'bg-success';
      case ConnectionStatus.CLOSED: return 'bg-warning';
      case ConnectionStatus.FAILED: return 'bg-danger';
      default: return 'bg-primary';
    }
  }
}
