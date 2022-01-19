DROP DATABASE IF EXISTS personnel_db;
CREATE DATABASE personnel_db;

USE personnel_db;

CREATE TABLE department (
  id INT NOT NULL primary key auto_increment,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL  primary key auto_increment,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL auto_increment primary key,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NULL,
  manager_id INT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
);
