# E-Commerce-Back-End

## Description
This application builds a basic e-commerce site that works in the backend that uses Express.js and Sequilize to interact with a MySQL database.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation
Download code from the GitHub repository. Have Node.js installed. Link to Node.js downloads: https://nodejs.dev/en/download/. In a terminal input npm init -y. Then in the terminal install express, dotenv, sequilize, and mysql2 by inputting npm install.

## Usage
First the user has to enter mysql information in the .env.EXAMPLE file and change it's name to just .env. This will allow the application to connect with the mysql server. 

The user will then need to source it's database. In the terminal type in mysql -u {username} -p. Enter password and then type in source db/schema.sql and then exit. The database name is ecommerce_db. To create the database tables and preset information input in the terminal node seeds. The next step is to input npm start, this will start the server on localhost:3001. Requests will be ready to use once the console says "App listening on port 3001". On the appliction Insomina or other applications that allow the user to see the ressults of server requests, the user can test the get, post, put, and delete methods for each table. If thre request was sucessful the user will see a json repsonse with either the get requests, a 1, or a message saying it coult not find the data. It will also show the sql statements will show in the console.


Table structure for the database:
![table structure](./assets/images/table-structure.PNG)

Video demonstration:

[![video demonstration](./assets/images/video-static.PNG)](https://drive.google.com/file/d/1mZPVZDmI0Z_E_TaL6zaMmmXEWZTsT9IU/view)

## Contributing
Author: Xandromus from the Rice Coding Bootcamp

April 28, 2020

Source code: JavaScript
https://github.com/coding-boot-camp/fantastic-umbrella/tree/main

Packages used:

 Express: https://www.npmjs.com/package/express

 dotenv: https://www.npmjs.com/package/dotenv

 sequelize: https://www.npmjs.com/package/sequelize

 mysql2: https://www.npmjs.com/package/mysql2

## Contact
GitHub profile: https://github.com/CYMcolor

