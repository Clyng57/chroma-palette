
const chromaPalette = require('../index')

console.log(
  chromaPalette
    .cyan.paint('Hello World') +
  chromaPalette
    .blue.paint('\nHello World') +
  chromaPalette
    .purple.paint('\nHello World') +
  chromaPalette
    .magenta.paint('\nHello World') +
  chromaPalette
    .red.paint('\nHello World') +
  chromaPalette
    .orange.paint('\nHello World') +
  chromaPalette
    .yellow.paint('\nHello World') +
  chromaPalette
    .green.paint('\nHello World')
)
