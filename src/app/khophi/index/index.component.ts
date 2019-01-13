import { Component, OnInit } from '@angular/core';
import { CockpitService } from 'src/app/services/cockpit.service';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../utils/constants';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  CMS = AppSettings.CMS_ENDPOINT;
  categories: any;
  busy: boolean;

  constructor(private cockpit: CockpitService, private snack: MatSnackBar) {}

  ngOnInit() {
    this.busy = true;
    this.cockpit.listCategories().subscribe(res => {
      this.busy = false;
      console.log(res);
      this.categories = res['data']['categories'];
      // }, (error) => {
      //   console.log(error);
      //   this.snack.open(error, 'close');
    });
  }
}
