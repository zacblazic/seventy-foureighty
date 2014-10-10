$(document).ready(function() {
  var clicks = localStorage.clicks;
  if (!clicks) {
    clicks = 0;
  }

  $("#clicks-local").text(clicks);
  $("#click-button-local").click(function() {
    var clicks = localStorage.clicks;
    if (!clicks) {
      clicks = 0;
    }

    clicks++;
    localStorage.clicks = clicks;
    $("#clicks-local").text(clicks);
  });

  $("#clear-button-local").click(function() {
    localStorage.clear();
    $("#clicks-local").text("0");
  });

});
