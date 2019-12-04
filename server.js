require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const helper = require('handlebars-helpers');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const flash = require('connect-flash');
var cookieParser = require('cookie-parser');
const cookieSession=require('cookie-session');
const randomstring=require('randomstring');
const handlebars=require('handlebars');
const AddNewUser = require('/AddNewUsers');
const gamebit=require('./enter_game');
const test=require('./test');
var moment = require('moment');
var app = express();

handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

handlebars.registerHelper("sumamount", function(value,value2,value3)
{
   
    return parseFloat(value)+parseFloat(value2)+parseFloat(value3);
});

handlebars.registerHelper("sumBonus", function(value)
{
   
    return parseFloat(value)+parseFloat(value);
});

handlebars.registerHelper("lenght", function(value)
{
   //console.log(value.length);
    return value.length;
});

handlebars.registerHelper('formatTime', function (date, format) {
    var mmnt = moment(date);
    return mmnt.format(format);
});
handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

handlebars.registerHelper('trimString', function(passedString) {
    var theString = passedString.substring(0,2);
    return new handlebars.SafeString(theString)
});
//app.use(cookieParser);

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/',partials:__dirname+'/views/partials/' }));
app.set('view engine', 'hbs');
app.use('/Admin',express.static('Admin'));


app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.set('trust proxy', 1);
app.use(cookieSession({
                    name: 'session'
                    , secret: randomstring.generate()
                    , httpOnly: true
                    , maxAge: 30 * 60 * 1000
                    , secure: false
                    , overwrite: false
              }));

 // app.use(passport.initialize());
  //app.use(passport.session());
  
  // Connect flash
  //app.use(flash());
  
  // Global variables
  // app.use(function(req, res, next) {
  //   res.locals.success_msg = req.flash('success_msg');
  //   res.locals.error_msg = req.flash('error_msg');
  //   res.locals.error = req.flash('error');
  //   next();
  // });
  


app.listen(process.env.PORT||3000, () => {
    console.log('Express server started at port : 3000');
});
Plays


app.use('/api/registration',AddNewUser);
app.use('/api/enter_game',gamebit);
app.use('/test',test);






app.use('/test',test);




