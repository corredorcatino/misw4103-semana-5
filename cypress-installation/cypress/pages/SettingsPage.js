class SettingsPage{

    elements = {
        settingsBtn: () => cy.get("#ember34"),
        editTitleBtn: () => cy.xpath("/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button"),
        titleInput: ()=> cy.get("input[id=':rm:']"),
        saveTitleBtn: () => cy.xpath("/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button[2]"),
        doneButton: () => cy.xpath("/html/body/div[2]/div/main/div[1]/div/div/div[2]/button"),
        titleLbl: () => cy.get("div[class='gh-nav-menu-details-sitetitle']"),
        viewSiteBtn: () => cy.get("#ember50"),
        privateEditBtn: () => cy.xpath('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[2]/div[2]/div/button'),
        setPriveteSlide: () => cy.xpath('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[3]/div/div/input'),
        privateInput: ()=> cy.xpath("/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[3]/div[2]/div/input"),
        privateSave: () => cy.xpath('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[8]/div[2]/div[2]/div/button[2]'),
        privateMessageLbl: () => cy.xpath('//span[contains(text(),"Your site is password protected")]'),
        inivitePeopleBtn: () => cy.xpath('/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[9]/div[2]/div[2]/button'),
        inivitePeopleInput: () => cy.xpath("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[1]/div/input"),
        sendInvitationNowBtn: () => cy.xpath("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[2]/div[2]/div/button"),
        inivitePeoplMessage: () => cy.xpath("/html/body/div[2]/div/main/div[1]/div/div/div[1]/div/div"),
      }; 

      clickSettings() {
        this.elements.settingsBtn().click();
      }

      clickEditTitle() {
        this.elements.editTitleBtn().click();
      }

      typeTitle(title) {
        this.elements.titleInput().clear()
        this.elements.titleInput().type(title);
      } 


      clickSaveTittle() {
        this.elements.saveTitleBtn().click();
        cy.wait(1000)
      }

      clickDone() {
        this.elements.doneButton().click();
      }

      doesTitleChange(result){
        this.elements.titleLbl().invoke('text').should('equal', result);
      }

      clickViewSite() {
        this.elements.viewSiteBtn().click();
      }

      clickPrivateEdit() {
        this.elements.privateEditBtn().click();
      }

      clickPriveteSlide() {
        this.elements.setPriveteSlide().click();
      }

      typePassword(password) {
        this.elements.privateInput().clear()
        this.elements.privateInput().type(password);
      } 

      clickPrivateSave() {
        this.elements.privateSave().click();
        cy.wait(2000);
      }

      doesPrivateMessageEnable(){
        this.elements.privateMessageLbl().invoke('text').should('equal', "Your site is password protected");
      }

      clickInivitePeople() {
        this.elements.inivitePeopleBtn().click();
      }

      typeInivitePeopleEmail(email) {
        this.elements.inivitePeopleInput().clear()
        this.elements.inivitePeopleInput().type(email);
      } 

      clickSendInvitationNowBtn() {
        this.elements.sendInvitationNowBtn().click();
      }

      doesinivitePeoplMessageEnable(){
        this.elements.inivitePeoplMessage().should("exist");
      }


}

export const settingspage = new SettingsPage();