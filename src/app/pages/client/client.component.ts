import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},

  ];
  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Clients');
  }

}
