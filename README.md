# QA Challenge
This repository contains 2 different automation frameworks that were design from scratch using Visual Studio Code in MacOS for the the QA Buddy Program described in the following URL: https://github.com/wizeline/qa-buddy-program using Todoist(https://todoist.com/) as practice subject.

In the following sections the solution will be described and how you can execute the BackEnd and FrontEnd tests using the designed frameworks.

# Problem to Solve
Create new Automation Frameworks that can be implemented to test the FrontEnd (UI) and Backend in order to test the following for Todoist:

- FrontEnd:
* Test the Login form
* Test the Add Task Module

- BackEnd:
* Test the Projects Module
    * Get all projects
    * Create a new project
    * Get a project
    * Update a project
    * Delete a project
* Test the Tasks Module
    * Get active tasks
    * Create a new task
    * Get an active task
    * Update a task
    * Close a task
    * Reopen a task
    * Delete a task

# Solution
2 Automation Frameworks were created, one to test the FrontEnd requirement and anotherone to test the Backend part.

For the front end TestCafé was used since it is powerful, easy to use and light to execute. For the backend we used the API exposed by the client (Todoist) and Postman to create the Requests and TestCases.

# Requirements to run the Frameworks
We are going to need to have at least the following installed in our system in order to proceed.

* NodeJS
* TestCafe
* Postman
* Newman

# FrontEnd UI Automation Framework
The FrontEnd UI Automation Framework was designed using the Page Object Model using the following folder structure:

./Pages

    LandPage -> That contains the needed elements to perform the Login divided in 2 classes

        LoginPage.js -> That contains everything needed to perform the login.
        
        NavigationBar.js -> That contains everything needed to navigate throught the land page and open the Login form.

    MainPage -> That contains the needed elements to validate that the user is able to add new tasks, as well divided into different classes.

        TodayPage.js -> That contains the elements needed to add a new task.

        BasePage.js -> That contains some methods to interact with some elements of the pages.

./Tests

    Backend -> This folder will be explained into the Backend Testing section of this file.

    LoginTests.js -> This file holds all the test cases that were created to validate the login action.

    TaskTests.js -> This file holds all the test cases created to validate the Add Task function from the Today window.

./Utils

    Files

        login.env -> Contains the login details to use.

    Constants.js -> This file holds all the constant variables that are used for all test cases.

    RoleGenerator.js -> This file holds everything that's needed to create a login role so we don't have to re-login with every single test that is not related with the login function.

We need to download and install NodeJS from: https://nodejs.org/en/download/

Once we have installed NodeJS in our system, we can execute the designed tests as follows:

Steps:

    1.- Download or clone the contents of this repository into a local folder.

    2.- Open a Terminal Window.

    3.- In Terminal, open the Folder where the contents of the repository are saved.

    4.- Execute the following command:

                $npm run test

        This command will execute all the Tests Cases and provide results on their execution.

# Backend Automation Framework
The backend automation framework was designed using Postman and in order to execute the TestCases we need to have installed a tool called Newman (https://learning.getpostman.com/docs/postman/collection-runs/command-line-integration-with-newman/).

After newman is installed in your system you can execute the tests using the following command:

        $newman run ./Tests/Backend/Todoist.postman_collection.json -e ./Tests/Backend/QA.postman_environment.json

You will get the test results after each test case gets executed. Here we are testing the scenarios mentioned above along with some negative ones to ensure the quality of the product. Some tests are skipped because they don't apply for some specific scenarios.