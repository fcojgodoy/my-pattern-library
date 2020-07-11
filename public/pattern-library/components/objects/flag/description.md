The flag object is a design pattern similar to the media object, however it utilises `display: table[-cell];` to give us control over the vertical alignments of the text and image.

http://csswizardry.com/2013/05/the-flag-object/

- Allows us to control vertical alignments.
- Force the object to be the full width of its parent. Combined with [1],
this makes the object behave in a quasi-`display: block;` manner.
- Reset inherited `border-spacing` declarations.
