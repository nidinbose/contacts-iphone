import mongoose, { Mongoose, model } from "mongoose";

const contactsSchema= new mongoose.Schema({
   
    Fname:{type:String},
    Lname:{type:String},
    email:{type:String},
    phone:{type:String},
    photo:{type:String},
    dob:{type:String},
    alternatenumber:{type:String}
 
})

export default mongoose.model.contacts || mongoose.model('contact',contactsSchema)