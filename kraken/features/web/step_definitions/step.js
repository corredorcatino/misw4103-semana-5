const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require("fs");
const version = "v5.0.0"

// login

When('I enter email {kraken-string}', async function (email) {
  let element = await this.driver.$("input[name='identification']");
  return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
  let element = await this.driver.$("input[name='password']");
  return await element.setValue(password);
});

When('I click next', async function () {
  let element = await this.driver.$('.login');
  return await element.click();
});

// Logout

When('I click on user settings', async function () {
  let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger');
  return await element.click();
});

When('I click on sign out', async function () {
  let element = await this.driver.$('.user-menu-signout');
  return await element.click();
});

// take screenshots

When('I take a custom screenshot {string}', async function (route) {
  let custom_path = './screenshots/' + version + '/';
  if (!fs.existsSync(custom_path)) {
    fs.mkdirSync(custom_path, {recursive: true});
  };
  let path_image = custom_path + route + '.png';
  let image = await this.driver.saveScreenshot(path_image);
  await this.attach(image, 'image/png');
});

// post scenarios

When('I click new post', async function () {
  let element = await this.driver.$('.gh-nav-new-post');
  return await element.click();
});

When('I click on the redact post title', async function () {
  let element = await this.driver.$('.gh-editor-title');
  return await element.click();
});

When('I click on the redact post body', async function () {
  let element = await this.driver.$("p[data-koenig-dnd-droppable='true']");
  return await element.click();
});

When('I click on publish', async function () {
  let element = await this.driver.$('.gh-publish-trigger');
  return await element.click();
});

When('I click on continue', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-black.gh-btn-large');
  return await element.click();
});

When('I click on publish post', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
  return await element.click();
});

Then('I see a meesage with published post', async function () {
  let element = await this.driver.$('.gh-publish-title');
  let postMessage = await element.getText();
  if (!(postMessage.includes('posts published, keep going!'))) {
    throw new Error(`ERROR`);
  };
});

When('I click on status post', async function () {
  let element = await this.driver.$('.gh-list-row.gh-posts-list-item').$('a');
  return await element.click();
});

When('I click on settings', async function () {
  let element = await this.driver.$('.settings-menu-toggle');
  return await element.click();
});

When('I click on delete post', async function () {
  let element = await this.driver.$('.settings-menu-delete-button');
  return await element.click();
});

Then('I click on confirm delete post', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
  return await element.click();
});

When('I click on update', async function () {
  let element = await this.driver.$('.gh-btn-editor.green');
  return await element.click();
})

Then('I see a post with the title of previous post', async function () {
  let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
  let elementTitle = await element.getValue();
  if (!(elementTitle.includes('Post title draft test'))) {
    throw new Error(`ERROR`);
  };
});

Then('I click on post url', async function () {
  let element = await this.driver.$('#url');
  return await element.click();
});

Then('I click on view link', async function () {
  let element = await this.driver.$('.post-view-link');
  return await element.click();
});

When('I click to create new link', async function () {
  let element = await this.driver.$('.settings-menu-header');
  return await element.click();
});

Then('I click on view new link', async function () {
  let element = await this.driver.$('.post-view-link');
  return await element.click();
});

Then('I edit post url {string}', async function (str) {
  let element = await this.driver.$('#url');
  return await element.setValue(str);
});

Then('I edit the title {string}', async function (str) {
  let element = await this.driver.$('.gh-editor-title');
  return await element.setValue(str);
});

// Tags scenarios

When('I click new tag', async function () {
  let element = await this.driver.$("a[href='#/tags/new/']");
  return await element.click();
});

When('I click on the redact tag name', async function () {
  let element = await this.driver.$('#tag-name');
  return await element.click();
});

When('I click on the redact tag description', async function () {
  let element = await this.driver.$('#tag-description');
  return await element.click();
});

Then('I click on internal tags', async function () {
  let element = await this.driver.$("span=Internal tags");
  return await element.click();
});

Then('I click on save', async function () {
  let element = await this.driver.$("span=Save");
  return await element.click();
});

Then('I click on a created tag', async function () {
  let element = await this.driver.$('.content-list').$('ol').$('.gh-list-row.gh-tags-list-item');
  let tagElement = await element.$('a');
  return await tagElement.click();
});

Then('I edit the description {string}', async function (str) {
  let element = await this.driver.$('#tag-description');
  return await element.setValue(str);
});

Then('I can see a list of tags', async function () {
  let element = await this.driver.$('.view-container').$('ol').$$("li");
  if (!(element.length > 0)) {
    throw new Error(`ERROR`);
  };
});

Then('I can delete a tag', async function () {
  let element = await this.driver.$("span=Delete tag");
  return await element.click();
});

Then('I confirm delete a tag', async function () {
  let element = await this.driver.$("span=Delete");
  return await element.click();
});

// page scenarios

When('I click on new page', async function () {
  let element = await this.driver.$("a[href='#/editor/page/']");
  return await element.click();
});

When('I click on the redact page title', async function () {
  let element = await this.driver.$('.gh-editor-title');
  return await element.click();
});

When('I click on the redact page body', async function () {
  let element = await this.driver.$("p[data-koenig-dnd-droppable='true']");
  return await element.click();
});

When('I click on publish page', async function () {
  let element = await this.driver.$('.gh-publish-trigger');
  return await element.click();
});

When('I click on continue page', async function () {
  let element = await this.driver.$('.gh-publish-cta');
  return await element.click();
});

When('I click on confirm publish page', async function () {
  let element = await this.driver.$('.gh-btn-pulse.ember-view');
  return await element.click();
});

Then('I see a meesage with published page', async function () {
  let element = await this.driver.$('.gh-publish-title');
  let pageMessage = await element.getText();
  if (!(pageMessage.includes('page has been published'))) {
    throw new Error(`ERROR`);
  };
});

Then('I click on status page', async function () {
  let element = await this.driver.$('.gh-list-row.gh-posts-list-item').$('a');
  return await element.click();
});

Then('I edit the page body {string}', async function (str) {
  let element = await this.driver.$("p[data-koenig-dnd-droppable='true']");
  return await element.setValue(str);
});

When ('I click on update page', async function () {
  let element = await this.driver.$('.gh-btn-editor.green');
  return await element.click();
});

When('I click on page settings', async function () {
  let element = await this.driver.$("button[title='Settings']");
  return await element.click();
});

Then('I click on view page link', async function () {
  let element = await this.driver.$("a[class='post-view-link']");
  return await element.click();
});

When('I click on page url', async function () {
  let element = await this.driver.$('#url');
  return await element.click();
});

When('I edit page url {string}', async function (str) {
  let element = await this.driver.$('#url');
  return await element.setValue(str);
});

Then('I see a list of pages', async function () {
  let elements = await this.driver.$$('.gh-list-row.gh-posts-list-item');
  if (!(elements.length > 0)) {
    throw new Error(`ERROR`);
  };
});

When('I click on delete page', async function () {
  let element = await this.driver.$('.settings-menu-delete-button');
  return await element.click();
});

When('I click on confirm delete page', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
  return await element.click();
});

Then('I see a list without the page {string}', async function (str) {
  let arr = [];
  let elements = await this.driver.$$("h3[class='gh-content-entry-title']");
  var array = elements.map(function(item) {
      return item.getText();
  });
  if (array.includes(str)) {
    throw new Error(`ERROR`);
  };
});

// settings

When('I click on expand title', async function () {
  let element = await this.driver.$("span=Expand");
  return await element.click();
});

When('I click on title input', async function () {
  let element = await this.driver.$(".ember-text-field");
  return await element.click();
});

When('I edit title input {string}', async function (str) {
  let element = await this.driver.$(".ember-text-field");
  return await element.setValue(str);
});

When('I click on save settings button', async function () {
  let element = await this.driver.$("span=Save");
  return await element.click();
});

Then('I see the new app title {string}', async function (str) {
  let element = await this.driver.$("div[class='gh-nav-menu-details-sitetitle']");
  let newTitle = await element.getText();
  if (!(newTitle == str)) {
    throw new Error(`ERROR`);
  };
});

When('I click on invite people', async function () {
  let element = await this.driver.$("span=Invite people");
  return await element.click();
});

When('I click on input email', async function () {
  let element = await this.driver.$("#new-user-email")
  return await element.click();
});

When('I edit email input for the invitation', async function () {
  var email = 'correo' + Math.random() + '@mail.co'
  let element = await this.driver.$("input[id='new-user-email']");
  return await element.setValue(email);
});

When('I click on send invitation button', async function () {
  let element = await this.driver.$("span=Send invitation now →")
  return await element.click();
});

Then('I see an error message for the invitation', async function () {
  var strError = 'Error sending email! Error sending email: Failed to send email. Reason: Email has been temporarily rejected. Please check your email settings and resend the invitation.'
  let element = await this.driver.$(".gh-alert-content")
  let err = await element.getText();
  if (!(err == strError)) {
    throw new Error(`ERROR`);
  };
});

When('I click on private site to open', async function () {
  let element = await this.driver.$(".for-switch")
  return await element.click();
});

When('I click on password site', async function () {
  let element = await this.driver.$("input[name='general[password]']")
  return await element.click();
});

When('I edit the password site {string}', async function (str) {
  let element = await this.driver.$("input[name='general[password]']")
  return await element.setValue(str);
});

When('I click on private site to close', async function () {
  let element = await this.driver.$(".for-switch")
  return await element.click();
});

Then('I click on save to make site private', async function () {
  let element = await this.driver.$("span=Save");
  return await element.click();
});

// login

Then('I can see the dashboard', async function () {
  let element = await this.driver.$("h2[class='gh-canvas-title']")
  let title = await element.getText();
  if (!(title == 'Dashboard')) {
    throw new Error(`ERROR`);
  };
});

Then('I can see an error', async function () {
  let element = await this.driver.$("p[class='main-error']")
  let err = await element.getText();
  if (!(err.includes('Your password is incorrect.'))) {
    throw new Error(`ERROR`);
  };
});
