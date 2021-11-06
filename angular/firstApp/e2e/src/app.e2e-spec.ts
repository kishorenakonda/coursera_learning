import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to firstApp!');
  // });

  it('this is a default message in specs file message',() =>{
    page.navigateTo();
    expect(page.getValidateText()).toEqual("name");
  })
});
