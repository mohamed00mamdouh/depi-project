const mongoose= require('../configuration/dbConfig')

const userschema= new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const User=mongoose.model('User',userschema)

module.exports=User
