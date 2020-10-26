package com.sample.pages;

import com.sample.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Account {


    @FindBy (xpath = "(//*[contains(text(),'Sign in')])[1]")
    public WebElement signin;

    @FindBy(id="ap_email")
    public WebElement e_mail_textbox;

    @FindBy (id="password")
    public WebElement password_textbox;

    @FindBy (id="continue")
    public WebElement login_Button;

    @FindBy (className = "a-alert-heading")
    public WebElement e_mail_alert;

    @FindBy (css = "[class='vs-error']")
    public WebElement login_alert;

    @FindBy (xpath = "(//a[contains(text(),'Accept')])[1]")
    public WebElement cookiebutton;

    @FindBy(css = "span[id='continue']")
    public WebElement continueButton;




    public Account() {
        PageFactory.initElements(Driver.get(), this);}

}
