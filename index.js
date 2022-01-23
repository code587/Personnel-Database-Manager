const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const db = require('./db');
require = ('console.table');

startProgram();

async function startProgram() {
   const {choice} = await inquirer.prompt([{
        name: 'choice',
        type: 'list',
        message: 'Hello, what may I help you with?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Done. Need nothing else.'],
    }])
    console.log(choice);
//based on response the appropriate case is fired up so the correct function is called
    switch (choice) {
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
        // case 'Add a role':
        //     addRole();
        //     break;
    //     case 'Add an employee':
    //         addEmployee();
    //         break;
    //     case 'Update an employee role':
    //         updateRole();
    //         break;
    //     case 'Done. Need nothing else.':
    //         Finished();
    //         break;
    //     default:
    //         break;
    // }
}
//appropriate function called based on the case fired up from the responses
async function viewDepartments(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    const [rows, fields] = await connection.execute ('select * from department;');

        console.table(rows);

    }
    //startProgram()

async function viewRoles(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    const [rows, fields] = await connection.execute ('select * from roles;');

        console.table(rows);

    }
    //startProgram()

async function viewEmployees(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    const [rows, fields] = await connection.execute ('select * from employee;');
    
        console.table(rows);
    
    }
    //startProgram()





//finding all departments and mapping over the choices to be shown later as departmentChoices when the questions are prompted
// function addRole(){
//     db.findAllDepartments()
//     .then(([rows])=>{
//         let departments = rows;
//         const departmentChoices = departments.map(({id, name})=>({
//             name: name,
//             value: id
//         }))

//         inquirer.prompt([
//             {
//                 name: "title",
//                 message: "What is the name of the role?"
//             },
//             {
//                 name: "salary",
//                 message: "What is the salary of this role?"
//             },
//             {
//                 type: "list",
//                 name: "department_id",
//                 message: "Which department does the role belong to?",
//                 choices: departmentChoices
//             }
//         ])
//         .then(role =>{
//             db.createRole(role)
//             .then(()=> startProgram())
//         })
//     })
}

