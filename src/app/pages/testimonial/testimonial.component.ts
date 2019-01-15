import { Component, OnInit } from '@angular/core';
import { CockpitService } from 'src/app/services/cockpit.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonials: any;

  constructor(private cockpit: CockpitService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Testimonials');

    this.cockpit.getAllTestimonials()
      .subscribe(res => {
        console.log(res);
        this.testimonials = res['data']['testimonials'];
      });
  }

}
