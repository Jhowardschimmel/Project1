
//on ready
$(document).ready(function () {

    //query
    var queryURL = "https://api.reliefweb.int/v1/disasters?profile=full&limit=10&sort[]=date:desc"

    //ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {



            console.log(response.data);

            

            //iterate through the response data
            for (var i = 0; i < response.data.length; i++) {
                
                var results = response.data;

                createButtons();


                console.log(i);
                console.log(response.data[i].fields.name);
                console.log(response.data[i].fields.primary_country.name);



                //create 10 buttons
                function createButtons() {
                    var button = $('<button>').attr({
                        class: "ui button"
                    });
                    $(button).text(`${results[i].fields.primary_type.name} : ${results[i].fields.primary_country.name}`);
                    $("#disasterdiv").append(button);






                }




            }



        });



});