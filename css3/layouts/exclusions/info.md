# Exclusions

With CSS Exclusions, web authors can now wrap text so that it completely
surrounds elements, thereby avoiding the traditional limitations of floats.
Instead of limiting elements to floating either to the left or right relative
to their position in the document flow, CSS Exclusions can be positioned at a
specified distance from the top, bottom, left, or right sides of a containing
block, while remaining part of the document flow.

## Exclusion element
The -ms-wrap-flow property makes an element an exclusion element when it has a
computed value other than auto. This property specifies that the exclusion
element (the exclusion) can be positioned in various ways (described in the
following sections), and that inline content will wrap around the exclusion
in a way similar to how it wraps around floated elements.

## Exclusion area
The exclusion area is the area used for excluding inline flow content around
an exclusion element. In terms of the CSS box model, the exclusion area is
equivalent to the border box.

## Float area
The float area is the area used for excluding inline flow content around a
float element. By default, the float area is the float element's margin box.

## Content area
The content area is the area used for layout of the inline flow content of an
element. By default, the content area is equivalent to the content box.

## Wrapping context
The wrapping context of an element is a collection of exclusion areas, and
is used to wrap around inline flow content. An element wraps its inline flow
content in the area that corresponds to the subtraction of its wrapping context
from its own content area.

## Using Exclusions
### Wrap Flow

The `-ms-wrap-flow` property makes an element an exclusion element.

* `auto` - Initial value. For floated elements, an exclusion is created; for
all other elements, an exclusion is not created.

* `both` - Inline flow content can flow on all sides of the exclusion.

* `start` - Inline flow content can wrap on the start edge of the exclusion
area but must leave the area after the end edge of the exclusion area empty.

* `end` - Inline flow content can wrap after the end edge of the exclusion area
but must leave the area before the start edge of the exclusion area empty.

* `maximum` - Inline flow content can wrap on the side of the exclusion with
the largest available space for the given line, and must leave the other side
of the exclusion empty.

* `clear` - Inline flow content can only wrap on top and bottom of the
exclusion and must leave the areas to the start and end edges of the
exclusion box empty.

### Wrap Through
The `-ms-wrap-through` property specifies how content should wrap around an
exclusion element.

* `wrap` - Initial value. The element inherits its parent node's wrapping
context. Its descendant inline content wraps around exclusions defined outside
the element.
* `none` - The element does not inherit its parent node's wrapping context. Its
descendants are only subject to exclusion shapes defined inside the element.

### Wrap Margin

The `-ms-wrap-margin` property specifies a margin that is used to offset the
inner wrap shape from other shapes.
