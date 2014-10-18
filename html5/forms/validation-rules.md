# Native Validation Rules

## `valueMissing`

Applied when the `required` attribute is used

Returns true if element marked as `required` has an empty `value`

## `typeMismatch`

Returns true if the `value` of the element is not of the correct type

The following example will return true because cheese is not a valid url:

    <input type="url" value="cheese" />

## `patternMismatch`

Returns true if elements `value` does not match against the regular expression
in the `pattern` attribute

This example will return true because the `value` contains numbers, which fails
the alpha-only regular expression:

    <input type="text" pattern="/^[A-z]+$/" value="1234" />

## `tooLong`

Returns true when `value` of element is longer than defined in `maxlength`
attribute

## `rangeUnderflow`

Returns true when a `range` element's `value` is less than the `min` attribute

  <input type="range" min="5" max="10" value="0" />

## `rangeOverflow`

Returns true when a `range` element's `value` is more than the `max` attribute

  <input type="range" min="5" max="10" value="20" />

## `stepMismatch`

Returns true when a `range` element's `value` is impossible for given the
`step` value

## `valid`

Returns true when all other rules are false
