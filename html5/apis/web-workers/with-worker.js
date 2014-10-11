$(document).ready(function() {

  var worker;

  $("#generate-button").click(function() {
    $("#sequence").empty();
    var iterations = parseInt($("#series-length").val());

    worker = new Worker("fib-worker.js")
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;

    worker.postMessage(iterations);
  });

  $("#terminate-button").click(function() {
    worker.terminate();
    $("#sequence").empty();
    showValue("Terminated");
  });

  $("#close-button").click(function() {
    worker.postMessage("close");
  });

  function messageHandler(event) {
    showValue(event.data);
  }

  function errorHandler(event) {
    console.err(event.message);
  }

  function showValue(value) {
    var item = $("<li>", {
      text: value
    });

    $("#sequence").append(item);
  }
});
