import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FigureComponent } from './figure/figure.component';
import { DashesComponent } from './dashes/dashes.component';
import { HangmanComponent } from './hangman/hangman.component';
import { HighScoreComponent } from './high-score/high-score.component';
import { HangmanService } from './hangman/hangman.service';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    FigureComponent,
    DashesComponent,
    HangmanComponent,
    HighScoreComponent,
  ],
  imports: [
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/hangman',
        pathMatch: 'full'
      },
      {
        path: 'hangman',
        component: HangmanComponent,
      },
      {
        path: 'highscore',
        component: HighScoreComponent
      }
    ])
  ],
  providers: [ HangmanService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
