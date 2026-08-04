import mongoose from "mongoose";


const userSchema = new mongoose.Schema(

{

name:{
type:String,
trim:true
},


organizationName:{
type:String,
trim:true
},


contactPerson:{
type:String,
trim:true
},


email:{
type:String,
required:true,
unique:true,
lowercase:true
},


phone:{
type:String,
required:true
},


address:{
type:String
},


city:{
type:String
},


password:{
type:String,
required:true
},


role:{
type:String,
enum:[
"victim",
"rescue",
"admin"
],
required:true
},


teamSize:{
type:Number
},


serviceArea:{
type:String
},


emergencyCategories:{
type:[String],
default:[]
},


verificationStatus:{
type:String,
enum:[
"pending",
"approved",
"rejected"
],
default:function(){

return this.role==="rescue"
?
"pending"
:
"approved";

}

} ,

resetPasswordToken: {
    type: String
},

resetPasswordExpires: {
    type: Date
}


},

{
timestamps:true
}

);


const User =
mongoose.model(
"User",
userSchema
);


export default User;