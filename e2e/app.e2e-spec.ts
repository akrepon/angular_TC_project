import { TCAngularPage } from './app.po';

describe('tc-angular App', function() {
  let page: TCAngularPage;

  beforeEach(() => {
    page = new TCAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
