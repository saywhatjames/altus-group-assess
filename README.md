# AltusAngularInterviewTest

AltusAngularInterviewTest is an application designed for the web and mobile devices that tracks occupance of propertys given their tenants.
The application is created using using Angular.



### Problem:
Illustrate the occupancy capacity of properties given a dynamic tenants and properties
and build a page without using existing css frameworks.

### Approach to the problem:
Normalize css. Reset css for inputs.
Build color palette for design.
Create models for Property and Tenant. 
Apply model changes to the data binded property name input to reflect property name title. 
Create a property service to separate business logic of calculating occupancy.
Create a directive for input to only accept numbers.
Watch for value changes for Property Rentable Area and Tenant Area.
Check for validations since property rentable area cannot be lesser than tenant area.
Check for required and zero validations.
If validations are passed calculate occupancy and depict it in a bar graph.
Added styling animations to the bar graph.

### Issues:
Solving different test cases for input validations are tricky since there are a number of use cases.
For example both inputs cant not be zero but since the min and max validations doesnt fire a separate 
validation is needed. Zero is also different from an empty input which angular already have native validations on.
We also need to only take number inputs and there are different scenarios where a user can input invalid data. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
```
npm
Angular CLI
```

### Installing

Run `npm install` to install the necessary dependencies for the project.

### Running the development server

Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). 
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Built With

* [Angular](https://angular.io/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Angular CLI](https://cli.angular.io/) - CLI developing tool for Angular
## Author

**James Magpantay** [Github](https://github.com/saywhatjames)

