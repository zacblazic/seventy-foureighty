# Cascading Style Sheets

Style sheet language that allows you to attach styles (fonts & spacing) to
structured documents. It separates the presentation of the document from the
content of the document.

## Syntax

### In-line

Styles defined in-line of the elements.

    <div style="color: red">
      Some text
    </div>

### Document

Styles defined in the head of the document.

    <head>
      <style>
        div {
          color: red;
        }
      </style>
    </head>

### External

Styles defined in its own, external file and linked to in the head of the
document.

#### Stylesheet

    div {
      color: red;
    }

#### Page

    <head>
      <link rel="stylehseet" href="style.css" />
    </head>

## Targeting

* ID
* Class
* Element

## General

* It's recommended to add `@charset "utf-8"` as some browsers require it.
* Good idea to use a CSS reset.
