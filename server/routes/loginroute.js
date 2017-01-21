import express from "express";
import Validator from "validator";
import isEmpty from 'lodash/isEmpty';

let router =express.Router();

function validateInput(data){
    let errors={};     
    if(Validator.isEmpty(data.username)){
        errors.username='Username is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password='password is required';
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };
}

router.post('/',(req,res)=>{   
    setTimeout(()=>{
        const {errors,isValid}=validateInput(req.body);
        if(!isValid){
           return res.status(400).json(errors);
        } 
        else{
           return res.status(200).json({Id:1,username:"aditya"});
        }    
    },200);
});

export default router;