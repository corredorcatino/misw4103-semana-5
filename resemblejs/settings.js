// page.js

class MyPage1 {
    constructor(page) {
      this.page = page;
    }
  
    async clickSettingsBtn() {
      await this.page.click('#ember34');
    }

    async clickGeneral() {
      await this.page.click('a[href="#/settings/general/"]');
    }

    async clickEditTitleBtn1() {
      const buttons = await this.page.$$("button[class='gh-btn']");
      if (buttons.length > 0) {
        await buttons[0].click();
      } else {
        console.error('No se encontraron botones con el selector especificado.');
      }
    }

    async clickEditTitleBtn() {
      const buttons = await this.page.$$('button[class="cursor-pointer  text-green hover:text-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold -m-1 p-1"]:first-child');
      if (buttons.length > 0) {
        await buttons[0].click();
      } else {
        console.error('No se encontraron botones con el selector especificado.');
      }
    }
    
    async typeTitle(title){
      const selector = "input[id=':rm:']";
      await this.page.type(selector, title);
    }

    async typeTitle1() {
      if (this.page) {
        const inputs = await this.page.$$('input.ember-text-field.gh-input.ember-view[type="text"]');
        if (inputs.length > 0) {
          const primerInput = inputs[0];
          await primerInput.click();
        } else {
          console.error('No se encontraron inputs con el selector especificado.');
        }
      } else {
        console.error('La página no está disponible.');
      }
    }
    

    async clickSaveTitle1() {
      const buttons = await this.page.$$('#ember166');
      if (buttons.length > 0) {
        await buttons[0].click();
      } else {
        console.error('No se encontraron botones con el selector especificado.2');
      }
    }

    async clickSaveTitle() {
      const buttons = await this.page.$$('button[class="cursor-pointer  text-green hover:text-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold -m-1 p-1"]');
      if (buttons.length > 0) {
        await buttons[0].click();
      } else {
        console.error('No se encontraron botones con el selector especificado.3');
      }
    }


  }
  
  module.exports = MyPage1;
  