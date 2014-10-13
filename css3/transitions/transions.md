# Transitions

Transitions enable you to create simple animations by smoothly changing CSS
property values over a specified duration of time. For instance, you could
vary the size and color of an object over a period of 10 seconds.

## The `transision property` property

Identifies one or more CSS properties to which the transition will be applied.

Values:
* Comma separated list of CSS properties
* `none` No transition effect.
* `all` This is default. Every property will have transition effect applied.

## The `transition-duration` property

Length of time that a transition takes.

Specified as a unit of time (ms or s)

## The `transition-timing-function` property

Enables a transition to change speed over its duration by describing how the
intermediate values used during a transition will be calculated.

You can either specify the curve explicitly by using the cubic-bezier function
and entering the four values manually, or you can choose from several function
keywords, each of which corresponds to a commonly used timing function.

* `cubic-bezier(x1,y1,x2,y2)`  The four parameters of this function must be
  floating point values between 0 and 1, inclusive. The values correspond to
  the x- and y-coordinates of the P1 and P2 points of the cubic Bézier curve.
  For properties other than opacity and color, the cubic-bezier curve function
  accepts y-coordinates outside the standard range of between 0 and 1. This
  enables you to create "elastic" or "bounce" transition effects.
* `ease`  This is the default value. This timing function gradually increases
  in speed at the start, animates at full speed, and then gradually decreases
  in speed at the end.
* `linear`  This timing function has a consistent speed from start to end.
* `ease-in`  This timing function gradually increases in speed at the start.
* `ease-out`  This timing function gradually decreases in speed at the end.
* `ease-in-out`  This timing function gradually increases in speed at the start
 and then gradually decreases in speed at the end.
* `steps`  This timing function defines a stepped timing function, and takes
 two parameters. The first parameter specifies the number of intervals; the
 optional second parameter specifies the point in the interval where the
 property value changes. The second parameter is constrained to the values
 start or end, which is the default.

## The `transition-delay` property

Enables you to delay the start of a transition, or make it appear as if the
transition is already in progress. If the value for the transition-delay
property is a negative value, the transition will execute as soon as it is
applied, but will appear to have begun execution at the specified offset,
or during its play cycle.

Specified as a unit of time (ms or s)

## The `transition` property

Combines the four transition properties described previously into a single
property. Properties must be space-delimited.

If you have more than one set of the four transition property values, you must
separate each set using a comma.

## Tips

In addition to applying transitions to the more basic CSS properties such as
positioning, color, fonts, and so on, you can also apply transitions to
newly-supported CSS properties such as opacity and border-radius, and to 2-D
and 3-D transforms.

Be aware that, when you interrupt a transition, it reverses automatically.


## What can be transitioned?

Anything that has an intermediate value

* Percentages
* Min and max
* Units

## Transition Features & Limitations

* Single iteration
* Reverse goes to initial state
* No granular control
* Limited methods of initiation
* Can't force it to finish
