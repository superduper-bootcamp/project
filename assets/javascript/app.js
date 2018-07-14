console.log("start of app.js");
$(document).ready(function () {
  // Declaration of global variable "countryCode" to use in later searches
  var countryCode = "";
  
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
  
  // The following code returns a drop-down list of all countries -- i.e. this is a country selector
  $('#country').jeoCountrySelect({
    callback: function () {
      $("#country").removeAttr('disabled');
    }
  });

  // The following code returns the value selected from the drop-down list and holds it in variable countryCode
  $('#country').change(function() {
    countryCode = this.value;
    console.log(countryCode);
  })

  // The following code returns an of all possible hits on cities containing the value from the input box +/- countryCode

  $('#cityname-button').on('click', function (event) {
    event.preventDefault();
    var cityName = $('#cityName').val();
    console.log(cityName);

    jeoquery.getGeoNames('search', { name_equals: cityName, country: countryCode }, function (data) {
      console.log(data);
      var testData = data.geonames;
      var tBody = $("tbody");
      // The following code empties the results table before displaying fresh data each time the submit button is pressed
      tBody.empty();
      $.each(testData, function (index, val) {
        console.log(val.name, val.countryName, val.population, val.lat, val.lng);
        var geonameIdVar = val.geonameId;
        var toponymNameVar = val.toponymName;
        var adminName1Var = val.adminName1;
        var countryNameVar = val.countryName;
        var populationVar = val.population;
        var latVar = val.lat;
        var lngVar = val.lng;
        
        var tRow = $("<tr>");

        var geonameId = $("<td>").text(val.geonameId);
        var toponymName = $("<td>").text(val.toponymName);
        var adminName1 = $("<td>").text(val.adminName1);
        var countryName = $("<td>").text(val.countryName);
        var population = $("<td>").text(val.population);
        var lat = $("<td>").text(val.lat);
        var lng = $("<td>").text(val.lng);
        

        // Append the newly created table data to the table row
        tRow.append(geonameId, toponymName, adminName1, countryName, population, lat, lng);
        // Append the table row to the table body
        tBody.append(tRow);

      })   
    });
  })

  // TO DO: Create function to return wikipedia summary once geonameId is clicked  

   

})

