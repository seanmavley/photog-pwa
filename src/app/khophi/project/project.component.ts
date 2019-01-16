import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CockpitService } from 'src/app/services/cockpit.service';
import { AppSettings } from '../../utils/constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  CMS = AppSettings.CMS_ENDPOINT;

  busy: boolean;
  article_id: string;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private cockpit: CockpitService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Project');

    this.busy = true;
    this.article_id = this.route.snapshot.params['slug'];

    this.cockpit.getArticle(this.article_id)
      .subscribe((res) => {
        this.busy = false;
        console.log(res);
        this.article = res['data']['articles'][0];
        this.title.setTitle(this.article.title);
      });
  }

}
