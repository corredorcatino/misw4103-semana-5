const { Given, When, Then } = require('@cucumber/cucumber');

// function Login(username, password, driver) {
//   let usernameInput = driver.$('#identification');
//   let passwordInput = driver.$('#password');
//   let element = driver.$('.login');
//   usernameInput.setValue(username);
//   passwordInput.setValue(password);
//   return element.click();
// }

When('I enter email {kraken-string}', async function (email) {
  let element = await this.driver.$('#identification');
  return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
  let element = await this.driver.$('#password');
  return await element.setValue(password);
});

When('I click next', async function () {
  let element = await this.driver.$('.login');
  return await element.click();
});

When('I login {kraken-string} {kraken-string}', async function (username, password) {
  await Login(username, password, this.driver);
});

When('I click new post', async function () {
  let element = await this.driver.$('.gh-nav-new-post');
  return await element.click();
});

When('I click on the redact post title', async function () {
  let element = await this.driver.$('.gh-editor-title');
  return await element.click();
});

When('I click on the redact post body', async function () {
  let element = await this.driver.$('.kg-prose');
  return await element.click();
});

Then('I click on publish', async function () {
  let element = await this.driver.$('.gh-publish-trigger');
  return await element.click();
});

Then('I click on continue', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-black.gh-btn-large');
  return await element.click();
});

Then('I click on publish post', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
  return await element.click();
});

Then('I see a meesage with published post', async function () {
  let element = await this.driver.$('.gh-publish-title');
  let postMessage = await element.getText();
  return await postMessage.includes('posts published, keep going!');
});

Then('I click on status post', async function () {
  let element = await this.driver.$('.gh-list-row.gh-posts-list-item.gh-post-list-plain-status');
  let post = await element.$('a');
  return await post.click();
});

Then('I click on settings', async function () {
  let element = await this.driver.$('.settings-menu-toggle');
  return await element.click();
});

Then('I click on delete post', async function () {
  let element = await this.driver.$('.settings-menu-delete-button');
  return await element.click();
});

Then('I click on confirm delete post', async function () {
  let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
  return await element.click();
});

Then('I see a post with the title of previous post', async function () {
  let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
  let elementTitle = await element.getValue();
  return await postMessage.includes('Post title draft test');
});

