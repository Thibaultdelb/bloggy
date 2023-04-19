import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../service/authors.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  authors:any;
  constructor(private postService: PostsService, private authorService: AuthorsService, private router : Router){}

  ngOnInit(): void {
    this.refrech();
  }

  createPost(postform:any){
    let titre = postform.value.titre;
    let author = parseInt(postform.value.idAuthor);
    let image = postform.value.image;
    let resume = postform.value.resume;
    let contetu = postform.value.contetu;

    let post={
      "title":titre,
      "image_url":image,
      "resume":resume,
      "content":contetu,
      "author_id":author,
    }

    console.log(post)

    this.postService.addPosts(post).subscribe(
      data=>{
           alert(" Nouveau post ajouter ");
           console.log(data);
           this.router.navigate(['administration']);
      }
    );


  }
  refrech(){
    this.authorService.getAuthors().subscribe(
      data=>{
        this.authors = data;
        console.log(this.authors);
      }
    )
  }
}

