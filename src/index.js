import uniqueRandomArray from 'unique-random-array'
const robotechNames = require('./robotech-names.json')

const mainExport = {
  all: robotechNames,
  random: uniqueRandomArray(robotechNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
