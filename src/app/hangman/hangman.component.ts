import { Component, OnInit } from '@angular/core';

import { HangmanService } from './hangman.service';
import { Letter } from '../letter';
import { Phrase } from '../phrase';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  public phrase: Phrase;
  constructor(private hangmanService: HangmanService) { }

  onCharacterSelected(letter) {
    this.hangmanService.submitLetter(letter, this.phrase)
      .then(phrase => this.phrase = phrase);
  }

  playAgain(): void {
    this.hangmanService.getPhrase()
      .then(phrase => this.phrase = phrase);
  }

  ngOnInit(): void {
    this.playAgain();
  }

}
