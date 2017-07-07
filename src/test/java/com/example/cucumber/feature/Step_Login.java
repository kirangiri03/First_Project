package com.example.cucumber.feature;

import com.example.cucumber.project.SeleniumConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Login {
	SeleniumConnector sel=new SeleniumConnector();

	@Given("I go to \"([^\"]*)\" with \"([^\"]*)\"")
	public void LaunchingUrl(String url,String browser){
		sel.openBrowser(browser);
		sel.loadingUrl(url);
		System.out.println("Browser is launched");
	}
	
	@When("I enter the \"([^\"]*)\" in the \"([^\"]*)\"")
	public void WhenText(String data,String locator){		
		sel.enterText(locator, data);
		System.out.println("Username is entered");
	}
	@And("I enter \"([^\"]*)\" in the \"([^\"]*)\"")
	public void AndText1(String data,String locator){
		sel.enterText(locator, data);
		System.out.println("Password is entered");
	}
	@Then("I click on \"([^\"]*)\" button")
	public void ThenText(String locator){
		sel.click(locator);
		System.out.println("Login button is clicked");
	}
	@Then("I verify \"([^\"]*)\" is displayed in \"([^\"]*)\"")
	public void verifyText(String text,String locator){
		sel.validateText(text,locator);
		System.out.println("Verification is Completed");
	}
	@And("I close browser")
	public void AndText2() throws InterruptedException{
		sel.closeBrowser();
		System.out.println("Browser is closed");
	}
}
