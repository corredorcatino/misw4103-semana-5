Feature: Login

  Background:
        Given A web browser is at the login page  
  Scenario: Successful Login
    When the user enters a valid credentials
         | email | password     |
         | e2e@thesoftwaredesigncompany.com | Contraseña123# |
    And the user clicks the login button
    Then the user should be redirected to the dashboard


  Scenario: Failed Login
    When the user enters an invalid credentials
        | email | password     |
        | davideslava9522@gmail.com | prueba123 |
    And the user clicks the login button
    Then the user should see an error message
              
