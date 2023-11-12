Feature: My feature

@user1 @web
Scenario: An existing user can create a post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  When I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click new post
  And I wait for 2 seconds
  And I click on the redact post title
  And I wait for 2 seconds
  And I enter text "Post title test"
  And I wait for 2 seconds
  And I click on the redact post body
  And I wait for 2 seconds
  And I enter text "Post body test"
  And I wait for 2 seconds
  Then I click on publish
  And I wait for 2 seconds
  And I click on continue
  And I wait for 2 seconds
  And I click on publish post
  And I wait for 2 seconds
  And I see a meesage with published post
