import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
@WebSocketGateway(8000,{
    cors:{origin:'*'},
    
})
export class webAdaptor implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer()
    server : Server;
    users = 0;
    async handleConnection() {
        this.users++;  //사용자 증가
        this.server.emit('users', this.users);
        console.log(this.users);
      }
    
      //OnGatewayDisconnect를 오버라이딩
      async handleDisconnect() {
        this.users--;  //사용자 감소
        this.server.emit('users', this.users);
        console.log(this.users);
      }
    
      @SubscribeMessage('chat')
      async onChat(client : Socket, message) { 
        console.log(client.rooms)  //현재 클라이언트의 방
        console.log(message)    //메시지
        client.broadcast.emit('chat', message);  //전체에게 방송함
      }
}