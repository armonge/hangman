import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})

export class KeyboardComponent implements OnInit {
  private letterRows: [[string]];
  constructor() { }

  ngOnInit() {
    this.letterRows =  [
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm', ],
    ];
  }

}
