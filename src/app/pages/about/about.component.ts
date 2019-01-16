import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/utils/constants';
import { Title } from '@angular/platform-browser';
import { CockpitService } from 'src/app/services/cockpit.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any;
  CMS = AppSettings.CMS_ENDPOINT;

  constructor(private title: Title, private cockpit: CockpitService) {}

  ngOnInit() {
    this.title.setTitle('About');

    this.cockpit.getPage('about')
      .subscribe((res) => {
        this.about = res['data']['pages'][0];
        console.log(this.about);
      });
  }
}
