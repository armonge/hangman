import { Component, OnInit, Input } from '@angular/core';

import { Phrase } from '../phrase';

@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css'],
})

export class DashesComponent {
  @Input() phrase: Phrase;
}
