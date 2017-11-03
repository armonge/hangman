import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root header h3')).getText();
  }

  getDashes() {
    return element.all(by.css('app-root app-dashes .letter'));
  }

  getKeyboardLetter(letter: string) {
    return element.all(by.css('app-root app-keyboard .letter')).filter((elem) => {
      return elem.getText().then((text) => {
        return text === letter;
      });
    }).first();
  }

}
