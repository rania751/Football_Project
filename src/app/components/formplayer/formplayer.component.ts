import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/serices/player.service';

@Component({
  selector: 'app-formplayer',
  templateUrl: './formplayer.component.html',
  styleUrls: ['./formplayer.component.css'],
})
export class FormplayerComponent implements OnInit {
  title: string = 'Add Player';
  player: any = {};
  players: any=[];
  playerForm: FormGroup;
  id: any;
  constructor(
    private ar: ActivatedRoute,
    private playerservice: PlayerService
  ) {}

  ngOnInit(): void {
    this.playerservice.getAllPlayers().subscribe((data) => {
      this.players = data;
    });

    this.id = this.ar.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Edit Player';
      //serch obj by id
      //   for(let i=0;i<this.players.length;i++)
      //   {
      //     if (this.players[i].id==this.id){
      //       this.player=this.players[i];
      //       break
      //     }
      // }
      this.player = this.playerservice.getPlayerById(this.id).subscribe((data)=>{this.player=data});
    }
  }
  addOrEditPlayer() {
    if (this.id) {
      //edit
    } else {
      //add
    }
  }
}
