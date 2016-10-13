#Window.length
 `window.length` is a property used to return the number of frames or iframes in a window. 

##The syntax (How is it used?)
- Is it a Function?  
– What is returned  

##Example  
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
var x = document.defaultView.window.length;

console.log(x);
```
Write a introduction to the example, sufficient to explain what the example is showing
