Feature: My feature

@user1 @web
Scenario: An existing user can create a post with draft status
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_3_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_2"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_3_step_4"
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_5"
  And I wait for 2 seconds
  And I click on the redact post title
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_6"
  And I wait for 2 seconds
  And I enter text "Post title draft test"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_7"
  And I wait for 2 seconds
  And I click on the redact post body
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_8"
  And I wait for 2 seconds
  And I enter text "Post body draft test"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_9"
  And I wait for 2 seconds
  Then I navigate to page "http://localhost:2368/ghost/#/posts?type=draft"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_10"
  And I wait for 2 seconds
  And I click on status post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_11"
  And I wait for 2 seconds
  And I see a post with the title of previous post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_12"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_13"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_3_step_14"
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_3_step_15"
  And I wait for 2 seconds
