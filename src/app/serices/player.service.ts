import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL: string = 'http://localhost:3000/players';
  constructor(private httpc: HttpClient) { }

  addPlayer(obj:any)
{
  return this.httpc.post(this.playerURL,obj)

}
getAllPlayers() {
  return this.httpc.get(this.playerURL);
}

getPlayerById(id: any) {
  return this.httpc.get(this.playerURL + '/' + id);
}


deleteMatchById(id: any) {
  return this.httpc.delete(this.playerURL + '/' + id);
}


//put/patch
updatePlayer(obj: any) {
  return this.httpc.put(this.playerURL + '/' + obj.id, obj);
}

}

