Feature: Posts

  Background:
    Given user is logged in and is posts page
      | username                         | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |


  Scenario: user creates a new post

    When user clicks on create new post
    And user fills post info with
      | post-title | post-content                                     |
      | New Post   | the content is dependent on the tester this time |
    And clicks on publish the new post, publishes it, returns to the posts page
    Then the new post should be listed in the posts page
      | post-title |
      | New Post   |


  Scenario: user lists the posts

    When staying in posts page
    Then user should see the following posts
      | post-title  |
      | New Post    |
      | Coming soon |


  Scenario: user edits one post

    When staying in posts page
    And user should see the following post
      | post-title  |
      | New Post    |
      | Coming soon |
    And user edits the post title to
      | post-title | new-post-title |
      | New Post   | Modified post  |
    And clicks on update the new post, publishes it, returns to the posts page
    Then user should see the following posts
      | post-title    |
      | Modified post |
      | Coming soon   |


  Scenario: user creates and edits a new post on its URL

    When user clicks on create new post
    And user fills post info with
      | post-title                         | post-content                                  |
      | New Post With URL to be Customized | the content is dependent on the tester again. |
    And clicks on publish the new post, publishes it, returns to the posts page
    Then the new post should be listed in the posts page
      | post-title                         |
      | New Post With URL to be Customized |
    And staying in posts page
    And user should see the following post
      | post-title                         |
      | New Post                           |
      | New Post With URL to be Customized |
      | Coming soon                        |
    And user edits the post url to
      | post-title                         | new-post-url          |
      | New Post With URL to be Customized | modified-url-for-post |
    And returns to the posts page
    Then user should see the following posts
      | post-title                         |
      | Modified post                      |
      | New Post With URL to be Customized |
      | Coming soon                        |
    And user goes to new url to check the url works
      | url                   |
      | modified-url-for-post |


  Scenario: user deletes some post

    When staying in posts page
    And user should see the following post
      | post-title                         |
      | New Post                           |
      | Coming soon                        |
      | Modified post                      |
    Then user deletes the posts
      | post-title                         |
      | New Post                           |
      | Modified post                      |
    And user should see the following posts
      | post-title  |
      | Coming soon |
