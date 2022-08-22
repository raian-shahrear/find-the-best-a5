function selectedPlayerList(playerCollection){
console.log(playerCollection)
const playerNameList = document.getElementById("player-name-list");
playerNameList.innerHTML = '';
for(let i = 0; i < playerCollection.length; i++){
  const eachPlayer = playerCollection[i];
  const li = document.createElement('li');
  li.innerText = eachPlayer;
  playerNameList.appendChild(li);
}
}

const playerCollection =[];

function selectPlayer(event){
  const playerName = event.parentNode.parentNode.children[0].innerText;
  playerCollection.push(playerName);

  if(playerCollection.length <= 5){
    document.getElementById('selected-player').innerText = playerCollection.length;

    selectedPlayerList(playerCollection);
  }
}

