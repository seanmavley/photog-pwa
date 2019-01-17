import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/utils/constants';
import { ActivatedRoute } from '@angular/router';
import { CockpitService } from 'src/app/services/cockpit.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  busy: boolean;
  region: any;
  CMS = AppSettings.CMS_ENDPOINT;

  constructor(private title: Title,
    private cockpit: CockpitService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.busy = true;
    const page_name = this.route.snapshot.params['region'];

    this.title.setTitle(page_name);

    this.cockpit.getPage('page_name')
      .subscribe(res => {
        this.busy = false;
        this.region = res['data']['pages'][0];
      });
  }
}
