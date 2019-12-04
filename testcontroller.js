const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const gamebit = mongoose.model('gamebits');
const tblregistration   = mongoose.model('tblregistration');


router.post("/",(req,res)=>{


var  UserList=[];

 gamebit.find({"game_room":req.body.game_room,"game_status":"1"},(err,result)=>{
    if(err)
    {
      res.json(err);
    }

    else{
     for(i=0;i<result.length;i++){
       tblregistration.findOne({"mobile":result[i].mobile},(errer,user)=>{
          if(user)
            {
            if(user.usertype=="D")
                 {

                UserList.push(user);
                 }

                 else if(user.usertype=="N")
                 {
                  if (user.companyId != "outsite")
                  {
                  tblregistration.findOne({"referral_code":user.referral_codeby},(err,use)=>{
                       if(use)
                       {
                        UserList.push(use);


                       }
                    else
                    {
                      console.log(err);
                    }


                  });
                   }

                 }
                 else{
                  tblregistration.findOne({"companyId":user.companyId},(err,u)=>{
                   distpersent+=distpersent+u.dpercentise;

                   UserList.push(u);
                });
                }

              }
            });
          }


        }
    });
console.log(UserList);

  res.json(UserList);
  
  });


         
          

  


            
      
  









    


module.exports=router;
