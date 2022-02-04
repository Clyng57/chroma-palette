

class Chroma {

  constructor(color) {
    this.elements = '';
  
    this.Reset = "\x1b[0m";
    this.Bold = "\x1b[1m";
    this.Dim = "\x1b[2m";
    this.Underscore = "\x1b[4m";
    this.Blink = "\x1b[5m";
    this.Reverse = "\x1b[7m";
    this.Hidden = "\x1b[8m";
    
    this.FgOrange = color !== undefined && color.orange !== undefined 
      ? `\x1b[38;5;${color.orange}m`
      : "\x1b[38;5;208m";
    this.FgPurple = color !== undefined && color.purple !== undefined 
      ? `\x1b[38;5;${color.purple}m`
      : "\x1b[38;5;141m";
    this.FgBlack = color !== undefined && color.black !== undefined 
      ? `\x1b[38;5;${color.black}m`
      : "\x1b[30m";
    this.FgRed = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[31m" 
      : color !== undefined && color.red !== undefined 
      ? `\x1b[38;5;${color.red}m`
      : "\x1b[38;5;9m";
    this.FgGreen = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[32m" 
      : color !== undefined && color.green !== undefined 
      ? `\x1b[38;5;${color.green}m`
      : "\x1b[38;5;10m";
    this.FgYellow = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[33m" 
      : color !== undefined && color.yellow !== undefined 
      ? `\x1b[38;5;${color.yellow}m`
      : "\x1b[38;5;221m";
    this.FgBlue = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[34m" 
      : color !== undefined && color.blue !== undefined 
      ? `\x1b[38;5;${color.blue}m`
      : "\x1b[38;5;75m";
    this.FgMagenta = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[35m" 
      : color !== undefined && color.magenta !== undefined 
      ? `\x1b[38;5;${color.magenta}m`
      : "\x1b[38;5;213m";
    this.FgCyan = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[36m" 
      : color !== undefined && color.cyan !== undefined 
      ? `\x1b[38;5;${color.cyan}m`
      : "\x1b[38;5;123m";
    this.FgWhite = color !== undefined && color.white !== undefined 
      ? `\x1b[38;5;${color.white}m`
      : "\x1b[37m";
    
    this.BgOrange = color !== undefined && color.orange !== undefined 
      ? `\x1b[48;5;${color.orange}m`
      : "\x1b[48;5;208m";
    this.BgPurple = color !== undefined && color.purple !== undefined 
      ? `\x1b[48;5;${color.purple}m`
      : "\x1b[48;5;141m";
    this.BgBlack = color !== undefined && color.black !== undefined 
      ? `\x1b[48;5;${color.black}m`
      : "\x1b[40m";
    this.BgRed = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[41m" 
      : color !== undefined && color.red !== undefined 
      ? `\x1b[48;5;${color.red}m`
      : "\x1b[48;5;9m";
    this.BgGreen = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[42m" 
      : color !== undefined && color.green !== undefined 
      ? `\x1b[48;5;${color.green}m`
      : "\x1b[48;5;10m";
    this.BgYellow = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[43m" 
      : color !== undefined && color.yellow !== undefined 
      ? `\x1b[48;5;${color.yellow}m`
      : "\x1b[48;5;221m";
    this.BgBlue = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[44m" 
      : color !== undefined && color.blue !== undefined 
      ? `\x1b[48;5;${color.blue}m`
      : "\x1b[48;5;75m";
    this.BgMagenta = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[45m" 
      : color !== undefined && color.magenta !== undefined 
      ? `\x1b[48;5;${color.magenta}m`
      : "\x1b[48;5;213m";
    this.BgCyan = color !== undefined && color.profile !== undefined && color.profile === '16' 
      ? "\x1b[46m" 
      : color !== undefined && color.cyan !== undefined 
      ? `\x1b[48;5;${color.cyan}m`
      : "\x1b[48;5;123m";
    this.BgWhite = color !== undefined && color.white !== undefined 
      ? `\x1b[48;5;${color.white}m`
      : "\x1b[47m";
  }
  // Get formats
  get dim() {
    this.elements += this.Dim; 
    return this;
  }
  get underscore() {
    this.elements += this.Underscore; 
    return this;
  }
  get blink() {
    this.elements += this.Blink; 
    return this;
  }
  get reverse() {
    this.elements += this.Reverse; 
    return this;
  }
  get hidden() {
    this.elements += this.Hidden; 
    return this;
  }
  get bold() {
    this.elements += this.Bold; 
    return this;
  }
  // Get text color
  get blue() {
    this.elements += this.FgBlue; 
    return this;
  }
  get cyan() { 
    this.elements += this.FgCyan; 
    return this;
  }
  get purple() { 
    this.elements += this.FgPurple; 
    return this;
  }
  get magenta() { 
    this.elements += this.FgMagenta; 
    return this;
  }
  get red() { 
    this.elements += this.FgRed; 
    return this;
  }
  get orange() { 
    this.elements += this.FgOrange; 
    return this;
  }
  get yellow() { 
    this.elements += this.FgYellow; 
    return this;
  }
  get green() { 
    this.elements += this.FgGreen; 
    return this;
  }
  get white() { 
    this.elements += this.FgWhite; 
    return this;
  }
  get black() { 
    this.elements += this.FgBlack; 
    return this;
  }
  // Get background color
  get blueBg() {
    this.elements += this.BgBlue; 
    return this;
  }
  get cyanBg() { 
    this.elements += this.BgCyan; 
    return this;
  }
  get purpleBg() { 
    this.elements += this.BgPurple; 
    return this;
  }
  get magentaBg() { 
    this.elements += this.BgMagenta; 
    return this;
  }
  get redBg() { 
    this.elements += this.BgRed; 
    return this;
  }
  get orangeBg() { 
    this.elements += this.BgOrange; 
    return this;
  }
  get yellowBg() { 
    this.elements += this.BgYellow; 
    return this;
  }
  get greenBg() { 
    this.elements += this.BgGreen; 
    return this;
  }
  get whiteBg() { 
    this.elements += this.BgWhite; 
    return this;
  }
  get blackBg() { 
    this.elements += this.BgBlack; 
    return this;
  }
  // Get all colors in 256 palette
  get palette() {
    const colors = [...Array(256 - 1 + 1).keys()].map(x => x + 1);
    colors.forEach((color)=> {
      let colorStr = color.toString();
      this.elements += ` \u001b[38;5;${colorStr}m${colorStr} `
    })
    return this;
  }
  // Execute output of painting content
  paint(content) {
    let returnContent = `${this.elements}${content !== undefined ? content : ''}${this.Reset}`;
    this.elements = '';
    return returnContent;
  }
  
}

let chroma = new Chroma();

chroma.Chroma = Chroma;
chroma.chroma = chroma;
chroma.default = chroma;

module.exports = chroma;
