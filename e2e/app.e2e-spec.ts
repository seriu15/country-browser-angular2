import { CountryBrowserPage } from './app.po';

describe('country-browser App', () => {
  let page: CountryBrowserPage;

  beforeEach(() => {
    page = new CountryBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cb works!');
  });
});
