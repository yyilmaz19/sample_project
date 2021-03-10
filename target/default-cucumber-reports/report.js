$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Amazon.feature");
formatter.feature({
  "name": "Amazon UI Login Testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User lands the website, try to continue with an invalid email or username and gets the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.step({
  "name": "User on the \"ui_page\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks the Sign in button",
  "keyword": "Then "
});
formatter.step({
  "name": "The title of page should be \"Amazon Sign-In\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the invalid \"\u003ce-mail\u003e\" to sign in",
  "keyword": "And "
});
formatter.step({
  "name": "User gets the \"There was a problem\" message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "e-mail"
      ]
    },
    {
      "cells": [
        "alihaja@gmail.com"
      ]
    },
    {
      "cells": [
        "agshgshg@hgh.hg"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User lands the website, try to continue with an invalid email or username and gets the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"ui_page\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Steps.user_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.user_clicks_the_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The title of page should be \"Amazon Sign-In\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_Steps.the_title_of_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"alihaja@gmail.com\" to sign in",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.user_enters_the_invalid_to_sign_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets the \"There was a problem\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.user_gets_the_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User lands the website, try to continue with an invalid email or username and gets the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"ui_page\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Steps.user_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.user_clicks_the_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The title of page should be \"Amazon Sign-In\"",
  "keyword": "When "
});
formatter.match({
  "location": "UI_Steps.the_title_of_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the invalid \"agshgshg@hgh.hg\" to sign in",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.user_enters_the_invalid_to_sign_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets the \"There was a problem\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.user_gets_the_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UI.feature");
formatter.feature({
  "name": "HumaneR UI Testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.scenario({
  "name": "User lands the humaner.org website, user should see the menu options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ui"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"humaner_home_page\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Steps.user_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The title of page should be \"HumaneR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.the_title_of_page_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see following menu options",
  "rows": [
    {
      "cells": [
        "HOME",
        "ABOUT US",
        "FOR THE REFUGEES",
        "GET INVOLVED",
        "PARTNERS",
        "RESOURCES",
        "CONTACT"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.the_user_should_see_following_menu_options(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});