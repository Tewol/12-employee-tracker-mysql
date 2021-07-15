# 12-Employee-Tracker-mysql

This is a simple employee tracker application that ables a user to view and manage the departments, roles, and employees.

The application manages a company's employees using node, inquirer, and MySQL.

## Design and Requirment

![Employe tracker database UML](Assets/employee-tracker.gif)

* Department:

  * id - INT PRIMARY KEY
  * name - VARCHAR(30) to hold department name

* Role:

  * id - INT PRIMARY KEY
  * title -  VARCHAR(30) to hold role title
  * salary -  DECIMAL to hold role salary
  * department_id -  INT to hold reference to department role belongs to

* Employee:

  * id - INT PRIMARY KEY
  * first_name - VARCHAR(30) to hold employee first name
  * last_name - VARCHAR(30) to hold employee last name
  * role_id - INT to hold reference to role employee has
  * manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
Build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

Bonus points if you're able to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Sample SQL JOINS:


## Demo

![Employee Tracker](Assets/employee-tracker.gif)

### Hints

* You may wish to include a `seed.sql` file to pre-populate your database. This will make development of individual features much easier.

* Review the week's activities for a refresher on MySQL.

* Check out [SQL Bolt](https://sqlbolt.com/) for some extra MySQL help.


**Important**: You will be committing a file that contains your database credentials. 


## Submission

* URL of the GitHub repository: https://tewol.github.io/12-employee-tracker-mysql/

* A video demonstrating the entirety of the app's functionality: 

- - -
© 2021 Hewan Redie.
