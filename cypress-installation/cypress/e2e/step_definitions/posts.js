/**
 * BDD Testing with Given When Then, without integrating
 * POM (page object models).
 */

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('user is logged in and is posts page', (table) => {
    table.hashes().forEach((row) => {
        cy.visit('http://localhost:2368/ghost/');

        cy.get('#identification').type(row['username']);
        cy.get('#password').type(row['password']);
        cy.get('button[data-test-button="sign-in"][type="submit"]').click();

        cy.contains('Dashboard');

        cy.get('a[data-test-nav="posts"][href="#/posts/"]').click();

        cy.contains('Posts');
        cy.contains('Coming soon');
        cy.contains('All posts');
        cy.contains('New post');
    });
    cy.screenshot({timeout: 1_000});
});

When('user clicks on create new post', () => {
    cy.get('a[class="ember-view gh-btn gh-btn-primary"][data-test-new-post-button=""]').click();
    cy.screenshot({timeout: 1_000});
});

Then('user fills post info with', (table) => {
    table.hashes().forEach((row) => {
        cy.get('textarea[data-test-editor-title-input=""]').type(row['post-title']).blur();
        // cy.get('p[data-koenig-dnd-droppable="true"]').type(row['post-content']);
    });
    cy.screenshot({timeout: 1_000});
});

When(/^clicks on publish the new post, publishes it, returns to the posts page$/, () => {
    cy.get('button[data-test-button="publish-flow"]').click();
    cy.get('button[data-test-button="continue"]').click();
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.get('button[data-test-button="back-to-editor"]').click();
    cy.get('a[data-test-link="posts"]').click();
    cy.screenshot({timeout: 1_000});
});

Then(/^the new post should be listed in the posts page$/, (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['post-title']);
    });
    cy.screenshot({timeout: 1_000});
});

When(/^staying in posts page$/, () => {
    cy.contains('Posts');
    cy.contains('All posts');
    cy.contains('New post');
    cy.screenshot({timeout: 1_000});
});

// s? IS A REGEX DO NOT CHANGE
Then(/^user should see the following posts?$/, (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['post-title']);
    });
    cy.screenshot({timeout: 1_000});
});

When(/^user edits the post title to$/, (table) => {
    table.hashes().forEach((row) => {
        cy.get('h3').contains(row['post-title']).parent().click();

        cy.get('textarea[data-test-editor-title-input=""]').clear().type(row['new-post-title']);
    });
    cy.screenshot({timeout: 1_000});
});

When(/^returns to the posts page$/, () => {
    cy.get('a[data-test-link="posts"]').click();
    cy.screenshot({timeout: 1_000});
});

When(/^clicks on update the new post, publishes it, returns to the posts page$/, () => {
    cy.get('button[data-test-button="publish-save"]').click();
    cy.get('a[data-test-link="posts"]').click();
    cy.screenshot({timeout: 1_000});
});

Then(/^user deletes the posts?$/, (table) => {
    table.hashes().forEach((row) => {
        cy.get('h3').contains(row['post-title']).parent().click();

        cy.get('button[title="Settings"]' +
            '[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();

        cy.get('div[class="settings-menu-delete-button"]')
            .children()
            .should('contain.text', 'Delete post')
            .click();

        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]')
            .children()
            .should('have.text', 'Delete')
            .click();

        cy.wait(1_000);
    });
    cy.screenshot({timeout: 1_000});
});

Then(/^user edits the post url to$/, (table) => {
    table.hashes().forEach((row) => {
        cy.get('h3').contains(row['post-title']).parent().click();

        cy.get('button[title="Settings"]' +
            '[class="settings-menu-toggle gh-btn gh-btn-editor gh-btn-icon icon-only gh-btn-action-icon"]').click();

        cy.get('input[id="url"][name="post-setting-slug"]').type(row['new-post-url']).blur();
    });
    cy.screenshot({timeout: 1_000});
});

Then(/^user goes to new url to check the url works$/, (table) => {
    table.hashes().forEach((row) => {
        cy.visit({url: 'localhost:2368/about/'+row['url'], failOnStatusCode: false});
    });
    cy.screenshot({timeout: 1_000});
});
