# Prototypes

All objects have have common properties, such as:

* `valueOf`
* `constructor`
* `toLocaleString`
* `toString`
* `isPrototypeOf`
* `propertyIsEnumerable`
* `hasOwnProperty`

An object's parent is called it's `prototype`. All of the above methods come
from the `Object` prototype.

A `prototype` is like a blueprint object for the object we are trying to
create.

Passing down properties is called inheritance. This helps "over-coding".

## Native Prototypes
All object literals inherit directly from the `Object` prototype.

All native objects inherit from their own prototype.

### Array Prototype
For example `Array` objects inherit from the `Array` prototype and are given
the following properties & methods:

* `length`
* `pop()`
* `push()`
* `shift()`
* `reverse()`
* `sort()`
* `reduce()`
* `join()`
* `slice()`

### String Prototype
Same goes for string, which inherits from the `String` prototype:

* `length`
* `charAt()`
* `trim()`
* `concat()`
* `indexOf()`
* `lastIndexOf()`
* `toUpperCase()`
* `toLowerCase()`
* `substring()`
* `substr()`

### Number Prototype
Similarly numbers also have a prototype:

* `toFixed()`
* `toExponential()`
* `toPrecision()`


### Function Prototype
Finally, the function prototype also has some properties that are inherited:

* `name`
* `bind()`
* `call()`
* `apply()`

## Method & Property Storage

All methods and properties defined on an object's prototype are stored there.
They are not "copied" into the objects that are created from the prototype.

## Prototype Chain

If, for example you had a string called `name`, and tried to call
`hasOwnProperty()` on it. The `name` string will look up to the string prototype
and check if it has the method `hasOwnProperty()` defined. If not, it will then
look up again, this time to the `Object` prototype, where it will find it.

This is called looking up the prototype chain.

## Adding Inheritable Properties

If you need to have some common functionality for a certain object type, such
as a string. You can add it directly to its prototype.

For example, if we wanted to count certain letters in a string, without having
to redefine the `countAll(letter, string)` method for multiple string objects
you could just add it to the string prototype:

    String.prototype.countAll = function(letter) {
      var letterCount;
      for(var i = 0; i < this.length; i++) {
        if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
          letterCount++;
        }
      }

      return letterCount;
    };

## Using The `Object.create()` Method

The `Object.create()` method will create a new object, using the object passed
to it as the prototype for the new object.

    var shoe = { size: 6, gender: "women", construction: "slipper" };

    var magicShoe = Object.create(shoe);

    // Magic shoe now has all the properties that the shoe we defined has
    -> Object { size: 6, gender: "women", construction: "slipper" }

    // We can check if shoe is indeed the prototype for magicShoe
    shoe.isPrototypeOf(magicShoe) // true

    Object.prototype.isPrototypeOf(shoe); // also true

## Constructors

### Writing The Constructor
Allows us to set up inheritance while assigning specific property values.

    function Shoe(size, color, gender, construction) {
      // This refers to new object being created
      this.size = size;
      this.color = color;
      this.gender = gender;
      this.construction = construction;
      this.putOn = function() { console.log("Shoe's on!"); };
      this.takeOff = function() { console.log("Uh, what's that smell?"); };
    }

### Using The Constructor

    // New keyword builds a new instance of something
    var beachShoe = new Shoe(10, "blue", "women", "flipflop");

    console.log(beachShoe)

    // Notice the name of the object is Shoe
    -> Shoe {
      ....
    }

There's one problem here... where's the prototypal inheritance?

### Assigning A Prototype To A Constructor

    // The constructor can now lose some weight!
    function Shoe(size, color, gender, construction) {
      this.size = size;
      this.color = color;
      this.gender = gender;
      this.construction = construction;
    }

    // All shoes will inherit these functions
    Shoe.prototype = {
      this.putOn = function() { console.log("Shoe's on!"); };
      this.takeOff = function() { console.log("Uh, what's that smell?"); };
    }

    var beachShoe = new Shoe(10, "blue", "women", "flipflop");
    beachShoe.hasOwnProperty("construction"); // true

### Prototypes & `this` Keyword

Prototypes can refer to their instances to fetch data:

    Shoe.prototype = {
      this.putOn = function() { console.log("Your " + this.construction + " on!"); };
      this.takeOff = function() { console.log("Phew! Somebody's size " + this.size +
                                              "'s are fragrant!"); };
    }

## Useful `Object` Prototype Properties

* `valueOf()` - Returns the primitive value of a variable or property. It can be
  used on all native data types.

### `valueOf()` On Custom Objects

    var Tornado = function(category, affectedAreas, windGust) {
      this.category = category;
      this.affectedAreas = affectedAreas;
      this.windGust = windGust;
    };

    var cities = [["Kansas City", 465310], ["Topeka", 127939], ["Lenexa", 49398]];
    var twister = new Tornado("F5", cities, 220);

    twister.valueOf();

    // The default implementation of valueOf() will return the following
    -> Tornado {
      category: "F5",
      affectedAreas: Array[3],
      windGust: 220
    }

    // We can override the valueOf() for the Tornado prototype. Careful not
    // to override a prototype that you aren't supposed to, like Object's one.
    Tornado.prototype.valueOf = function() {
      var sum = 0;
      for(var i = 0; i < this.affectedAreas.length; i++) {
        sum += this.affectedAreas[i][1];
      }
      return sum;
    }

    // Now twister will make use of Tornado's valueOf() method
    twister.valueOf() // returns 641648

This works because the `valueOf()` method is found in the `Tornado` prototype,
which comes before the `Object` prototype's `valueOf()` method.

### Finding An Object's Constructor and Prototype

    var cities = [["Kansas City", 465310], ["Topeka", 127939], ["Lenexa", 49398]];
    var twister = new Tornado("F5", cities, 220);

    twister.constructor;

    // Returns the object's constructor
    -> function() {
      ....
    }

    twister.constructor.prototype;
    // Returns the prototype associated with that constructor
    -> Object {valueOf: function, toString: function}

If a prototype object is defined for a specific class, it will always be a property
of the class's constructor, which is just another function object.

    // Similarly you can use the __proto__ property to access the prototype of
    // an object
    twister.__proto__;

## Finding Properties

We can leverage the `hasOwnProperty()` method to find which prototype owns a
specific property.

    Object.prototype.findOwnerOfProperty = function(property) {
      var currentObject = this;
      while (currentObject !== null) {
        if (currentObject.hasOwnProperty(property)) {
          return currentObject;
        }
        currentObject = currentObject.__proto__;
      }
    }
