Feature: My feature

@user1 @web
Scenario: An existing user can see a list of tags
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I login "<USERNAME>" "<PASSWORD>"
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  Then I can see a list of tags
  And I wait for 4 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
