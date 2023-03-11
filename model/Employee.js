const Mongoose = require("mongoose")

//Mention the schema
const employeeSchema = new Mongoose.Schema(
    {
        name : String,
        location : String,
        position : String,
        salary : Number
    }
)

//Creating the model
const employeeModel = Mongoose.model(
    "Employees",employeeSchema
)

module.exports = {employeeModel}