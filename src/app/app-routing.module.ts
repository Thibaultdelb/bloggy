import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdministrationComponent} from './administration/administration.component';
import {CreateAdminComponent} from './create-admin/create-admin.component';
import {EditAdminComponent} from './edit-admin/edit-admin.component';
import {PostComponent} from './post/post.component';
import {DetailsPostsComponent} from './details-posts/details-posts.component';
import {HomepageComponent} from './homepage/homepage.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';




const routes: Routes = [
  {path: "", component: HomepageComponent},

  {path: 'administration',  component: AdministrationComponent },
  {path: 'CreateAdmin',  component: CreateAdminComponent },
  {path: 'EditAdmin/:id',  component: EditAdminComponent },
  {path: 'Post',  component: PostComponent },
  {path: 'DetailsPosts/:id',  component: DetailsPostsComponent },
  {path: "404", component: ErrorHandlingComponent},
  {path: "**", component: ErrorHandlingComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
