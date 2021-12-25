var myMusic = new Audio("Audio/theme.mp3");

var flag = 0;
function startMusic() {
    myMusic.play();
}
function turnOffMusic(){
    myMusic.pause();
    flag = 1;
}

document.body.addEventListener("mousemove", function () {
    if(flag == 0){
        myMusic.play()
    }
});
// window.setTimeout(startMusic, 500);
// window.addEventListener("load", startMusic);

function changeVolumeIcon(currentImage){
    if(currentImage.src.match('Assets/volumeGlow_icon.png')){
        currentImage.src = "Assets/muteGlow_icon.png";
        turnOffMusic();
    }else{
        currentImage.src = "Assets/volumeGlow_icon.png";
        startMusic();
    }
}
var flipFlopButton = document.querySelector(".flip-flop");
var snakeGameButton = document.querySelector(".snake-game");
var racingCarButton = document.querySelector(".racing-car");

var dayNightButtonSound = document.querySelector(".icon-day-night");
var flipFlopLink = document.querySelector(".link-flipFlop");
var buttonClickSound = new Audio("Audio/button_click.mp3");



dayNightButtonSound.addEventListener('click', ()=>{
    buttonClickSound.play();
});
flipFlopButton.addEventListener('click', ()=>{
    buttonClickSound.play();
});
snakeGameButton.addEventListener('click', ()=>{
    buttonClickSound.play();
});
racingCarButton.addEventListener('click', ()=>{
    buttonClickSound.play();
});

var popUp = document.querySelector('.pop-up-flipFlop');
var popUpSnakeGame = document.querySelector('.pop-up-snakGame');
var popUpRacingCar = document.querySelector('.pop-up-racingCar');

function toggleFlipFlop(){
    popUp.classList.add('active');
}
function toggleSnakeGame(){
    popUpSnakeGame.classList.add('active');
}
function toggleRacingCar(){
    popUpRacingCar.classList.add('active');
}

var xButton = document.querySelector(".X-Button");
var playButton = document.querySelector(".play-button");

flipFlopButton.addEventListener('click', ()=>{
    popUp.classList.add('open');
    popUp.classList.remove('close');
});
xButton.addEventListener('click', ()=>{
    popUp.classList.add('close');
    popUp.classList.remove('open');
});
xButton.addEventListener('click', ()=>{
    buttonClickSound.play();
});
playButton.addEventListener('click', ()=>{
    buttonClickSound.play();
});

// Pop-up of 2 games
var closeButton = document.querySelector('.close-button');
snakeGameButton.addEventListener('click', ()=>{
    popUpSnakeGame.classList.add('open');
    popUpSnakeGame.classList.remove('close');
});
closeButton.addEventListener('click', ()=>{
    popUpSnakeGame.classList.add('close');
    popUpSnakeGame.classList.remove('open');
});
var closeButtonRacing = document.querySelector('.close-button-racing');
racingCarButton.addEventListener('click', ()=>{
    popUpRacingCar.classList.add('open');
    popUpRacingCar.classList.remove('close');
});
closeButtonRacing.addEventListener('click', ()=>{
    popUpRacingCar.classList.add('close');
    popUpRacingCar.classList.remove('open');
});

// Adding button click sounds in close-buttons
closeButton.addEventListener('click', ()=>{
    buttonClickSound.play();
});
closeButtonRacing.addEventListener('click', ()=>{
    buttonClickSound.play();
});

var aboutUs = document.querySelector(".icon-info");
var info = document.querySelector(".about-us");
// aboutUs.addEventListener('click', ()=>{
//     info.classList.remove("add-topToBottom");
//     info.classList.add("add-bottomToTop");
//     setTimeout(addBottomToTop, 5000);
// });

// function addBottomToTop(){
//     info.classList.remove("add-bottomToTop");
//     info.classList.add("add-topToBottom");
// }

aboutUs.addEventListener('click', ()=>{
    if(info.classList.contains("add-bottomToTop")){
        info.classList.remove("add-bottomToTop");
        info.classList.add("add-topToBottom");
    }else{
        info.classList.remove("add-topToBottom");
        info.classList.add("add-bottomToTop");
    }
});