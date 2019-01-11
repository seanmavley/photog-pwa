import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';
import { AppSettings } from './constants';

const COLLECTIONS = '/collections';
const REGIONS = '/regions';

@Injectable()
export class CockpitService {

  constructor(private http: HttpClient) { }

  /**
   * Get all entries of a collection
   * @param collection collection The name of the collection wanted
   */
  getEntries(collection: string) {
    return this.http.get(`${AppSettings.CMS_ENDPOINT}${COLLECTIONS}/get/${collection}?token=${AppSettings.TOKEN}`)
      // .map((res) => {
      //   if (res) {
      //     console.log(`${collection} stored for online use`);
      //     localStorage.setItem(collection, JSON.stringify(res));
      //   }
      //   return res;
      // })
      // .catch((err) => {
      //   return of(JSON.parse(localStorage.getItem('faq')));
      // });
  }

  /**
   * Get a snippet for use in a section i.e about or help page
   * @param region the section to pull
   */
  getRegion(region: string) {
    return this.http.get(`${AppSettings.CMS_ENDPOINT}${REGIONS}/data/${region}?token=${AppSettings.TOKEN}`)
      // .map((res) => {
      //   if (res) {
      //     console.log(`${region} stored for online use`);
      //     localStorage.setItem(region, JSON.stringify(res));
      //   }
      //   return res;
      // })
      // .catch((err: HttpErrorResponse) => {
      //   console.log(err);
      //   console.log('loaded from localstorage');
      //   return of(JSON.parse(localStorage.getItem(region)));
      // });
  }

  markdownToHtml(md: string) {
    return marked(md);
  }

}
