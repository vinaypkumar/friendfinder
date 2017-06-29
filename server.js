var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/routes")(app);
require("./app/routing/api")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

