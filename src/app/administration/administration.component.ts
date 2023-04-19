import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../service/authors.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent {
  posts: any;

  authors: any;
  // injection de dependences
  constructor(private postService: PostsService, private router : Router, private authorService : AuthorsService) { }

  ngOnInit(): void {
    this.refrech();
  }


  deletePost(id: any, ) {
    const post: any = this.posts.find((p: any) => p.id === id);


    const title = prompt(`Etes vous sur de vouloir supprimer le post de chat "${post.title}"? Ecrivez précisément le post de chat que vous voulez supprimer pour confirmer:`);

    if (title === post.title) {
      alert("Le post de chat a été supprimer");
      this.postService.deletePost(id).subscribe(
        data => {
          this.refrech();
        }
      );
    } else {
      alert("Post title does not match. Deletion cancelled.");
    }
  }

  detailsPosts(id: any) {
    this.router.navigate(['DetailsPosts/'+id]);
  }

  editPost(id:any){
    this.router.navigate(['EditAdmin/'+id]);
  }

  createPost(){
    this.router.navigate(['CreateAdmin/']);
  }

  bloggy() {
    this.router.navigate(['']);
  }
  refrech() {
    this.postService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      }
    );
    this.authorService.getAuthors().subscribe(
      data => {
        this.authors = data;
        console.log(this.authors);

        for(let post of this.posts){
          for(let author of this.authors){
            if(post.author_id == author.id){
              post.full_name = author.full_name;
              console.log(post);
            }
          }

        }
      }
    );
  }

}

