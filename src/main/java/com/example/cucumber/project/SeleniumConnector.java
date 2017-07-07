package com.example.cucumber.project;


import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumConnector {
	
	WebDriver driver;
	Properties loc=null;
	Properties config=null;
	FileReader frdr_loc = null;
	FileReader frdr_config = null;
	
	public SeleniumConnector(){
		loc=new Properties();
		config=new Properties();
		try {
			frdr_loc = new FileReader("D:\\Cucumber_Project\\Selenium_Cucumber\\src\\main\\java\\com\\example\\cucumber\\config\\locator.properties");
			loc.load(frdr_loc);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		try {
			frdr_config = new FileReader("D:\\Cucumber_Project\\Selenium_Cucumber\\src\\main\\java\\com\\example\\cucumber\\config\\configurations.properties");
			config.load(frdr_config);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	
	}
	
	public void openBrowser(String browser){
	
		if(config.getProperty(browser).equals("firefox")){
			//driver=new FireFoxDriver();
			System.out.println("Firefox driver");
		}
		else if(config.getProperty(browser).equals("chrome")){
			System.setProperty("webdriver.chrome.driver","D:\\Selenium\\chromedriver_win32\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
	}
	
	public void loadingUrl(String url){
		driver.get(config.getProperty(url));
	}
	
	public void enterText(String locator,String data){
		checkFindElement(locator).sendKeys(data);
	}

	public void click(String locator){
		checkFindElement(locator).click();
	}
	
	public WebElement checkFindElement(String locator){
		WebElement el=null;
		if(locator.endsWith("_id")){
			el=driver.findElement(By.id(loc.getProperty(locator)));
		}
		if(locator.endsWith("_name")){
			el=driver.findElement(By.name(loc.getProperty(locator)));
		}
		if(locator.endsWith("_xpath")){
			el=driver.findElement(By.xpath(loc.getProperty(locator)));
		}
		if(locator.endsWith("_classname")){
			el=driver.findElement(By.className(loc.getProperty(locator)));
		}
		if(locator.endsWith("_linktxt")){
			el=driver.findElement(By.linkText(loc.getProperty(locator)));
		}
		if(locator.endsWith("_plinktxt")){
			el=driver.findElement(By.partialLinkText(loc.getProperty(locator)));
		}
		if(locator.endsWith("_cssSelector")){
			el=driver.findElement(By.cssSelector(loc.getProperty(locator)));
		}
		return el;
	}
	
	public void validateText(String text,String locator){
		String str=checkFindElement(locator).getText();
		if(str.equals(text)){
			System.out.println("Verification successfull");
		}
		else
			System.out.println("Verification failed");
	}
	public void closeBrowser() throws InterruptedException{
		Thread.sleep(2000);
		driver.close();
	}
	
}
