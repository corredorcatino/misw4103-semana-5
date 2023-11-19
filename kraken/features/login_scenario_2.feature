Feature: My feature

@user1 @web
Scenario: An existing user can not login
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "login_scenario_2_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "login_scenario_2_step_2"
  And I wait for 2 seconds
  And I enter password "<INVALIDPASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "login_scenario_2_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I take a custom screenshot "login_scenario_2_step_4"
  And I wait for 2 seconds
  Then I can see an error
  And I wait for 2 seconds
