# Settings

## Global
The global settings file contains any project-wide variables; things that need to be made available to the entire codebase.

Standardise some UI treatments.

```
$global-radius: 3px !default;
$global-transition: all 300ms ease-in-out !default;
```

## Config
A map of global config settings. Define any project-level configuration, feature switches, etc. in here.

```
$inuit-config: (
  env: dev,
  healthcheck: false,
  debug: true,
);
```

You can access data in this map using the following function:

`inuit-config(<key>)`

Example usage:

`@if (inuit-config(debug) == true) { ...  }`

Source code:
```
@function inuit-config($key) {
  @return map-get($inuit-config, $key);
}
```

## Core
This core file sets up inuitcss’ most important setup variables. They underpin a lot of how the framework functions and should be modified and preconfigured with caution.

[Code in InuitCss Github repo](https://github.com/inuitcss/inuitcss/blob/master/settings/_settings.core.scss)
