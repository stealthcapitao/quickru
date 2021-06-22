var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var order = require("../models/order");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

// show register form
router.get("/register", function(req, res){
   res.render("register", {page: 'register'}); 
});



//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar: req.body.avatar,
        phone: req.body.phone,
        info: req.body.info,
        who: req.body.who
      });
      

    User.register(newUser, req.body.password, function(err, user){
      if(err){
             console.log(err);
             return res.render("register", {error: err.message});
         } else if (req.body.email == "" || req.body.firstname == "" || req.body.lastname == "" || req.body.username == "" || req.body.phone == "" || req.body.info == "" ){
           console.log(err);
             return res.render("register", {error: "Please fill all the fields"});
         }else{
           passport.authenticate("local")(req, res, function(){
            req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
            res.redirect("/orders"); 
         });
       }
     });
 });

// USER PROFILE
router.get("/users/:id", function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if(err) {
      req.flash("error", "Что-то пошло не так.");
      return res.redirect("/");
    }
    order.find().where('author.id').equals(foundUser._id).exec(function(err, orders) {
      if(err) {
        req.flash("error", "Что-то пошло не так.");
        return res.redirect("/");
      }
      res.render("users/show", {user: foundUser, orders: orders});
    })
  });
});


 router.get("/users/:id/edit", middleware.isLoggedIn, function(req, res){
  //find the orders with provided ID
  User.findById(req.params.id).populate("user").exec(function(err, founduser){
      if(err){
          console.log(err);
      } else {
          //render show template with that order
          res.render("users/edit", {user: founduser});
      }
  });
});

router.put("/users/:id", function(req, res){
    var newData = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      avatar: req.body.avatar,
      phone: req.body.phone,
      info: req.body.info};
    User.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, user){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/orders");
        }
    });
  });


//show login form
router.get("/login", function(req, res){
   res.render("login", {page: 'login'}); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/orders",
        failureRedirect: "/login",
        failureFlash: true,
        successFlash: 'Добро пожаловать на QuickRu'
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "До встречи!");
   res.redirect("/orders");
});



router.get("/freelancers", function(req, res){
  if(req.query.search && req.xhr) {
      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
      User.find({name: regex}, function(err, allorders){
         if(err){
            console.log(err);
         } else {
            res.status(200).json(allorders);
         }
      });
  } else {
      User.find({}, function(err, allorders){
         if(err){
             console.log(err);
         } else {
            if(req.xhr) {
              res.json(allorders);
            } else {
              res.render("freelancers",{users: allorders, page: 'freelancers'});
            }
         }
      });
  }
});


router.get("/:id/give25", function(req, res){
  //find the orders with provided ID
  User.findById(req.params.id, (err,user) => {
    if(err){
      req.flash("error", err.message);
    }else{  
        user.flr = user.flr + 25;
        user.save((error, updatedUser) => {
          req.flash("success","Задание выполнено! Удалите ваше задание. ");
          res.redirect("/orders");
        });      
    }
})
});

router.get("/policy", function(req, res){
  res.render("policy");
});

router.get("/Aboutus", function(req, res){
  res.render("Aboutus");
});

router.get("/Customer", function(req, res){
  res.render("Customer");
});

module.exports = router;

