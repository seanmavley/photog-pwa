import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/utils/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  busy: boolean;
  region: any;
  CMS = AppSettings.CMS_ENDPOINT;

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.title.setTitle('Contact');

    const page_name = this.route.snapshot.params['region'];

    const all_pages = JSON.parse(localStorage.getItem('pages'));
    this.region = all_pages.find(element => {
      return element.slug === page_name;
    });
    console.log(this.region);
  }
}
