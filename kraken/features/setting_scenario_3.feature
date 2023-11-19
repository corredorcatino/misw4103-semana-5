Feature: My feature

@user1 @web
Scenario: An existing user can make the site private
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "setting_scenario_3_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_2"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a custom screenshot "setting_scenario_3_step_4"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/settings"
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_5"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/settings/general"
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_6"
  And I wait for 2 seconds
  And I click on private site to open
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_6"
  And I wait for 2 seconds
  And I click on password site
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_7"
  And I wait for 2 seconds
  And I edit the password site "sitio_seguro"
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_8"
  And I wait for 2 seconds
  And I click on private site to close
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_8"
  And I wait for 2 seconds
  Then I click on save to make site private
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_9"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I take a custom screenshot "setting_scenario_3_step_10"
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
  And I take a custom screenshot "setting_scenario_3_step_11"
  And I wait for 2 seconds
