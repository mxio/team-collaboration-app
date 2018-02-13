# The `text-wrap` CSS Property

Specifies line-breaking rules for text content on a web page.

The `text-wrap` property lets you control how inline text within an element or set of elements will behave.

## Syntax

```css
    text-wrap: <normal | none | avoid>;
```

## Example 1

This example demonstrates using the `text-wrap` property to set the line-break behavior of an element to `normal`. It is the initial, or default value for this property.

```css
    .some-element {
        text-wrap: normal;
    }
```

## Example 2

This example demonstrates using the `text-wrap` property to set the line-break behavior of an element to `none`. This tells the browser that the element’s text should not break onto another line at all.

```css
    .some-element {
        text-wrap: none;
    }
```

## Example 3

This example demonstrates using the `text-wrap` property to set the line-break behavior of an element to `avoid`. This value will allow line breaking to occur, but tells the browser to be selective about where the breaks happen.

```css
    .some-element {
        text-wrap: avoid;
    }
```

## Special Notes

This property has been removed from the official spec, and is not supported by any major browsers.
