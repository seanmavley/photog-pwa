import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/utils/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any;
  CMS = AppSettings.CMS_ENDPOINT;

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Contact');

    const all_pages = JSON.parse(localStorage.getItem('pages'));
    this.about = all_pages.find(element => {
      return element.slug === 'about';
    });
    console.log(this.about);
  }
}
