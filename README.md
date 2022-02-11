
# Chroma-Palette

A light-weight utility for coloring your terminal. 0 dependencies. Default is a preselected color output from the 256 color palette, chosen to enhance legibility.

<br />
<br />

# Table of Contents
1. [ Install ](#install) <br />
2. [ Usage ](#examples) <br />
2. [ Properties ](#props) <br />
2. [ Methods ](#methods) <br />

<br />
<br />

<a name="install"></a>
## Install

```console
npm i chroma-palette 
```

<br />
<br />

<a name="examples"></a>
## Usage

<br />

### Default (256-Color Set):

Default is a preselected color output from the 256 color palette, chosen to enhance legibility.

```js
const chromaPalette = require('chroma-palette')

// chaining content with push()
console.log(
  chromaPalette
    .cyan.push('Hello')
    .space.magenta.paint('World!') // here space adds a literal space to elements
);
// chaining
console.log(
  chromaPalette
    .blue.whiteBg.bold.paint('Hello World!')
);
// combine
console.log(
  chromaPalette.blue.paint('Hello ') + chromaPalette.bold.paint('World') + '!'
);
// template literal
console.log(
  `${chromaPalette.blue.paint('Hello')} ${chromaPalette.bold.paint('World')}!`
);
```

<br />

### 16-Color Set Support:

If you need to alter the output of the colors to support the 16-color set.

```js
const { ChromaPalette } = require('chroma-palette')
// change profile to 16
const chromaPalette = new ChromaPalette({ profile:'16' })

// output will be the cyan from the 16-color palette
console.log(
  chromaPalette
    .cyan.paint('Hello World!')
);
```

<br />

### Custom-Color Set Support:

If you want to change the output of various colors. 

```js
const { ChromaPalette } = require('chroma-palette')
// change any color by { [COLOR]:'[NUMBER FROM 256]' }
const chromaPalette = new ChromaPalette({ red:'196' })

// output will be the custom red chosen
console.log(
  chromaPalette
    .red.paint('Hello World!')
);
```

<br />

### View the 256 Color Palette: 

Helpful when choosing custom colors.

```js
const chromaPalette = require('chroma-palette')

// output the 256-color palette
console.log(
  chromaPalette
    .palette.paint()
);
```

<br />
<br />

<a name="props"></a>
## Properties

<br />

### Formatters:

- `space` - Will output a space after calling paint().
- `enter` - Will output a return character after calling paint().

<br />

### Modifiers:

- `dim` - Small amount of light.
- `underscore` - Underline text.
- `blink` - Blink.
- `reverse`- Reverse.
- `hidden` - Hides text.
- `bold` - Bold text.

<br />

### Color:

- `blue` - Blue text.
- `cyan` - Cyan text.
- `purple` - Purple text.
- `magenta` - Magenta text.
- `red` - Red text.
- `orange` - Orange text.
- `yellow` - Yellow text.
- `green` - Green text.
- `white` - White text.
- `black` - Black text.
- `blueBg` - Blue background.
- `cyanBg` - Cyan background.
- `purpleBg` - Purple background.
- `magentaBg` - Magenta background.
- `redBg` - Red background.
- `orangeBg` - Orange background.
- `yellowBg` - Yellow background.
- `greenBg` - Green background.
- `whiteBg` - White background.
- `blackBg` - Black background.

<br />
<br />

<a name="methods"></a>
## Methods

<br />

### Functions:

- `push(string)` - Pushes the string to the elements and resets colors | modifiers. Makes chromaPalette chainable without having to call chromaPalette multiple times.
- `paint(string)` - Outputs the created string. Must be called after everything else to return the string.

