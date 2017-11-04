import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ScoresService } from '../high-scores/scores.service';
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
  public showUsernameForm = false;

  constructor(
    private hangmanService: HangmanService,
    private router: Router,
    private scoresService: ScoresService
  ) { }

  onCharacterSelected(letter) {
    this.hangmanService.submitLetter(letter, this.phrase)
      .then(phrase => this.phrase = phrase);
  }

  onUsernameFormSubmitted(username) {
    this.scoresService.submitScore(this.phrase, username)
      .then(() => {
        return this.router.navigate(['/highscore']);
      });
  }

  playAgain(): void {
    this.hangmanService.getPhrase()
      .then(phrase => this.phrase = phrase);

    this.showUsernameForm = false;
  }

  ngOnInit(): void {
    this.playAgain();
  }

}
