import { Component, OnInit } from '@angular/core';
import { ScoresService } from './scores.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {
  public scores: any[];

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.scoresService.getScores()
      .then(result => this.scores = result['scores']);

  }

}
