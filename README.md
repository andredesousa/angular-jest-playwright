# Testing an Angular app with Playwright

This project provides a baseline code base to help you kick start an Angular project with end-to-end tests.
It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.
This project uses [Jest](https://jestjs.io/) for unit testing and [Playwright](https://playwright.dev/) for end-to-end testing.

## Overview

End-to-end tests will allow you to trace bugs and errors in the behavior of your system.
They are a means of testing if all units of an application interact as expected with each other and if the system as a whole works as intended.

It is important to keep in mind that, maybe contrary to unit tests, e2e tests are black-box tests and only care about the functionality of the application from an end user point of view.
Whether or not the services around the application work properly, or that responses from the server are correct, and so on, is outside the scope of e2e testing.

Playwright is a framework for Web Testing and Automation.
It allows testing Chromium, Firefox and WebKit with a single API.
Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
Headless execution is supported for all the browsers on all platforms.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs Storybook in watch mode.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to source code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests in watch mode.
- `e2e` - Runs the e2e tests.
- `e2e:watch` - Runs the e2e tests in watch mode.
- `build` - Builds the dist files.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
[ESLint](https://eslint.org/) helps maintain the code quality.

Run `npm run lint` to analyze your code.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Run `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

You can see the HTML coverage report opening the [index.html](build/coverage/lcov-report/index.html) file in your web browser.
Code coverage measures and reports the number of executed code lines covered by automated tests.

## Running end-to-end tests

The end-to-end tests are responsible for testing scenarios on the product itself, by controlling the browser or the website, regardless of the internal structure to ensure expected behavior.

Use `npm run e2e` to execute the end-to-end tests via [Playwright](https://playwright.dev/).
Use `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](reports/e2e/index.html) file in your web browser.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
These functionalities are provided natively or based on plugins.
[Angular DevTools](https://angular.io/guide/devtools/) is a Chrome extension that provides debugging and profiling capabilities for Angular applications.

You can use our IDE for debugging unit and end-to-end tests.
Also, you can debug tests with `debugger` keyword if you run `npm run test:debug` or `npm run playwright:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
These functionalities are provided natively or based on plugins.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
