import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/serices/match.service';

@Component({
  selector: 'app-matchestable',
  templateUrl: './matchestable.component.html',
  styleUrls: ['./matchestable.component.css'],
})
export class MatchestableComponent implements OnInit {
  matches: any;
  id:any;
  // matches:any=[
  //   {id:1,scoreOne:2,scoreTwo:3,teamOne:"FCA",teamTwo:"RMD"},
  //   {id:2,scoreOne:5,scoreTwo:1,teamOne:"FCB",teamTwo:"RMO"},
  //   {id:3,scoreOne:3,scoreTwo:2,teamOne:"FCA",teamTwo:"RMD"},
  //   {id:4,scoreOne:0,scoreTwo:0,teamOne:"FCA",teamTwo:"RMO"}
  // ];
  constructor(private ar:ActivatedRoute, private router: Router, private matchService: MatchService) {}

  ngOnInit() {
    this.id=this.ar.snapshot.paramMap.get("id")
    //data esm l response mta3 subscription :tableau d'objets
    this.matchService.getAllMatches().subscribe((data) => {
      console.log('here data', data);
      this.matches=data;
    });
  }

  goTDisplay(X: number) {
    this.router.navigate([`matcheInfor/${X}`]);
  }

  goTEdit(X: number) {
    // yelzm nafs el esm ella hattetou fl app routing pour le path
    this.router.navigate([`editmatch/${X}`]);
  }

}
