@ui
Feature: Surepay UI Testing
  @regression @smoke @wip
  Scenario: User lands the www.surepay.nl website, user should see the menu options
    Given User on the "surepay_home_page"
    Then  The title of page should be "SurePay - maakt betalen persoonlijker en nog veiliger"
    Then the user should see following menu options
      | Services  | Over SurePay  | Contact  |




