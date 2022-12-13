const express = require("express");
var path = require('path');
const mongoose = require("mongoose");
const { MONGO_DB_STRING } = require("./utils/constants");
const routes = require("./Routes/books")
const adminRoute = require("./Routes/AdminRoute")
const bodyParser = require('body-parser')
mongoose.connect(MONGO_DB_STRING);
const db = mongoose.connection;
db.on('error', (error) => console.error("db error" + error));
db.once('open', () => console.log("database connection successful"));


const app = express();
app.use(express.json())
app.use(bodyParser())
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", routes);
app.use("/admin", adminRoute);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

