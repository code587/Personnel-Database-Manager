// const inquirer = require('inquirer');
// const mysql = require('mysql2'/promise);
// const fs = require('fs');
// const path = require("path");

// startProgram();
// async function startProgram() {
//     const data = await inquirer.prompt([{
//         name: 'choice',
//         type: 'list',
//         message: 'what do you want to do?',
//         choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
//     }])
//     console.log(data);

//     switch (choice) {
//         case 'update department':
//             //call a function that shows departments.  Include exit 
//               updateDepartment()
//             break;
    
//         default:
//             break;
//     }
// }
//     async function updatedDepartment(){
//   // create the connection
//   const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'personnel_db'});
//   // query database
//   const [rows, fields] = await connection.execute("select * departments;");

//   console.table(rows);
// }