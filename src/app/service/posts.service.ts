import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  // 1 - get posts

  getPosts() {
    // const headers = { 'Access-Control-Allow-Origin': '*' };
    return this.http.get("http://101917.bloggy.ecole-it.devigne.space/posts/");
  }

  // 2 - add posts

  addPosts(post:any) {
    return this.http.post("http://101917.bloggy.ecole-it.devigne.space/posts/", post);
  }

  // 3 get post
  getPost(id:number) {
    return this.http.get("http://101917.bloggy.ecole-it.devigne.space/posts/"+id);
  }

  // 4 edit post
  editPost(post:any) {
    return this.http.put("http://101917.bloggy.ecole-it.devigne.space/posts/"+post['id'], post);
  }

  // 5 delete post
  deletePost(id:number){
    return this.http.delete("http://101917.bloggy.ecole-it.devigne.space/posts/"+id);
  }
}
