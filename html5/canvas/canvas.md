# Canvas

Allows you to draw shapes, apply colors and manipulate images.

Made up of the `canvas` element and its supporting API.

## Raster vs Vector

Vector images are made up of mathematical calculations from one point to
another that form geometrical shapes.

Raster images are made up of pixels. Zooming will lose fidelity.

## Grid System

Positive numbers are to the east and south, whereas it is negative in the
west and north.

On the canvas, the top left is the origin, meaning there are only positive
values.

## API

Start with the drawing context, giving it one instruction at a time.

## Order Of Operations

Order of operations does matter when using canvas.

For example, if you fill then apply stroke, the stroke will be on the outside
as well as inside of the border. However when filling after, it will only be
on the outside.
