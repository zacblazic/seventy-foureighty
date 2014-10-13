# Borders

## Border Style

    border-style (all sides)
    border-[side]-style (specific side)

Possible values

    none
    hidden
    dotted
    dashed
    solid
    double
    groove
    ridge
    inset
    outset

## Border Width

    border-width (all sides)
    border-[side]-width (specific side)

Possible values

    [length]
    thin
    medium
    thick
    inherit

## Border Shorthand

    border: width style color
    border-[side]: width style color

* Style is required
* Default width is `medium`
* Default color is `currentColor`

## Border Radius

    border-radius: radius
    border-radius: top-left-and-bottom-right top-right-and-bottom-left
    border-radius: top-left top-right-and-bottom-left bottom-right
    border-radius: top-left top-right bottom-right bottom-left
    
    border-radius: (first radius values) / radius
    border-radius: (first radius values) / top-left-and-bottom-right top-right-and-bottom-left
    border-radius: (first radius values) / top-left top-right-and-bottom-left bottom-right
    border-radius: (first radius values) / top-left top-right bottom-right bottom-left

    border-radius: 20px; (round edges)
    border-radius: 50%; (round)
