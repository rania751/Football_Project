import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() X:any;
  constructor() { }
 

  ngOnInit(): void {
  }

  scorecolor(a:number,b:number):string{
    if (a>b){
    return "green";}
    else if(a<b)
    {
    return "orange"}
    else {return "blue"}
  }

}
