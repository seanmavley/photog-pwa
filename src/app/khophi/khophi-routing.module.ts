import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { ProjectComponent } from './project/project.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'article/:id', component: ProjectComponent },
  { path: 'image/:url', component: ImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhophiRoutingModule { }