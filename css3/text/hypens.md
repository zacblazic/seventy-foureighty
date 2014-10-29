# Hyphens

The hyphens CSS property tells the browser how to go about splitting words to
improve the layout of text when line-wrapping. On HTML, the language is
determined by the lang attribute: browsers will hyphenate only if this
attribute is present and if an appropriate hyphenation dictionary is available.

## Syntax

    p {
      hyphens: manual;
    }

* `none` - Words are not broken at line breaks, even if characters inside the
words suggest line break points. Lines will only wrap at whitespace.
* `manual` - Words are broken for line-wrapping only where characters inside the
word suggest line break opportunities.
* `auto` - The browser is free to automatically break words at appropriate
hyphenation points, following whatever rules it chooses to use.
