import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';

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

  constructor(private dialog: MatDialog,
    private router: Router, private snack: MatSnackBar) { }


    ngOnInit() {
      //
    }
}
