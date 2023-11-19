Feature: Admin User Settings

  Background:
    Given the administrator is logged in
      | email | password     |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    When the user is on the Settings page
   

  Scenario: Edit Title
    When  the user clicks edits the Title
    And  the user edits the Title
        | title |
        | UniAndes 2.0 |
    And  the user save the title
    Then the user returns to the Dashboard
    And the user should see the updated Title on the Dashboard
        | title |
        | UniAndes 2.0 |

  Scenario: Making the Site Private 
    When the user selects edite private
    And the user selects the option to make the site private
    And the user enters a password
        | password |
        | UniAndes |
    And the user clicks on the Save button
    Then the user should see a label indicating that the site is now secure
   
  Scenario: User invites someone by entering an email
      When the user clicks on the Invite People button
      And the user enters the email 
        | email |
        | qa5@testprueba.com |
      And submits the invite form
      Then the user should see a confirmation message
