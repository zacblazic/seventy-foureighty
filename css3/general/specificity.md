# Specificity

## ID

IDs have a weight of 1-0-0

`#my-id`

Since an ID is very specific, try to avoid them if you're not targeting a
specific part of the page, such as a widget. Prefer classes.

## Class

Classes, including pseudo classes have a weight of 0-1-0

`.my-class`
`:first-child`

Attribute selectors also have a weight of 0-1-0

## Element

Elements have a weight of 0-0-1

## In-line

In-line styles have a specificity of 1-0-0-0


## `!important`

The important value has a specificity of 1-0-0-0-0

## Others

* Universal selector `*` has no value
* Relational operators (`~`, `>`, `+`) have no value
  `ul li` 0-0-2
  `ul > li` 0-0-2

* `:not` has no value, but parameter does
* Specificity is not inheritance
