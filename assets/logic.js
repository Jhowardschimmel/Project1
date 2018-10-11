function createButtons(i, response) {
  var button = $('<button>').attr({
    id: "disasterButton" + i, //+ i to assign incremented id's
    class: "fluid ui orange button DISBUTTON"
  });
  $(button).text(response.data[i].fields.name);
  $("#disasterDiv").append(button);
}




function createEventListener(i, response, myMap, lat, lon) {
  //console.log(response);
  $("#disasterButton" + i).click(function () {
    $("#disType").text(response.data[i].fields.primary_type.name);
    $("#disDate").text(response.data[i].fields.date.created.substring(0, 10));
    $("#disLocation").text(response.data[i].fields.primary_country.name);
    $("#jobsInfo").text("");
    $("#disDescription").text(response.data[i].fields.description);
    myMap(lat, lon);
    var localJobs = response.data[i].fields.primary_country.name;
    var jobsQuery = "https://api.reliefweb.int/v1/jobs?appname=apidoc&filter[field]=country&filter[value]=" + localJobs;
    $.ajax({
      url: jobsQuery,
      method: "GET"
    })
      .then(function (response) {
        //console.log(response);
        
        for (j = 0; j < response.data.length; j++) {
         // console.log(response.data[j].fields.title);
         console.log(response.data[j].href);
          var newList = $("#jobsInfo").append(
            $("<li>").text(response.data[j].fields.title)
          )
        }
      });

  });
}

//on ready
$(document).ready(function () {

  function myMap(lat, lon) {
    var mapProp = {
      center: new google.maps.LatLng(lat, lon),
      zoom: 6,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
  myMap();

  //query for disasters
  var queryURL = "https://api.reliefweb.int/v1/disasters?profile=full&limit=10&sort[]=date:desc"



  //ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {

      //console.log(response.data)

      //iterate through the response data
      for (var i = 0; i < response.data.length; i++) {

        var countryName = response.data[i].fields.primary_country.name;
        var lat = response.data[i].fields.primary_country.location.lat;
        var lon = response.data[i].fields.primary_country.location.lon;
        //console.log(response.data[i].fields.primary_country.location.lat);

        //call createButtons
        createButtons(i, response);
        //ajax job call
        createEventListener(i, response, myMap, lat, lon);
      }



    });



});