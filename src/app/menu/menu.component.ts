import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CockpitService } from '../services/cockpit.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  opened = false;
  over = 'over';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';

  search: any;

  isLoggedIn: boolean;
  currentUser: any;

  constructor(private cockpit: CockpitService, private snack: MatSnackBar) {}

  ngOnInit() {
    //
    this.cockpit.getAllPages().subscribe(
      res => {
        // console.log(res);
        localStorage.setItem('pages', JSON.stringify(res['data']['pages']));
      },
      error => {
        console.log(error);
        this.snack.open(JSON.stringify(error), 'close');
      }
    );
  }
}
