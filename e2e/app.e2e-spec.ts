import { ClientWebpackPage } from './app.po';

describe('client-webpack App', function() {
  let page: ClientWebpackPage;

  beforeEach(() => {
    page = new ClientWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
