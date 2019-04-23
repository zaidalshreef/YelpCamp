const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zaid:987654321@yelpcamp-ekagq.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

const campschema = mongoose.Schema({
    name: String,
    image: String,
});
const camp = mongoose.model('camp', campschema);



app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('landing');
});
app.get('/campgrounds', (req, res) => {

    camp.find({}, (err, allcamp) => {
        if (err) {
            console.log("error");
        } else {
            res.render('campgrounds', { campgrounds: allcamp });

        }
    });
});
app.post('/campgrounds', (req, res) => {
    camp.create(req.body);
    res.redirect('/campgrounds');
});
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});


app.listen(3000, () => {
    console.log(3000);
});