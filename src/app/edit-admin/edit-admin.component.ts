import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from '../service/authors.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {

  constructor(private postService: PostsService, private authorService: AuthorsService, private activeRoute: ActivatedRoute, private router: Router) { }

  post: any;
  author: any;
  public id: any;
  public postToUpdate: any;
  public titre: any;
  public id_Author: any;
  public image: any;
  public resume: any;
  public contenu: any;


  ngOnInit() {
   this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });


    this.postService.getPost(this.id).subscribe(
      response => {
        this.post = response;
        this.titre = this.post.title;
        this.image = this.post.image_url;
        this.resume = this.post.resume;
        this.contenu = this.post.content;
        this.id_Author = this.post.author_id;
        this.refrech();

      }
    );
  }



 updatepost() {
    this.postToUpdate = {
      'author_id': this.id_Author,

      'image_url': this.image,
      'resume': this.resume,
      'content': this.contenu,
      'id': this.id,
      'title': this.titre,

    }

    this.postService.editPost( this.postToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['administration']);
      }
    );
  }
  refrech() {
    this.authorService.getAuthors().subscribe(
      data => {
        this.author = data;
        console.log(this.author);
      }
    );
  }

}
