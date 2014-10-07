# New Input Types

If any input types are not supported, the browser will fallback to an input of type text.

## Color

Allows the user to pick a color.

    <input type="color"/ >

## Datalist

Allows you to provide a preset list of options to a text box.

    <label for="colors-box">Colors</label>
    <input id="colors-box" list="colors" />
    <datalist id="colors" >
      <option value="Blue" />
      <option value="Red" />
      <option value="Green" />
    </datalist>

Above, the input defaults to type text because of the specified list attribute.
Good use case for suggestions.

## Date

Renders a date picker from which the user can select a date.

    <input type="date" />

## Time

Allows the user to specify a certain point in time.

    <input type="time" />

## Date Time

Allows the user to select a date and time.

    <input type="datetime" />

## Date Time Local

Same as datetime, but doesn't have to take into account time zones.

    <input type="datetime-local" />

## Month

Allows the user to select a specific month for a given year.

    <input type="month" />

## Week

Allows the user to select a specific week for a given year.

    <input type="week" />

## Email, URL & Telephone

Appear as a text box, but provides support for validation.

    <input type="email" />
    <input type="url" />
    <input type="tel" />

## Range

Renders a slider, allowing you to choose a value within a range.

    <input type="range" />

## Number

Renders a spinner containing numbers. Will not accept alpha characters.

    <input type="number" />

## Search

Allows you to enter a search term, and renders an "x" to clear the text.

    <input type="search" />
