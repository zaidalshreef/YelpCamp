let express = require("express");
let app = express();

let campground = [
    { name: "nice", image: "https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false" },
    { name: "amazing", image: "https://threerivers-drupal.s3.us-east-2.amazonaws.com/public/2017-03/CL_camping_Billboard_01.jpg" },
    { name: "trees", image: "https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg" },
];

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");

});

app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", { campgrounds: campground })
});



let port = process.env.port || 3000;

app.listen(port, process.env.IP, function() {
    console.log(port);
});