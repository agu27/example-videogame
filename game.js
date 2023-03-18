const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementSize;
let map = maps[0];
let mapsRow;
let mapBySimbol;
let simb;
let charStartX;
let charStartY;
let moveX = 0;
let moveY = 10;
let numMap = 1;
let spanTime = document.querySelector('#time');
let startTime;
let timePlayed;
let timeInterval;
let levelTime = {
    1: 3,
    2: 4,
    3: 7,
    4: 7,
    5: 12
}
spanTime.innerHTML = levelTime[1];


const giftPosition = {
    x: undefined,
    y: undefined,
}

function startGame() {
    mapsRow = map.trim().split('\n');
    game.font = elementSize + 'px Verdana';
    game.textAlign = ''
    charStartX = elementSize * moveX;
    charStartY = elementSize * moveY;

    for(let row = 1; row <= 10; row++) {
        for(let col = 0; col < 10; col++) {
            mapBySimbol = mapsRow[row - 1].trim().split('');
            simb = mapBySimbol[col];
            game.fillText(emojis[simb], elementSize * col, elementSize * row);

            if (simb == 'I') {
                giftPosition.x = elementSize * col;
                giftPosition.y = elementSize * row;
            }
        }
    }

    game.fillText(emojis['PLAYER'], charStartX, charStartY);
    
}

function setCanvasSize () {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    elementSize = (canvasSize / 10) - 2;

    startGame();
}

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

function moveUp() {
    timeDown ();
    if (charStartY > elementSize) {
        moveY = moveY - 1;
        game.clearRect(0, 0, canvasSize, canvasSize);
        startGame();
    }
    charDeath();
    nextLevel();
}

function moveDown() {
    if (charStartY < canvasSize - elementSize) {
        moveY = moveY + 1;
        game.clearRect(0, 0, canvasSize, canvasSize);
        startGame();
    }
    charDeath();
    nextLevel();
}

function moveLeft() {
    if (charStartX >= elementSize) {
        moveX = moveX - 1;
        game.clearRect(0, 0, canvasSize, canvasSize);
        startGame();
    }
    charDeath();
    nextLevel();
}

function moveRight() {
    if (charStartX < canvasSize - elementSize * 2) {
        moveX = moveX + 1;
        game.clearRect(0, 0, canvasSize, canvasSize);
        startGame();
    }
    charDeath();
    nextLevel();
}

function charDeath() {
    if (mapsRow[moveY - 1].trim()[moveX] == 'X') {
        map = maps[0];
        game.clearRect(0, 0, canvasSize, canvasSize);
        moveY = 10;
        moveX = 0;
        numMap = 1;
        startGame();
        startTime = Date.now();
    }
}

function nextLevel () {
    if (charStartY == giftPosition.y && charStartX == giftPosition.x) {
        switch (numMap) {
            case 1: initialTime = 8
            case 2: initialTime = 6
            case 3: initialTime = 5
            case 4: initialTime = 3
        }
        map = maps[numMap];
        game.clearRect(0, 0, canvasSize, canvasSize);
        startGame();
        numMap++;
        startTime = Date.now();
    }
}

window.addEventListener('keydown',moveByKey);

function moveByKey(event) {
    if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowDown') moveDown();
}

function timeDown () {
    if (!startTime) {
        startTime = Date.now();
    }
    timeInterval = setInterval(showTime, 100)
}

function showTime () {
    timePlayed = Date.now() - startTime;
    spanTime.innerHTML = (levelTime[numMap] - (timePlayed / 1000)).toFixed(0);

    if (spanTime.innerHTML == 0) {
        clearInterval(timeInterval);
        map = maps[0];
        game.clearRect(0, 0, canvasSize, canvasSize);
        moveY = 10;
        moveX = 0;
        numMap = 1;
        startGame();
        spanTime.innerHTML = levelTime[1];
        startTime = Date.now();
        timeDown();
    }
}