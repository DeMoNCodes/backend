import  Mongoose  from "mongoose";

const jobSchema  =  Mongoose.Schema({
    _id: { type: Mongoose.Schema.Types.ObjectId, required: true, default: function () { return new Mongoose.Types.ObjectId() } },
   status:{type:Number},
   head:{type:String},
   content:{type:String},
   user:{type: Mongoose.Schema.Types.ObjectId,ref:"user"}
},{timestamps:true})


export default Mongoose.model("job",jobSchema);



