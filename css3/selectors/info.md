# Selectors

## Attribute

    [attr^=value] /* Begins */
    [attr$=value] /* Ends */
    [attr*=value] /* Contains */

## Pseudo Classes

Allow you to conditionally select element based on state or position.

    :focus
    :hover
    :active
    :visited

    :enabled
    :disabled
    :checked

    :valid
    :invalid
    :optional
    :required
    :placeholder

    :root
    :target

    :first-child
    :last-child
    :only-child

    :first-of-type
    :last-of-type
    :only-of-type

    :nth-child()
    :nth-of-type()
    :nth-last-child()
    :nth-last-of-type()

The `nth-child(an+b)` pseudo class matches items in intervals of a, starting with element at position b (or 0 if be isn't set).

Simple striping:

    li:nth-child(odd)
    li:nth-child(even)

## Pseudo Elements

Don't indicate state but allow stying of certain parts of the document.

    ::before
    ::after
    ::first-letter
    ::first-line
    ::selection
