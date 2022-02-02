
# Chroma-Palette

A light-weight utility for coloring your terminal. 0 dependencies. Default is a preselected color output from the 256 color palette, chosen to enhance legibility.


## Table of Contents
1. [ Install ](#install) <br />
2. [ Usage ](#examples) <br />


<a name="install"></a>
### Install

```console
$ npm i chroma-palette 
```

<a name="examples"></a>
### Usage

Default (256-Color Set):
Default is a preselected color output from the 256 color palette, chosen to enhance legibility.

```js
const chroma = require('chroma-palette')

// chaining
console.log(
  chroma.blue.whiteBg.bold.paint('Hello world!')
);
// combine
console.log(
  chroma.blue.paint('Hello ') + chroma.bold.paint('world') + '!'
);
// template literal
console.log(
  `${chroma.blue.paint('Hello')} ${chroma.bold.paint('world')}!`
);
```

16-Color Set Support:
If you need to alter the output of the colors to support the 16-color set.

```js
const { Chroma } = require('chroma-palette')
// change profile to 16
const chroma = new Chroma({ profile:'16' })

// output will be the cyan from the 16-color palette
console.log(
  chroma.cyan.paint('Hello world!')
);
```

Custom-Color Set Support:
If you want to change the output of various colors. 

```js
const { Chroma } = require('chroma-palette')
// change any color by { [COLOR]:'[NUMBER FROM 256]' }
const chroma = new Chroma({ red:'196' })

// output will be the custom red chosen
console.log(
  chroma.red.paint('Hello world!')
);
```

View the 256 Color Palette: 
Helpful when choosing custom colors.

```js
const chroma = require('chroma-palette')

// output the 256-color palette
console.log(
  chroma.palette.paint()
);
```
