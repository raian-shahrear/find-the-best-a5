function selectedPlayerList(playerCollection){
  const playerNameList = document.getElementById("player-name-list");
  playerNameList.innerHTML = '';
  for(let i = 0; i < playerCollection.length; i++){
    const eachPlayer = playerCollection[i];
    // list created
    const li = document.createElement('li');
    li.innerText = eachPlayer;
    playerNameList.appendChild(li);
  }
}


/* Event handler added to the Select Btn
---------------------------------------*/
const playerCollection =[];
function selectPlayer(event){
  const playerName = event.parentNode.parentNode.children[0].innerText;
  playerCollection.push(playerName);
  // only 5 players can be selected
  if(playerCollection.length <= 5){
    document.getElementById('selected-player').innerText = playerCollection.length;
    // pass the new array to selectedPlayerList function
    selectedPlayerList(playerCollection);
    // button will be disabled if selected 5
    for(let i = 0; i < playerCollection.length; i++){
      if(playerCollection[i].includes(playerName)){
        event.setAttribute('disabled', true);
      }
    }
  }
  else{
    alert("Can't be added more than 5 players!")
  }
}


/* Event handler added to the Calculate Btn
-----------------------------------------*/
document.getElementById('salary-calculation').addEventListener('click', function(){
  const playerSalaryInput = document.getElementById('player-salary-input');
  const playerSalaryAmount = getInputValueById('player-salary-input');

  const selectedPlayer = getElementValueById('selected-player');

  if(playerSalaryInput === '' || isNaN(playerSalaryAmount) || playerSalaryAmount < 0){
    alert('Please input a valid amount for Player field !!!')
    setInputValue_BackgroundById('player-salary-input');
  }
  else{
    const playerExpenses = selectedPlayer * playerSalaryAmount;
    setElementValueById('player-expenses', playerExpenses);
    playerSalaryInput.style.backgroundColor = 'white'
  }
})


/* Event handler added to the Calculate Total Btn
-----------------------------------------------*/
document.getElementById('total-calculation').addEventListener('click', function(){
  const playerExpenses = getElementValueById('player-expenses');

  const managerSalaryField = document.getElementById('manager-salary');
  const managerSalary = getInputValueById('manager-salary');

  const coachSalaryField = document.getElementById('coach-salary');
  const coachSalary = getInputValueById('coach-salary');

  if((managerSalaryField === '' || isNaN(managerSalary) || managerSalary < 0) || (coachSalaryField === '' || isNaN(coachSalary) || coachSalary < 0)){
    if((managerSalaryField === '' || isNaN(managerSalary) || managerSalary < 0) && (coachSalaryField === '' || isNaN(coachSalary) || coachSalary < 0)){
      alert('Please input a valid amount for Both field !!!')
      setInputValue_BackgroundById('manager-salary');
      setInputValue_BackgroundById('coach-salary');
    }
    else if(managerSalaryField === '' || isNaN(managerSalary) || managerSalary < 0){
      alert('Please input a valid amount for Manager field !!!')
      setInputValue_BackgroundById('manager-salary');
      coachSalaryField.style.backgroundColor = 'white'
    }
    else if(coachSalaryField === '' || isNaN(coachSalary) || coachSalary < 0){
      alert('Please input a valid amount for Coach field !!!')
      setInputValue_BackgroundById('coach-salary');
      managerSalaryField.style.backgroundColor = 'white'
    }
  }
  else{
    const grandTotal = playerExpenses + managerSalary + coachSalary;
    setElementValueById('grand-total', grandTotal);
    managerSalaryField.style.backgroundColor = 'white'
    coachSalaryField.style.backgroundColor = 'white'
  }
})
