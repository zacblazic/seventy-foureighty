# Colors

## Formats

    color: white;
    color: #fff
    color: #fffff;
    color: rgb(255, 255, 255);
    color: rgb(100%, 100%, 100%);
    color: rgba(100%, 100%, 100%, 1);
    color: hsl(0, 100%, 100%);
    color: hsla(0, 100%, 100%, 1);

    color: transparent; /* actually black transparent rgba(0, 0, 0, 0) */
    background-color: currentColor; /* current color of text */

## HSL / HSLA

* H = Hue (color range)
* S = Saturation (amount of color)
* L = Lightness (light or lack of light)
* A = Alpha transparency

## Opacity

* 0 = Don't see element, or children
* 1 = Fully opaque

Not a good idea to use for shadows because they will be hidden.

## Alpha Transparency

* 0 = Fully transparent
* 1 = No transparency

Use alpha transparency for shadows instead of hex values as hex will make
solid shadows.
