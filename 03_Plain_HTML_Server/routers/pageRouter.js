const { router } = require("express");
const router = router();


app.get("/", (req, res) => {
    res.sendFile(__dirname+'/public/frontpage/frontpage.html');
});

router.get("/tanks", (req, res) => {
    res.sendFile(__dirname+'/public/tanks/tanks.html');
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname+'/public/visitors/visitors.html');
});

export default router;
