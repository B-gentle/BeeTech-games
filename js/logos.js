const tilesArray = [
    {
        name: 'BTECH',
        img: 'images/BTECH.png'
    },
    {
        name: 'BTECH',
        img: 'images/BTECH.png'
    },
    {
        name: 'BTECH(0)',
        img: 'images/BTECH(0).png'
    },
    {
        name: 'BTECH(0)',
        img: 'images/BTECH(0).png'
    },
    {
        name: 'picklogowithoutbg',
        img: 'images/pickklogowithouthbg.png'
    },
    {
        name: 'picklogowithoutbg',
        img: 'images/pickklogowithouthbg.png'
    },
    {
        name: 'picklogo2',
        img: 'images/picklogo2.png'
    },
    {
        name: 'picklogo2',
        img: 'images/picklogo2.png'
    },
    {
        name: 'picklogo3',
        img: 'images/picklogo3.png'
    },
    {
        name: 'picklogo3',
        img: 'images/picklogo3.png'
    },
    {
     name: 'redlogo',
        img: 'images/redLogo.png'
    },
    {
        name: 'redlogo',
        img: 'images/redLogo.png'
    }
]

tilesArray.sort(() => 0.6 - Math.random());

const board = document.querySelector('.game_board');
let scores = document.querySelector('.scores');
let tilesChosen = [];
let tileChosenId = [];
let tilesWon = [];

function createBoard(){
  for(let i = 0; i < tilesArray.length; i++){
     let tile = document.createElement('img');
      tile.setAttribute('src', 'images/blank.png');
      tile.setAttribute('data-id', i);
      tile.addEventListener('click' , fliptile);
      board.appendChild(tile);
  }   
};


function fliptile(){
    tileId = this.getAttribute('data-id');
    tilesChosen.push(tilesArray[tileId].name); //for double click bug
    tileChosenId.push(tileId);
    this.setAttribute('src' , tilesArray[tileId].img);
    if (tilesChosen.length === 2){
        setTimeout(checkformatch, 600)
    };
};

function checkformatch(){
    let tiles = document.querySelectorAll('img');
    const tileoptionone = tileChosenId[0];
    const tileoptiontwo = tileChosenId[1];

    if(tilesChosen[0] === tilesChosen[1]){
        // alert('You found a match');
        tiles[tileoptionone].setAttribute('src', 'images/images.png');
        tiles[tileoptiontwo].setAttribute('src', 'images/images.png');
        tiles[tileoptionone].removeEventListener('click' , fliptile);
        tiles[tileoptiontwo].removeEventListener('click' , fliptile);
        tilesWon.push(tilesChosen);

    }else{
        tiles[tileoptionone].setAttribute('src', 'images/blank.png');
        tiles[tileoptiontwo].setAttribute('src', 'images/blank.png');
        alert('sorry give it another shot!');
    }

    tilesChosen = [];
    tileChosenId = [];
    scores.textContent = player_name  +  ': ' + tilesWon.length;
    submit.addEventListener('click' , () => {
        if(tilesWon.length === tilesArray.length/2){
            scores.textContent = 'Kuddos' + player_name;
                player_name = "";
        }
    })

};
createBoard();

let submit = document.querySelector('#submit');
let player_name = document.querySelector('#player_name').value;