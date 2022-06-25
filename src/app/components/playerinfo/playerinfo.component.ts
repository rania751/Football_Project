import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/serices/player.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css'],
})
export class PlayerinfoComponent implements OnInit {

  foundedplayer: any={};
  id: any;
  players: any;
  constructor(
    private ar: ActivatedRoute,
    private playerservice: PlayerService
  ) {}

  ngOnInit(): void {
  
    this.id = this.ar.snapshot.paramMap.get('id');

    this.foundedplayer = this.playerservice.getPlayerById(this.id).subscribe((data)=>{this.foundedplayer=data});

    //  for (let i=0;i<this.players.length;i++){
    //   if (this.players[i].id==this.id)
    //   {
    //     this.foundedplayer=this.players[i]
    //     break
    //   }
    //  }
  }
}
