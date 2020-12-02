package com.sample.step_definitions;


import com.sample.utilities.Driver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {


//    @io.cucumber.java.Before
//    public void setUp(){
//        System.out.println("\tthis is coming from BEFORE");
//        Driver.get().manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
//        Driver.get().manage().window().maximize();
//    }
//    @io.cucumber.java.After
//    public void tearDown(Scenario scenario){
//
//        if (scenario.isFailed()){
//            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
//            scenario.embed(screenshot,"image/png");
//        }
//        Driver.closeDriver();
//    }

    @Before("@ui or (@ui and @regression and @smoke and @wip)")
    public void setUp(){
        System.out.println("\tthis is coming from BEFORE");
        Driver.get().manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        Driver.get().manage().window().maximize();
    }


    @After("@ui or (@ui and @regression and @smoke and @wip)")
    public void tearDown(Scenario scenario){

        if (scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot,"image/png");
        }
        Driver.closeDriver();
    }


    @After("@db")
    public void tearDownDatabase(){
        System.out.println("\tCLOSING DATABASE CONNECTION");
    }
    @Before("@db")
    public void setUpDatabase(){
        System.out.println("\tCONNECTION DATABASE");
    }

}
