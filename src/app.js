const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");
connectDb().then(() =>{
    console.log("Database connection is successful");
    app.listen(7777,() => {
    console.log("Server is listening on port 7777....");
})
}).catch(err =>{
    console.log("Database connection is failed- "+err.log);
});

app.post("/signup",async (req,res) => {
    //creating a new instance of User Model
    const user = new User({
        firstName: "Tapan",
        lastName: "Kalapahad",
        emailId: "tapankalapahad@gmail.com",
        password: "tapan@123"
    });

    try{
        await user.save();
        res.send("User saved successfully.")
    }catch(err){
        res.status(400).send("Error saving user - "+ err.message);
    }
});