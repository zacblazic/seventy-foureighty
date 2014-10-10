$(document).ready(function() {
  var watchId;

  $("#get-location-button").click(function() {

    // Setup location options
    var options = {
      enableHighAccuracy: true,
      maxAge: 10000,
      timeout: 10000
    }

    navigator.geolocation.getCurrentPosition(showPosition, positionError, options);
  });

  $("#watch-location-button").click(function() {
    if (!watchId) {
      // Start watching
      watchId = navigator.geolocation.watchPosition(showPosition, positionError);

      // Update button to watching state
      $(this).val("Stop Watching");
      $(this).removeClass("btn-primary");
      $(this).addClass("btn-default");

      // Disable other options
      $("#get-location-button").attr("disabled", true);

    } else {
      // Clear the watch
      navigator.geolocation.clearWatch(watchId);
      watchId = null;

      // Update button to idle state
      $(this).val("Watch Location");
      $(this).removeClass("btn-default");
      $(this).addClass("btn-primary");

      $("#get-location-button").removeAttr("disabled");
    }
  });

  function showPosition(position) {
    console.log("Updated location...");

    var coords = position.coords;

    // Longitude & latitude is expressed as decimals
    // These values are guaranteed to be returned
    $("#latitude").val(coords.latitude);
    $("#longitude").val(coords.longitude);

    // Value in meters of actualy location with 95% accuracy
    $("#accuracy").val(coords.accuracy);

    // Height of device in meters
    $("#altitude").val(coords.altitude);

    // Accuracy of altitude in meters
    $("#altitude-accuracy").val(coords.altitudeAccuracy);

    // Direction heading towards in degrees relative to true north
    $("#heading").val(coords.heading);

    // Ground speed in meters per sec
    $("#speed").val(coords.speed);

    // Date & time that coords were calculated
    $("timestamp").val(coords.timestamp);
  }

  function positionError(error) {
    switch(error.code) {
      case 0: console.log("Unknown error");
        break;
      case 1: console.log("User chose to not share location");
        break;
      case 2: console.log("Unable to determine location");
        break;
      case 3: console.log("Request to determine location timed out");
        break;
    }
  }
});
