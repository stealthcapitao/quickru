var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    cookieParser = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    flash        = require("connect-flash"),
    order  = require("./models/order"),
    User        = require("./models/user"),
    session = require("express-session"),
    methodOverride = require("method-override");
    


//requiring routes
var orderRoutes = require("./routes/orders"),
    indexRoutes      = require("./routes/index")
    
    mongoose
    .connect('mongodb+srv://zxcuser:toyota123@cluster0.ldyyp.mongodb.net/quickru?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    })
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
//require moment
app.locals.moment = require('moment');
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "3h2WJvH7j5F7pJx4A64LrT2W0b",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});


app.use("/", indexRoutes);
app.use("/orders", orderRoutes);


app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0');