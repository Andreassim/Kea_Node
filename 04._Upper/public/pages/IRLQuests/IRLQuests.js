function fetchQuest(activityQueryString=""){
    fetch(`https://www.boredapi.com/api/activity${activityQueryString}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById("quest").innerText = result.activity;
    });
}

function getNewQuest(){
    const selection = document.getElementById("quest-type-selector");
    fetchQuest(`?type=${selection.value}`)
}

document.getElementById("get-new-quest-button").addEventListener("click", getNewQuest)
