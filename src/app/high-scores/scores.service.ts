import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Phrase } from '../phrase';


@Injectable()
export class ScoresService {
  private scoresUrl = 'api/scores';

  constructor(private http: HttpClient) { }

  submitScore(phrase: Phrase, username: string) {
    return this.http
    .post(this.scoresUrl, { phrase: phrase.plain, score: phrase.score, username: username })
    .toPromise()
    .then(result => result['rank'])
    .catch(this.handleError);
  }

  getScores() {
    return this.http
    .get(this.scoresUrl)
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error) {
    console.error('An error ocurred', error);
    return Promise.reject(error.message);
  }

}
