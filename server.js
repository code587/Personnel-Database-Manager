const inquirer = require('inquirer');

const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
     
      password: '',
      database: 'personnel_db'
    },
    console.log(`Connected to the personnel_db database.`)
  );