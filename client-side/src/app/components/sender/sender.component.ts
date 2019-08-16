import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { StompWebsocketService } from 'src/app/stomp-websocket.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  public enableInput = true;

  constructor(private stompWebsocketService: StompWebsocketService) { }

  ngOnInit() {
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
