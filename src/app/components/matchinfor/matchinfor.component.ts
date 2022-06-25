import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/serices/match.service';

@Component({
  selector: 'app-matchinfor',
  templateUrl: './matchinfor.component.html',
  styleUrls: ['./matchinfor.component.css'],
})
export class MatchinforComponent implements OnInit {
  id: any;
  matches: any;
  foundedMatch: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) {}
  ngOnInit() {
    //     //a importer dans fichier : matches
    //     this.matches=[
    //       {id:1,scoreOne:2,scoreTwo:3,teamOne:"FCB",teamTwo:"RMD"},
    //       {id:2,scoreOne:5,scoreTwo:1,teamOne:"FCB",teamTwo:"RMD"},
    //       {id:3,scoreOne:3,scoreTwo:2,teamOne:"FCB",teamTwo:"RMD"},
    //       {id:4,scoreOne:0,scoreTwo:0,teamOne:"FCB",teamTwo:"RMD"}
    //     ];

    //     this.id=this.activatedRoute.snapshot.paramMap.get("id")
    //   for (let i = 0; i < this.matches.length; i++) {
    // if (this.matches[i].id==this.id)
    // {
    //   this.foundedMatch=this.matches[i]
    //   break
    // }
    //   }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe((data: any) => {
      this.foundedMatch = data;
    });
  }
}
