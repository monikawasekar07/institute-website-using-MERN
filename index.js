const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const apiuser = require("./routes/user");
// const apiemployee = require("./routes/employee");
// const apistudent = require("./routes/student");
// const apiproduct = require("./routes/product");
// const apiorder = require("./routes/order");
// const apimovies = require("./routes/movies");
const cors = require('cors');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/DummyCollection")
    .then(() => {
        console.log("connected to mongodb");

    })
    .catch((e) => {
        console.log("error" + e);
    })

app.use(bodyParser.json());
app.use(cors());
app.use("/user", apiuser);
// app.use("/employee",apiemployee);
// app.use("/student",apistudent);
// app.use("/product",apiproduct);
// app.use("/order",apiorder);
// app.use('/movies', apimovies);




app.listen(4300, () => {
    console.log("server running on port no 4300");

})
