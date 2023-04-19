import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../service/authors.service';
import { PostsService } from '../service/posts.service';
@Component({
  selector: 'app-details-posts',
  templateUrl: './details-posts.component.html',
  styleUrls: ['./details-posts.component.css']
})
export class DetailsPostsComponent {
  post: any;
  private id: any;
  authors: any;

  constructor(private postService: PostsService, private activeRoute: ActivatedRoute, private authorService : AuthorsService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });


    this.postService.getPost(this.id).subscribe(
      response => {

        this.post = response
      }
    );
    this.authorService.getAuthors().subscribe(
      data => {
        this.authors = data;



          for(let author of this.authors){
            if(this.post.author_id == author.id){
              this.post.full_name = author.full_name;

            }
  }

}
);
  }
}
