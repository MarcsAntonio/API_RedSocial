const mongoose = require("mongoose");

const url1 ="mongodb+srv://mtc:1234@apiredsocial.glisveq.mongodb.net/";
const url2 = "mongodb+srv://mtc:1234@apiredsocial.glisveq.mongodb.net/?retryWrites=true&w=majority";

const connection = async() => {
    try {
        await mongoose.connect(url1);
        console.log("Successfully connected to MongoDB Atlas");
    } catch (error) {   
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos!!")
    }
};

module.exports = {
    connection,
}