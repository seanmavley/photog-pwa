import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CockpitService } from 'src/app/services/cockpit.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  busy: boolean;
  faqs: any;

  constructor(private title: Title, private cockpit: CockpitService) {}

  ngOnInit() {
    this.title.setTitle('Contact');
    this.busy = true;
    this.cockpit.getAllFaqs()
      .subscribe((res) => {
        this.busy = false;
        this.faqs = res['data']['faqs'];
      });
  }
}
