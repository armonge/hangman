import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Phrase } from '../phrase';


@Injectable()
export class HangmanService {
  private phrasesUrl = 'api/phrase';
  public errorCount: number;

  constructor(private http: Http) {
    this.errorCount = 0;
  }

  getPhrase(): Promise<Phrase> {
    return this.http
    .get(this.phrasesUrl)
    .toPromise()
    .then(response => new Phrase(response.text()))
    .catch(this.handleError);
  }

  submitLetter(letter: string, phrase: Phrase): Promise<Phrase> {
    const letters = phrase.letters.filter(l => l.letter === letter);
    if (letters.length === 0) {
      phrase.errorCount += 1;
    }

    letters.map(l => l.revealed = true);

    return Promise.resolve(phrase);
  }

  private handleError(error) {
    console.error('An error ocurred', error);
    return Promise.reject(error.message);
  }
}


