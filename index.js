const express = require('express');
const bodyParser = require('body-parser');
const application = express();
const ApiRouter = require('./routes/api');
//const app = require('./app');

require('./data/db');

application.use(express.json());
application.use(express.urlencoded({ extended: true}));
application.use("/apipath", ApiRouter); //la direccion que contenga /api lo va a gestionar la ruta

application.listen(2323, ()=> {
console.log("App Running On Port: 🏃‍♂️ 2323");
});