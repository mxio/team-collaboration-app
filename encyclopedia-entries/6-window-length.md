#Window.length
 `window.length` is a property used to return the number of frames or iframes in a window. It is important to note that `window.length` is not a function. 

##The syntax
`window.length` can be used by itself in the console or in a variable that can be called or printed later.
```
window.length;
```
Or,
```
var x = window.length
```

##Example  
In this example, the webpage has iframes in its body in the HTML code. Using a bit of Javascript, we can return the number of iframes which is four.
HTML
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <iframe></iframe>
  <iframe></iframe>
  <iframe></iframe>
  <iframe></iframe>
</body>
</html>
```
Javascript
```
var x = window.length;

console.log(x);
```
If you're curious about how many iframes are in the current window you're browsing, open your inspector of choice, click `console` and type in `window.length;`. This will show you how many frames are in the current website.

##Browser Support
`window.length` is supported in Chrome, Edge, Firefox, Safari, and Opera.
