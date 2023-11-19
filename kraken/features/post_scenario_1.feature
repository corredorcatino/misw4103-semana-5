Feature: My feature

@user1 @web
Scenario: An existing user can create a post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_1_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_2"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_1_step_4"
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_5"
  And I wait for 2 seconds
  And I click on the redact post title
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_6"
  And I wait for 2 seconds
  And I enter text "Post title test scenario 1"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_7"
  And I wait for 2 seconds
  And I click on the redact post body
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_8"
  And I wait for 2 seconds
  And I enter text "Post body test"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_9"
  And I wait for 2 seconds
  Then I click on publish
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_10"
  And I wait for 2 seconds
  And I click on continue
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_11"
  And I wait for 2 seconds
  And I click on publish post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_12"
  And I wait for 2 seconds
  And I see a meesage with published post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_13"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_14"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_1_step_15"
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_1_step_16"
  And I wait for 2 seconds
