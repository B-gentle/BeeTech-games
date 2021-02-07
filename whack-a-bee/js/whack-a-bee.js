const board_piece = document.querySelectorAll('.board_piece');
const bee = document.querySelectorAll('.bee');
const time_left = document.querySelector('#time_left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = time_left.textContent;

function randomBoardPiece(){
    board_piece.forEach(className =>{
        className.classList.remove('bee');
    })
    let randomlocation = board_piece[Math.floor(Math.random()  * 9)]
    randomlocation.classList.add('bee');

    // assign the id of the randomposition to clickedposition for us to use later

    clickedPosition = randomlocation.id
}

board_piece.forEach(id => {
    id.addEventListener('mouseup', () =>{
        if(id.id === clickedPosition){
            result = result + 1;
            score.textContent = result;
        }
    })
})

function movebee(){
    let timerId = null;
    timerId = setInterval(randomBoardPiece, 100)
}

function countDown(){
    currentTime--;
    time_left.textContent = currentTime;

    if(currentTime === 0)
{
    clearInterval(timerId)
    
    alert('Nsa egre! Your final score is' + result);
}
}

let timerId = setInterval(countDown, 1000)

movebee();