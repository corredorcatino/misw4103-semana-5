Feature: My feature

@user1 @web
Scenario: An existing user can edit a page body
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I take a custom screenshot "page_scenario_2_step_1"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_2"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_3"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I take a custom screenshot "page_scenario_2_step_4"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_5"
  And I wait for 2 seconds
  And I click on new page
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_6"
  And I wait for 2 seconds
  And I click on the redact page title
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_7"
  And I wait for 2 seconds
  And I enter text "page title test scenario 2"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_8"
  And I wait for 2 seconds
  And I click on the redact page body
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_9"
  And I wait for 2 seconds
  And I enter text "page body test"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_10"
  And I wait for 2 seconds
  Then I click on publish page
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_11"
  And I wait for 2 seconds
  And I click on continue page
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_12"
  And I wait for 2 seconds
  And I click on confirm publish page
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_13"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages?type=published"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_14"
  And I wait for 2 seconds
  And I click on status page
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_15"
  And I wait for 2 seconds
  And I click on the redact page body
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_16"
  And I wait for 2 seconds
  And I edit the page body "Edit page body test"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_17"
  And I wait for 2 seconds
  And I click on update page
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_18"
  And I wait for 2 seconds
  And I click on page settings
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_19"
  And I wait for 2 seconds
  And I click on view page link
  And I wait for 5 seconds
  And I take a custom screenshot "page_scenario_2_step_20"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_21"
  And I wait for 2 seconds
  And I click on user settings
  And I wait for 2 seconds
  And I take a custom screenshot "page_scenario_2_step_22"
  And I wait for 2 seconds
  And I click on sign out
  And I wait for 3 seconds
  And I take a custom screenshot "page_scenario_2_step_23"
  And I wait for 2 seconds
