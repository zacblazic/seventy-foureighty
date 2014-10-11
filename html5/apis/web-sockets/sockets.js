$(document).ready(function() {

  // Add support for firefox
  var Socket = window.WebSocket || window.MozWebSocket;

  // Create the socket
  var socket = new Socket("ws://localhost:4001");

  log("Connecting to server...");

  socket.onopen = function() {
    log("Connected.");
  }

  socket.onclose = function() {
    log("Connection closed.")
  }

  socket.onmessage = function(event) {
    log("Server: " + event.data);
  }

  socket.onerror = function(event) {
    log("Error: " + event);
  }

  $("#send-button").click(function() {
    var message = $("#message").val();
    socket.send(message);
  });

  function log(message) {
    var item = $("<li>", { text: message });
    $("#message-log").append(item);
  }

});
