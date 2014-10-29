## `pop()`
The pop() method removes the last element from an array and returns that element.

    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

    var popped = myFish.pop();
    console.log(myFish); // ['angel', 'clown', 'mandarin' ]
    console.log(popped); // 'sturgeon'

## `push()`
he push() method adds one or more elements to the end of an array and returns
the new length of the array.

    var sports = ['soccer', 'baseball'];
    var total = sports.push('football', 'swimming');

    console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
    console.log(total);  // 4

## `shift()`
The shift() method removes the first element from an array and returns that element.

    var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
    console.log('myFish before: ' + myFish);

    var shifted = myFish.shift();
    console.log('myFish after: ' + myFish);
    console.log('Removed this element: ' + shifted);

## `reverse()`
The reverse() method reverses an array in place.

    var myArray = ['one', 'two', 'three'];
    myArray.reverse();

    console.log(myArray) // ['three', 'two', 'one']


## `sort()`
Sorts the elements of an array in place and returns the array.

    var fruit = ['apples', 'bananas', 'Cherries'];
    fruit.sort(); // ['Cherries', 'apples', 'bananas'];

## `reduce()`
The reduce() method applies a function against an accumulator and each value of
the array (from left-to-right) has to reduce it to a single value.

    [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
      return previousValue + currentValue;
    });

## `join()`
The join() method joins all elements of an array into a string.

    var a = new Array('Wind', 'Rain', 'Fire');
    var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
    var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
    var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3

## `slice()`
The slice() method returns a shallow copy of a portion of an array into a new array object.

    // Our good friend the citrus from fruits example
    var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    var citrus = fruits.slice(1, 3);

    // citrus contains ['Orange','Lemon']

## `map()`

    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    // roots is now [1, 2, 3], numbers is still [1, 4, 9]
