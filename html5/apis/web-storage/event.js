$(document).ready(function() {
  var text = localStorage.text;
  if (text) {
    $("#event-text").val(text);
  }

  $("#add-button-event").click(function() {
    var text = $("#event-text").val();
    localStorage.text = text;
  });

  $("#clear-button-event").click(function() {
    localStorage.clear();
    $("#event-text").val("");
  });

  if (typeof(window.onstorage) == null) {
    var warning = $("<div>", {
      class: "alert alert-warning",
      text: "This functionality requires IE9+"
    });

    $("#event-panel .panel-body").prepend(warning);
  } else {
    // Bubbling vs capturing?
    window.addEventListener("storage", showStorageEvent, false);
  }

  function showStorageEvent(event) {
    $("#event-key").text(event.key);
    $("#event-new").text(event.newValue);
    $("#event-old").text(event.oldValue);
    $("#event-url").text(event.url);
    // event.storageArea <- generic reference to either session or local storage
  }
});
