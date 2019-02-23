var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

// mongoose.connect('mongodb://readwriteuser_1:pixxzzoo@pixxzzoo-shard-00-00-ln0yh.mongodb.net:27017,pixxzzoo-shard-00-01-ln0yh.mongodb.net:27017,pixxzzoo-shard-00-02-ln0yh.mongodb.net:27017/test?ssl=true&replicaSet=Pixxzzoo-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});

mongoose.connect("mongodb://harsh:password1@ds349175.mlab.com:49175/pixxzzoo", {useNewUrlParser: true});

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

var Contact = mongoose.model("Contact", contactSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/public/index.html"));
});

app.post("/", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    var newContact = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    Contact.create(newContact, (err, newlyCreated) => {
        if(err) {
            res.redirect("/");
        } else {
            res.redirect("/");
            
        }
    })
});

// app.listen(3000, () => {
//     console.log("The PIXXZZOO server has started!! at 3000");
// })
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running");
});

