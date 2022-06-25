import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/serices/teams.service';

@Component({
  selector: 'app-teamstable',
  templateUrl: './teamstable.component.html',
  styleUrls: ['./teamstable.component.css']
})
export class TeamstableComponent implements OnInit {

  teams:any;
  constructor(private router:Router,private httpclient:TeamsService){ }

  ngOnInit(): void {
    this.httpclient.getAllTeams().subscribe((data)=>{this.teams=data})

  }

goToDisplay(X:number){
  this.router.navigate([`teamInfo/${X}`])
}
goToEdit(X:number){
  this.router.navigate([`editteam/${X}`])
}
}


