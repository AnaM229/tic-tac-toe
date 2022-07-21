
let gridDisplay = document.querySelector('#grid')
let actualGame=[];
let chosenIdsx = []
let chosenIds0 = []

function checkWinner(){
    let i
    winner = document.querySelector('#winner')
    if((chosenIdsx.includes('0') && chosenIdsx.includes('4') && chosenIdsx.includes('8')) || (chosenIdsx.includes('2') && chosenIdsx.includes('4') && chosenIdsx.includes('6'))){
        winner.innerHTML = 'User 1 wins'
        gridDisplay.innerHTML = 'Game Over'
    }

    if((chosenIds0.includes('0') && chosenIds0.includes('4') && chosenIds0.includes('8')) || (chosenIds0.includes('2') && chosenIds0.includes('4') && chosenIds0.includes('6'))){
        winner.innerHTML = 'User 2 wins'
        gridDisplay.innerHTML = 'Game Over'
    }
    
    if((chosenIdsx.includes('0') && chosenIdsx.includes('1') && chosenIdsx.includes('2')) || (chosenIdsx.includes('3') && chosenIdsx.includes('4') && chosenIdsx.includes('5')) || (chosenIdsx.includes('6') && chosenIdsx.includes('7') && chosenIdsx.includes('8'))){
        winner.innerHTML = 'User 1 wins'
        gridDisplay.innerHTML = 'Game Over'
    }

    if((chosenIds0.includes('0') && chosenIds0.includes('1') && chosenIds0.includes('2')) || (chosenIds0.includes('3') && chosenIds0.includes('4') && chosenIds0.includes('5')) || (chosenIds0.includes('6') && chosenIds0.includes('7') && chosenIds0.includes('8'))){
        winner.innerHTML = 'User 2 wins'
        gridDisplay.innerHTML = 'Game Over'
    }

    if((chosenIdsx.includes('0') && chosenIdsx.includes('3') && chosenIdsx.includes('6')) || (chosenIdsx.includes('1') && chosenIdsx.includes('4') && chosenIdsx.includes('7')) || (chosenIdsx.includes('2') && chosenIdsx.includes('5') && chosenIdsx.includes('8'))){
        winner.innerHTML = 'User 1 wins'
        gridDisplay.innerHTML = 'Game Over'
    }
    if((chosenIds0.includes('0') && chosenIds0.includes('3') && chosenIds0.includes('6')) || (chosenIds0.includes('1') && chosenIds0.includes('4') && chosenIds0.includes('7')) || (chosenIds0.includes('2') && chosenIds0.includes('5') && chosenIds0.includes('8'))){
        winner.innerHTML = 'User 2 wins'
        gridDisplay.innerHTML = 'Game Over'
    }
    
    if(chosenIdsx.length + chosenIds0.length == 9){
        winner.innerHTML = 'Nobody wins'
        gridDisplay.innerHTML = 'Game Over'
    }
}

function addChoice(){
    let turn = document.querySelector("#turn")
    let cardId=this.getAttribute('data-id')
    const cards = document.querySelectorAll('img')

    if(turn.innerHTML == "User 1, it's your turn"){
        this.setAttribute('src','images/x.jpg')
        turn.innerHTML = "User 2, it's your turn"
        
        chosenIdsx.push(cardId)
    }else{
        this.setAttribute('src','images/0.jpg')
        turn.innerHTML = "User 1, it's your turn"
    
        chosenIds0.push(cardId)
    }

    cards[cardId].removeEventListener('click', addChoice)

    console.log(chosenIdsx)
    console.log(chosenIds0)
    checkWinner()
}

function createBord(){
   
    for(let i = 0; i < 9; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/white.jpg')
        card.setAttribute('data-id', i);

        console.log(gridDisplay)

        gridDisplay.append(card);

        card.addEventListener('click', addChoice)
    }
  
}


 createBord();