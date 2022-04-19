function gameresetstatus(){
    activeplayer = 0;
    currentround = 1;
    gameoverelement.firstElementChild.innerHTML =
     'You Won <span id="winner-name">PLAYER NAME</span>!';
     gameoverelement.style.display = "none";

     for(let i = 0; i<3; i++){
         for(let j = 0; j<3; j++){
             gamedata[i][j] = 0;
         }
     }
} 
function resetgameboard(){
    for(let i = 0; i<9; i++){
        gamefieldelements.textContent = " ";
        gamefieldelements.classList.remove("disabled");
    }
}

function startnewgame(){
    if(players[0].name === '' || players[1].name === ''){
        alert("Please set some custom names for the Players!");
        return;
    }

    activeplayernameelement.textContent = players[activeplayer].name;
    gameareaelement.style.display = "block";

    gameresetstatus();
    resetgameboard();

}

function switchplayer(){
    if(activeplayer === 0){
        activeplayer = 1;
    }
    else{
        activeplayer = 0;
    }
    activeplayernameelement.textContent = players[activeplayer].name;
}

function selectgamefield(event){
    const selectedfield = event.target;
    
    const selectedcolumn = selectedfield.dataset.col - 1;
    const selectedrow = selectedfield.dataset.row - 1;

    if(gamedata[selectedrow][selectedcolumn] > 0){
        alert("Please select an empty field!");
        return;
    }

    selectedfield.textContent = players[activeplayer].symbol;
    selectedfield.classList.add("disabled");

    gamedata[selectedrow][selectedcolumn] = activeplayer + 1;

    const winnerid = checkforgameover();
    
    if(winnerid !== 0){
        endgame(winnerid);
    }

    currentround++; 
    switchplayer();
}

function checkforgameover(){
    for(let i=0; i<3; i++){
        if(gamedata[i][0] > 0 && gamedata[i][0] === gamedata[i][1] &&  gamedata[i][1] ===gamedata[i][2]){     //checking rows for equality
            return gamedata[i][0];
        }
    }
    for(let i=0; i<3; i++){
        if(gamedata[0][i] > 0 && gamedata[0][i] === gamedata[1][i] &&  gamedata[0][i] ===gamedata[2][i]){     //checking columns for equality
            return gamedata[0][i];
        }
    } 
    if(gamedata[0][0] > 0 && gamedata[0][0] === gamedata[1][1] && gamedata[1][1] === gamedata[2][2]){         //checking upper to lower diagonal
        return gamedata[0][0];
    }
    if(gamedata[2][0] > 0 && gamedata[2][0] === gamedata[1][1] && gamedata[1][1] === gamedata[0][2]){         //checking upper to lower diagonal
        return gamedata[2][0];
    }
    
    if(currentround === 9){
        return -1;
    }
        
    return 0;
}

function endgame(winnerid){
    gameoverelement.style.display = "block";
if (winnerid > 0){
    const winnername = players[winnerid - 1].name;
    gameoverelement.firstElementChild.firstElementChild.textContent = winnername;
}
else{
    gameoverelement.firstElementChild.textContent = "Its a Draw!";
}
    
}