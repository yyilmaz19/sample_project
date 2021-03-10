package com.sample.pages;

import com.sample.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MainPage {

    @FindBy (xpath = "//*[@role='menu']/li/a")
    public WebElement menuoptions;









    public MainPage() {
        PageFactory.initElements(Driver.get(), this);}

}
