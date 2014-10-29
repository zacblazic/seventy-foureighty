$(document).ready(function() {

  var logList = $("#fetch-log");
  var fetchXmlButton = $("#fetch-xml-button");
  var fetchJsonButton = $("#fetch-json-button");

  var log = function(message) {
    var item = $("<li>", {
      text: message
    });

    logList.append(item);
  }

  fetchXmlButton.click(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Cape Town,za&mode=xml", true);
    xhr.responseType = "text";
    xhr.onload = function() {
      // We are receiving text here and then parsing the xml, but if we wanted
      // to, we could use the responseXML property, which contains already
      // parsed xml.
      if (this.status == 200) {
        // Parse the xml
        var parser = new DOMParser();
        var xml = parser.parseFromString(this.response, "text/xml");

        // Serialize the xml to string
        var xmlSerializer = new XMLSerializer();
        log(xmlSerializer.serializeToString(xml));
      }
    };

    xhr.send();
  });

  fetchJsonButton.click(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Cape Town,za");
    xhr.onload = function() {
      if (this.status == 200) {

        // Parse the JSON
        var json = JSON.parse(this.response);
        // Access object properties etc.

        // Stringify the JSON
        var jsonString = JSON.stringify(json);
        log(jsonString);
      }
    }

    xhr.send();
  });

});
