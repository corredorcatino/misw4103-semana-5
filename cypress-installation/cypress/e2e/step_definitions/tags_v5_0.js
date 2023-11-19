/**
 * BDD Testing with Given When Then, without integrating
 * POM (page object models).
 */

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('_user is logged in and is in tags page', (table) => {
    table.hashes().forEach((row) => {
        cy.visit('http://localhost:2368/ghost/');

        cy.get('input[name="identification"]').type(row['username']);
        cy.get('input[name="password"]').type(row['password']);
        cy.get('button[type="submit"]').click();

        cy.contains('Dashboard');

        cy.get('a[href="#/tags/"]').click();

        cy.contains('Tags');
        cy.contains('Public tags');
        cy.contains('Internal tags');
        cy.contains('New tag');
    });
    cy.screenshot({timeout: 1_000});
});

When('_user goes to tags page', () => {
    cy.get('a[href="#/tags/"]').click();

    cy.contains('Tags');
    cy.contains('Public tags');
    cy.contains('Internal tags');
    cy.contains('New tag');
    cy.screenshot({timeout: 1_000});
});

When('_user clicks on new tag', (table) => {
    cy.get('a[href="#/tags/new/"]').click();
    cy.screenshot({timeout: 1_000});
});

When('_user fills tag name and description', (table) => {
    table.hashes().forEach((row) => {
        if (row['tag-name']) {
            cy.get('#tag-name').type(row['tag-name']);
        }
        cy.get('input[placeholder="15171A"]').type(row['tag-color']);
        cy.get('#tag-description').type(row['description']);
    });
    cy.screenshot({timeout: 1_000});
});

When('_clicks on save the new tag, returns to the tags page', () => {
    cy.get('button[type="button"][class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

    cy.get('a[href="#/tags/"][data-cypress-el="true"]').click();
    cy.screenshot({timeout: 1_000});
});

When('_clicks on save the new tag, returns to the internal tags page, switches back to public tags', () => {
    cy.get('button[type="button"][class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

    cy.get('a[href="#/tags/?type=internal"][class="ember-view"]').first().click();

    cy.contains('span', 'Public tags')
        .should('have.text', 'Public tags')
        .parent()
        .click();

    cy.screenshot({timeout: 1_000});
});

Then('_the new tag(s) should be listed in the tags page', (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['tag-name']);
        cy.contains(row['description']);
    });
    cy.screenshot({timeout: 1_000});
});

When('_user switches to internal tags and clicks on create new tag', () => {
    cy.contains('span', 'Internal tags')
        .should('have.text', 'Internal tags')
        .parent().click();

    cy.get('a[href="#/tags/new/"][class="ember-view gh-btn gh-btn-green"]').click();
    cy.screenshot({timeout: 1_000});
});

When('_user removes a tag', (table) => {
    table.hashes().forEach((row) => {
        cy.get('a[href="#/tags/' + row['tag-name'] + '/"]' +
            '[class="ember-view gh-list-data gh-tag-list-posts-count gh-list-cellwidth-10"]').click();

        cy.get('button[data-test-button="delete-tag"]').click();

        cy.get('button[data-test-button="confirm"][class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    });
    cy.screenshot({timeout: 1_000});
});

When('_user click on edit a tag', (table) => {
    table.hashes().forEach((row) => {
        cy.get('a[href="#/tags/' + row['tag-name'] + '/"]' +
            '[class="ember-view gh-list-data gh-tag-list-posts-count gh-list-cellwidth-10"]').click();
    });
    cy.screenshot({timeout: 1_000});
});

When('_changes the description of the tag, saves it, switches back to tags', (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['tag-name']);
        cy.get('textarea[name="description"]').clear().type(row['edited-description'], {force: true});
        cy.get('button[type="button"][class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.get('a[href="#/tags/"][data-cypress-el="true"]').click();
    });
    cy.screenshot({timeout: 1_000});
});

When('_user goes to dashboard page', () => {
    cy.get('a[title="Dashboard"][href="#/dashboard/"]').click();
    cy.screenshot({timeout: 1_000});
});

When('_staying in the tags page', () => {
    cy.get('h2[class="gh-canvas-title"]').should("exist");
    cy.screenshot({timeout: 1_000});
});

Then('_there should be the following tags', (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['tag-name']);
        cy.contains(row['description']);
    });
    cy.screenshot({timeout: 1_000});
});

When('_deleting these tags', (table) => {
    table.hashes().forEach((row) => {
        cy.get('a[href="#/tags/' + row['tag-name'] + '/"]' +
            '[class="ember-view gh-list-data gh-tag-list-posts-count gh-list-cellwidth-10"]').click();

        cy.contains('span', 'Delete tag')
            .should('have.text', 'Delete tag')
            .parent().click();

        cy.contains('span', /^Delete$/)
            .should('have.text', 'Delete')
            .parent().click();
    });
    cy.screenshot({timeout: 1_000});
});

When('_those tags should not be displayed in the tags page', () => {
    cy.get('p[data-test-tag-name=""]').should('not.exist');
    cy.get('p[data-test-tag-description=""]').should('not.exist');
    cy.screenshot({timeout: 1_000});
});

Then(/^_stay or leave dialog must appear$/, () => {
    cy.contains('Are you sure you want to leave this page?');
    cy.screenshot({timeout: 1_000});
});

When(/^_tag is not saved$/, () => {
    cy.get('button[type="button"][class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();

    cy.contains('Retry');
    cy.screenshot({timeout: 1_000});
});

When(/^_user goes to view tag$/, (table) => {
    table.hashes().forEach((row) => {
        cy.visit('http://localhost:2368/tag/' + row['tag-name'], {failOnStatusCode: false});
    });
    cy.screenshot({timeout: 1_000});
});

Then(/^_page not found$/, () => {
    cy.contains('404');
    cy.screenshot({timeout: 1_000});
});

Then(/^_user clicks on leave button$/, () => {
    cy.contains('span', /^Leave$/)
        .should('have.text', 'Leave')
        .parent().click();
    cy.screenshot({timeout: 1_000});
});

Then(/^_user is now in dashboard page$/, () => {
    cy.contains('Dashboard');
    cy.contains('Welcome to your Dashboard');
    cy.screenshot({timeout: 1_000});
});

Then(/^_user clicks on stay button$/, () => {
    cy.contains('span', /^Stay$/)
        .should('have.text', 'Stay')
        .parent().click();
    cy.screenshot({timeout: 1_000});
});
