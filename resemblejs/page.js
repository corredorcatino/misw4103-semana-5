// page.js

class MyPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateTo(url) {
      await this.page.goto(url);
    }
  
    async clickLoginBtn() {
      await this.page.click('#ember5');
    }

    async clickLoginBtn1() {
      await this.page.click('#ember11');
    }

    async emailTxt(email){
      await this.page.type('#identification', email);
    }

    async emailTxt1(email){
      await this.page.type('#ember7', email);
    }

    async passwordTxt(password){
      await this.page.type('#password', password);
    }

    async passwordTxt1(password){
      await this.page.type('#ember9', password);
    }

    async isOnPage(){
      const selector = 'div[class="gh-nav-menu-details-sitetitle"]';
      await this.page.waitForSelector(selector, { state: 'visible' });
    }

    async messageLoginFail(){
      const selector = 'p[class="main-error"]';
      await this.page.waitForSelector(selector, { state: 'visible' });
    }

    async takeScreenshot(path) {
      await this.page.screenshot({ path });
    }
  }
  
  module.exports = MyPage;
  