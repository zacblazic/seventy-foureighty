# Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is
used when talking about design and layout.

The CSS box model is essentially a box that wraps around HTML elements, and it
consists of: margins, borders, padding, and the actual content.

The box model allows us to add a border around elements, and to define space
between elements.

## Components

* Content - The content of the box, where text and images appear
* Padding - Clears an area around the content. The padding is transparent
* Border - A border that goes around the padding and content
* Margin - Clears an area outside the border. The margin is transparent

## Calculating Width
The total width of an element should be calculated like this:

    Total element width = width +
                          left padding +
                          right padding +
                          left border +
                          right border +
                          left margin +
                          right margin

## Calculating Height
The total height of an element should be calculated like this:

    Total element height = height +
                           top padding +
                           bottom padding +
                           top border +
                           bottom border +
                           top margin +
                           bottom margin
