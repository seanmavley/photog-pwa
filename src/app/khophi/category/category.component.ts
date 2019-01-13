import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CockpitService } from 'src/app/services/cockpit.service';
import { AppSettings } from '../../utils/constants';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  CMS = AppSettings.CMS_ENDPOINT;
  category: any;
  category_id: string;
  busy: boolean;

  constructor(private route: ActivatedRoute, private cockpit: CockpitService) {}

  ngOnInit() {
    this.busy = true;
    this.category_id = this.route.snapshot.params['id'];

    this.cockpit.getCategory(this.category_id).subscribe(res => {
      this.busy = false;
      console.log(res);
      this.category = res['data']['category'];
    });
  }
}
