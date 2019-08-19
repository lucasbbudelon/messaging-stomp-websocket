import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StompWebsocketService } from './stomp-websocket.service';
import { SenderComponent } from './components/sender/sender.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    MessagesComponent,
    ConnectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StompWebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
