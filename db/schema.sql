DROP DATABASE IF EXISTS personnel_db;
CREATE DATABASE personnel_db;

USE personnel_db;

-- SELECT DATATBASE()

CREATE TABLE department (
  id INT NOT NULL auto_increment primary key,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL auto_increment primary key,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

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
