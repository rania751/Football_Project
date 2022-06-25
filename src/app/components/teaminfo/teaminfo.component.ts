import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/serices/teams.service';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.css']
})
export class TeaminfoComponent implements OnInit {

  id:any;
  team:any;
  constructor(private ar:ActivatedRoute,private teamservice:TeamsService) { 
   this.id=this.ar.snapshot.paramMap.get("id")
   this.team=this.teamservice.getTeamById(this.id).subscribe((data)=>{this.team=data})
  }

  ngOnInit(): void {
  }

}
