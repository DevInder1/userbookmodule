import { UserbookPage } from './app.po';

describe('userbook App', () => {
  let page: UserbookPage;

  beforeEach(() => {
    page = new UserbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
