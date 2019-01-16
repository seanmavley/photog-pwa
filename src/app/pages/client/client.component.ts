import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CockpitService } from 'src/app/services/cockpit.service';
import { AppSettings } from 'src/app/utils/constants';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  CMS = AppSettings.CMS_ENDPOINT;

  clients: any;

  constructor(private title: Title, private cockpit: CockpitService) { }

  ngOnInit() {
    this.title.setTitle('Clients');
    this.cockpit.getAllClients()
      .subscribe((res) => {
        console.log(res);
        this.clients = res['data']['clients'];
      });
  }

}
