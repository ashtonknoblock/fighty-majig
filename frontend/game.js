/////ADD COMENTS 

// HTML elements
const name = document.getElementById("name");
const power = document.getElementById("power");
const createPlayer = document.getElementById("create-player");
const playerList = document.getElementById("player-list");

/* Given an object of characters, fill a playerList with li elements listing player levels */
function createPlayersList(players) {
    while (playerList.lastChild) {
        playerList.removeChild(playerList.lastChild);
    }

    // create an li for each player
    for (key in players) {
        const li = document.createElement("li");
        li.textContent = `${key}: lvl ${players[key].level}`;
        li.textContent = `${key}: pwr ${players[key].power}`;
        playerList.appendChild(li);
    }

    document.body.appendChild(playerList);

}

// Event Listeners

/* Add a new player and then update the list of players */
createPlayer .addEventListener("click", evt => {
    fetch("http://localhost:3000/create/" + name.value + "/" + power.value)
        .then(response => response.json())
        .then(() => fetch("http://localhost:3000/show/players"))
        .then(response => response.json())
        .then(createPlayersList)
});
