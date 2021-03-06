var express = require("express");
var path = require("path");


var favicon = require('serve-favicon');




var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(favicon(__dirname + '/favicon.ico'));




app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(routes);
app.use(express.static(__dirname + '/public'));

app.listen(app.get("port"), function () {
    console.log("Server has started on port " + app.get("port"))
})
