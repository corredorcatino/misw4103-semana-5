Feature: My feature

@user1 @web
Scenario: An existing user can create an internal tag
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "tag_scenario_2_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_2"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a custom screenshot "tag_scenario_2_step_4"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_5"
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_6"
  And I wait for 2 seconds
  And I click on the redact tag name
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_7"
  And I wait for 2 seconds
  And I enter text "#Tag name test scenario 2 internal"
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_8"
  And I wait for 2 seconds
  And I click on the redact tag description
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_9"
  And I wait for 2 seconds
  And I enter text "Tag description test"
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_10"
  And I wait for 2 seconds
  Then I click on save
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_11"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 4 seconds
  And I take a custom screenshot "tag_scenario_2_step_12"
  And I wait for 2 seconds
  And I click on internal tags
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_13"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I take a custom screenshot "tag_scenario_2_step_14"
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
  And I take a custom screenshot "tag_scenario_2_step_15"
  And I wait for 2 seconds
