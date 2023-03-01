function getTanks(){
    const tanksdata = fetch("/api/tanks").then(response => response.json()).then(
        result => {
            tanksDiv = document.getElementById("tanks");
            result.data.forEach(tank => {
                const listElement = document.createElement("p");
                listElement.innerText = tank.name
                tanksDiv.appendChild(listElement);
            });
        }
    )
};

getTanks(); 