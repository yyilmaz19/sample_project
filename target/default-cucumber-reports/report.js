$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contax.feature");
formatter.feature({
  "name": "Contax UI Testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.scenario({
  "name": "User lands the Contax.com website, user should see the menu options",
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
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"contax_home_page\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Steps.user_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The title of page should be \"CONTAX SAP Partner\"",
  "keyword": "When "
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
        "ABOUT US",
        "SOLUTIONS",
        "SERVICES",
        "KNOWLEDGE CENTER",
        "CAREERS",
        "CONTACT US"
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
formatter.scenarioOutline({
  "name": "User is able to see expected Contax locations from Contact Us Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User on the \"contax_home_page\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Click the Contact Us page",
  "keyword": "Then "
});
formatter.step({
  "name": "See the Contact Form",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the \"\u003clocation\u003e\" and its \"\u003caddress\u003e\" as expected",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "location",
        "address"
      ]
    },
    {
      "cells": [
        "Chicago, Illinois",
        "311 W Superior Street"
      ]
    },
    {
      "cells": [
        "Toronto, Ontario",
        "893 Yonge Street"
      ]
    },
    {
      "cells": [
        "Utrecht",
        "Hamburgerstraat 28a"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is able to see expected Contax locations from Contact Us Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"contax_home_page\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Steps.user_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Contact Us page",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.click_the_Contact_Us_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See the Contact Form",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.see_the_Contact_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Chicago, Illinois\" and its \"311 W Superior Street\" as expected",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.verify_the_and_its_as_expected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to see expected Contax locations from Contact Us Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"contax_home_page\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Steps.user_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Contact Us page",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.click_the_Contact_Us_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See the Contact Form",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.see_the_Contact_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Toronto, Ontario\" and its \"893 Yonge Street\" as expected",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.verify_the_and_its_as_expected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to see expected Contax locations from Contact Us Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User on the \"contax_home_page\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_Steps.user_on_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Contact Us page",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_Steps.click_the_Contact_Us_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See the Contact Form",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.see_the_Contact_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Utrecht\" and its \"Hamburgerstraat 28a\" as expected",
  "keyword": "And "
});
formatter.match({
  "location": "UI_Steps.verify_the_and_its_as_expected(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});