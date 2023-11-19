Feature: My feature

@user1 @web
Scenario: An existing user can delete a published post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_2_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_2"
  And I wait for 2 seconds
  When I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_2_step_4"
  And I wait for 2 seconds
  And I click new post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_5"
  And I wait for 2 seconds
  And I click on the redact post title
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_6"
  And I wait for 2 seconds
  And I enter text "Post title test scenario 2"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_7"
  And I wait for 2 seconds
  And I click on the redact post body
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_8"
  And I wait for 2 seconds
  And I enter text "Post body test"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_9"
  And I wait for 2 seconds
  And I click on publish
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_10"
  And I wait for 2 seconds
  And I click on continue
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_11"
  And I wait for 2 seconds
  And I click on publish post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_12"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_13"
  And I wait for 2 seconds
  And I click on status post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_14"
  And I wait for 2 seconds
  And I click on settings
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_15"
  And I wait for 2 seconds
  And I click on delete post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_16"
  And I wait for 2 seconds
  Then I click on confirm delete post
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_17"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_18"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I take a custom screenshot "post_scenario_2_step_19"
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
  And I take a custom screenshot "post_scenario_2_step_20"
  And I wait for 2 seconds
