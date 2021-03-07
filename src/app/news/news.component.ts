import { Component, OnInit } from '@angular/core';
import{AppService} from "../app.service"
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  aboutData:any[]
  constructor(private appService:AppService){
    this.aboutData=[];
    this.appService.getabout().subscribe(about=>{
      this.aboutData=about.results;
    })}
    
  ngOnInit(): void {
    
  }
//#endregion
 getImg(path:any) {
  return  `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`
}


}
