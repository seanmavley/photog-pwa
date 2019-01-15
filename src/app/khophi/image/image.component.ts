import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../utils/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  CMS = AppSettings.CMS_ENDPOINT;

  image_url: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.image_url = `${this.CMS}/uploads/${this.route.snapshot.params['url']}`;
    console.log(this.image_url);
  }

}
