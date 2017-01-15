import { ObservableTwoWayBindingPage } from './app.po';

describe('observable-two-way-binding App', function() {
  let page: ObservableTwoWayBindingPage;

  beforeEach(() => {
    page = new ObservableTwoWayBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
