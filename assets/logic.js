
//on ready
$(document).ready(function () {



    //query for disasters
    var queryURL = "https://api.reliefweb.int/v1/disasters?profile=full&limit=10&sort[]=date:desc"

    //query for jobs info
    var queryJobs = "https://api.reliefweb.int/v1/jobs?profile=full&limit=10&sort[]=date:desc"

    //ajax function for queryJobs
    $.ajax({
        url: queryJobs,
        method: "GET"
    })

        .then(function (response) {
            console.log(response.data);

            for (var i = 0; i < response.data.length; i++) {

            }
        });

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
                let type = response.data[i].fields.primary_type.name;
                //call createButtons
                createButtons();


                console.log(i);
                console.log(response.data[i].fields.name);
                console.log(response.data[i].fields.primary_country.name);

                console.log(response.data[i].fields.primary_type.name);
                console.log(response.data[i].fields.date.created);
                console.log(response.data[i].fields.description);

                //location data for googlemaps api
                console.log(response.data[i].fields.primary_country.location);




                //create 10 buttons
                function createButtons() {
                    var button = $('<button>').attr({
                        id: "disasterButton" + i, //+ i to assign incremented id's
                        class: "fluid ui orange button"
                    });
                    $(button).text(response.data[i].fields.name);
                    $("#disasterDiv").append(button);
                }

                //onclick functions
                
                //button0
                $("#disasterButton0").click(function () {

                    $("#disType").text(response.data[0].fields.primary_type.name);
                    $("#disDate").text(response.data[0].fields.date.created);
                    $("#disLocation").text(response.data[0].fields.primary_country.name);
                    $("#disDescription").text(response.data[0].fields.description);

                });

                //button1
                $("#disasterButton1").click(function () {

                    $("#disType").text(response.data[1].fields.primary_type.name);
                    $("#disDate").text(response.data[1].fields.date.created);
                    $("#disLocation").text(response.data[1].fields.primary_country.name);
                    $("#disDescription").text(response.data[1].fields.description);
                });

                //button2
                $("#disasterButton2").click(function () {

                    $("#disType").text(response.data[2].fields.primary_type.name);
                    $("#disDate").text(response.data[2].fields.date.created);
                    $("#disLocation").text(response.data[2].fields.primary_country.name);
                    $("#disDescription").text(response.data[2].fields.description);

                });
                //button3
                $("#disasterButton3").click(function () {

                    $("#disType").text(response.data[3].fields.primary_type.name);
                    $("#disDate").text(response.data[3].fields.date.created);
                    $("#disLocation").text(response.data[3].fields.primary_country.name);
                    $("#disDescription").text(response.data[3].fields.description);

                });
                //button4
                $("#disasterButton4").click(function () {

                    $("#disType").text(response.data[4].fields.primary_type.name);
                    $("#disDate").text(response.data[4].fields.date.created);
                    $("#disLocation").text(response.data[4].fields.primary_country.name);
                    $("#disDescription").text(response.data[4].fields.description);

                });
                //button5
                $("#disasterButton5").click(function () {

                    $("#disType").text(response.data[5].fields.primary_type.name);
                    $("#disDate").text(response.data[5].fields.date.created);
                    $("#disLocation").text(response.data[5].fields.primary_country.name);
                    $("#disDescription").text(response.data[5].fields.description);

                });
                //button6
                $("#disasterButton6").click(function () {

                    $("#disType").text(response.data[6].fields.primary_type.name);
                    $("#disDate").text(response.data[6].fields.date.created);
                    $("#disLocation").text(response.data[6].fields.primary_country.name);
                    $("#disDescription").text(response.data[6].fields.description);

                });
                //button7
                $("#disasterButton7").click(function () {

                    $("#disType").text(response.data[7].fields.primary_type.name);
                    $("#disDate").text(response.data[7].fields.date.created);
                    $("#disLocation").text(response.data[7].fields.primary_country.name);
                    $("#disDescription").text(response.data[7].fields.description);

                });
                //button8
                $("#disasterButton8").click(function () {

                    $("#disType").text(response.data[8].fields.primary_type.name);
                    $("#disDate").text(response.data[8].fields.date.created);
                    $("#disLocation").text(response.data[8].fields.primary_country.name);
                    $("#disDescription").text(response.data[8].fields.description);

                });
                //button9
                $("#disasterButton9").click(function () {

                    $("#disType").text(response.data[9].fields.primary_type.name);
                    $("#disDate").text(response.data[9].fields.date.created);
                    $("#disLocation").text(response.data[9].fields.primary_country.name);
                    $("#disDescription").text(response.data[9].fields.description);

                });



            }



        });



});