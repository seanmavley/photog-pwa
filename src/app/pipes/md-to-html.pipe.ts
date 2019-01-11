import { Pipe, PipeTransform } from '@angular/core';
import { CockpitService } from '../services/cockpit.service';
@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private cockpit: CockpitService) { }

  transform(value: string): any {
    return value ? this.cockpit.markdownToHtml(value) : value;
  }

}
