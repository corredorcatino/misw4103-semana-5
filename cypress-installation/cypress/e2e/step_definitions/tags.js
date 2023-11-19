/**
 * BDD Testing with Given When Then, without integrating
 * POM (page object models).
 */

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('user is logged in and is in tags page', (table) => {
    table.hashes().forEach((row) => {
        cy.visit('http://localhost:2368/ghost/');

        cy.get('#identification').type(row['username']);
        cy.get('#password').type(row['password']);
        cy.get('button[data-test-button="sign-in"][type="submit"]').click();

        cy.contains('Dashboard');

        cy.get('a[href="#/tags/"]').click();

        cy.contains('Tags');
        cy.contains('Public tags');
        cy.contains('Internal tags');
        cy.contains('New tag');
    });
});

When('user clicks on new tag', (table) => {
    cy.get('a[href="#/tags/new/"]').click();
});

When('user fills tag name and description', (table) => {
    table.hashes().forEach((row) => {
        cy.get('#tag-name').type(row['tag-name']);
        cy.get('input[placeholder="15171A"]').type('456456');
        cy.get('#tag-description').type(row['description']);
    });
});

When('clicks on save the new tag, returns to the tags page', () => {
    cy.get('button[data-test-button="save"]').click();

    cy.get('a[href="#/tags/"][data-test-nav="tags"]').click();
});

When('clicks on save the new tag, returns to the internal tags page, switches back to public tags', () => {
    cy.get('button[data-test-button="save"]').click();

    cy.get('a[href="#/tags/?type=internal"][data-test-nav="tags"]').click();

    cy.get('button[data-test-tags-nav="public"][type="button"]').click();
});

Then('the new tag should be listed in the tags page', (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['tag-name']);
        cy.contains(row['description']);
    });
});

When('user switches to internal tags and clicks on create new tag', () => {
    cy.get('button[data-test-tags-nav="internal"][type="button"]').click();

    cy.get('a[href="#/tags/new/"][class="ember-view gh-btn gh-btn-green"]').click();
})

When('user removes a tag', (table) => {
    table.hashes().forEach((row) => {
        cy.get('a[href="#/tags/' + row['tag-name'] + '/"]' +
            '[class="ember-view gh-list-data gh-tag-list-posts-count gh-list-cellwidth-10"]').click();

        cy.get('button[data-test-button="delete-tag"]').click();

        cy.get('button[data-test-button="confirm"][class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    });
});

When('user click on edit a tag', (table) => {
    table.hashes().forEach((row) => {
        cy.get('a[href="#/tags/' + row['tag-name'] + '/"]' +
            '[class="ember-view gh-list-data gh-tag-list-posts-count gh-list-cellwidth-10"]').click();
    });
});

When('changes the description of the tag, saves it, switches back to tags', (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['tag-name']);
        cy.get('#tag-description').clear().type(row['edited-description']);
        cy.get('button[data-test-button="save"]').click();
        cy.get('a[href="#/tags/"][data-test-nav="tags"]').click();
    });
});

When('staying in the tags page', () => {
    cy.get('h2[class="gh-canvas-title"]').should("exist");
});

Then('there should be the following tags', (table) => {
    table.hashes().forEach((row) => {
        cy.contains(row['tag-name']);
        cy.contains(row['description']);
    });
});

When('deleting these tags', (table) => {
    table.hashes().forEach((row) => {
        cy.get('a[href="#/tags/' + row['tag-name'] + '/"]' +
            '[class="ember-view gh-list-data gh-tag-list-posts-count gh-list-cellwidth-10"]').click();

        cy.get('button[data-test-button="delete-tag"]').click();

        cy.get('button[data-test-button="confirm"][class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    });
});

When('those tags should not be displayed in the tags page', () => {
    cy.get('p[data-test-tag-name=""]').should('not.exist');
    cy.get('p[data-test-tag-description=""]').should('not.exist');
});
