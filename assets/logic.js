
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





                //create 10 buttons
                function createButtons() {
                    var button = $('<button>').attr({
                        //+ i to assign incremented id's
                        id: "disasterButton" + i,
                        class: "fluid ui teal button"
                    });
                    $(button).text(response.data[i].fields.name);
                    $("#disasterDiv").append(button);
                }

                //onclick functions
                
                //button0
                $("#disasterButton0").click(function () {

                    $("#disType").text(response.data[0].fields.primary_type.name);
                });

                //button1
                $("#disasterButton1").click(function () {

                    $("#disType").text(response.data[1].fields.primary_type.name);
                });

                //button2
                $("#disasterButton2").click(function () {

                    $("#disType").text(response.data[2].fields.primary_type.name);

                });
                //button3
                $("#disasterButton3").click(function () {

                    $("#disType").text(response.data[3].fields.primary_type.name);

                });
                //button4
                $("#disasterButton4").click(function () {

                    $("#disType").text(response.data[4].fields.primary_type.name);

                });
                //button5
                $("#disasterButton5").click(function () {

                    $("#disType").text(response.data[5].fields.primary_type.name);

                });
                //button6
                $("#disasterButton6").click(function () {

                    $("#disType").text(response.data[6].fields.primary_type.name);

                });
                //button7
                $("#disasterButton7").click(function () {

                    $("#disType").text(response.data[7].fields.primary_type.name);

                });
                //button8
                $("#disasterButton8").click(function () {

                    $("#disType").text(response.data[8].fields.primary_type.name);

                });
                //button9
                $("#disasterButton9").click(function () {

                    $("#disType").text(response.data[9].fields.primary_type.name);

                });



            }



        });



});