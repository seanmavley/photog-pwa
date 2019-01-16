import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/utils/constants';
import { Title } from '@angular/platform-browser';
import { CockpitService } from 'src/app/services/cockpit.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any;
  CMS = AppSettings.CMS_ENDPOINT;

  constructor(private title: Title, private cockpit: CockpitService) {}

  ngOnInit() {

    this.title.setTitle('Contact');

    this.cockpit.getPage('contact')
      .subscribe((res) => {
        this.contact = res['data']['pages'][0];
        console.log(this.contact);
      });
  }
}
