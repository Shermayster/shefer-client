import { SheferClientAppPage } from './app.po';

describe('shefer-client-app App', function() {
  let page: SheferClientAppPage;

  beforeEach(() => {
    page = new SheferClientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
