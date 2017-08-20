import { PhilaKEYSPOTMapPage } from './app.po';

describe('phila-keyspot-map App', () => {
  let page: PhilaKEYSPOTMapPage;

  beforeEach(() => {
    page = new PhilaKEYSPOTMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
