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

  busy: boolean;
  CMS = AppSettings.CMS_ENDPOINT;

  clients: any;

  constructor(private title: Title, private cockpit: CockpitService) { }

  ngOnInit() {
    this.busy = true;
    this.title.setTitle('Clients');
    this.cockpit.getAllClients()
      .subscribe((res) => {
        this.busy = false;
        this.clients = res['data']['clients'];
      });
  }

}
