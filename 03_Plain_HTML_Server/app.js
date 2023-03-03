const express = require('express');
const tankUtil = require('./util/tanks.js');
const guardUtil = require('./util/guards/guards.js');
const { getTanks, addTank } = require('./util/tanks.js');

const app = express();
app.use(express.static("public"));

let visitorCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/public/frontpage/frontpage.html');
});
app.get("/tanks", (req, res) => {
    res.sendFile(__dirname+'/public/tanks/tanks.html');
});
app.get("/guards", (req, res) => {
    res.sendFile(__dirname+'/public/guards/guards.html');
});
app.get("/visitors", (req, res) => {
    res.sendFile(__dirname+'/public/visitors/visitors.html');
});


// API //

app.get("/api/tanks", (req, res) => {
    res.send({data: tanks});
});

app.get("/api/visitors", (req, res) => {
    res.send({data: visitorCount})
});

app.put("/api/visitors", (req, res) => {
    res.send({data: ++visitorCount})
});

app.get("/api/guards", (req, res) => {
    res.send({data: guardUtil.getGuards()})
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
       return;
    }
    console.log('hello from port', PORT);
});
