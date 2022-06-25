import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/serices/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any=[];
  constructor(private matchService: MatchService ) { }


  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe((data)=>{this.matches=data;}); 
    // this.matches=[
    //   {id:1,scoreOne:2,scoreTwo:3,teamOne:"FCB",teamTwo:"RMD"},
    //   {id:2,scoreOne:5,scoreTwo:1,teamOne:"CA",teamTwo:"EST"},
    //   {id:3,scoreOne:3,scoreTwo:2,teamOne:"SEV",teamTwo:"STM"},
    //   {id:4,scoreOne:0,scoreTwo:0,teamOne:"FCB",teamTwo:"RMD"}
    // ]
  }

}
