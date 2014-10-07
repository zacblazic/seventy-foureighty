// Get an element by its id.
// This was the only native selector in the past.
var log = document.getElementById("log");

// Get elements by their class name.
// Not a css selector, therefore you must only pass the class name.
var items = document.getElementsByClassName("item");

// This is a selector function that accepts css 3 selectors.
// Only returns a single result. In the case that there are many matches,
// only the first will be returned.
var div = document.querySelector("#div");


// This function is the same as the previous except returns more than one
// element.
var lists = document.querySelectorAll("li")

// Previously you would have to call these selector functions off of
// the document object. However, you can now call them on any element.
// This allows for narrowing of queries without having to start from the root
// of the document.
var result = document.getElementById("result");
var divs = result.querySelectorAll("div");
var log = result.querySelector("#log");

// If multple elements are returned from querySelectorAll, they are stored in
// an object of type NodeList. Iteration can be done using either a for loop.
for (var i = 0; i < divs.length; i++) {
  // Do something cool.
}

// Or Array's forEach method.
Array.prototype.forEach(divs, function(div) {
  // Do something even cooler.
});


// Results returned from getElementByClassName is a "live" result. This means
// that the result is immediately updated when the underlying DOM is modified.


// This is opposed to the results returned from querySelectorAll which is a
// "static" result. These result sets are essentially snapshots of the DOM at
// a certian point in time. 
