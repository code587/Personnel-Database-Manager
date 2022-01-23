const connection = require("./connection");

class DB {

    constructor(connection){
        this.connection = connection;
    }

    findAllDepartments(){
        return this.connection.promise().query(
            'SELECT * from department'
        )
    }
        
    findAllRoles(){
        return this.connection.promise().query(
            'SELECT * from roles'
        )
    }
            
    findAllEmployees(){
        return this.connection.promise().query(
            "SELECT * from employee"
            )
    }
    createDepartment(department){
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        )
    }
    createRole(role){
        return this.connection.promise().query(
            "INSERT INTO roles SET ?", role
        )
    }
    createEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        )
    }








}

module.exports = new DB(connection);