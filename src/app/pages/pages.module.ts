import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientComponent } from './client/client.component';
import { RegionComponent } from './region/region.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [AboutComponent, ContactComponent, FaqsComponent, TestimonialComponent, ClientComponent, RegionComponent, PricingComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
