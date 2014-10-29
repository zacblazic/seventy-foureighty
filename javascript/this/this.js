// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// In the global execution context (outside of any function), this refers to
// the global object, whether in strict mode or not.
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

// Inside a function, the value of this depends on how the function is called
function f1() {
  return this;
}

f1() == window; // global object

// You can set this to whatever you want inside the function, using strict mode
function f2() {
  "use strict";
  return this;
}

// If it's not set, remains undefined
f1() == undefined;

// In the following example, when o.f() is invoked, inside the function "this"
// is bound to the o object.
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37


// It doesn't matter how or where the function is defined. It only matters how
// the function was executed.
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37


// The same notion holds true for methods defined somewhere on the object's
// prototype chain. If the method is on an object's prototype chain, this refers
// to the object the method was called on, as if the method was on the object.
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5

/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38


/* Event handlers

   When a function is used as an event handler, its "this" is set to the element
   the event fired from (some browsers do not follow this convention for
   listeners added dynamically with methods other than addEventListener). */

// When called as a listener, turns the related element blue
function bluify(e){
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}

/* When code is called from an in–line handler, its this is set to the DOM
  element on which the listener is placed:

  <button onclick="alert(this.tagName.toLowerCase());">
    Show this
  </button>

  The above alert shows button. Note however that only the outer code has its
  this set this way:

  <button onclick="alert((function(){return this}()));">
    Show inner this
  </button>

  In this case, the inner function's this isn't set so it returns the
  global/window object (i.e. the default object in non–strict mode where this
  isn't set by the call).

*/
