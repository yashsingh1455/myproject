const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const gamebit = mongoose.model('gamebits');
const tblregistration   = mongoose.model('tblregistration');
var response = require('../models/response');
var gameclass=require('../models/Clsgamedb');
var gameobject=require('../models/entergameobjects');

 router.post("/",(req,res)=>{
 if(req.body.bitamount=="0")
          {

          
           
  
       
           var game=new gamebit();
           game.game_name=req.body.game_name;
           game.game_room=req.body.game_room;
           game.mobile=req.body.mobile;
           game.user_status="Active";
           game.game_status=1;
         //  game.game_date=Date.now;
           game.bitamount=req.body.bitamount;
           game.winamount=0;
           game.LastActivity=Date.now();
           game.save((err, doc) => {
            if (!err)
            {
             tblregistration.findOneAndUpdate({"mobile":req.body.mobile}, 
                {      
               $push:{"Transcation":{"Amount":req.body.bitamount,"PayId":req.body.game_name,"paystatus":"-","status":"1","pay_by":req.body.game_name}}
                    
              },{new:true},(errer, result)=>{
            
                   if(!errer)
                   {



                response.message="successfully join game";
                response.status=200;
                response.data=result.wallet;
                res.json(response); 
                } 
                else{
                 response.message=err;
                 response.status=404;
                 response.data=result.wallet;
                 res.json(response);  
                }
            
            });
			}
		   })
		      }
        
        
        }
   });


  
});
module.exports = router;
