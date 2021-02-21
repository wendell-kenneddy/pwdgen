const btnOnlyNum = document.getElementById('only-num')
const btnNumAndLetter = document.getElementById('num-and-letter')
const demo = document.getElementById('result')
let isOnlyNum = false
let result = ''

function generatePwd(numOrNot) {

  numOrNot === 'isNum'
    ? isOnlyNum = true
    : isOnlyNum = false

  isOnlyNum
    ? result = Math.random().toString(10).substring(2)
    : result = `${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`
}

function printPwd() {
  demo.innerHTML = result
}

btnNumAndLetter.addEventListener('click', () => {
  generatePwd()
  printPwd()
})

btnOnlyNum.addEventListener('click', () => {
  generatePwd('isNum')
  printPwd()
})

window.addEventListener('keyup', e => {
  key = e.key

  if (key === 'ArrowLeft') {
    generatePwd('isNum')
    printPwd()
  } else if (key === 'ArrowRight') {
    generatePwd()
    printPwd()
  }
})
