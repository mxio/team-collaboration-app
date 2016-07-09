# Direction - CSS 

CSS property for direction of text

`Direction` is a CSS property used as a way to change the direction of text flow. The default direction is left to right, but this property allows changing the direction to right to left. This property is usually used with the `unicode-bidi` property to allow display of different languages on the same document that may need to flow right to left instead.


## Syntax

The `direction` property can be used with any kind of elements. Value options for the property are: ltr, rtl, initial, and inherit. By default, the direction is set to ltr but if for any reason the direction has not been set, ltr can be set as a value.

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

In this example, the direction for the element with class `main` is set to right to left. In the browser, the text will simply align on the right.

```
.main {
        direction: rtl;
}

<div class="main">A new day</div>
```

## Example 2

Building off the previous example, this example uses `direction` with `unicode-bidi`. The value `bidi-override` adds an embedded level of text. The end result is that the text in the browser is aligned on the right and displays "yad wen A."  

```
.main {
        direction: rtl;
        unicode-bidi: bidi-override;
}

<div class="main">A new day</div>
```

## Browser Support

The `direction` property is supported by all major browsers.  

* Firefox - 1.0 and up  
* Chrome - 2.0 and up  
* Safari - 1.3 and up
* Edge - 5.5 and up
* Opera - 9.2 and up

## Special Notes  

Although CSS is most often suggested for styling, when it comes to setting the flow of text in a document, using the HTML attribute `dir` is recommended instead. 
