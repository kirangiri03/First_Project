$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/example/cucumber/feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test verification",
  "description": "",
  "id": "login-test-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-test-verification;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I go to \"url\" with \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the \"Tester\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"test\" in the \"password_id\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \"loginbtn_xpath\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify \"List of All Orders\" is displayed in \"verifylist_xpath\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 9
    },
    {
      "val": "browser",
      "offset": 20
    }
  ],
  "location": "Step_Login.LaunchingUrl(String,String)"
});
formatter.result({
  "duration": 7125465501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 13
    },
    {
      "val": "username_id",
      "offset": 29
    }
  ],
  "location": "Step_Login.WhenText(String,String)"
});
formatter.result({
  "duration": 159291634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 9
    },
    {
      "val": "password_id",
      "offset": 23
    }
  ],
  "location": "Step_Login.AndText1(String,String)"
});
formatter.result({
  "duration": 65055125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbtn_xpath",
      "offset": 12
    }
  ],
  "location": "Step_Login.ThenText(String)"
});
formatter.result({
  "duration": 2722060521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List of All Orders",
      "offset": 10
    },
    {
      "val": "verifylist_xpath",
      "offset": 47
    }
  ],
  "location": "Step_Login.verifyText(String,String)"
});
formatter.result({
  "duration": 54464705,
  "status": "passed"
});
formatter.match({
  "location": "Step_Login.AndText2()"
});
formatter.result({
  "duration": 2114327685,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with invalid username and password",
  "description": "",
  "id": "login-test-verification;login-with-invalid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I go to \"url\" with \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter the \"Teste\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter \"test\" in the \"password_id\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"loginbtn_xpath\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I verify \"Invalid Login or Password.\" is displayed in \"verifytext_xpath\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 9
    },
    {
      "val": "browser",
      "offset": 20
    }
  ],
  "location": "Step_Login.LaunchingUrl(String,String)"
});
formatter.result({
  "duration": 5418565307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste",
      "offset": 13
    },
    {
      "val": "username_id",
      "offset": 28
    }
  ],
  "location": "Step_Login.WhenText(String,String)"
});
formatter.result({
  "duration": 85157847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 9
    },
    {
      "val": "password_id",
      "offset": 23
    }
  ],
  "location": "Step_Login.AndText1(String,String)"
});
formatter.result({
  "duration": 70561167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbtn_xpath",
      "offset": 12
    }
  ],
  "location": "Step_Login.ThenText(String)"
});
formatter.result({
  "duration": 535658202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Login or Password.",
      "offset": 10
    },
    {
      "val": "verifytext_xpath",
      "offset": 55
    }
  ],
  "location": "Step_Login.verifyText(String,String)"
});
formatter.result({
  "duration": 63889768,
  "status": "passed"
});
formatter.match({
  "location": "Step_Login.AndText2()"
});
formatter.result({
  "duration": 2173516255,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login with valid username and invalid password",
  "description": "",
  "id": "login-test-verification;login-with-valid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I go to \"url\" with \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter the \"Tester\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter \"testee\" in the \"password_id\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \"loginbtn_xpath\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify \"Invalid Login or Password.\" is displayed in \"verifytext_xpath\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 9
    },
    {
      "val": "browser",
      "offset": 20
    }
  ],
  "location": "Step_Login.LaunchingUrl(String,String)"
});
formatter.result({
  "duration": 6361308022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 13
    },
    {
      "val": "username_id",
      "offset": 29
    }
  ],
  "location": "Step_Login.WhenText(String,String)"
});
formatter.result({
  "duration": 91315634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testee",
      "offset": 9
    },
    {
      "val": "password_id",
      "offset": 25
    }
  ],
  "location": "Step_Login.AndText1(String,String)"
});
formatter.result({
  "duration": 72949186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbtn_xpath",
      "offset": 12
    }
  ],
  "location": "Step_Login.ThenText(String)"
});
formatter.result({
  "duration": 500645757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Login or Password.",
      "offset": 10
    },
    {
      "val": "verifytext_xpath",
      "offset": 55
    }
  ],
  "location": "Step_Login.verifyText(String,String)"
});
formatter.result({
  "duration": 56634193,
  "status": "passed"
});
formatter.match({
  "location": "Step_Login.AndText2()"
});
formatter.result({
  "duration": 2139622980,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login with invalid username and invalid password",
  "description": "",
  "id": "login-test-verification;login-with-invalid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I go to \"url\" with \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I enter the \"Teste\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter \"testee\" in the \"password_id\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \"loginbtn_xpath\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify \"Invalid Login or Password.\" is displayed in \"verifytext_xpath\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 9
    },
    {
      "val": "browser",
      "offset": 20
    }
  ],
  "location": "Step_Login.LaunchingUrl(String,String)"
});
formatter.result({
  "duration": 5435237390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teste",
      "offset": 13
    },
    {
      "val": "username_id",
      "offset": 28
    }
  ],
  "location": "Step_Login.WhenText(String,String)"
});
formatter.result({
  "duration": 90469307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testee",
      "offset": 9
    },
    {
      "val": "password_id",
      "offset": 25
    }
  ],
  "location": "Step_Login.AndText1(String,String)"
});
formatter.result({
  "duration": 71331372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbtn_xpath",
      "offset": 12
    }
  ],
  "location": "Step_Login.ThenText(String)"
});
formatter.result({
  "duration": 538506377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Login or Password.",
      "offset": 10
    },
    {
      "val": "verifytext_xpath",
      "offset": 55
    }
  ],
  "location": "Step_Login.verifyText(String,String)"
});
formatter.result({
  "duration": 51129006,
  "status": "passed"
});
formatter.match({
  "location": "Step_Login.AndText2()"
});
formatter.result({
  "duration": 2122294876,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Login with blank username and blank password",
  "description": "",
  "id": "login-test-verification;login-with-blank-username-and-blank-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I go to \"url\" with \"browser\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I enter the \"\" in the \"username_id\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I enter \"\" in the \"password_id\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on \"loginbtn_xpath\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify \"Invalid Login or Password.\" is displayed in \"verifytext_xpath\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 9
    },
    {
      "val": "browser",
      "offset": 20
    }
  ],
  "location": "Step_Login.LaunchingUrl(String,String)"
});
formatter.result({
  "duration": 5273354174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "username_id",
      "offset": 23
    }
  ],
  "location": "Step_Login.WhenText(String,String)"
});
formatter.result({
  "duration": 92493820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "password_id",
      "offset": 19
    }
  ],
  "location": "Step_Login.AndText1(String,String)"
});
formatter.result({
  "duration": 63320988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbtn_xpath",
      "offset": 12
    }
  ],
  "location": "Step_Login.ThenText(String)"
});
formatter.result({
  "duration": 659087216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Login or Password.",
      "offset": 10
    },
    {
      "val": "verifytext_xpath",
      "offset": 55
    }
  ],
  "location": "Step_Login.verifyText(String,String)"
});
formatter.result({
  "duration": 58411950,
  "status": "passed"
});
formatter.match({
  "location": "Step_Login.AndText2()"
});
formatter.result({
  "duration": 2123626590,
  "status": "passed"
});
});