import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientComponent } from './client/client.component';
import { RegionComponent } from './region/region.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'p/:region', component: RegionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
