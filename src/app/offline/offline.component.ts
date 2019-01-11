import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {
  @Output() refresh = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  doRefresh() {
    this.refresh.emit(true);
  }
}
