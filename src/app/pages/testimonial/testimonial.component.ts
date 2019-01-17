import { Component, OnInit } from '@angular/core';
import { CockpitService } from 'src/app/services/cockpit.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  busy: boolean;
  testimonials: any;

  constructor(private cockpit: CockpitService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Testimonials');
    this.busy = true;
    this.cockpit.getAllTestimonials()
      .subscribe(res => {
        this.busy = false;
        this.testimonials = res['data']['testimonials'];
      });
  }

}
