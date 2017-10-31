import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Letter } from '../letter';

@Injectable()
export class HangmanService {
  private phrasesUrl = 'api/phrase';
  constructor(private http: Http) { }

  getPhrase(): Promise<Letter[]> {
    return this.http
    .get(this.phrasesUrl)
    .toPromise()
    .then(response => response.text().split('').map(l => new Letter(l)))
    .catch(this.handleError);
  }

  private handleError(error) {
    console.error('An error ocurred', error);
    return Promise.reject(error.message);
  }
}


