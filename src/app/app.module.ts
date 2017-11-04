import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FigureComponent } from './figure/figure.component';
import { DashesComponent } from './dashes/dashes.component';
import { HangmanComponent } from './hangman/hangman.component';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { HangmanService } from './hangman/hangman.service';
import { UsernameFormComponent } from './username-form/username-form.component';
import { ScoresService } from './high-scores/scores.service';

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
    HighScoresComponent,
    UsernameFormComponent,
  ],
  imports: [
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
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
        component: HighScoresComponent
      }
    ])
  ],
  providers: [ HangmanService, ScoresService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
