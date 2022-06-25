import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  //Adresse du serveur BE
  //http://localhost:3000/matches url lel fake backend donné par le json-server
  matchURL: string = 'http://localhost:3000/matches';
  constructor(private httpclient: HttpClient) {}
  //fnct parametrée
  addMatch(obj: any) {
    //hezz(poster) obj lel matchURL
    return this.httpclient.post(this.matchURL, obj);
  }
  ///response:[{},{},{},...]
  getAllMatches() {
    return this.httpclient.get(this.matchURL);
  }
  //response:{}
  getMatchById(id: any) {
    return this.httpclient.get(this.matchURL + '/' + id);
  }
  deleteMatchById(id: any) {
    return this.httpclient.delete(this.matchURL + '/' + id);
  }
  //put/patch
  updateMatch(obj: any) {
    return this.httpclient.put(this.matchURL + '/' + obj.id, obj);
  }
}
