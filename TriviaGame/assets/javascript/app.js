//variables to hold needed information, in this case answer tally

var correct = 0
var incorrect = 0

//need to start the game - click start button starts timer, hides start button and shows questions

function startGame() {
    $("#quiz-quotes").hide()
    $("#results").hide()

    //set on click to start the game, otherwise - nothing

    $("#start-button").on("click", function(){
        $("#start").hide()
        $("#quiz-quotes").show()
        run()
    })
}


//set the timer so variables, then function to do so - excellent resource in previous activity for reference

var timerSeconds = 30;
var intervalID;

function run(){
    clearInterval(intervalID);
    intervalID = setInterval(decrement,1000)
}

function decrement(){
    timerSeconds--;
    $("#countdown").html("Time Remaining: " + timerSeconds)
    console.log(timerSeconds)

    if(timerSeconds === 0){
        stop();
        $("#countdown").html("Time's Up!");
        alert("Time Up");
       
    }
}
    
    
//have to say what stop is...how does the game stop? EIther, time is up or submit is clicked

function stop(){
    $("#submit").on("click",function(){
        alert("clicked");
        clearInterval(intervalID);
        $("#quiz-quotes").hide()  //slack tip from homework channel
    
    })
}


//things left undone that need done
//need to tally and display the results, this is a conditional that adds to the appropriate variable
//on click for submit button does not work
//timer continues to countdown into the negative...does it need to have a stop associated once it hits 0
//timer doesn't start with click as it should, starts with page load


startGame()
run()






