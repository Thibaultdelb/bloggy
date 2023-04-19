import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  posts : any;

  constructor(private postServices: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.refrech();
  }

  readmorePost(id: any) {
    this.router.navigate(['DetailsPosts/'+id]);
  }

  refrech() {
    this.postServices.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      }
    );
  }
  administration() {
    this.router.navigate(['administration']);
  }

}
