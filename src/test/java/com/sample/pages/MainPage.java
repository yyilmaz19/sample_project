package com.sample.pages;

import com.sample.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MainPage {

    @FindBy (xpath = "//*[@class='sf-menu sf-js-enabled']/li/a")
    public WebElement menuoptions;

    @FindBy(xpath = "//*[@id='menu-hoofdmenu']/li/a")
    public WebElement surepayMenu;








    public MainPage() {
        PageFactory.initElements(Driver.get(), this);}

}
