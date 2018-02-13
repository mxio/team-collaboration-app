# The `<dfn>` HTML Element

Represents a term that is being defined.

The `<dfn>` element represents a term or phrase that is to be defined by its surrounding elements. The nearest ancestor of a `<dfn>` element (often a `<p>`, `<dl>`, or `<section>` element) must contain the definition(s) for the term represented by the `<dfn>` element.

There is an order of precedence that is used to determine the exact value of the term being defined:

1. If the `<dfn>` element contains a `title` attribute, then the defining term is the value of this attribute.
2. If the `<dfn>` element only contains an `<abbr>` element with a `title` attribute, then the defining term is the value of this attribute.
3. If neither of the above scenarios apply, then the text content of the `<dfn>` element is the term being defined.

## Syntax

Based on the rules above, there can be several different use cases for the `<dfn>` element.

## Example 1

This example demonstrates using the `<dfn>` element with no attributes, surrounded by a `<p>` element that contains its definition.

In this case, the text content of the `<dfn>` element is the term being defined.

```html
    <p><dfn>Dolphins</dfn> are a widely distributed and diverse group of fully aquatic marine mammals.</p>
```

## Example 2

This example demonstrates using the `<dfn>` element with a `title` attribute that represents the term being defined, surrounded by a `<section>` element that contains its definition.

In this case, the value of the `title` attribute on the `<dfn>` element is the term being defined.

```html
    <section><dfn title="Cascading Style Sheets">CSS</dfn> is a style sheet language used for describing the presentation of a document written in a markup language.</section>
```

## Example 3

This example demonstrates using the `<dfn>` element with an `<abbr>` element that has a `title` attribute that represents the term being defined, surrounded by a `<dl>` element that contains its definition.

In this case, the value of the `title` attribute on the `<abbr>` element is the term being defined.

```html
    <dl>
        <dt>
            <dfn>
                <abbr title="Transmission Control Protocol/Internet Protocol">TCP/IP</abbr>
            </dfn>
        </dt>
        <dd>The Transmission Control Protocol/Internet Protocol (TCP/IP) is the computer networking model and set of communications protocols used on the Internet and similar computer networks. It is commonly known as TCP/IP, because its most important protocols, the Transmission Control Protocol (TCP) and the Internet Protocol (IP) were the first networking protocols defined during its development.</dd>
    </dl>
```

## Example 4 - Complex

This example demonstrates using the `<dfn>` element to define one term inside a `<dl>` element, and within the definition of this term, reference another term located elsewhere on the same page.

In this case, the text content of both `<dfn>` elements represents the term being defined.

```html
    <!-- Term to be referenced later -->
    <p><dfn id="marsupials">Marsupials</dfn> are an infraclass of mammals living primarily in Australasia and the Americas.</p>

    <!-- Term with a definition that references another term -->
    <dl>
        <dt>
            <dfn>Koala</dfn>
        </dt>
        <dd>The koala is an arboreal herbivorous <a href="#marsupials">marsupial</a> native to Australia.</dd>
    </dl>
```

## Special Notes

The `<dfn>` element is supported in all major browsers, including Mozilla Firefox (Gecko) version 1.0 and later.
