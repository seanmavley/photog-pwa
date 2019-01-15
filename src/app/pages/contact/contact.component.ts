import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/utils/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any;
  CMS = AppSettings.CMS_ENDPOINT;

  constructor(private title: Title) {}

  ngOnInit() {

    this.title.setTitle('Contact');

    const all_pages = JSON.parse(localStorage.getItem('pages'));
    this.contact = all_pages.find(element => {
      return element.slug === 'contact';
    });
    console.log(this.contact);
  }
}
