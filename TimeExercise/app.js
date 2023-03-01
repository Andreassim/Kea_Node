const express = require("express");
const app = express();

app.use(express.static("public"));


const lastGreatPrayerDay = new Date("2023-05-05");

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/public/frontpage/frontpage.html');
});


app.get("/api/time" ,(req, res) => {
    res.send({data: lastGreatPrayerDay})
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if(error){
        console.log(error);
       return;
    }
    console.log('Running on port', PORT);
});
