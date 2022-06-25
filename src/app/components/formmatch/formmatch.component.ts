import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/serices/match.service';

@Component({
  selector: 'app-formmatch',
  templateUrl: './formmatch.component.html',
  styleUrls: ['./formmatch.component.css']
})
export class FormmatchComponent implements OnInit {

  title: string=  'Add-Match';
  match:any={};
  matches:any=[];
  id:any;
  teamForm:FormGroup;
  constructor(private ar:ActivatedRoute,private matchservice:MatchService) { }

  ngOnInit(): void {
    this.matchservice.getAllMatches().subscribe((data) => {
      this.matches = data;
    });




    this.id=this.ar.snapshot.paramMap.get("id")
    if(this.id)
    {
      this.title="Edit-Team"
      this.matchservice.getMatchById(this.id).subscribe((data)=>this.match=data);
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

