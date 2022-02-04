
declare class Chroma {
  elements: string;
  Reset: string;
  Bold: string;
  Dim: string;
  Underscore: string;
  Blink: string;
  Reverse: string;
  Hidden: string;

  FgOrange: string;
  FgPurple: string;
  FgBlack: string;
  FgRed: string;
  FgGreen: string;
  FgYellow: string;
  FgBlue: string;
  FgMagenta: string;
  FgCyan: string;
  FgWhite: string;

  BgOrange: string;
  BgPurple: string;
  BgBlack: string;
  BgRed: string;
  BgGreen: string;
  BgYellow: string;
  BgBlue: string;
  BgMagenta: string;
  BgCyan: string;
  BgWhite: string;

  constructor(
    color?: { 
      orange: string; 
      purple: string; 
      black: string; 
      profile: string;
      red: string;
      green: string;
      yellow: string;
      blue: string;
      magenta: string;
      cyan: string;
      white: string;
    }
  )
   get dim(): this; 
   get underscore(): this;
   get blink(): this;
   get reverse(): this;
   get hidden(): this;
   get bold(): this;
   // Get text color
   get blue(): this;
   get cyan(): this;
   get purple(): this;
   get magenta(): this;
   get red(): this;
   get orange(): this;
   get yellow(): this;
   get green(): this;
   get white(): this;
   get black(): this;
   // Get background color
   get blueBg(): this;
   get cyanBg(): this;
   get purpleBg(): this;
   get magentaBg(): this;
   get redBg(): this;
   get orangeBg(): this;
   get yellowBg(): this;
   get greenBg(): this;
   get whiteBg(): this;
   get blackBg(): this;
   // Get all colors in 256 palette
   get palette(): this;
}

let chroma: typeof Chroma;

declare chroma.Chroma = Chroma;
declare chroma.chroma = chroma;
declare chroma.default = chroma;

export = chroma;

//export = { Chroma }

