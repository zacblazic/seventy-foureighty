"use strict";

(function() {

  /* Regular expressions are patterns used to match character combinations in
     strings. In JavaScript, regular expressions are also objects.

     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  */


  // There are two ways to create
  // Regular expression literal
  var regexLiteral = /ab+c/;

  // Constructor of the RegExp object
  var regexObject = new RegExp("ab+c");

  // Simple patterns are used to find a direct match
  // The following regex will only match the exact characters "abc", together,
  // and in that order.
  var simpleRegex = /abc/;

  // Special characters allow you to do more than a straight match, such as
  // finding one or more characters, or even validating email addresses.

  // The following example will match the character "a" followed by zero or more
  // "b" and directly after that, a "c" must follow.
  var specialRegex = /ab*c/

  /*
    Basic special characters:

    \ - Used to escape other characters.
    ^ - Matches the beginning of input (different meaning in character sets).
    $ - Matches the end of input.
    * - Matches the preceeding character 0 or more times. Same as {0,}
    + - Matches the preceeding character 1 or more times. Same as {1,}
    ? - Matches the preceeding character 0 or 1 time. Same as {0,1}. When used
        immediately after a quantifier (*, +, ?, or {}) makes the it non-greedy.
    . - Matches any single character except the newline character.
    (x) - Matches "x" and remembers the match (capturing parentheses).
    (?:x) - Matches "x" but does not remember the match (non-capturing
            parentheses). This allows you to define subexpressions, so that you
            can use special characters with groups of characters.
    x(?=y) - Matches "x" only when followed by a "y"
    x(?!y) - Matches "x" only when not followed by a "y"
    x|y - Matches either "x" or "y"
    {n} - Matches exactly n occurrences of the preceding character
    {n,m} - Matches at least n and at most m occurrences of the preceding
            character. When m is zero, it can be omitted.
    [xyz] - Character set. Matches any one of the characters in the brackets,
            including escape sequences. Special characters don't need escaping
            inside a characer set. Can specify a range using hypen.
    [^xyz] - Negated character set. Matches anything that is not enclosed in
             the brackets. Rules of character set apply.
    [\b] - Matches backspace. Requires the brackets.
    \b - Matches a word boundary. Matches the position where a word character
         is not followed or preceeded by another word-character. Note that a
         matched word boundary is not included in the match.
    \B - Matches a position where the previous and next character are of the
         same type: Either both must be words, or both must be non-words. The
         beginning and end of a string are considered non-words.
    \d - Matches a digit character. Equivalent to [0-9].
    \D - Matches any non-digit character. Equivalent to [^0-9].
    \s - Matches a single white space character, including space, tab, form
         feed, line feed.
    \S - Matches a single character other than white space.
    \w - Matches any alphanumeric character including the underscore.
    \W - Matches any non-alphanumeric character.

  */



  /*

    Regex methods:

    exec - A RegExp method that executes a search for a match in a string. It
           returns an array of information.

    test - A RegExp method that tests for a match in a string. It returns true
           or false.

    match -	A String method that executes a search for a match in a string. It
            returns an array of information or null on a mismatch.

    search - A String method that tests for a match in a string. It returns the
            index of the match, or -1 if the search fails.

    replace - A String method that executes a search for a match in a string,
              and replaces the matched substring with a replacement substring.

    split - A String method that uses a regular expression or a fixed string to
            break a string into an array of substrings.


    When you want to know whether a pattern is found in a string, use the test
    or search method; for more information (but slower execution) use the exec
    or match methods.

  */

  var myRe = /d(b+)d/g;
  var myArray = myRe.exec("cdbbdbsbz");

  // My array contains the matched substrings
  console.log("matched string and remembered substrings = " + JSON.stringify(myArray));

  // The index of the match in the input string
  console.log("index = " + myArray.index);

  // The original input string.
  console.log("input = '" + myArray.input + "'");

  // The index at which to start the next match. (This property is set only if
  // the regular expression uses the g option
  console.log("lastIndex = " + myRe.lastIndex);

  // The original regex pattern
  console.log("source = '" + myRe.source + "'");

  // Using replace with remembered substrings. $1 and $2 denote matched substrings
  var re = /(\w+)\s(\w+)/;
  var str = "John Smith";
  var newstr = str.replace(re, "$2, $1");
  console.log(newstr);

  /*
    Regex flags:

    g	- Global search.
    i -	Case-insensitive search.
    m -	Multi-line search.
    y -	Perform a "sticky" search that matches starting at the current position
        in the target string.

    Usage:

    var re = /pattern/flags;
    var re = new RegExp("pattern", "flags");
  */

  // Matches all words, seperated by spaces, as opposed to just the first
  var re = /\w+\s/g;
  var str = "fee fi fo fum";
  var myArray = str.match(re);
  console.log(myArray);


})();
