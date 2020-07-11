A list of cropping ratios that get generated as modifier classes. You should predefine it with only the ratios and names your project needs.

The map keys are the strings used in the generated class names, and they can follow any convention, as long as they are properly escaped strings. i.e.:

``` css
$inuit-crops: (
    "2\\:1"         : (2:1),
    "4-by-3"        : (4:3),
    "full-hd"       : (16:9),
    "card-image"    : (2:3),
    "golden-ratio"  : (1.618:1) -> non-integers are okay
) !default;
```
