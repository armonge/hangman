import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Phrase } from '../phrase';


@Injectable()
export class HangmanService {
  private phrasesUrl = 'api/phrase';
  public errorCount: number;

  constructor(private http: HttpClient) {
    this.errorCount = 0;
  }

  getPhrase(): Promise<Phrase> {
    return this.http
    .get(this.phrasesUrl)
    .toPromise()
    .then(response => new Phrase(response['phrase']))
    .catch(this.handleError);
  }

  submitLetter(letter: string, phrase: Phrase): Promise<Phrase> {
    return this.http
    .post(this.phrasesUrl, { phrase: phrase, letter: letter })
    .toPromise()
    .then(response => new Phrase(response['phrase']))
    .catch(this.handleError);
  }

  private handleError(error) {
    console.error('An error ocurred', error);
    return Promise.reject(error.message);
  }
}


