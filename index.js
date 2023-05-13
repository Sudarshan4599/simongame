// 2) Array
var buttonColors = ["red", "blue" , "green" , "yellow"]

var gamePattern = []
var userClickedPattern = []

var started = false
var level = 0


// 5) Level
$(document).keypress(function(){

    if(!started){
        $("#level-title").text("Level " + level)
        nextSequence()
        started = true
    }
})


// 6) User-Generator
$(".btn").click(function(){

    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
})


// 7) Check Answer
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            } , 1000)
        }
    } else {
        $("body").addClass("game-over")
        $("#level-title").text("Game Over, Press any key to Restart")
        
        playSound("wrong")
        setTimeout(function() {
            $("body").removeClass("game-over")
        } , 800)

        startOver()
    }
}



// 1) Random-Generator
function nextSequence() {

userClickedPattern = [];

level++
$("#level-title").text("Level " + level)


var randomNumber = Math.floor(Math.random()*4)        
var randomChosenColor = buttonColors[randomNumber]
gamePattern.push(randomChosenColor)

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
playSound(randomChosenColor)
animatePress(randomChosenColor)
}


// 3) Sound
function playSound(name) {

    var audio = new Audio( name + ".mp3")
    audio.play()
}



// 4) Animate
function animatePress(currentColor){

        $("#" + currentColor).addClass("pressed")

        setTimeout(function (){
            $("#" + currentColor).removeClass("pressed")
        } , 100)
}



// 8) Start Over
function startOver(){
    level = 0
    gamePattern = []
    started = false
}





