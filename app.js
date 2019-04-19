let express = require("express");
let app = express();

app.get("/", function(req, res) {
    res.send("this will be the landing page");

});





let port = process.env.port || 3000;

app.listen(port, process.env.IP, function() {
    console.log(port);
});