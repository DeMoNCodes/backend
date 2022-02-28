import usermodel from "../../model/usermodel";
import jwt from "jsonwebtoken";
import jobmodel from "../../model/jobmodel";

export const login = async(req,res,next)=>{
    try {
        let doc  = await usermodel.findOne(req.body);
        if(doc){
            let token = await jwt.sign({_id:doc._id},"hijojkjbhubhj hbkuojhkjnokbjn")
            res.status(200).json({status:true,token});
            return
        }
        res.status(200).json({status:false,message:"Invalid username and password"});
        return;
    } catch (error) {
        next(error);
    }   
}


export const register = async(req,res,next)=>{
    try {
        let doc  = await new usermodel(req.body).save();
        if(doc){
            let token = await jwt.sign({_id:doc._id},"hijojkjbhubhj hbkuojhkjnokbjn")
            res.status(200).json({status:true,token});
            return
        }
        res.status(200).json({status:false,message:"Invalid username and password"});
        return;
    } catch (error) {
        next(error);
    }   
}


export const getTask = async(req,res,next)=>{
    try {
        let status = req.body.status;
        let doc  = await  jobmodel.find({status}).populate("user","-password");
        res.status(200).json({status:true,doc});
        
       
    } catch (error) {
        next(error);
    }   
}

export const createATask = async(req,res,next)=>{
    try {
        let status = req.body.status;
        let user =  jwt.verify(req.headers.auth ,"hijojkjbhubhj hbkuojhkjnokbjn");
        
        req.body.user = user._id; 
        let doc  = await new jobmodel(req.body).save();
        res.status(200).json({status:true,doc});
    } catch (error) {
        next(error);
    }  
}

export const updateATask = async(req,res,next)=>{
    try {
        let status = req.body.status;
        // let user =  jwt.verify(req.header.auth ,"hijojkjbhubhj hbkuojhkjnokbjn");
        // req.body.user = user._id; 
        let _id = req.body._id;
        delete req.body._id;
        console.log(req.body);
        let doc  = await jobmodel.updateOne({_id},{$set:{head:req.body.head,content:req.body.content,status:req.body.status}});
        res.status(200).json({status:true,doc});
    } catch (error) {
        next(error);
    }  
}