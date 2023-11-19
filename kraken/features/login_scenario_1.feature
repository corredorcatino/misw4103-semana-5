Feature: My feature

@user1 @web
Scenario: An existing user can login
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "login_scenario_1_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "login_scenario_1_step_2"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "login_scenario_1_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a custom screenshot "login_scenario_1_step_4"
  And I wait for 2 seconds
  Then I can see the dashboard
  And I wait for 2 seconds
  And I take a custom screenshot "login_scenario_1_step_5"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I take a custom screenshot "login_scenario_1_step_6"
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
  And I take a custom screenshot "login_scenario_1_step_7"
  And I wait for 2 seconds
