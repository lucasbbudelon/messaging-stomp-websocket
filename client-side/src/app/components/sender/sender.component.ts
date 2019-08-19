import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { StompWebsocketService } from 'src/app/stomp-websocket.service';
import { ConnectionStatus } from 'src/app/app.model';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  public enableInput: boolean;

  constructor(private stompWebsocketService: StompWebsocketService) { }

  ngOnInit() {
    this.stompWebsocketService.connection
      .pipe(
        filter(value => Boolean(value)),
        tap((value) => this.enableInput = value.status === ConnectionStatus.OPEN)
      )
      .subscribe();

    this.stompWebsocketService.senderName
      .pipe(
        filter(value => Boolean(value)),
        tap(() => this.enableInput = false)
      )
      .subscribe();
  }

  load(inputText) {
    this.stompWebsocketService.setSenderName(inputText.value);
  }
}
