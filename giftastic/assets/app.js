var topics = ["trombone","bass guitar","trumpet","piano"];

//instrumentChosen function so the HTML will display the chosen instrument

function displayInfo(){
    var instrument = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instrument + "&api_key=dc6zaTOxFJmzC&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        //check for response
        console.log(response)

        var results = response.data;
        for (var i = 0; i < results.length; i++){
            //censor by rating//create space for the gif and text for the rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: "+ rating);
                var instrumentImage = $("<img>");
                instrumentImage.attr("src", results[i].images.fixed_height.url);
                //need to append the paragraph, image
                gifDiv.append(p);
                gifDiv.append(instrumentImage);
                //PREPEND gifDiv to HTML 
                $("#music-instrument").prepend(gifDiv);

            }
        }
    });
}

//create buttons for instruments chosen

function createButtons() {
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
})


$(document).on("click",".instrument-btn", displayInfo);


createButtons();


