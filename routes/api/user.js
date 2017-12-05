const router = require("express").Router();
const userController = require("../../controllers/userController");

// SEVEN ROUTES (as of 3pm Friday, 12/1)

// get back all users
router.get("/users", function(req, res){
  // call to DB to get all users
  userController.findAll(req, res)
  // .then(function(users) {
  // 	res.json(users);
  // });
  console.log("Farley Bob Marley");
  res.send("All users!");
})

// get back ONE user
router.get("/users/:id", function(req, res){
  // call to DB to get ONE users
  userController.findById(req, res)
  .then(function(users) {
  	res.json(users);
  });
  res.send("ONE user");
})

// create a user
router.post("/users/:id", function(req, res){
	 userController.create({
      username: req.body.activityName,
      password: req.body.description
    })
      .then(function (users) {
        res.json(users);
      });
});

// remove a user
router.delete("/users/:id", function(req, res){
	userController.remove({})
    	.then(function (users) {
        res.json(users);
    });
})

// view a user's saved stocks
router.get("/users/:id/stocks", function(req, res){
	userController.findAll(req, res)
	.then(function(users) {
		res.json(users);
	});
	res.send("saved stocks");
})

// the user saves a stock
router.post("/users/:id/stocks", function(req, res){

})

// the user removes a stock
router.delete("/users/:id/stocks/:id", function(req, res){
	userController.remove({})
      .then(function (users) {
        res.json(users);
      });

})





  // .post(stockController.create);

//   router.post("/", function(req,res){
//     stockController.create(req.body)
//   })
//   .get(stockController.findById);

// // get and save stocks
// router.route("/dashboard")
//   .get(stockController.findAll);
//   .post(stockController.create);

// // view and remove saved stocks
// router.route("/saved")
//   .get(stockController.findAll);
//   .delete(stockController.remove);


// // router.route("/saved")
// //   .post(stockController.create);



module.exports = router;