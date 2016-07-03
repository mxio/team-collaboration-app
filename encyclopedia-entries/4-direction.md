# Direction - CSS 

CSS property for direction of text

`Direction` is a CSS property used as a way to change the direction of text flow. The default direction is left to right, but this property allows changing the direction to right to left. This property is usually used with the `unicode-bidi` property to allow display of different languages on the same document that may need to flow righ to left instead.


## Syntax

The `description` property can be used with any kind of elements. Value options for the property are: ltr, rtl, initial, and inherit. By default, the direction is set to ltr but if for any reason the direction has not been set, ltr can be used as a value.

```
direction: <ltr | rtl | initial | inherit>;
```

### Values

#### ltr & rtl
ltr: Text direction runs from left to write as the default.  
rtl: Text direction runs from right to left.

#### initial
Initial makes the property use its default.

#### inherit
The property will inherit the direction of its parent element.

## Example 1

Write a introduction to the example, sufficient to explain what the example is showing.

```
.main {
        direction: rtl;
}
```

## Example 2

Write a introduction to the example, sufficient to explain what the example is showing.

```
.main {
        direction: rtl;
        unicode-bidi: bidi-override;
```

## Example 3 - Complex

Write a introduction to the example, sufficient to explain what the example is showing.

```
        background: none 50% 25% auto contain fixed;
```

## Browser Support

The `direction` property is supported by all major browsers.  

* Firefox - 1.0 and up  
* Chrome - 2.0 and up  
* Safari - 1.3 and up
* Edge - 5.5 and up
* Opera - 9.2 and up
