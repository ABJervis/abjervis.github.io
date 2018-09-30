var topics = ["trombone","bass guitar","euphonium","piano"]

//instrumentChosen function so the HTML will display the chosen instrument

function instrumentChosen(){
    var instrument = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instrument + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        var results = response.data;
        for (var i = 0; i< results.length; i++){
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
                $("#music-instrument").prepend(givDiv);

            }
        }
    })
}

//display instrument data

function instrumentGo() {
    $("buttons-used").empty();
    for (var i = 0; i< topics.length; i++){
        var a = $("<button>");
        a.addClass("instrument-button");
        a.attr("data-name",topics[i]);
        a.text(topics[i]);
        $("#buttons-used").append(a);
    }


    $("#music-add").on("click", function (event){
        event.preventDefault();

        var music = $("#music-input").val().trim();
        topics.push(music);

        instrumentGo();
}

