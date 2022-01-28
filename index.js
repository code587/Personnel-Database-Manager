const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const db = require('./db');
require = ('console.table');


startProgram();

async function startProgram() {
   const {option} = await inquirer.prompt([{
        name: 'option',
        type: 'list',
        message: 'Hello, what may I help you with?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Done. Need nothing else.'],
    }])
    console.log(option);
//based on response the appropriate case is fired up so the correct function is called
    switch (option) {
        case 'View all departments':
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case "View all employees":
            viewEmployees();
            break;
        case 'Add a department':
            addDepartment();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update an employee role':
            updateRole();
            break;
        case 'Done. Need nothing else.':
            Finished();
            break;
        default:
            break;
    }
}
//appropriate function called based on the case fired up from the responses
async function viewDepartments(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    const [rows, fields] = await connection.execute ('select * from department;');

        console.table(rows);

        startProgram()
    }

async function viewRoles(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    const [rows, fields] = await connection.execute ('select * from roles;');

        console.table(rows);

        startProgram()
    }

async function viewEmployees(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    const [rows, fields] = await connection.execute ('select * from employee;');
    
        console.table(rows);
    
        startProgram()
    }


async function addDepartment(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    
    const newDept = await inquirer.prompt([
        {
        name: 'department',
        type: 'input',
        message: 'What is the new department name?',
    }])
    
    console.log(newDept)
    let department = newDept.department    
    console.log(department);

    const [rows, fields] = await connection.execute(`INSERT INTO Department (name) VALUES (?);`, [department]);
    
    viewDepartments();

}













//('select * from department;');

    // console.table(rows);
// console.log(answers);
// const [rows] = db
// .execute (`INSERT INTO department (name) VALUES (?);`,answers)

//     .then((answers => {
    
//         const connection = mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
//         const [rows, fields] = connection.execute (`INSERT INTO department (name) VALUES ${answers.department.name};`)
//     }
//     ))
        
//         console.log(answers);
// 