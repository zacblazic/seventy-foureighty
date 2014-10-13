# Gradients

Can be use anywhere an image can be used
  * `background-image`
  * `list-style-type`
  * `border-image`
  * `content`
  * `cursor`

Four gradient types
 * `linear-gradient()`
 * `repeating-linear-gradient()`
 * `radial-gradient()`
 * `repeating-radial-gradient()`

## Linear Gradient

In a linear gradient, colors transition smoothly along a line. Linear gradients
are created by first specifying a gradient line for the gradient to follow,
and then the two or more color stop points, separated by commas.

    linear-gradient(<angle> | to <term>, <colorstop>, <colorstop>)

### Angle

The angle that the gradient line should assume

"0deg" points upward and positive angles increase in a clockwise direction.
Therefore, "90deg" points toward the right, "180deg" points downward, and so on.

### Side / Corner

Optional value that specifies an ending corner or side for the gradient.
This value begins with "to", which is followed by one or two of the following
keywords. Including one keyword specifies an ending side, and two keywords
specify an ending corner.

* The following values can be used as the first value only:
  * left  Indicates gradient ends on the left.
  * right  Indicates gradient ends on the right.
* The following values can be used as the second value only:
  * top  Indicates gradient ends on the top.
  * bottom  Indicates gradient ends on the bottom.
* Not including any keywords or angle is equivalent to "to bottom".

### Color Stop

At least two color stops are required. Each color stop has one or two
components—a color component and an optional position component.

The first component defines the color component of a stop point for
the gradient. Each stop point has its own designated color, and the
area between each point is filled with a continuous color transition
from one to the other. This value can be any supported color value.

Each stop point can have an optional percentage or supported length value
that indicates where along the gradient line to place the color stop.
"0%" (or "0px", "0em", and so on) indicates the starting point (or side);
"100%" indicates the ending point (or side).

* Defines where a color is changing over to another.
* From 0 to first color stop, the color will be solid.
  Same for last stop (90 - 100).
* If you don't specify color stop length, it will divide them evenly:


    background-image:
    linear-gradient(top,
      red, /* 0% */
      orange, /* 20% */
      yellow, /* 40% */
      green, /* 60% */
      blue, /* 80% */
      purple /* 100% */
    );

* Hard colors stops:


      background-image:
        linear-gradient(to bottom,
          red 20%,
          orange 20%,
          orange 40%,
          yellow 40%,
          yellow 60%,
          green 60%,
          green 80%,
          blue 80%
      );


## Radial Gradients

Radial gradients emerge from a single point, and then smoothly spread outward
in a circle or ellipse.

    radial-gradient(<shape> || <size>, at <position>, at <position>, <color-stop>, <color-stop>)

### Shape

Specifies the ending shape of the gradient. If this value is omitted, the
ending shape is a circle if the size parameter is a single length value,
and an ellipse otherwise.
* `ellipse` Indicates gradient is in the shape of an ellipse.
* `circle` Indicates gradient is in the shape of an circle.

### Size

Optional value that specifies the size of the gradient's ending shape. If this
value is omitted, it defaults to farthest-corner.

* Lengths

One or two space-delimited length values or two percentages.
If one length value is specified, it indicates the radius of the circle.
If two values (length or percent) are specified, the first value represents the horizontal radius, and the second the vertical radius.
Percentage values are relative to the corresponding dimension of the gradient box. Percentages can only be used to specify the size of an elliptical gradient, not a circular one.

* closest-side  For circular gradients, this value indicates that the ending-shape is circle sized so that it exactly meets the side of the box closest to its center. For elliptical gradients, the gradient-shape is an ellipse size so that it exactly meets the vertical and horizontal sides of the box closest to its center.
* closest-corner  Sizes the gradient-shape so that it exactly meets the closest corner of the box from its center. For elliptical gradients, the gradient-shape has the same ratio of width to height that it would if closest-side was specified.
* farthest-side  Similar to closest-side, except the gradient-shape is sized to meet the side of the box that is farthest from its center (for circular gradients) or the farthest vertical and horizontal sides (for elliptical gradients).
* farthest-corner  Sizes the gradient-shape so that it exactly meets the farthest corner of the box from its center. For elliptical gradients, the gradient-shape has the same ratio of width to height that it would if farthest-side was specified.

### Position

Optional value that specifies the center of the gradient. This value can take
the same values as the background-position property. If this value is omitted, it defaults to center.

### Color stop

At least two color stops are required. Each color stop has one or two
components—a color component and an optional position component.

The first component defines the color component of a stop point for the
gradient. Each stop point has its own designated color, and the area between
each point is filled with a continuous color transition from one to the other.
This value can be any supported color value.

The second component is an optional percentage or decimal value that indicates
where along the gradient ray (similar to a gradient line in a linear-gradient,
but from the center outward) to place the color stop. "0%" indicates the
start of the gradient ray, and "100%" indicates the point where the gradient
ray intersects the ending shape. For instance, a value of "20%" indicates
the color stop should be placed at a point 20% of the length of the gradient
ray, starting from the beginning of the line. Values can be negative, which
indicates that the specified color for that value is at mid-transition to the
next color at the center of the gradient, so the visible color at the center
will be somewhere between the specified color and the next color. Values can
be greater than 100%, which specifies a location a correspondingly greater
distance from the center of the gradient.

# Repeating Gradients

The syntax of each of the repeating gradient properties is identical to its non-repeating sibling.
