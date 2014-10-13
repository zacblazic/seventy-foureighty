## Font Face

Defining a new font face.

Note that a single font face doesn't include bold, italic etc. Each is defined
separately.

    @font-face {
      font-family: blah;
      src: url('blah.eot');
           url('blah.woff') format('woff'),
           url('blah.ttf') format('truetype'),
           url('blah.svg') format('svg');
      font-weight: normal;
      font-style: normal;
      charset: /* characters that the font supports */
    }

Using the new font.

    body {
      font-family: blah, arial, san-serif;
    }

## Issues

* Who owns the font? You probably don't have legal rights to distribute
  the fonts you use. Use services instead.
* In some browsers, if font file isn't loaded it will flicker.
* Need different file for each font style

## Font Services

* Google fonts (https://www.google.com/fonts)
* Font squirrel (http://www.fontsquirrel.com)
