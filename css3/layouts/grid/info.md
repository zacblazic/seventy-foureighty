# Grid Layout

Like flexbox, the Grid enables more layout fluidity than is possible with
positioning using floats or script. It enables you to divide space for major
regions of a webpage or web application, and to define the relationship between
parts of an HTML control in terms of size, position, and layer. This removes
the need to create a fixed layout, which cannot take advantage of available
space within the browser window.

## Grid Element

The basic building block of Grid Layout is the Grid element, which is declared
by setting the display property of an element to either -ms-grid (for a
block-level grid element) or -ms-inline-grid (for an inline-level grid element).

      .my-grid {
        display: -ms-grid;
      }

## Tracks (Columns & Rows)

After creating the Grid element, apply sizes to your columns and rows by using
the following properties.

* `-ms-grid-columns` - Specifies the width of each grid column within the grid.
Each column is delimited using a space.
* `-ms-grid-rows` - Specifies the height of each grid row within the grid.
Each row is delimited using a space.

You can size columns and rows (collectively referred to as tracks) using any of
the following:

* Standard length units or a percentage of the object's width (for columns)
or height (for rows).
* The `auto` keyword, indicating the width of the column or height of the row
is sized based on the items inside of it.
* The `min-content` keyword, indicating the minimum width or height of any
child elements is used as the width or height.
* The `max-content` keyword, indicating the maximum width or height of any
child elements used as the width or height.
* The `minmax(a, b)` keyword, indicating the width or height is between a and
b, as available space allows.
* Fraction units (fr), indicating the available space should be divided among
the columns or rows according to their fraction values.

Example:

    .my-grid {
      display: -ms-grid;
      -ms-grid-columns: auto 100px 1fr 2fr;
      -ms-grid-rows: 50px 5em auto;
    }

This grid has four columns, and each column appears as described here:
* Column 1 (auto keyword): Column is fitted to the content in the column.
* Column 2 ("100px"): Column is 100 pixels wide.
* Column 3 ("1fr"): Column takes up one fraction unit of the remaining space.
* Column 4 ("2fr"): Column takes up two fraction units of the remaining space.

Because there are three total fraction units in this grid, Column 3 is allotted
1 fraction unit divided by 3 fraction units—or 1/3—of the remaining space.
Column 4 is allotted 2/3 of the remaining space.

Similarly, this Grid has three rows, and each row appears as described here:
* Row 1 ("50px"): Row is 50 pixels tall.
* Row 2 ("5em"): Row is 5 ems tall.
* Row 3 (auto keyword): Row is fitted to the content in the row.

### Repeating Tracks

If there are large number of columns or rows that are the same or exhibit a
recurring pattern, a repeat syntax can be applied to define the columns or rows
in a more compact form.

    .grid {
      display: -ms-grid;
      -ms-grid-columns: 10px 250px 10px 250px 10px 250px 10px 250px 10px;
      -ms-grid-rows: 1fr;
    }

    /* Equivalent definition. */
    .grid {
      display: -ms-grid;
      -ms-grid-columns: 10px (250px 10px)[4];
      -ms-grid-rows: 1fr;
    }

## Grid Items

Child elements of the grid are called grid items.

### Position Grid Items
* `-ms-grid-column` - Specifies in which column of the grid to place the grid item.
* `-ms-grid-row` - Specifies in which row of the grid to place the grid item.

The tracks numbering system is a 1-based index, with 1 being the default.

    .item-1 {
      -ms-grid-row: 1;
      -ms-grid-column: 1;
    }

    .item-2 {
      -ms-grid-row: 2;
      -ms-grid-column: 2;
    }

### Align Grid Items

You can position grid items along any of the edges of the cells formed by the
columns and rows that the item spans using the following properties:

* `-ms-grid-column-align` - Specifies the horizontal alignment of the grid item
within the Grid column. Possible values are `center`, `end`, `start`, and `stretch`.
* `-ms-grid-row-align` - Specifies the vertical alignment of the grid item
within the Grid row. Possible values are `center`, `end`, `start`, and `stretch`.

### Stacking Grid Items

You can stack grid items by simply placing them in the same columns or rows.
By default, an item that comes later in the markup will be drawn on top of
items that come before it.

* `z-index` - Specifies the layer (z-index) of the grid item within the grid cell.

### Spanning Grid items
You can make grid items span multiple columns or rows by using the following
two properties:

* `-ms-grid-column-span` - Specifies the number of columns of the grid that the
Grid item spans. Default value is "1".
* `-ms-grid-row-span` - Specifies the number of rows of the grid that the grid
item spans. Default value is "1".

Be aware that if you attempt to span past the number of defined columns or rows
in the Grid (for instance, in the previous example, if you leave the value of
the -ms-grid-column property as "2" and set the -ms-grid-column-span property
to "4", you have exceeded the number of defined columns by 1), another column
or row is implicitly created and its width or height is set to auto (fit to
content) for every column or row beyond the defined number.
