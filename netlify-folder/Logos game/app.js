// player-name-screen
const playerNameForm = document.querySelector('.player-name-form')
const enterButton = document.getElementById('enter-button');
const playerNameOne = document.getElementById('player-name-input-1');
const playerNameTwo = document.getElementById('player-name-input-2');
const playerNameDisplayOne = document.getElementById('player-name-display-1');
const playerNameDisplayTwo = document.getElementById('player-name-display-2');
const gameBody = document.querySelector('.game');
const pOneResult = document.getElementById('resultPOne');
const pTwoResult = document.getElementById('resultPTwo');

const showGame = () => {
    if (playerNameOne.value == "") {
        gameBody.style.display = 'none';
        alert("Enter Player name");
    } else {
        playerNameForm.style.display = 'none';
        gameBody.style.display = 'block';
        playerNameDisplayOne.innerText = playerNameOne.value + "'s";
    }
}

// Game help
const help = document.querySelector('.help');
const showHelp = () => {
    help.classList.toggle('show');
}

// cards options
const cardArray = [{
        name: 'BTECH',
        img: 'assets/BTECH.png'
    },
    {
        name: 'BTECH',
        img: 'assets/BTECH.png'
    },
    {
        name: 'BTECH(0)',
        img: 'assets/BTECH(0).png'
    },
    {
        name: 'BTECH(0)',
        img: 'assets/BTECH(0).png'
    },

    {
        name: 'pickklogowithouthbg.png',
        img: 'assets/pickklogowithouthbg.png'
    },
    {
        name: 'pickklogowithouthbg.png',
        img: 'assets/pickklogowithouthbg.png'
    },
    {
        name: 'picklogo2.png',
        img: 'assets/picklogo2.png'
    },
    {
        name: 'picklogo2.png',
        img: 'assets/picklogo2.png'
    },
    {
        name: 'picklogo3.png',
        img: 'assets/picklogo3.png'
    },
    {
        name: 'picklogo3.png',
        img: 'assets/picklogo3.png'
    },
    {
        name: 'redLogo.png',
        img: 'assets/redLogo.png'
    },
    {
        name: 'redLogo.png',
        img: 'assets/redLogo.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());

cardsChosen = [];
cardsChosenId = [];
cardsWon = [];

// creating our game board
const board = document.querySelector('.board');
cardArray.forEach((item, i)=>{
    let card = document.createElement('img');
    card.setAttribute('src', 'assets/tap-to-play.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipcard)
    board.appendChild(card);
})
   

// flipcard function
function flipcard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src' , cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 600)
    }
}

function checkForMatch(){
    let cards = document.querySelectorAll('img');
    const firstChoice = cardsChosenId[0];
    const secondChoice = cardsChosenId[1];
    if (firstChoice == secondChoice){
        alert('Card picked twice')
        cards[firstChoice].setAttribute('src', 'assets/tap-to-play.png');
        cards[secondChoice].setAttribute('src', 'assets/tap-to-play.png');
    }
    else if(cardsChosen[0] === cardsChosen[1] && cards){
        alert('Match Found');
        cards[firstChoice].setAttribute('src', 'assets/images.png');
        cards[secondChoice].setAttribute('src', 'assets/images.png');
        cards[firstChoice].style.pointerEvents = 'none';
        cards[secondChoice].style.pointerEvents = 'none';
        cardsWon.push(cardsChosen);
    }else{
        cards[firstChoice].setAttribute('src','assets/tap-to-play.png');
        cards[secondChoice].setAttribute('src', 'assets/tap-to-play.png');
        alert('sorry Try again');
        
    }

    cardsChosen=[];
    cardsChosenId=[];

    
    pOneResult.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'congratulations You Won!';
    }
}