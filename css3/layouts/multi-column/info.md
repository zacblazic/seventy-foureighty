# Multi-columns

With CSS3, you can create multiple columns for laying out text - like in
newspapers!

## Column Width
The column-width property specifies the width that a column should be:

    div {
      column-width: 200px;
    }

* `auto` - Indicates that the optimal column width is determined by the other property
values of the multi-column element, such as the column-count property.
This is the default value.
* length - A relative or absolute length value

## Column Count
The column-count property specifies the number of columns an element should be
divided into:

    div {
        column-count: 3;
    }

* `auto` - Indicates that the number of columns is determined by the values of
other property values of the multi-column element, such as the column-width
property. This is the default value.
* integer - Specifies the number of columns.

## Column Gap
The column-gap property specifies the gap between the columns:

    div {
        column-gap: 40px;
    }

## Columns Shorthand

    div {
      columns: 100px auto;
    }


A shorthand value that specifies values for the column-width and column-count
properties of a multi-column element.

The syntax for this property is as follows:

    columns: <column-width> <column-count>;

The following syntax is also valid:

    columns: <column-count> <column-width>;

If only an integer is specified, column-width is set to auto and column-count
is set to the integer. If only a length value is specified, column-width is set
to the length value and column-count is set to auto. If only auto is specified,
 both column-width and column-count are set to auto

## Column Rule
The column-rule property sets the width, style, and color of the rule between
columns:

    div {
        column-rule: 3px outset #ff00ff;
    }


column-gap
Specifies the width of the gap between columns in a multi-column element.
The possible values for this property are:
normal
The default width of 1 em.
<length>
A relative or absolute length value, as specified in CSS Values and Units Reference.
column-rule-color
Specifies the color for all column rules in a multi-column element. This property can be set to any supported color value.
column-rule-style
Specifies the style for all column rules in a multi-column element. This property accepts the same values as the border-style property.
column-rule-width
Specifies the width of all column rules in a multi-column element. This property accepts the same values as the border-width property.
column-rule
A shorthand value that specifies values for the column-rule-width, column-rule-style, and column-rule-color properties of a multi-column element.
The syntax for this property is as follows:
column-rule: <column-rule-width> <column-rule-style> <column-rule-color>;

## Column Breaks

You can specify when content should break between columns. This prevents content
from breaking in the middle of paragraphs, sections, and so on. The concept of
column breaks is similar to page-breaks when printing, and in fact can be
controlled by Cascading Style Sheets (CSS) in much the same way.

break-before
Specifies the column-break behavior that precedes a content block in a multi-column element.
This property accepts the same values as the page-break-before property, plus the following values:
page
Always force a page break before the generated box.
column
Always force a column break before the generated box.
avoid-page
Avoid a page break before the generated box.
avoid-column
Avoid a column break before the generated box.
break-after
Specifies the column-break behavior that follows a content block in a multi-column element.
This property accepts the same values as the page-break-after property, plus the following values:
page
Always force a page break after the generated box.
column
Always force a column break after the generated box.
avoid-page
Avoid a page break after the generated box.
avoid-column
Avoid a column break after the generated box.
break-inside
Specifies the column-break behavior that occurs within a content block in a multi-column element.
This property accepts the same values as the page-break-inside property, plus the following values:
avoid-page
Avoid a page break inside the generated box.
avoid-column
Avoid a column break inside the generated box.

## Column Span

You can specify a content block to span across several columns. An element that has been spanned across several columns effectively acts as a break between the content before and the content after the span. The following property controls column spanning:

column-span
Specifies the number of columns that a content block spans in a multi-column element.
The possible values for this property are:
all
The content block spans all columns on a page. All content that is declared before the content block is shown before the content block.
"1"
This is the default value. The content block does not span multiple columns.

## Balancing Column Content

You can specify whether to balance the content of your columns—that is, minimize the variation in column length. Otherwise, columns are filled sequentially and will have different lengths.
The following property controls column filling:

column-fill
Specifies how the column lengths in a multi-column element are affected by the content flow.
The possible values for this property are the following keywords:
balance
Columns are filled sequentially such that the column heights are as balanced as possible, depending on other column property values.
auto
This is the default value. Columns are filled sequentially such that the columns might differ in length, depending on other column property values.
Column balancing is also dependent on the values of the orphans and widows properties, if set.
