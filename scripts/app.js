const gamedata = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let editedplayer = 0;
let activeplayer = 0;
let currentround = 1;
let players = [
    {
        name: '',
        symbol: "X"
    },
    {
        name: '',
        symbol: "O"
    }
];

const playerconfigoverlayelement = document.getElementById("config-overlay");
const backdropelement = document.getElementById("backdrop");
const formelement = document.querySelector("form");
const errorsoutputelement = document.getElementById("config-errors");
const gameareaelement = document.getElementById("active-game");
const activeplayernameelement = document.getElementById("active-player-name");
const gameoverelement = document.getElementById("game-over");

const addedplayer1btnelement = document.getElementById("edit-player-1-btn");
const addedplayer2btnelement = document.getElementById("edit-player-2-btn");
const cancelconfigbtnelement = document.getElementById("cancel-config-btn");
const startnewgamebtnelement = document.getElementById("start-game-btn");
const gamefieldelements = document.querySelectorAll("#game-board li");

addedplayer1btnelement.addEventListener("click", openplayerconfig);
addedplayer2btnelement.addEventListener("click", openplayerconfig);

cancelconfigbtnelement.addEventListener("click", closeplayerconfig);
backdropelement.addEventListener("click", closeplayerconfig);

formelement.addEventListener("submit", savplayerconfig);

startnewgamebtnelement.addEventListener("click", startnewgame);

for(const gamefieldelement of gamefieldelements){
    gamefieldelement.addEventListener("click", selectgamefield);
}