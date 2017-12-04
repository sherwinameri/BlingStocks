const express = require("express");


const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/userRoutes/routes.js");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/BlingStocks",
  {
    useMongoClient: true
  }
);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// below are some route notes from Jerome's white board

// app.get.user(":id/stock/:tickersymbol", function(req, res) {

//   db.User.findOne{_id: req.params.id}, function(user) {
//     user.stocks[req.params.ticker] = req.params.ticker;
//   }

//   db.user{_id: ...} // not completed



// })

// app.put.user(":id/stock/:tickersymbol", function(req, res) {

// //

// })
