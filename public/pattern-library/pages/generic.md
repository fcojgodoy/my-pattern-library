# Generic

## Reset
A very simple reset that sits on top of Normalize.css.

```
body,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, dd, ol, ul,
figure,
hr,
fieldset, legend {
  margin:  0;
  padding: 0;
}
```

Remove trailing margins from nested lists.

```
li > {

  ol,
  ul {
    margin-bottom: 0;
  }

}
```

Remove default table spacing.

```
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```


1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;` on fieldsets.

```
fieldset {
  min-width: 0; /* [1] */
  border: 0;
}
```


## Normalize
normalize.css v7.0.0 | MIT License | https://github.com/necolas/normalize.css

[Code on Inuitcss Github repo](https://github.com/inuitcss/inuitcss/blob/master/generic/_generic.normalize.scss)


## Shared
Shared declarations for certain elements.

Always declare margins in the same direction:

http://csswizardry.com/2012/06/single-direction-margin-declarations

```
address,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, ol, ul,
figure,
hr,
table,
fieldset {
  margin-bottom: $inuit-global-spacing-unit;
}
```

Consistent indentation for lists.

```
dd, ol, ul {
  margin-left: $inuit-global-spacing-unit;
}
```

## Box sizing
More sensible default box-sizing: http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice

```
html {
  box-sizing: border-box;
}

* {

  &,
  &:before,
  &:after {
    box-sizing: inherit;
  }

}
```
