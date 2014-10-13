# Shadows

## Text Shadows
Syntax

    text-shadow: left top blur color;

Transparent

    .transparent {
      text-shadow: 0 5px 1px rgba(0, 0, 0, 0.2);
    }

Solid

    .solid {
      text-shadow: 0 5px 1px #999;
    }

Multiple text shadows (drawn from bottom to top)

    .textshadow { text-shadow:
        0 1px #cccccc,
        0 2px #c9c9c9,
        0 3px #bbbbbb,
        0 4px #b9b9b9,
        0 5px #aaaaaa,
        0 6px  1px  rgba(0, 0, 0, 0.1),
        0 0    5px  rgba(0, 0, 0, 0.1),
        0 1px  3px  rgba(0, 0, 0, 0.3),
        0 3px  5px  rgba(0, 0, 0, 0.2),
        0 5px  10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2),
        0 20px 20px rgba(0, 0, 0, 0.15);
    }

## Box Shadows
Syntax

    box-shadow:
      [outset:] left
                top
                blur
                spread /* amount of solid until blur */
                color
      [inset: left top blur spread color]

      outset = outside (don't need to define "outset")
      inset = inside

      box-shadow: 0 0 10px red; /* shadow all sides */

You can make multiple "borders" without an actual border.
