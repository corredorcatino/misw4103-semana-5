Feature: Tags

  Background:
    Given user is logged in and is in tags page
      | username                         | password       |
      | e2e@thesoftwaredesigncompany.com | Contraseña123# |

  Scenario: user creates a new tag
    When user clicks on new tag
    And user fills tag name and description
      | tag-name    | description                     |
      | test-tag-01 | A test tag created with cypress |
    And clicks on save the new tag, returns to the tags page
    Then the new tag should be listed in the tags page
      | tag-name    | description                     |
      | test-tag-01 | A test tag created with cypress |

  Scenario: user creates a new tag from "internal tags tab"
    When user switches to internal tags and clicks on create new tag
    And user fills tag name and description
      | tag-name                  | description                                             |
      | test-tag-02-from-internal | A test tag created with cypress from internal tags page |
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
