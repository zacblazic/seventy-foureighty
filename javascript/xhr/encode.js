$(document).ready(function() {

  var encodeUriButton = $("#encode-button");
  var decodeUriButton = $("#decode-button");
  var encodeUriComponentButton = $("#encode-component-button");
  var decodeUriComponentButton = $("#decode-component-button");
  var input = $("#input");
  var output = $("#output");

  encodeUriButton.click(function() {
    // Meant to encode an entire uri. Therefore does not encode special
    // characters that are valid for a url.
    output.val(encodeURI(input.val()));
    return false;
  });

  decodeUriButton.click(function() {
    output.val(decodeURI(input.val()));
    return false;
  });

  encodeUriComponentButton.click(function() {
    // Should be used to encode "components" that make up a uri. All special
    // characters are encoded.
    output.val(encodeURIComponent(input.val()));
    return false;
  });

  decodeUriComponentButton.click(function() {
    output.val(decodeURIComponent(input.val()));
    return false;
  });

});
