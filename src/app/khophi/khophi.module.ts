import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhophiRoutingModule } from './khophi-routing.module';
import { IndexComponent } from './index/index.component';
import { CategoryComponent } from './category/category.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../shared/shared.module';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [IndexComponent, CategoryComponent, ProjectComponent, ImageComponent],
  imports: [
    CommonModule,
    KhophiRoutingModule,
    SharedModule
  ]
})
export class KhophiModule { }
