import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/serices/teams.service';

@Component({
  selector: 'app-formteam',
  templateUrl: './formteam.component.html',
  styleUrls: ['./formteam.component.css']
})
export class FormteamComponent implements OnInit {

  title: string = 'Add-Team';
  team:any={};
  teams:any=[];
  id:any;
  teamForm:FormGroup;
  constructor(private ar:ActivatedRoute,private teamservice:TeamsService) { }

  ngOnInit(): void {
    this.teamservice.getAllTeams().subscribe((data) => {
      this.teams = data;
    });
    

    this.id=this.ar.snapshot.paramMap.get("id")
    if(this.id)
    {
      this.title="Edit-Team"
      this.teamservice.getTeamById(this.id).subscribe((data)=>this.team=data);
    }

  }
  addOrEditTeam(){
    if(this.id)
    {
//edit
    }
    else{
//add
    }
  }


}
