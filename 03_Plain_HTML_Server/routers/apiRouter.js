const { router } = require("express");
const router = Router();

// API //

app.get("/tanks", (req, res) => {
    res.send({data: tankUtil.getTanks()});
});

app.get("/visitors", (req, res) => {
    res.send({data: visitorCount})
});

app.put("/visitors", (req, res) => {
    res.send({data: ++visitorCount})
});

//redirect
app.get("/guards", (req, res) => {
    console.log(req.query);
    if(req.query.passport === 'theskyisblue'){
        res.redirect('/api/tanks')
    }
    res.send({ message : "you are not allowed to see the tanks, give us the secret in the query string with the key passport"})
});

export default router;
