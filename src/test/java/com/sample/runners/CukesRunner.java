package com.sample.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json"
        },
        features = "src/test/resources/features",
        glue = "com/sample/step_definitions",
        dryRun = false,
        tags = "@ui"

)

public class CukesRunner {


}
