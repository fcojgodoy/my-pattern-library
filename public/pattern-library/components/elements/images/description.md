1. Fluid images for responsive purposes.
2. Offset `alt` text from surrounding copy.
3. Setting `vertical-align` removes the whitespace that appears under `img` elements when they are dropped into a page as-is. Safer alternative to using `display: block;`.

If a `width` and/or `height` attribute has been explicitly defined, let’s not make the image fluid.
In case you don't have control over generated `width` and `height` attributes on `<img>` elements in your markup, but still want the images to be fluid, set this to `false`:

`$inuit-static-images: true !default;`
