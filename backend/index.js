// module imports
const express = require("express");
const cors = require("cors");

// our application server
const app = express();
app.use(cors());

// persistent game state to be updated by api endpoints
const game = {
    players: {}
};

/* Given a player name, add that player to the game state with an iniital level of 1 */
app.get("/create/:player", (req, res) => {
    game.players[req.params.player] = {
        level: 1
    };

    // res.send will send a response to the frontend -- if you pass it a javascript object, it's translated into JSON
    res.send({"created": req.params.player});
});

/* Return the list of currrently created players */
app.get("/show/players", (req, res) => {
    res.send(game.players);
})

/* start the application server on port 3000 and notify the user on success */
app.listen(3000, () => console.log("running on http://localhost:3000"));