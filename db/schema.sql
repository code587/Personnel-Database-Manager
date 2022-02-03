DROP DATABASE IF EXISTS personnel_db;
CREATE DATABASE personnel_db;

USE personnel_db;

-- SELECT DATATBASE()

CREATE TABLE department (
  id INT NOT NULL auto_increment primary key,
  department_name VARCHAR(30) NOT NULL
);
-- creates the roles table. provides department_id as the foreign key for department. department id has a one to many relationship with the role table
CREATE TABLE roles (
  id INT NOT NULL auto_increment primary key,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);
-- creates the employee table. provides roles_id as the foreign key for employee table. role id has a one to many relationship with the employee table
CREATE TABLE employee (
  id INT NOT NULL auto_increment primary key,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (roles_id)
  REFERENCES roles(id)
  ON DELETE SET NULL
);
