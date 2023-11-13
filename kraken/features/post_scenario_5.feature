Feature: My feature

@user1 @web
Scenario: An existing user can edit a post url and published
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
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
  And I wait for 2 seconds
  And I click on status post
  And I wait for 2 seconds
  And I click on settings
  And I wait for 2 seconds
  And I click on post url
  And I wait for 2 seconds
  And I edit post url "new-post-url-test"
  And I wait for 2 seconds
  And I click on view link
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
