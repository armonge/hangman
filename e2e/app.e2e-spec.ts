import { AppPage } from './app.po';

describe('hangman App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hangman');
  });

  it('should display dashes', () => {
    page.navigateTo();
    expect(page.getDashes().count()).toBeGreaterThan(1);
  });

  it('should turn dashes into visible after appropiate keyboard click', () => {
    page.navigateTo();
    page.getDashes().first().getAttribute('data-letter').then((letter: string) => {
      page.getKeyboardLetter(letter).click();
      expect(page.getDashes().first().getAttribute('data-revealed')).toEqual('true');
    });
  });
});
