import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/serices/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
 
  players:any;
  constructor(private playerservice:PlayerService) { }

  ngOnInit(): void {

    this.playerservice.getAllPlayers().subscribe((data)=>{this.players=data;});
 
  }

}
