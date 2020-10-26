@ui
Feature: Contax UI Testing
  @regression @smoke
  Scenario: User lands the Contax.com website, user should see the menu options
    Given User on the "contax_home_page"
    When  The title of page should be "CONTAX SAP Partner"
    Then the user should see following menu options
      | ABOUT US | SOLUTIONS | SERVICES | KNOWLEDGE CENTER | CAREERS | CONTACT US |

  @regression
  Scenario Outline: User is able to see expected Contax locations from Contact Us Page
    Given User on the "contax_home_page"
    Then Click the Contact Us page
    And See the Contact Form
    And Verify the "<location>" and its "<address>" as expected

    Examples:
      | location          | address               |
      | Chicago, Illinois | 311 W Superior Street |
      | Toronto, Ontario  | 893 Yonge Street      |
      | Utrecht           | Hamburgerstraat 28a   |



