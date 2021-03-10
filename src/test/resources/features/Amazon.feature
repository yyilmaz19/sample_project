
Feature: Amazon UI Login Testing
@ui
  Scenario Outline: User lands the website, try to continue with an invalid email or username and gets the error message
    Given User on the "ui_page"
    Then User clicks the Sign in button
    When  The title of page should be "Amazon Sign-In"
    And User enters the invalid "<e-mail>" to sign in
    Then User gets the "There was a problem" message
  Examples:
    | e-mail            |
    | alihaja@gmail.com |
    | agshgshg@hgh.hg   |


