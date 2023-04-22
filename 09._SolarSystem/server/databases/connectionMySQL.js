import mysql from "mysql2/promise"

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'planets',
    user: 'username',
    password: 'password'

});

export default connection;