const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
var userschema = new mongoose.Schema({
     username:String,
     playtime:String,
     mobile:{
         type:String,
         unique:true
     },
     email:String, 
     dpercentise:String, 
     image_str:String ,
     referral_code:String,
     referral_codeby:String,
     facebookid:String,
     userid:String,
     gender:String,
     custom:String,
     custom2:String,
     custom3:String,
     custom4:String,
     custom5:String,
     password:String, 
     amount:Number,
    totalamount:Number,
    UserID:String,
    FirstName:String,
    LastName:String,
    DataRegistration:{
        type:Date,
        default:Date.now
    }, 
    LastActivity:String,
    wallet:{
        Bonus_Cash:{
          type: SchemaTypes.Double
        },
        Deposit_Cash:{
            type: SchemaTypes.Double
        },
        Wining_Cash:{
            type: SchemaTypes.Double
        },
        LastActivity:Date,
        },
     Transcation:[{
        Amount:{
            type: SchemaTypes.Double
        },
        PayId:String,
        paystatus:String,
        status:Number,
        pay_date:{
            type:Date,
            default:Date.now
        },
        pay_by:String
     }],   
    Email:String, 
   
    PlayFabUserID:String, 
    PlayFabDisplayName:String,
    CountryCode:String,
    usertype:String,
    percentise: Number, 
    companyId:String, 
    status: String,
    country: String,
    city: String,
    zip: String,
    address: String,
   
    
  
});
mongoose.model('tblregistration', userschema);
