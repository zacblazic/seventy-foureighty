# Regular Expressions

Regular expressions are patterns used to match character combinations in
strings. In JavaScript, regular expressions are also objects. These patterns
are used with the `exec` and `test` methods of `RegExp`, and with the `match`, `replace`,
`search`, and `split` methods of `String`.

## Creating Regular Expressions

You construct a regular expression in one of two ways:

Using a regular expression literal, as follows:

    var re = /ab+c/;

Regular expression literals provide compilation of the regular expression when the script is loaded. When the regular expression will remain constant, use this for better performance.

Calling the constructor function of the `RegExp` object, as follows:

    var re = new RegExp("ab+c");

Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

## Writing a Regular Expression Pattern
A regular expression pattern is composed of simple characters, such as /abc/, or a combination of simple and special characters, such as /ab*c/ or /Chapter (\d+)\.\d*/. The last example includes parentheses which are used as a memory device. The match made with this part of the pattern is remembered for later use, as described in Using Parenthesized Substring Matches.

### Using Simple Patterns

Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern /abc/ matches character combinations in strings only when exactly the characters 'abc' occur together and in that order. Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft." In both cases the match is with the substring 'abc'. There is no match in the string 'Grab crab' because while it contains the substring 'ab c', it does not contain the exact substring 'abc'.

### Using Special Characters

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, the pattern includes special characters. For example, the pattern /ab*c/ matches any character combination in which a single 'a' is followed by zero or more 'b's (* means 0 or more occurrences of the preceding item) and then immediately followed by 'c'. In the string "cbbabbbbcdebc," the pattern matches the substring 'abbbbc'.
