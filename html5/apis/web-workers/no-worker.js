$(document).ready(function() {

  $("#generate-button").click(function() {
    $("#sequence").empty();
    var iterations = parseInt($("#series-length").val());
    fibSequence(iterations, showValue);
  });

  function fibNext(value) {
    if (value == 0 || value == 1) {
      return 1;
    }
    return fibNext(value - 1) + fibNext(value - 2);
  }

  function fibSequence(iterations, show) {
    for(var i = 0; i < iterations; i++) {
      var value = fibNext(i);
      show(value);
    }
  }

  function showValue(value) {
    var item = $("<li>", {
      text: value
    });

    $("#sequence").append(item);
  }
});
