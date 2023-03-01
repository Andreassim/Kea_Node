const express = require("express");
const app = express();

app.use(express.static("public"));


const lastGreatPrayerDay = new Date("2023-05-05");

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname+'/public/frontpage/frontpage.html');
});


app.get("/api/time" ,(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({data: lastGreatPrayerDay});
});


const PORT = 80;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
       return;
    }
    console.log('Running on port', PORT);
});
