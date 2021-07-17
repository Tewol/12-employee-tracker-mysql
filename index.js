const mysql2 = require('mysql2');
const inquirer = require('inquirer');

// create the connection information for the sql database
//const {config} = require("./creds");
//const connection = mysql2.createConnection(config);

const connection = mysql2.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Be sure to update with your own MySQL password!
  password: 'Temari1!',
  database: 'employeeTracker_DB',
});


//Prompts the user for what action they should take
const start = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'Would you like to do do?',
      choices: ['Add department', 
                'Add role', 
                'Add employee', 
                'View departments', 
                'view roles', 
                'View employees', 
                'Update employee managers',
                'View employees by manager',
                'Delete departments',
                'Delete roles',
                'Delete employees',
                'View total budget of a department',
                'Exit',
              ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add department':
          addDepartment();
          break;

        case 'Add role':
          addRole();
          break;

        case 'Add employee':
          addEmployee();
          break;

        case 'View departments':
          viewDepartment();
          break;

        case 'view roles':
          viewRoles();
          break;
        
        case 'View employees':
          viewEmployees();
          break;
        
        case 'Update employee Role':
          updateEmployeeRole();
          break; 
        
        case 'Update employee by manager':
          updateEmployeeManagers();
          break; 
        
        case 'View employees by manager':
          viewEmployeesManager();
          break;

        case 'Delete departments':
          deleteDepartments();
          break;
        
        case 'Delete Roles':
          deleteRoles();
          break;

        case 'Delete Employees':
          deleteEmployees();
          break;
          
        case 'View total budget of a department':
          viewTotalBudget();
          break;
          
        case 'Exit':
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addDepartment = () => {
  // prompt for department name to add it to the table
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is the name of the department',
      }
    ])
    .then((answer) => {
      // Insert a department name 
      connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.name
        },
        (err) => {
          if (err) throw err;
          console.log('New department was added successfully!');
          // re-prompt the user for more action
          start();
        }
      );
    });
};

const addRole = () => {
  // promp to add role in to 
  inquirer
    .prompt([
      {
        name: 'titile',
        type: 'input',
        message: 'What is the name of the role',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role',
      },
    ])
    .then((answer) => {
      // insert a new item into the db with that info
      connection.query(
        'INSERT INTO role SET ?',
        {
          titile: answer.titile,
          salary: answer.salary
        },
        (err) => {
          if (err) throw err;
          console.log('New role was added successfully!');
          // re-prompt the user for more action
          start();
        }
      );
    });
};

const addEmployee = () => {
  // prompt for adding employee
  inquirer
    .prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'What is employee firt name',
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'What is employee last name',
      },
    ])
    .then((answer) => {
      // Insert a new employe information in to the employee table
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.first_name
        },
        {
          last_name: answer.last_name
        },
        (err) => {
          if (err) throw err;
          console.log('New employee information was added successfully!');
          // re-prompt the user for more action
          start();
        }
      );
    });
};


// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made
  start();
});


/*
// SELECT STATEMENT USING mysql package, placeholders, and objects
connection.query(
  'SELECT * FROM <tablename> WHERE ?',
  {
    // key/value pairs for each column querying against
    // column_name: value
    id: 1
  },
  (err) => {
    if (err) throw err;
    // whatever happens if everything goes well
  }
);

// UPDATE STATEMENT USING mysql package, placeholders, and objects
connection.query(
  'UPDATE <tablename> SET ? WHERE ?',
  [
    { column_name: dataToUpdate },   // what are we updating; multiple keys/values are fine
    { id: idValueToChange }          // which record/row are we updating
  ],
  (error) => {
    if (error) throw err;
    console.log('Bid placed successfully!');
    start();
  }
);

// DELETE STATEMENT USING mysql package, placeholders, and objects
connection.query(
  'DELETE FROM <tablename> WHERE ?',
  { id: idValueToChange },                  // which record/row are we deleting
  (error) => {
    if (error) throw err;
    console.log('Bid placed successfully!');
    start();
  }
);
*/