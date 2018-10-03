
//var queryURL = "https://api.reliefweb.int/v1/disasters?appname=apidoc&limit=10&preset=latest&sort[]=date:desc&sort[]=title:asc&profile=list&fields[include][]=date.original"

//https://api.reliefweb.int/v1/reports?profile=full&limit=1

//var queryURL = "https://api.reliefweb.int/v1/disasters?appname=apidoc&?profile=full&limit=10&preset=latest&sort[]=date:desc&sort[]=title:asc"

//var queryURL ="https://api.reliefweb.int/v1/reports?appname=apidoc&filter[field]=disaster.name"

//https://api.reliefweb.int/v1/reports?appname=apidoc&limit=3&preset=latest&fields[include][]=url


var queryURL ="https://api.reliefweb.int/v1/disasters?profile=full&limit=10&sort[]=date:desc"


$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function (response) {
        

        
        console.log(response.data);
        
        for (var i = 0; i < response.data.length; i++) {

            console.log(i);

            

            //console.log(response.data[i].fields.country[0].name);
            console.log(response.data[i].fields.name);

            console.log(response.data[i].fields.primary_country.name);

            //console.log(response.data[i].fields.title);

            //console.log(response.data[i].fields.href);

            document.write(response.data[i].fields.description-html);
            


        }



    });

    