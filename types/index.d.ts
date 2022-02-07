/**
 * A module that creates a tool for implementing color and formatting for the terminal.
 * @module chroma-palette
 */

declare class Chroma {
  private elements: string;
  private Reset: string;
  private Bold: string;
  private Dim: string;
  private Underscore: string;
  private Blink: string;
  private Reverse: string;
  private Hidden: string;

  private FgOrange: string;
  private FgPurple: string;
  private FgBlack: string;
  private FgRed: string;
  private FgGreen: string;
  private FgYellow: string;
  private FgBlue: string;
  private FgMagenta: string;
  private FgCyan: string;
  private FgWhite: string;

  private BgOrange: string;
  private BgPurple: string;
  private BgBlack: string;
  private BgRed: string;
  private BgGreen: string;
  private BgYellow: string;
  private BgBlue: string;
  private BgMagenta: string;
  private BgCyan: string;
  private BgWhite: string;

  constructor(
    color?: { 
      orange: string | undefined; 
      purple: string | undefined; 
      black: string | undefined; 
      profile: string | undefined;
      red: string | undefined;
      green: string | undefined;
      yellow: string | undefined;
      blue: string | undefined;
      magenta: string | undefined;
      cyan: string | undefined;
      white: string | undefined;
    }
  )
  get dim(): Chroma; 
  get underscore(): Chroma;
  get blink(): Chroma;
  get reverse(): Chroma;
  get hidden(): Chroma;
  get bold(): Chroma;
  // Get text color
  get blue(): Chroma;
  get cyan(): Chroma;
  get purple(): Chroma;
  get magenta(): Chroma;
  get red(): Chroma;
  get orange(): Chroma;
  get yellow(): Chroma;
  get green(): Chroma;
  get white(): Chroma;
  get black(): Chroma;
  // Get background color
  get blueBg(): Chroma;
  get cyanBg(): Chroma;
  get purpleBg(): Chroma;
  get magentaBg(): Chroma;
  get redBg(): Chroma;
  get orangeBg(): Chroma;
  get yellowBg(): Chroma;
  get greenBg(): Chroma;
  get whiteBg(): Chroma;
  get blackBg(): Chroma;
  /** 
   * Get all 256 colors in palette
   */
  get palette(): Chroma;
  /** 
   * Execute output of painting content
   * @param {* | undefined} content - user content to add
   * @returns {string} adding in the user contents to string and reset the elements in order to clear the Chroma.
   */
  paint(content: any | undefined): string;
}

declare let chroma: Chroma;
declare chroma.Chroma = Chroma;
declare chroma.chroma = chroma;
declare chroma.default = chroma;

export = chroma;
