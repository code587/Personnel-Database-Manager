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

async function addRole(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    
    const newRole = await inquirer.prompt([
        {
        name: 'title',
        type: 'input',
        message: 'What is the new role?',
    },
    {
        name: 'salary',
        type: 'input',
        message: 'What is the salary for the new role?',
    },
    {
        name: 'department_id',
        type: 'input',
        message: 'What is the department ID for the new role?',
    }])

    console.log(newRole)
    let title = newRole.title
    let salary = newRole.salary
    let department_id = newRole.department_id
    console.log(title, salary, department_id);

    const [rows, fields] = await connection.execute(`INSERT INTO Roles (title, salary, department_id) VALUES (?,?,?);`, [title, salary, department_id]);
    
    viewRoles();

}

async function addEmployee(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    
    const newEmployee = await inquirer.prompt([
        {
        name: 'first_name',
        type: 'input',
        message: 'What is the first name of new employee?',
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'What is the last name of the new employee?',
    },
    {
        name: 'roles_id',
        type: 'input',
        message: 'What is the new employee role using id 1-8?',
    },
    {
        name: 'manager_id',
        type: 'input',
        message: 'Which manager_id from 200-207 is the new employee manager?',
    }])

    console.log(newEmployee)
    let first_name = newEmployee.first_name
    let last_name = newEmployee.last_name
    let roles_id = newEmployee.roles_id
    let manager_id = newEmployee.manager_id
    console.log(first_name, last_name, roles_id, manager_id);

    const [rows, fields] = await connection.execute(`INSERT INTO Employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?);`, [first_name, last_name, roles_id, manager_id]);
    
    viewEmployees();

}

async function updateRole(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});

const [rows, fields] = await connection.execute('SELECT * from EMPLOYEE');

   const employeeOptions = rows.map(employee => ({name: employee.first_name, value: employee.last_name}))

        console.table(rows);

    const updateRole = await inquirer.prompt([
        {
        name: 'last_name',
        type: 'list',
        message: 'Who is the employee changing roles?',
        choices: employeeOptions,
    }
])
    // {
    //     name: 'last_name',
    //     type: 'input',
    //     message: 'What is the last name of the employee?',
    // },
    // {
    //     name: 'roles_id',
    //     type: 'input',
    //     message: 'What is the new role using id 1-8?',
    // }])

    // console.log(updateRole)
    // let first_name = updateRole.first_name
    // let last_name = updateRole.last_name
    // let roles_id = updateRole.roles_id
    // console.log(first_name, last_name, roles_id);

    // const [rows, fields] = await connection.execute(`INSERT INTO Employee (first_name, last_name, roles_id) VALUES (?,?,?);`, [first_name, last_name, roles_id]);
    
    // viewEmployees();

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