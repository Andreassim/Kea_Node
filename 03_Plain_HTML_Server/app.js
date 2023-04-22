const express = require('express');
const tankUtil = require('./util/tanks.js');
const guardUtil = require('./util/guards/guards.js');
const { getTanks, addTank } = require('./util/tanks.js');
const tankRouter = require("./routers/pageRouter.js")
const apiRouter = require("./routers/apiRouter.js")

const app = express();
let visitorCount = 0;

app.use(express.static("public"));
app.use("/", tankRouter);
app.use("/api", apiRouter);


const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
       return;
    }
    console.log('hello from port', PORT);
});
