const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const db = require('./db');
require = ('console.table');


startProgram();

async function startProgram() {
   const {option} = await inquirer.prompt([{
        name: 'option',
        type: 'list',
        message: 'What may I help you with?',
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
    let department_name = newDept.department_name  
    console.log(department);

    const [rows, fields] = await connection.execute(`INSERT INTO Department (department_name) VALUES (?);`, [department]);

    console.table(rows);

    startProgram()
}

async function addRole(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});

    const [rows, fields] = await connection.execute('SELECT * FROM roles');

    const [roles] = await connection.query('SELECT * FROM roles');

    const [departments] = await connection.query('SELECT * FROM department');

    const newRole = roles.map((role) => {return {name:role.title, value: role.id}})
    
    const roleAdd = await inquirer.prompt([
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
        name: 'department',
        type: 'list',
        message: 'What is the department for the new role?',
        choices: departments.map((department) => {return {name:department.department_name, value: department.id}})
    }])

    console.log(roleAdd)

    // console.log(newRole)
    // let title = newRole.title
    // let salary = newRole.salary
    // let department_id = newRole.department_id;
    // let department_name = newRole.department_name
    // console.log(title, salary, department_id, department_name);

    // const [rows, fields] = await connection.execute(`INSERT INTO Roles (title, salary, department_id, department_name) VALUES (?,?,?,?);`, [title, salary, department_id, department_name]);
    
    // console.table(rows);
    
    startProgram()

}

async function addEmployee(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});
    
    const [roles] = await connection.query('SELECT id, title FROM roles')

    // console.log(roles);

    const [managers] = await connection.query('SELECT id, first_name, last_name FROM employee')

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
        type: 'list',
        message: 'What is the new employee role ?',
        choices: roles.map((role) => {return {name:role.title, value: role.id}})
    },
    {
        name: 'manager_id',
        type: 'list',
        message: 'Please choose a manager.',
        choices: managers.map((manager) => {return {name: manager.first_name +' '+ manager.last_name, value: manager.id}})
    }])

    console.log(newEmployee)
    let first_name = newEmployee.first_name
    let last_name = newEmployee.last_name
    let role_id = newEmployee.roles_id
    let manager_id = newEmployee.manager_id
    console.log(first_name, last_name, role_id, manager_id);

    const [rows, fields] = await connection.execute(`INSERT INTO Employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?);`, [first_name, last_name, role_id, manager_id]);

    
    viewEmployees();
    

}

async function updateRole(){
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'personnel_db'});

    const [rows, fields] = await connection.execute('SELECT * FROM employee');

    const [roles] = await connection.query('SELECT * FROM roles');

   const employeeOptions = rows.map(employee => ({name: `${employee.first_name} ${employee.last_name}`, value: employee.roles_id,}));

        console.log(employeeOptions);
    
    const pickRole = roles.map((role) => {return {name:role.title, value: role.id}})

        console.log(pickRole);

    const {options} = await inquirer.prompt([
        {
        name: 'options',
        type: 'list',
        message: 'Choose employee changing roles?',
        choices: employeeOptions,
    }])

        console.log(options);

    const {pick} = await inquirer.prompt([
    {
        name: 'pick',
        type: 'list',
        message: 'Choose their new role?',
        choices: pickRole,
    }])

        console.log(pick);

    startProgram()

}










