export class Letter {
  public revealed = false;

  constructor( public letter: string) {
    if (letter === ' ') {
      this.revealed = true;
    }
  }
}
