function createButtons(i, response) {
    var button = $('<button>').attr({
      id: "disasterButton" + i, //+ i to assign incremented id's
      class: "fluid ui teal button DISBUTTON"
    });
    $(button).text(response.data[i].fields.name);
    $("#disasterDiv").append(button);
  }
  
  function createEventListener(i, response) {
    $("#disasterButton" + i).click(function () {
      $("#disType").text(response.data[i].fields.primary_type.name);
      $("#disDate").text(response.data[i].fields.date.created.substring(0, 10));
      $("#disLocation").text(response.data[i].fields.primary_country.name);
      $("#disDescription").text(response.data[i].fields.description);
    });
  }
  
  //on ready
  $(document).ready(function () {
  
  
  
      //query for disasters
      var queryURL = "https://api.reliefweb.int/v1/disasters?profile=full&limit=10&sort[]=date:desc"
      
      
  
      //ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
      .then(function (response) {
  
        console.log(response.data)
  
      //iterate through the response data
      for (var i = 0; i < response.data.length; i++) {
        
        var countryName = response.data[i].fields.primary_country.name;
        
        
        //call createButtons
        createButtons(i, response);
        //ajax job call
        createEventListener(i, response);
      }
  
  
  
    });
  
  
  
  });