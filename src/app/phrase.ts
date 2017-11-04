import { Letter } from './letter';
import * as _ from 'lodash';

export class Phrase {
  public letters: Letter[];
  public errorCount: number;

  get score(): number {
    const revealedLetters =  _(this.letters)
      .map('revealed')
      .filter()
      .uniq()
      .value()
      .length;

    // we add 5 cause we don't want negative scores
    return revealedLetters - this.errorCount + 5;
  }

  get lost(): boolean {
    return this.errorCount === 5;
  }

  get plain(): string {
    return _.map(this.letters, 'letter').join('');
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

