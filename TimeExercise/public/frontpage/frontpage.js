getGreatPrayerDay()

let countdown;

function getGreatPrayerDay(){
    fetch("/api/time").then(response => response.json()).then(
        result => {
            const GPD = new Date(result.data).getTime();
            const currentTime = new Date().getTime();
            const timeUntilGPD = GPD-currentTime;
            startCounter(timeUntilGPD);
        }
    );
};

function startCounter(count){
    let time = count;
    const daysDiv = document.getElementById("days");
    const hoursDiv = document.getElementById("hours");
    const minutesDiv = document.getElementById("minutes");
    const secondsDiv = document.getElementById("seconds");
    const untilOrSinceDiv = document.getElementById("untilOrSince");
    countdown = setInterval(() => {
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));        
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));        
        let seconds = Math.floor((time % (1000 * 60)) / 1000);        

        untilOrSinceDiv.innerText = "Time until last Great Prayer Day:";
        if(time < 0){
            untilOrSinceDiv.innerText = "Time since last Great Prayer Day:";
            days = days * -1;
            hours = hours * -1;
            minutes = minutes * -1;
            seconds = seconds * -1;
        }

        daysDiv.innerText = `${days}`;
        hoursDiv.innerText = `${hours}`;
        minutesDiv.innerText = `${minutes}`;
        secondsDiv.innerText = `${seconds}`;
        time = time - 1000;

    }, 1000)
}