import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/serices/player.service';
@Component({
  selector: 'app-playerstable',
  templateUrl: './playerstable.component.html',
  styleUrls: ['./playerstable.component.css']
})
export class PlayerstableComponent implements OnInit {
  //Variable globale dans la classe
  id:any;
  players:any=[];
  constructor(private router:Router , private playerservice:PlayerService) { }
   //s'execute auto lorsque on appele le selecteur du composant
  ngOnInit(): void {

    this.playerservice.getAllPlayers().subscribe((data)=>{this.players=data})

  }
  goToDisplay(X:number){
    this.router.navigate([`playerInfo/${X}`])
  }
  goToEdit(X:number){
    this.router.navigate([`editplayer/${X}`])
  }
}
