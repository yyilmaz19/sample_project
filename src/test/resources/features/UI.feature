@ui
Feature: HumaneR UI Testing
  @regression @smoke @wip
  Scenario: User lands the humaner.org website, user should see the menu options
    Given User on the "humaner_home_page"
    Then  The title of page should be "HumaneR"
    Then the user should see following menu options
      | HOME | ABOUT US | FOR THE REFUGEES | GET INVOLVED | PARTNERS | RESOURCES | CONTACT |
