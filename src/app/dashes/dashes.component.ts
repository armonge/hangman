import { Component, OnInit, Input } from '@angular/core';

import { Letter } from './../letter';

@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css'],
})

export class DashesComponent {
  @Input() phrase: Letter[];
}
