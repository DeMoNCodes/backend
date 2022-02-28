import  Mongoose  from "mongoose";

const userSchema  =  Mongoose.Schema({
    _id: { type: Mongoose.Schema.Types.ObjectId, required: true, default: function () { return new Mongoose.Types.ObjectId() } },
    fullname:{type:String},
   password:{type:String},
   email:{type:String,unique:true}
},{timestamps:true})


export default Mongoose.model("user",userSchema);