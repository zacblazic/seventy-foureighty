$(document).ready(function() {

  var logList = $("#fetch-log");

  function log(message) {
    var item = $("<li>", {
      text: message
    });

    logList.append(item);
  }

  // Get the cape town weather
  $("#ct-weather-button").click(function() {

    // Long-hand approch to performing a get operation
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=Cape%20Town,za",
      // Using success & error callbacks
      success: function(data) {
        log(JSON.stringify(data));
      },
      error: function(err) {
        log(JSON.stringify(err));
      }
    });
  });

  // Get the johannesburg weather
  $("#jhb-weather-button").click(function() {
    // Short-hand get
    $.get("http://api.openweathermap.org/data/2.5/weather?q=Johannesburg,za")
      // Using the returned promise to await the call to resolve
      .done(function(data) {
        log(JSON.stringify(data));
      });
  });

  // Posting to an api. Not yet implemented.
  $("#post-button").click(function() {
    var data = {
      name: "John",
      age: 24
    };

    // Long-hand post
    $.ajax({
      type: "POST",
      url: "http://example.com/api/users",
      data: data,
      success: function() {},
      error: function(e) { log(e) }
    });

    // Short-hand post
    $.post("http://example.com/api/users", data)
      .done(function(data) {
        // Do something
        log(data);
      });

  });

});
