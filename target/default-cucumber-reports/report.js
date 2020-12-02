$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/API.feature");
formatter.feature({
  "name": "API Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to create a pet by given information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to \"pet\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "id",
        "\u003cid\u003e"
      ]
    },
    {
      "cells": [
        "name",
        "\u003cname\u003e"
      ]
    },
    {
      "cells": [
        "status",
        "\u003cstatus\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "status"
      ]
    },
    {
      "cells": [
        "5574",
        "fino",
        "available"
      ]
    },
    {
      "cells": [
        "9976",
        "doggy",
        "pending"
      ]
    },
    {
      "cells": [
        "9056",
        "poesy",
        "sold"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to create a pet by given information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to \"pet\"",
  "rows": [
    {
      "cells": [
        "id",
        "5574"
      ]
    },
    {
      "cells": [
        "name",
        "fino"
      ]
    },
    {
      "cells": [
        "status",
        "available"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_POST_request_to(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to create a pet by given information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to \"pet\"",
  "rows": [
    {
      "cells": [
        "id",
        "9976"
      ]
    },
    {
      "cells": [
        "name",
        "doggy"
      ]
    },
    {
      "cells": [
        "status",
        "pending"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_POST_request_to(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to create a pet by given information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to \"pet\"",
  "rows": [
    {
      "cells": [
        "id",
        "9056"
      ]
    },
    {
      "cells": [
        "name",
        "poesy"
      ]
    },
    {
      "cells": [
        "status",
        "sold"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_POST_request_to(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should be able to reach pet information by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends GET request to \"pet/\"\u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User verifies that response status code is \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies that response content type is \"\u003ccontentType\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "statusCode",
        "contentType"
      ]
    },
    {
      "cells": [
        "5574",
        "200",
        "application/json"
      ]
    },
    {
      "cells": [
        "9476",
        "404",
        "application/json"
      ]
    },
    {
      "cells": [
        "9976",
        "200",
        "application/json"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to reach pet information by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends GET request to \"pet/\"5574",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to reach pet information by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends GET request to \"pet/\"9476",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to reach pet information by id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends GET request to \"pet/\"9976",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should be able to find all pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends a GET request to \"pet/findByStatus\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects pets with \"\u003cstatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status"
      ]
    },
    {
      "cells": [
        "available"
      ]
    },
    {
      "cells": [
        "pending"
      ]
    },
    {
      "cells": [
        "sold"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to find all pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends a GET request to \"pet/findByStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects pets with \"available\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_selects_pets_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to find all pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends a GET request to \"pet/findByStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects pets with \"pending\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_selects_pets_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to find all pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends a GET request to \"pet/findByStatus\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_sends_GET_request_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects pets with \"sold\"",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_selects_pets_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should be able to delete an existing pet with API key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends DELETE request to \"pet/\"\u003cid\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Select \"special-key\" for the authorization filters as a API key",
  "keyword": "When "
});
formatter.step({
  "name": "User verifies that response status code is \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "statusCode"
      ]
    },
    {
      "cells": [
        "5574",
        "200"
      ]
    },
    {
      "cells": [
        "370012",
        "404"
      ]
    },
    {
      "cells": [
        "9056",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to delete an existing pet with API key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends DELETE request to \"pet/\"5574",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_sends_DELETE_request_to(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"special-key\" for the authorization filters as a API key",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.select_for_the_authorization_filters_as_a_API_key(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to delete an existing pet with API key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends DELETE request to \"pet/\"370012",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_sends_DELETE_request_to(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"special-key\" for the authorization filters as a API key",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.select_for_the_authorization_filters_as_a_API_key(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to delete an existing pet with API key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User sends DELETE request to \"pet/\"9056",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_sends_DELETE_request_to(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"special-key\" for the authorization filters as a API key",
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.select_for_the_authorization_filters_as_a_API_key(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should be able to place orders for a pet",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to as an \"store/order\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "petId",
        "\u003cpetId\u003e"
      ]
    },
    {
      "cells": [
        "quantity",
        "\u003cquantity\u003e"
      ]
    },
    {
      "cells": [
        "status",
        "\u003cstatus\u003e"
      ]
    },
    {
      "cells": [
        "complete",
        "\u003ccomplete\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "petId",
        "quantity",
        "status",
        "complete"
      ]
    },
    {
      "cells": [
        "9976",
        "1",
        "placed",
        "true"
      ]
    },
    {
      "cells": [
        "9977",
        "2",
        "approved",
        "true"
      ]
    },
    {
      "cells": [
        "9978",
        "1",
        "delivered",
        "true"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place orders for a pet",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to as an \"store/order\"",
  "rows": [
    {
      "cells": [
        "petId",
        "9976"
      ]
    },
    {
      "cells": [
        "quantity",
        "1"
      ]
    },
    {
      "cells": [
        "status",
        "placed"
      ]
    },
    {
      "cells": [
        "complete",
        "true"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_POST_request_to_as_an(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place orders for a pet",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to as an \"store/order\"",
  "rows": [
    {
      "cells": [
        "petId",
        "9977"
      ]
    },
    {
      "cells": [
        "quantity",
        "2"
      ]
    },
    {
      "cells": [
        "status",
        "approved"
      ]
    },
    {
      "cells": [
        "complete",
        "true"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_POST_request_to_as_an(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Headers accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "API_Steps.headers_accepts_content_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place orders for a pet",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User sends POST request to as an \"store/order\"",
  "rows": [
    {
      "cells": [
        "petId",
        "9978"
      ]
    },
    {
      "cells": [
        "quantity",
        "1"
      ]
    },
    {
      "cells": [
        "status",
        "delivered"
      ]
    },
    {
      "cells": [
        "complete",
        "true"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "API_Steps.user_sends_POST_request_to_as_an(String,String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that response content type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API_Steps.user_verifies_that_response_content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
});