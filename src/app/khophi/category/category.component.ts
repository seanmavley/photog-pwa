import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CockpitService } from 'src/app/services/cockpit.service';
import { AppSettings } from '../../utils/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  CMS = AppSettings.CMS_ENDPOINT;
  category: any;
  slug: string;
  busy: boolean;

  constructor(private route: ActivatedRoute, private cockpit: CockpitService, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Category');

    this.busy = true;
    this.slug = this.route.snapshot.params['slug'];

    this.cockpit.getCategory(this.slug).subscribe(res => {
      this.busy = false;
      console.log(res);
      this.category = res['data']['categories'][0];
    });
  }
}
