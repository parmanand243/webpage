import { Component, OnInit } from '@angular/core';
import{AppService } from"../app.service"
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  homeData:any[]
  constructor(private appService:AppService){
    this.homeData=[];
    this.appService.gethome().subscribe(home=>{
      this.homeData=home.data;
    })
  }

  ngOnInit(): void {
  }

}
