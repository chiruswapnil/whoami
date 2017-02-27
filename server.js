var express = require("express");
var app = express();
app.get("/", function(req, res){
    var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers["accept-language"].split(",");
    language = language[0];
    var software = req.headers['user-agent'];
    software = software.match(/\((.*)\)/)[1];
    var whoami = {
        "ipaddress" : ipaddress,
        "language" : language,
        "software" : software
    };
    console.log(JSON.stringify(whoami));
    res.send(JSON.stringify(whoami));
});

app.listen(8080, function(){
    console.log("Server started at port 8080.");
});