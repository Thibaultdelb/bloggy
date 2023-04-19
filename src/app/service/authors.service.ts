import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {}

  getAuthors(){
    return this.http.get("http://101917.bloggy.ecole-it.devigne.space/authors/")
  }
  getAuthor(id:number){
    return this.http.get("http://101917.bloggy.ecole-it.devigne.space/authors/")
  }


}
