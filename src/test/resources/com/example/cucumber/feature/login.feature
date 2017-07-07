@tag
Feature: Login Test verification

  @tag1
  Scenario: Login with valid username and password
    Given I go to "url" with "browser"
    When I enter the "Tester" in the "username_id"
    And I enter "test" in the "password_id"
    Then I click on "loginbtn_xpath" button
    Then I verify "List of All Orders" is displayed in "verifylist_xpath"
    And I close browser
    
    @tag2
    Scenario: Login with invalid username and password
    Given I go to "url" with "browser"
    When I enter the "Teste" in the "username_id"
    And I enter "test" in the "password_id"
    Then I click on "loginbtn_xpath" button
    Then I verify "Invalid Login or Password." is displayed in "verifytext_xpath"
    And I close browser
    
    @tag3
    Scenario: Login with valid username and invalid password
    Given I go to "url" with "browser"
    When I enter the "Tester" in the "username_id"
    And I enter "testee" in the "password_id"
    Then I click on "loginbtn_xpath" button
    Then I verify "Invalid Login or Password." is displayed in "verifytext_xpath"
    And I close browser
    
    @tag4
    Scenario: Login with invalid username and invalid password
    Given I go to "url" with "browser"
    When I enter the "Teste" in the "username_id"
    And I enter "testee" in the "password_id"
    Then I click on "loginbtn_xpath" button
    Then I verify "Invalid Login or Password." is displayed in "verifytext_xpath"
    And I close browser
    
    @tag5
    Scenario: Login with blank username and blank password
    Given I go to "url" with "browser"
    When I enter the "" in the "username_id"
    And I enter "" in the "password_id"
    Then I click on "loginbtn_xpath" button
    Then I verify "Invalid Login or Password." is displayed in "verifytext_xpath"
    And I close browser