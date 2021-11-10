require('dotenv').config();
const database = process.env.DB;
const user = process.env.USER;
const password = process.env.PASS;

const Sequelize = require('sequelize');
const PilotoModel = require('../piloto');

const sequelize = new Sequelize(database, user, password,{
    host: 'remotemysql.com',
    dialect: 'mysql'
});
// llamo el objeto creado + libreria
const Pilot = PilotoModel(sequelize, Sequelize); 

try {
    if (
        sequelize.sync({force: false}).then(() => {
            console.log('<------------DataBase Created--------------->');
        }))
        {
            console.log('<------------DataBase Connected--------------->');
        } else {
        throw new Error ('<------------DataBase Fail--------------->');
    }
} catch (error) {
    console.log(error.message);
}


module.exports = {
    Pilot
}

