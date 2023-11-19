Feature: Tags

  Background:
    Given user is logged in and is in tags page
      | username                         | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |


  Scenario: user creates a new tag

    When user clicks on new tag
    And user fills tag name and description
      | tag-name    | tag-color | description                     |
      | test-tag-01 | 456456    | A test tag created with cypress |
    And clicks on save the new tag, returns to the tags page
    Then the new tag should be listed in the tags page
      | tag-name    | description                     |
      | test-tag-01 | A test tag created with cypress |


  Scenario: user creates a new tag from "internal tags tab"

    When user switches to internal tags and clicks on create new tag
    And user fills tag name and description
      | tag-name                  | tag-color | description                                             |
      | test-tag-02-from-internal | 678978    | A test tag created with cypress from internal tags page |
    And clicks on save the new tag, returns to the internal tags page, switches back to public tags
    Then the new tag should be listed in the tags page
      | tag-name                  | description                                             |
      | test-tag-02-from-internal | A test tag created with cypress from internal tags page |


  Scenario: user edits a tag

    When user click on edit a tag
      | tag-name    |
      | test-tag-01 |
    And changes the description of the tag, saves it, switches back to tags
      | tag-name    | edited-description        |
      | test-tag-01 | Edited tag description!!! |
    Then the new tag should be listed in the tags page
      | tag-name                  | description               |
      | test-tag-02-from-internal | Edited tag description!!! |


  Scenario: user lists the existing tags

    When staying in the tags page
    Then there should be the following tags
      | tag-name                  | description                                             |
      | test-tag-01               | Edited tag description!!!                               |
      | test-tag-02-from-internal | A test tag created with cypress from internal tags page |


  Scenario: user deletes some existing tags

    When deleting these tags
      | tag-name                  | description                                             |
      | test-tag-01               | Edited tag description!!!                               |
      | test-tag-02-from-internal | A test tag created with cypress from internal tags page |
    Then those tags should not be displayed in the tags page


  Scenario: user creates two new tags one after another

    When user clicks on new tag
    And user fills tag name and description
      | tag-name   | tag-color | description   |
      | new-tag-01 | 978675    | My new tag-01 |
    And clicks on save the new tag, returns to the tags page
    And the new tag should be listed in the tags page
      | tag-name   | description   |
      | new-tag-01 | My new tag-01 |
    And user clicks on new tag
    And user fills tag name and description
      | tag-name   | tag-color | description   |
      | new-tag-02 | 456456    | My new tag-02 |
    And clicks on save the new tag, returns to the tags page
    Then the new tags should be listed in the tags page
      | tag-name   | description   |
      | new-tag-01 | My new tag-01 |
      | new-tag-02 | My new tag-02 |


  Scenario: user edits two tags one after another

    When user click on edit a tag
      | tag-name   |
      | new-tag-01 |
    And changes the description of the tag, saves it, switches back to tags
      | tag-name   | edited-description   |
      | new-tag-01 | Edited new tag-01!!! |
    And user click on edit a tag
      | tag-name   |
      | new-tag-02 |
    And changes the description of the tag, saves it, switches back to tags
      | tag-name   | edited-description |
      | new-tag-02 | Tag 02 edited...   |
    Then the new tags should be listed in the tags page
      | tag-name   | description          |
      | new-tag-01 | Edited new tag-01!!! |
      | new-tag-02 | Tag 02 edited...     |


  Scenario: user creates a three new tags, third tag is created after going to dashboard

    When user clicks on new tag
    And user fills tag name and description
      | tag-name           | tag-color | description                                  |
      | three-tags-test-01 | 978675    | Some good description for three-tags-test-01 |
    And clicks on save the new tag, returns to the tags page
    And the new tag should be listed in the tags page
      | tag-name           | description                                  |
      | three-tags-test-01 | Some good description for three-tags-test-01 |
    And user clicks on new tag
    And user fills tag name and description
      | tag-name           | tag-color | description                                  |
      | three-tags-test-02 | 456456    | Some good description for three-tags-test-02 |
    And clicks on save the new tag, returns to the tags page
    And the new tags should be listed in the tags page
      | tag-name           | description                                  |
      | three-tags-test-01 | Some good description for three-tags-test-01 |
      | three-tags-test-02 | Some good description for three-tags-test-02 |
    And user goes to dashboard page
    And user goes to tags page
    And user clicks on new tag
    And user fills tag name and description
      | tag-name           | tag-color | description                                  |
      | three-tags-test-03 | 355847    | Some good description for three-tags-test-03 |
    And clicks on save the new tag, returns to the tags page
    And the new tags should be listed in the tags page
      | tag-name           | description                                  |
      | three-tags-test-01 | Some good description for three-tags-test-01 |
      | three-tags-test-02 | Some good description for three-tags-test-02 |
      | three-tags-test-03 | Some good description for three-tags-test-03 |


  Scenario: user creates a four new tags, first tag is edited after second is created, third tag is created after going to dashboard

    When user clicks on new tag
    And user fills tag name and description
      | tag-name          | tag-color | description                                 |
      | four-tags-test-01 | 978675    | Some good description for four-tags-test-01 |
    And clicks on save the new tag, returns to the tags page
    And the new tag should be listed in the tags page
      | tag-name          | description                                 |
      | four-tags-test-01 | Some good description for four-tags-test-01 |
    And user clicks on new tag
    And user fills tag name and description
      | tag-name          | tag-color | description                                 |
      | four-tags-test-02 | 456456    | Some good description for four-tags-test-02 |
    And clicks on save the new tag, returns to the tags page
    And user click on edit a tag
      | tag-name          |
      | four-tags-test-01 |
    And changes the description of the tag, saves it, switches back to tags
      | tag-name          | edited-description             |
      | four-tags-test-01 | four-tags-test-01 01 edited... |
    And the new tags should be listed in the tags page
      | tag-name          | description                                 |
      | four-tags-test-01 | four-tags-test-01 01 edited...              |
      | four-tags-test-02 | Some good description for four-tags-test-02 |
    And user goes to dashboard page
    And user goes to tags page
    And user clicks on new tag
    And user fills tag name and description
      | tag-name          | tag-color | description                                 |
      | four-tags-test-03 | 355847    | Some good description for four-tags-test-03 |
    And clicks on save the new tag, returns to the tags page
    And user clicks on new tag
    And user fills tag name and description
      | tag-name          | tag-color | description                                 |
      | four-tags-test-04 | 348018    | Some good description for four-tags-test-04 |
    And clicks on save the new tag, returns to the tags page
    And the new tags should be listed in the tags page
      | tag-name          | description                                 |
      | four-tags-test-01 | four-tags-test-01 01 edited...              |
      | four-tags-test-02 | Some good description for four-tags-test-02 |
      | four-tags-test-03 | Some good description for four-tags-test-03 |
      | four-tags-test-04 | Some good description for four-tags-test-04 |


  Scenario: user deletes tags created in three different scenarios

    When deleting these tags
      | tag-name           | description                                  |
      | new-tag-01         | Edited new tag-01!!!                         |
      | new-tag-02         | Tag 02 edited...                             |
      | three-tags-test-01 | Some good description for three-tags-test-01 |
      | three-tags-test-02 | Some good description for three-tags-test-02 |
      | three-tags-test-03 | Some good description for three-tags-test-03 |
      | four-tags-test-01  | Some good description for four-tags-test-01  |
      | four-tags-test-02  | four-tags-test-02 02 edited...               |
      | four-tags-test-03  | Some good description for four-tags-test-03  |
      | four-tags-test-04  | Some good description for four-tags-test-04  |
    Then those tags should not be displayed in the tags page


  Scenario: user tries to create tag with incorrect length

    When user clicks on new tag
    And user fills tag name and description
      | tag-name | tag-color | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
      | onyx     | 000000    | Onyx tag ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................ |
    But tag is not saved


  Scenario: user fills the data to create a tag but doesnt save it and goes to tags page

    When user clicks on new tag
    And user fills tag name and description
      | tag-name | tag-color | description |
      | onyx     | 000000    | Onyx tag    |
    But user goes to dashboard page
    Then stay or leave dialog must appear


  Scenario: user fills the data to create a tag and tries goes to view tag

    When user clicks on new tag
    And user fills tag name and description
      | tag-name | tag-color | description |
      | onyx     | 000000    | Onyx tag    |
    But user goes to view tag
      | tag-name |
      | onyx     |
    Then page not found


  Scenario: user fills the data to create a tag but tag name is blank

    When user clicks on new tag
    And user fills tag name and description
      | tag-name | tag-color | description        |
      |          | 000000    | Beautiful Onyx tag |
    But tag is not saved
