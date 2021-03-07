import { Injectable } from '@angular/core';
import {HttpClient } from"@angular/common/http";
import{Observable} from"rxjs";
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  gethome():Observable<any>{
    return this.http.get("https://reqres.in/api/users?page=2")
  } 
  getabout():Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=c22d02d699119469fa8c1fd462cddf57&language=en-US&page=1")
  }
}
