import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() title:string; 

  actualdate:Date;
  constructor() { }

  ngOnInit(): void {
    this.actualdate=new Date();
    
  }

}
