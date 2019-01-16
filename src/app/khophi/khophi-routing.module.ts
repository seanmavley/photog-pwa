import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { ProjectComponent } from './project/project.component';
import { ImageComponent } from './image/image.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'article/:slug', component: ProjectComponent },
  { path: 'image/:url/:slug', component: ImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhophiRoutingModule { }
