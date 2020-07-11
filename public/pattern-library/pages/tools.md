# Tools

## Clearfix
Mixin to drop micro clearfix into a selector. Further reading:

http://www.cssmojo.com/the-very-latest-clearfix-reloaded/

```
.usage {
  @include inuit-clearfix();
}
```

```
@mixin inuit-clearfix() {

  &:after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }

}
```

## Font size

Generates a rem font-size (with pixel fallback) and a baseline-compatible unitless line-height from a pixel font-size value. Basic usage is simply:

  `@include inuit-font-size(18px);`

You can force a specific line-height by passing it as the second argument:

  `@include inuit-font-size(16px, 1);`

You can also modify the line-height by increments, while staying in the baseline grid, by setting the `$modifier` parameter. It takes a positive or negative integer, and it will add or remove "lines" to the  generated line-height. This is the recomended way to do it, unless you really need an absolute value. i.e.:

```
  // add 2 lines:
  @include inuit-font-size(24px, $modifier: +2);
  // subtract 1 line:
  @include inuit-font-size(24px, $modifier: -1);
```

[Code in InuitCss Github repo](https://github.com/inuitcss/inuitcss/blob/develop/tools/_tools.font-size.scss)


## Hidden - Visually
Mixin to quickly apply accessible hiding to elements.

```
@mixin inuit-hidden-visually() {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
```
