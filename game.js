var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var Level = 0;

function nextSequence() {
    userClickedPattern = [];
    Level++;
    $("#level-title").text("Level " + Level);

    var randomNumber = Math.floor(Math.random() * (3 - 0 + 1));
    var randomChosenColour = buttonColours[randomNumber]
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
 


}

$(".btn").on('click',function(){

var userChosenColour = $(this).attr("id")
userClickedPattern.push(userChosenColour)

playSound(userChosenColour);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);

})
//active sound
function playSound(name){
1
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();

}
//active button
function animatePress(currentColour){

$("#"+currentColour).addClass("pressed");

setTimeout(() => {
    $("#"+currentColour).removeClass("pressed");
}, (100));
}


var isFirstKeystroke = true;
$(window).on('keydown',function(){
    

if(isFirstKeystroke === true){
    
    isFirstKeystroke = false;
    nextSequence()
    $("#level-title").text("Level " + Level);
}


})

function checkAnswer(currentLevel){


    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        var WrongSound = new Audio("sounds/wrong.mp3");
        WrongSound.play();

        $("body").addClass("game-over");
        setTimeout(function(){

            $("body").removeClass("game-over");
        },(100))
  //Game Over, Press Any Key to Restart
  $("h1").text("Game Over, Press Any Key to Restart")
  //restart the Game
  startOver()
      }
function startOver()
{
    isFirstKeystroke = true;
    Level = 0;
    gamePattern = [];

}
}