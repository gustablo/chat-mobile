import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
  }

  get lastMessage() {
    return this.socket.fromEvent<any>('getMessages');
  }

  sendMessages(value: string) {
    this.socket.emit('sendMessage', value);
  }
}