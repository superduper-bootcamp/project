// This is JS code for the project by team SuperDuper! July 5, 2018 -->
// UofT SCS Coding Bootcamp

$(document).ready(function () {
  // Declaration of GLOBAL VARIABLES that will be available throughout the application
  var countryCode = "";
  var countReturnedRows = 0;
  var cityName = "";
  
  // Initialize Firebase with superduper-team-project credentials
  var config = {
    apiKey: "AIzaSyBFIjYm2V3clPAGbA2I4Ak_XaLo4587s6s",
    authDomain: "superduper-team-project.firebaseapp.com",
    databaseURL: "https://superduper-team-project.firebaseio.com",
    projectId: "superduper-team-project",
    storageBucket: "superduper-team-project.appspot.com",
    messagingSenderId: "144152945917"
  };
  firebase.initializeApp(config);

  // The following code returns a drop-down list of all countries -- i.e. this is the country selector
  $('#country').jeoCountrySelect({
    callback: function () {
      $("#country").removeAttr('disabled');
    }
  });
  
  // The following code returns the value selected from the drop-down list and holds it in variable countryCode
  $('#country').change(function() {
    countryCode = this.value;
  })

  // The following code returns a list of all possible hits on locations containing the value from the input box +/- countryCode
  $('#cityName-button').on('click', function (event) {
    event.preventDefault();
    var cityName = $('#cityName').val();
    
    jeoquery.getGeoNames('search', { name_equals: cityName, country: countryCode }, function (data) {
      console.log(data);
      var geonamesData = data.geonames;
      var resultsData = data.totalResultsCount;
        if(resultsData <= "1") {
          $("#resultsText").text("Please try entering another location");
        }
      $('#cityName').val('');
      var tBody = $("tbody");

      // The following code empties the results table before displaying fresh data each time the submit button is pressed
      tBody.empty();
      
      // Filter out all destinations that have ZERO population and do correct calculation of possible matches
      $.each(geonamesData, function (index, val) {
        console.log(val.name, val.countryName, val.population, val.lat, val.lng);
        var geonameIdVar = val.geonameId;
        var toponymNameVar = val.toponymName;
        var adminName1Var = val.adminName1;
        var countryNameVar = val.countryName;
        var populationVar = val.population;
        var latVar = val.lat;
        var lngVar = val.lng;
       
        var tRow = $("<tr>");

          if (populationVar <= "1") {
          }
          else
          { 
        var geonameId = $("<td>").text(val.geonameId);
        var toponymName = $("<td>").text(val.toponymName);
        var adminName1 = $("<td>").text(val.adminName1);
        var countryName = $("<td>").text(val.countryName);
        var population = $("<td>").text(val.population);
        var lat = $("<td>").text(val.lat);
        var lng = $("<td>").text(val.lng);

        // Build the url for the wikipedia reference
        // console.log(locationChoice);
        var wikiUrl = "https://en.wikipedia.org/wiki/";
        var locationChoice = (val.toponymName + ",_" + val.adminName1);
        wikiUrl = wikiUrl + locationChoice;
        
        var select = $("<td>").text(wikiUrl);
      
        // TODO: Build a function so that the user can click on the wikipage url  
        countReturnedRows++;
          
        $("#resultsText").text("There are " + countReturnedRows + " possible matches for: " + "'" + cityName + "'");
        

        // Append the newly created table data to the table row
        tRow.append(toponymName, adminName1, countryName, population, select);
        // Append the table row to the table body
        tBody.append(tRow);

         
      }
    }) 

  // This code will clear the search box and table when the clear button is pressed
  $('#clearSearch-button').on('click', function (event) {
    event.preventDefault();
    $('#cityName').val('');
    tBody.empty();
    countReturnedRows = "";
    $("#resultsText").empty();
    })
    
  });
  })
})

