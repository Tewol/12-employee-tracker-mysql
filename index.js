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
          songAndAlbumSearch();
        break;
        
        case 'Update employee managers':
          songAndAlbumSearch();
        break; 
        
        case 'View employees by manager':
          songAndAlbumSearch();
        break; 
        
        case 'Delete departments':
          songAndAlbumSearch();
        break;

        case 'Delete roles':
          songAndAlbumSearch();
        break;
        
        case 'Delete employees':
          songAndAlbumSearch();
        break;

        case 'View total budget of a department':
          songAndAlbumSearch();
        break;

        default:
          console.log(`Invalid action: ${answer.action}`);
        break;
      }
    });
};

const artistSearch = () => {
  inquirer
    .prompt({
      name: 'artist',
      type: 'input',
      message: 'What artist would you like to search for?',
    })
    .then((answer) => {
      const query = 'SELECT position, song, year FROM top5000 WHERE ?';
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        runSearch();
      });
    });
};

const addDepartment = () => {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is the name of the department',
      }
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.name
        },
        (err) => {
          if (err) throw err;
          console.log('Department was added!');
          // re-prompt the user for if they add, view or update
          start();
        }
      );
    });
};


// connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
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