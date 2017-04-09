import { SamplePwaPage } from './app.po';

describe('sample-pwa App', () => {
  let page: SamplePwaPage;

  beforeEach(() => {
    page = new SamplePwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
