fetch("/api/visitors").then(response => response.json()).then(result => {
    updateVisitorCount(result.data);
})

function checkIn(){
    fetch("/api/visitors", {method: "PUT"}).then(response => response.json()).then(result => {
        updateVisitorCount(result.data);
    })
}

function updateVisitorCount(data){
    const countDiv = document.getElementById("visitor-count");
    countDiv.innerText = data;
}