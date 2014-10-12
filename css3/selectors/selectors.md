# Selectors

## Basic Selectors

    <ul>
      <li id="my-id" class="my-class">item 1</li>
      <li class="my-class">item 2</li>
      <li>item 3</li>
    </ul>

    #my-id      /* id */
    .my-class   /* class */
    li          /* element */

## Relational Selectors
`ul li`

* Descendant selector
* Matches nested `<li>`s

`ol > li`

* Child selectors
* Matches `<li>`s in `<ol>` but not nested <p>

`li.my-class + li`  
* Adjacent sibling selector
* Matches the immediate sibling after the selector on the left

`li.my-class ~ li`
* General sibling selector
* Matches all siblings after selector on the left

## Attribute Selectors

`element[attribute]`
* Select elements with the named attribute


    img[alt] /* Selects images with an alt attribute */
    form [type] /* Selects all elements with a type attribute within the form */

`element[attribute=value]`
* Selects elements that have an attribute with the exact (case-sensitive if
  attribute is case-sensitive) value

`element[attribute|=value]`
* Selects elements that have an attribute matching a certain value, or beginning with
  a certain value followed by a dash


    p[lang|="en"] /* Selects <p lang="en-us"> and <p lang="en-uk"> */


`element[attribute~=value]`
* Selects elements whose attribute has within its value the space-separated full word.


    a[title~="more"] /* Selects <a title="Need more info?"> */

`element[attribute^=value]`
* Selects elements whose attribute starts with the value

`element[attribute$=value]`
* Selects elements whose attribute ends with the value

`element[attribute*=value]`
* Selects elements whose attribute contains (anywhere) the value

Note: You can match multiple attribute
`element[attribute][attribute]`

## Pseudo Classes

Based on current state of element

    :enabled
    :disabled
    :checked

### Form Pseudo Classes

    :valid
    :invalid
    :required
    :optional
    :indeterminate (level 4)

    :in-range
    :out-of-range
    :read-only
    :read-write

    :default

### Structural Pseudo Classes
* Targets elements on the page based on their relationships to other elements
* Updates dynamically if page updates
* Reduces need for extra markup or classes


    :nth-child()
    :nth-last-child()
    :nth-of-type()
    :nth-last-of-type()

    :first-child
    :last-child
    :first-of-type
    :last-of-type
    :only-child
    :only-of-type

### Negation & Empty

    :not

* Doesn't add any specificity
* Can't use relational selectors (`>`,`~`,`+`)


    :empty

* Matches elements with empty text/children
* Comments don't count as content and therefore matches too

    :root

### Other Pseudo Classes

    :lang

* Anything with lang attribute set


    :target

* Targets content that has been selected by clicking an anchor


    :link
    :visited
    :hover
    :focus
    :active

### Root

Selects the document root, which is `<html>`

* Can declare `font-size` on `:root` if using `rem` units
* Allows you to style head

## Pseudo Elements

Pseudo classes select elements that exist.
Pseudo elements create fake elements you can style.

    ::first-line
    ::first-letter
    ::before
    ::after
    ::selection

* Need to use single colon in IE
