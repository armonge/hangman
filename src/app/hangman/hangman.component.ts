import { Component, OnInit } from '@angular/core';

import { HangmanService } from './hangman.service';
import { Letter } from '../letter';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  private phrase: Letter[];
  private errorCount: number;
  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.hangmanService.getPhrase()
      .then(phrase => this.phrase = phrase);
  }

}
