import express from "express";
const app = express();

app.use("/room", houseButler);

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter)

function guard(req, res, next){
    console.log("Are you allowed in?");
    if(req.query.name === "Anders"){
        req.myName = "Anders";
        console.log("Yes");
        return next()
    }
    res.send({message: "you are not allowed in"})
}

app.get("/frontdoor", guard ,(req, res) =>{
    res.send({message: `please enter, ${req.myName}`});
});

function houseButler(req, res, next){
    console.log("this way...");
    next()
}

app.get("*", (req, res) => {
    res.send("<h1>404 - NOT FOUND </h1>")
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))