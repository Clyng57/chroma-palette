
const chroma = require('../index')
//const {Chroma} = require('./index')
//const chroma = new Chroma({ profile:'16' })
console.log(
  chroma.cyan.paint('Hello World') +
  chroma.blue.paint('\nHello World') +
  chroma.purple.paint('\nHello World') +
  chroma.magenta.paint('\nHello World') +
  chroma.red.paint('\nHello World') +
  chroma.orange.paint('\nHello World') +
  chroma.yellow.paint('\nHello World') +
  chroma.green.paint('\nHello World')
)
