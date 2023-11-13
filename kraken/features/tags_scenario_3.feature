Feature: My feature

@user1 @web
Scenario: An existing user can edit a tag
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  And I click on the redact tag name
  And I wait for 2 seconds
  And I enter text "Tag name test scenario 3"
  And I wait for 2 seconds
  And I click on the redact tag description
  And I wait for 2 seconds
  And I enter text "Tag description test"
  And I wait for 2 seconds
  Then I click on save
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I click on a created tag
  And I wait for 2 seconds
  And I click on the redact tag description
  And I wait for 2 seconds
  And I edit the description "Edited tag description test scenario 3"
  And I click on save
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 4 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
