require('dotenv').config();
const mongoose = require('mongoose');

const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DBNAME;

const URI = `mongodb+srv://${user}:${password}@mycluster.o5koa.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Conectado a mongodb"))
    .catch((e) => console.log(e))