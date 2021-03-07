import { Component } from '@angular/core';
import{AppService} from "./app.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeData:any[]
  constructor(private appService:AppService){
    this.homeData=[];
    this.appService.gethome().subscribe(home=>{
      this.homeData=home.data;
    })
    
  }
}
