# Ins HTML Tag

Insert tag

`ins` is an HTML tag for text insertion, commonly used with the `del` tag. Using the `ins` tag with the `del` tag will show users that text has been added from the previous version of the content by striking through the deleted text with a line and showing an underline for the inserted text. The `ins` tag can be a block level element or in-line element depending on its parent tag which I will talk about later in the Special Notes section.

## Syntax

The `ins` tag has an opening and closing tag. Attributes for this tag are `cite` and `datetime` in addition to [global attributes](http://www.w3schools.com/tags/ref_standardattributes.asp) and [event attributes](http://www.w3schools.com/tags/ref_eventattributes.asp). The `cite` and `datetime` attributes' values are shown only in the code so users cannot see the date, time and cite information when browsing the web page. They are more important as semantic HTML telling the browser and website manager(s) changes to the document. By default, `ins` text will be underlined but that can be changed with CSS.  

```
  <ins cite="" datetime="">New Text</ins>

  ins {
    text-decoration: underline;
    }
```

### Attributes

#### cite

The `cite`attribute shows the url of a document explaining the changes. This url is hidden but can be shown using CSS.

#### datetime

`datetime` shows the date and time when the text was inserted in the following format:  
`YYYY-MM-DDThh:mm:ssTZD`

## Example 1

Write a introduction to the example, sufficient to explain what the example is showing.

```
  <p>This is <ins>new</ins> text.
```

## Example 2

Write a introduction to the example, sufficient to explain what the example is showing.

```
  <p>This is <del>old</del> <ins cite="http://www.newtextdocument" datetime=""2016-05-08T08:45:03+6:00">new</ins> text.
```

## Example 3 - Complex

Write a introduction to the example, sufficient to explain what the example is showing.

```
  <style>
    ins[cite]:before {
      content: " (" attr(cite) ")";
    }
  </style>
  <p>This is <del>old</del> <ins cite="http://www.newtextdocument" datetime=""2016-05-08T08:45:03+6:00">new</ins> text.
```

## Special Notes
As noted above, `ins` can be an inline-block element or block level element depending on its parent element. If the tag's parent is `body`, then it will be a block level element. However, if the parent element is a `p` tag, it will be an inline-element. If the `ins` element is inside a `p` tag, the child element of the `ins` element cannot be a block level element. 


Add information that you found that seemed lesser known. Common bugs, obscure bugs, important distinctions, all belong in this section.
