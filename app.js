const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay  ();
var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

let day = today.toLocaleDateString("en-US", option);
    
res.render('list', { kindOfDay: day, newListItem: items});
});

app.post("/", function(req, res){
    var item = req.body.newItem ;
    items.push(item);
    res.redirect("/");
})


app.listen(3000, function () {
    console.log("server is listening on port 3000")
})