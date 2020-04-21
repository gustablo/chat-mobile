import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  messages: string[] = [];
  newMessage: string;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.appendLastMessage();
  }

  ngOnDestroy() { }

  appendLastMessage() {
    this.socketService.lastMessage.subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    this.socketService.sendMessages(this.newMessage);

    this.messages.push(this.newMessage);
    this.newMessage = '';
  }

}
