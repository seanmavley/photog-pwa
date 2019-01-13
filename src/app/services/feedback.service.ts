import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/share';

import { AppSettings } from '../utils/constants';

@Injectable()
export class FeedbackService {

  constructor(private http: HttpClient) { }

  /**
   * Send Feedback
   * @param message message Actual Message
   * @param captcha captcha The Recaptcha code
   * @param contact_me contact_me Boolean value if we should contact the one sending feedback
   * @param name name Name of sender
   * @param email email Email of sender
   * @param copy_me copy_me A copy of the email sent to the one initiating feedback
   */
  send_feedback(message: string, captcha: string, contact_me?: boolean, name?: string, email?: string, copy_me?: boolean) {
    const params = {
      'message': message,
      'captcha': captcha,
      'contact_me': contact_me,
      'name': name,
      'email': email,
      'copy_me': copy_me
    };

    return this.http.post(`${AppSettings.CMS_ENDPOINT}/feedback`, params);
  }

}
