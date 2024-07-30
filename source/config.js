const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login");

connect.then(() => {
    console.log("Database Connect Successfully");
})
.catch(() => {
    console.log("DataBase cannot be connect");
})

// schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true   
    }
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;