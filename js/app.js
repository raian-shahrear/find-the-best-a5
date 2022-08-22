function selectedPlayerList(playerCollection){
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

    for(let i = 0; i < playerCollection.length; i++){
      if(playerCollection[i].includes(playerName)){
        event.setAttribute('disabled', true);
      }
    }
  }
}


document.getElementById('salary-calculation').addEventListener('click', function(){
  const playerSalaryInput = document.getElementById('player-salary-input');
  const playerSalaryAmountInString = playerSalaryInput.value;
  const playerSalaryAmount = parseInt(playerSalaryAmountInString);

  const selectedPlayerField = document.getElementById('selected-player');
  const selectedPlayerInString = selectedPlayerField.innerText;
  const selectedPlayer = parseInt(selectedPlayerInString);

  const playerExpenses = selectedPlayer * playerSalaryAmount

  const playerExpensesField = document.getElementById('player-expenses');
  playerExpensesField.innerText = playerExpenses;
})


document.getElementById('total-calculation').addEventListener('click', function(){
  const playerExpensesField = document.getElementById('player-expenses');
  const playerExpensesInString = playerExpensesField.innerText;
  const playerExpenses = parseInt(playerExpensesInString);

  const managerSalaryField = document.getElementById('manager-salary');
  const managerSalaryInString = managerSalaryField.value;
  const managerSalary = parseInt(managerSalaryInString);

  const coachSalaryField = document.getElementById('coach-salary');
  const coachSalaryInString = coachSalaryField.value;
  const coachSalary = parseInt(coachSalaryInString);

  const grandTotal = playerExpenses + managerSalary + coachSalary;

  const grandTotalField = document.getElementById('grand-total');
  grandTotalField.innerText = grandTotal;
})