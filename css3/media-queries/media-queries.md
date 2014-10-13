# Media Queries

Been around for a long time.

Different style sheets

    <link rel="stylesheet" media="screen" href="style.css" />
    <link rel="stylesheet" media="print" href="style.css" />

Within one stylesheet

    @media screen {

    }

    @media print {

    }


## Different Media Queries

1. `all`
2. `aural`
3. `handheld`
4. `braille`
5. `embossed`
6. `print`
7. `projection`
8. `screen`
9. `tty`
10. `tv`

## Importing Media Queries

1. `<link media=""...`
2. `@import "style.css"`
3. `@import url(style.css) screen` (IE8+)
4. `@media screen {}`

## Conditions

* `(min/max)-width: viewport width`
* `(min/max)-height: viewport height`
* `(min/max)-device-width: screen width`
* `(min/max)-device-height: screen height`
* `orientation: portrait | landscape`
* `(min/max)-aspect-ratio: width/height`
* `(min/max)-device-aspect-ratio: device width/height`

## Syntax

* `only`
* `and`
* `not`
* `,` (or)

## Device & Capability Detection

    @media screen and (-webkit-min-device-pixel-ratio:2) {
      .iphone4 { /* high dpi images */ }
    }

    @media screen and (-prefix-transform-3d) {
      .transforms {}

      /* Can also use -prefix-animation and -prefix-transition */
    }


Snapping applications in Windows

    @media screen and (min-width: 320px) and (max-width: 500px) {
      @-ms-viewport {
        width: device-width;
      }
    }

## Viewport

    <meta name="viewport" content="width=device-width,intial-scale=1,maximum-scale=1" />

* `width`
* `height`
* `initial-scale`
* `minumum-scale`
* `maximum-scale`
* `user-scalable`

Soon this will be part of styles

    @viewport {
      /* IE10+ only */
    }
