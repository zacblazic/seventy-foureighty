
function messageHandler(event) {
  if (event.data == "close") {
    postMessage("Closed");
    this.close();
  } else {
    var iterations = event.data;
    if (iterations > 0) {
      fibSequence(iterations, showValue);
    }
  }
}

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
  postMessage(value);
}

addEventListener("message", messageHandler)
