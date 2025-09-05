require('dotenv').config();

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    Sequlize_Logging: false,
    secretkey: "secretkey",
    Server_Port: 5050
}