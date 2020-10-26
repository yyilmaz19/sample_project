@api
Feature: API Test

  Background:
    Given Headers accepts content type as "application/json"

  @regression  @smoke
  Scenario Outline: User should be able to create a pet by given information
    When User sends POST request to "pet"
      | id     | <id>     |
      | name   | <name>   |
      | status | <status> |
    Then User verifies that response status code is 200
    And User verifies that response content type is "application/json"
    Examples:
      | id   | name  | status    |
      | 5574 | fino  | available |
      | 9976 | doggy | pending   |
      | 9056 | poesy  | sold     |

  @regression @smoke
  Scenario Outline: User should be able to reach pet information by id
    When User sends GET request to "pet/"<id>
    Then User verifies that response status code is <statusCode>
    And User verifies that response content type is "<contentType>"
    Examples:
      | id   | statusCode | contentType      |
      | 5574 | 200        | application/json |
      | 9476 | 404        | application/json |
      | 9976 | 200        | application/json |


  @regression
  Scenario Outline: User should be able to find all pets by status
    And User sends a GET request to "pet/findByStatus"
    When User selects pets with "<status>"
    And  User verifies that response status code is 200
    Then User verifies that response content type is "application/json"
    Examples:
      |status|
      |available|
      |pending  |
      |sold     |



  @regression @smoke
  Scenario Outline: User should be able to delete an existing pet with API key
    And User sends DELETE request to "pet/"<id>
    When Select "special-key" for the authorization filters as a API key
    Then User verifies that response status code is <statusCode>

    Examples:
      | id     | statusCode |
      | 5574   | 200        |
      | 370012 | 404        |
      | 9056   | 200        |


  @regression
  Scenario Outline: User should be able to place orders for a pet
    When User sends POST request to as an "store/order"
      | petId      | <petId>  |
      | quantity   |<quantity>|
      | status     | <status> |
      |complete    |<complete>|
    Then User verifies that response status code is 200
    And User verifies that response content type is "application/json"
    Examples:
      | petId   | quantity  | status    | complete |
      | 9976    | 1         | placed    | true     |
      | 9977    | 2         | approved  | true     |
      | 9978    | 1         | delivered | true     |