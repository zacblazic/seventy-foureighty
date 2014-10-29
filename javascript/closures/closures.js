
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

/* The solution to this puzzle is that myFunc has become a closure. A closure is
a special kind of object that combines two things: a function, and the
environment in which that function was created. The environment consists of
any local variables that were in-scope at the time that the closure was created.
In this case, myFunc is a closure that incorporates both the displayName
function and the "Mozilla" string that existed when the closure was created. */
