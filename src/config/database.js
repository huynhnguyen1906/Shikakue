const mysql = require("mysql2/promise")
require("dotenv").config()

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
const connection = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	ssl: { rejectUnauthorized: process.env.DB_SSL },
	connectionLimit: 10,
	queueLimit: 0,
	charset: "utf8mb4",
})

module.exports = connection
