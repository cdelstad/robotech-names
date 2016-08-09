import {expect} from 'chai'
import robotechNames from '.'

describe('robotech-names', () => {
  it('should have a list of all available names', () => {
    expect(robotechNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(robotechNames.random()).to.satisfy(isIncludedIn(robotechNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
