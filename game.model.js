const mongoose=require('mongoose');

var gamebitSchema=new mongoose.Schema({
  
    bitamount:Number,
    winamount:Number,
    mobile:String,
     
   
    game_name:String,
     
    game_room:{
         type:String
     }, 
     user_status:{
         type:String,
      
     }, 
     game_status:{
       type:Number
     } ,
     game_date:{
         type:Date,
         default:Date.now
     },  
     LastActivity:{
         type:Date
        // default:Date.now
     } 
	
});
mongoose.model('gamebits',gamebitSchema)
