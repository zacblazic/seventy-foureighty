$(document).ready(function() {
  var clicks = sessionStorage.clicks;
  if (!clicks) {
    clicks = 0;
  }

  $("#clicks-session").text(clicks);
  $("#click-button-session").click(function() {
    var clicks = sessionStorage.clicks;
    if (!clicks) {
      clicks = 0;
    }

    clicks++;
    sessionStorage.clicks = clicks;
    $("#clicks-session").text(clicks);
  });
});
