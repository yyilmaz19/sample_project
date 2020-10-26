package com.sample.step_definitions;

import com.sample.pages.Account;
import com.sample.pages.MainPage;
import com.sample.utilities.BrowserUtils;
import com.sample.utilities.ConfigurationReader;
import com.sample.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


import java.util.List;

public class UI_Steps {
    Account account=new Account();
    MainPage mainPage=new MainPage();

    @Given("User on the {string}")
    public void user_on_the(String page) throws InterruptedException {
        Driver.get().get(ConfigurationReader.get(page));
        BrowserUtils.waitFor(1);
        Driver.get().manage().deleteAllCookies();
        Driver.get().manage().window().maximize();
    }

    @Then("User clicks the Sign in button")
    public void user_clicks_the_Sign_in_button() {
        account.signin.click();
    }

    @When("User enters the invalid {string} to sign in")
    public void user_enters_the_invalid_to_sign_in(String invalid) {
        account.e_mail_textbox.sendKeys(invalid);
        BrowserUtils.waitFor(1);
        account.continueButton.click();
    }

    @Then("User gets the {string} message")
    public void user_gets_the_message(String string) {
        //BrowserUtils.waitForPageToLoad(5);
        //BrowserUtils.waitForVisibility(account.e_mail_alert,5);
        BrowserUtils.waitFor(5);
        System.out.println("account.e_mail_alert.getText() = " + account.e_mail_alert.getText());
        Assert.assertEquals(account.e_mail_alert.getText(),string);
    }

    @Then("The title of page should be {string}")
    public void the_title_of_page_should_be(String title) {
        Assert.assertEquals(Driver.get().getTitle(),title);
    }

    @Then("the user should see following menu options")
    public void the_user_should_see_following_menu_options (List<String> menuOptions) {

        BrowserUtils.waitForVisibility(mainPage.menuoptions,5);

        List<String> actualMenuOptions = BrowserUtils.getElementsText(Driver.get().findElements(By.xpath("//*[@class='sf-menu sf-js-enabled']/li/a")));

        Assert.assertEquals(menuOptions,actualMenuOptions);


    }

    @Then("Click the Contact Us page")
    public void click_the_Contact_Us_page() {
        Driver.get().findElement(By.xpath("(//*[@class='sf-menu sf-js-enabled']/li/a)[6]")).click();
    }

    @Then("See the Contact Form")
    public void see_the_Contact_Form() {
        Assert.assertTrue(Driver.get().findElement(By.id("contact-form")).isDisplayed());
    }

    @Then("Verify the {string} and its {string} as expected")
    public void verify_the_and_its_as_expected(String location, String address) {
        Boolean isContainLcation= false;
        Boolean isContainaddress= false;

        List<String> locations=BrowserUtils.getElementsText(Driver.get().findElements(By.xpath("//*[@class='grid_2']/p[@class='txt4']")));
        for (String s : locations) {
            if (s.contains(location)){
                isContainLcation=true;
            }
        }
        Assert.assertTrue(isContainLcation);

        List<String> addressLocations=BrowserUtils.getElementsText(Driver.get().findElements(By.xpath("//*[@class='grid_2']/p[@class='txt4']/following-sibling::p")));

        for (String addressLocation : addressLocations) {
            //System.out.println(addressLocation);
            if (addressLocation.contains(address)){
                isContainaddress=true;
            }
        }
        Assert.assertTrue(isContainaddress);
    }










}
