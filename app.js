let express = require("express");
let app = express();
let bodyParser = require("body-parser")


let campground = [
    { name: "nice", image: "https://res.cloudinary.com/yelpcampcloud/image/upload/v1511259835/fobqrkzouhko776owgj4.jpg" },
    { name: "amazing campground", image: "https://threerivers-drupal.s3.us-east-2.amazonaws.com/public/2017-03/CL_camping_Billboard_01.jpg" },
    { name: "nice", image: "https://res.cloudinary.com/yelpcampcloud/image/upload/v1511259835/fobqrkzouhko776owgj4.jpg" },
    { name: "amazing", image: "https://threerivers-drupal.s3.us-east-2.amazonaws.com/public/2017-03/CL_camping_Billboard_01.jpg" },
    { name: "trees green", image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg" },
    { name: "nice trees", image: "https://res.cloudinary.com/yelpcampcloud/image/upload/v1511259835/fobqrkzouhko776owgj4.jpg" },
    { name: "trees", image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg" },
    { name: "nice campgrounds", image: "https://res.cloudinary.com/yelpcampcloud/image/upload/v1511259835/fobqrkzouhko776owgj4.jpg" },

];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");

});

app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", { campgrounds: campground })
});
app.post("/campgrounds", function(req, res) {
    let campg = req.body;
    campground.push(campg);
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new", function(req, res) {

    res.render("new");
});

let port = process.env.port || 3000;

app.listen(port, process.env.IP, function() {
    console.log(port);
});