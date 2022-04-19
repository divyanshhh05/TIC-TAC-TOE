function openplayerconfig(event) {
    editedplayer = +event.target.dataset.playerid;   // +'1' = 1
  
  playerconfigoverlayelement.style.display = "block";
  backdropelement.style.display = "block";
}

function closeplayerconfig() {
  playerconfigoverlayelement.style.display = "none";
  backdropelement.style.display = "none";
  formelement.firstElementChild.classList.remove("error");
  errorsoutputelement.textContent = "";
  formelement.firstElementChild.lastElementChild.value = "";
}

function savplayerconfig(event) {
  event.preventDefault();
  const formdata = new FormData(event.target); //form data is a blueprint function in js which has functions and which takes the element which trigeers the event as an argument
  const enteredplayername = formdata.get("playername").trim();  //get is a funtion of formdata funtion which reads the value of the 'name'(passed as name in input). it returns a string
  
  if(!enteredplayername){
      event.target.firstElementChild.classList.add("error");
      errorsoutputelement.textContent = "Please Enter a valid Element!";
      return;
  }

  const updatedplayerdata = document.getElementById("player-" + editedplayer + "-data");
  updatedplayerdata.children[1].textContent = enteredplayername;

  players[editedplayer - 1].name = enteredplayername;

  closeplayerconfig();
} 
