//const app = require("express")();

const express = require("express");
const app = express();

app.listen(8080);
app.use(express.json())

        //HTTP method
        // get takes a endpoint and a callback function as arguments
app.get("/", (req, res) => { res.send({ message: "Our first route" })});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({ message: `People have spun the bicycle ${bicycleSpins} times`});
})

app.get("/kickthedinosaur", (req, res) =>{
    res.send({message: "Dinosaur says ow ow ow"});
});

app.get("/about" , (req, res) => {
    res.send(`
        <h1>About</h1>
        <h3>this is my about page.</h3>
    `);
});

app.get("/bat", (req, res) => {
    console.log(req.query);
    res.send({
        message: `the bat is ${req.query.adjective}`
    })    
});

app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({
        message: `the bottle is ${req.params.bottleSize}`
    })
});

app.post("/package", (req, res) => {
    console.log(req.body);
    res.send({message: req.body})
}); 
 