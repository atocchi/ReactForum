const fireDB = require('./firebase');
const express = require('express');
const cors = require('cors');
const app = express();

//set PORT
const PORT = process.env.PORT || 8080;

let arr = [];

//pusher function, allows callbacks
function pusher(x) {
    arr.push(x);
    rArr = arr.reverse();
};








//allows Parsing JSON data and body.data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use cors
app.use(cors());


fireDB.selectAll(function (data) {
    pusher(data)
})


//Pulls info from Firbase and pushes it to black array (will not load of first go)


app.get("/api/main", cors(), function (req, res) {
    res.json({
        "posts": rArr
    });
});

app.post("/api/main", function (req, res) {
    console.log("Hey a Post!")
    var newPost = req.body;
    console.log(req.body)
    fireDB.pusher(newPost);
    res.json(arr);
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});