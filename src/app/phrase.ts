import { Letter } from './letter';
import * as _ from 'lodash';

export class Phrase {
  public letters: Letter[];
  public errorCount: number;

  get lost(): boolean {
    return this.errorCount === 5;
  }

  get won(): boolean {
    return _(this.letters)
      .map('revealed')
      .every();
  }

  public constructor(init?: Partial<Phrase>) {
    Object.assign(this, init);
  }
}

