const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const tblregistration   = mongoose.model('tblregistration');
var response = require('../models/response');




router.post('/', (req, res) => {
 
    tblregistration.findOne({"mobile":req.body.mobile},(err, docs) => {
       // var mobile=req.body.mobile;
        if (err) {
             response.message=err;
             response.status=404;
             response.data={};
             res.json(response);
         }
         else if(docs)
         {
            response.message="User already exist";
             response.status=404;
             response.data=docs;
             res.json(response);  
         }
         else {

              
             
        var users = new tblregistration();
       if(req.body.referral_codeby){
        var  strin = req.body.referral_codeby.substring(0, 7);
              
        if(strin=="WINDIST")
        {
          users.usertype="D";
          users.companyId=req.body.referral_code;
          users.dpercentise=15;
        }
        else
        {
          users.usertype="N";
          users.companyId=req.body.referral_codeby;
        }
      }
      else{
        users.usertype="N";
        users.companyId='outsite';
      }
            users.username=req.body.FirstName+' '+ req.body.LastName;
            users.playtime="";
            users.mobile=req.body.mobile;
            users.email=req.body.email;
           // users.dpercentise=15;
            users.image_str="";
            users.referral_code=req.body.referral_code;
            users.referral_codeby=req.body.referral_codeby;
            users.facebookid=req.body.facebookid;
            users.userid=req.body.userid;
            users.gender=req.body.gender;
            users.custom=req.body.custom;
            users.custom2=req.body.custom2;
            users.custom3=req.body.custom3;
            users.custom4=req.body.custom4;
            users.custom5=req.body.custom5;
            users.password=req.body.password;
            users.amount=req.body.amount;
           users.totalamount=req.body.totalamount;
           users.UserID=req.body.UserID;
           users.FirstName=req.body.FirstName;
           users.LastName=req.body.LastName;
          // users.DataRegistration=req.body.DataRegistration;
           users.LastActivity=req.body.LastActivity;
           users.wallet.Bonus_Cash=0.0;
           users.wallet.Deposit_Cash=0.0;
           users.wallet.Wining_Cash=0.0;
           users.wallet.LastActivity=Date.now();
           users.Email=req.body.Email;
           users.PlayFabUserID=req.body.PlayFabUserID;
           users.PlayFabDisplayName=req.body.PlayFabDisplayName;
           users.CountryCode=req.body.CountryCode;
            users.percentise="70";
          
           users.status=req.body.status;
           users.country=req.body.country;
           users.city=req.body.city;
           users.zip=req.body.zip;
           users.address=req.body.address;
           //res.json(users);  
           
           users.save((err, doc) => {
            if (!err)
            {
            response.message="Successfully registered users";
            response.status=200;
            response.data={};
            res.json(response);  
            }
         else{
            response.message="User already exist";
            response.status=404;
            response.data={};
            res.json(response);  
             }
                
           });
         }
    });
 
 
 
    
   
 });



module.exports = router;
