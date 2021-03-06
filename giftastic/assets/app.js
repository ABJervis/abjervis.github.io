var topics = ["trombone","bass guitar","trumpet","piano"];

//instrumentChosen function so the HTML will display the chosen instrument

function displayInfo(){
    var instrument = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instrument + "&api_key=dc6zaTOxFJmzC&limit=10";

    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        
        //check for response
        
        console.log(response)

        var results = response.data;

        //loops over item results
        
        for (var i = 0; i < results.length; i++){
            
            //censor by rating//create space for the gif and text for the rating
            
            if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
            
                //create a div for the gif
            
                var gifDiv = $("<div>");
            
                //stores result item's rating
            
                var rating = results[i].rating;
            
                //creates a paragraph to display rating
            
                var p = $("<p>").text("Rating: "+ rating);
            
                //image tag for the gif
            
                var instrumentImage = $("<img>");
            
                //gives image tag src attribute of a property pulled from the result item
            
                instrumentImage.attr('src', results[i].images.fixed_height_still.url)
                .attr('data-still', results[i].images.fixed_height_still.url)
                .attr('data-animate', results[i].images.fixed_height.url)
                .attr('data-state', "still")
                .addClass("image-go");
                //need to append the paragraph, image
            
                gifDiv.append(p);
                gifDiv.append(instrumentImage);
            
                //PREPEND gifDiv to HTML so it appears first 
            
                $("#music-instrument").prepend(gifDiv);

            }
        }
    });
}

//create buttons for instruments chosen

function createButtons() {
    // to make sure there are not duplicate entries
    $("#buttons-view").empty();
    
    for (var i = 0; i < topics.length; i++){
        var newButton = $("<button>");
        newButton.addClass("instrument-btn");
        newButton.attr("data-name",topics[i]);
        newButton.text(topics[i]);
        $("#buttons-view").append(newButton)
    }
}


$("#music-add").on("click", function (event){
    event.preventDefault();

    var music = $("#music-input").val().trim();
    topics.push(music);

    console.log(topics)

    createButtons();
    getMoving();
})


//still to animate - need to tie to a click function

$(document).on("click",".instrument-btn", displayInfo); 

function getMoving(){
    //get or set the value of any attribute on html
    var state = $(this).attr("data-state");
    //checks current state of image, still or not, updates its src attribute to what its data-animate value is
    if (state === "still"){
        $(this).attr("src",$(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");

    }

    console.log(state)

}


createButtons();


