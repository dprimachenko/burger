let express = require("express");
var app = express();
var hndlbrs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var routes = require("./controllers/burgers_controller.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", hndlbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
