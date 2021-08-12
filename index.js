const value = document.querySelector('.value')
const estimateBtn = document.querySelector('.btn')
const maxInput = document.querySelector('.max-random')
const repetitionsInput = document.querySelector('.repetitions')

function estimateAndUpdate() {
  const estimatedValue = estimate()
  value.innerText = estimatedValue
}

estimateBtn.addEventListener('click', () => {
  estimateAndUpdate()
})

function estimate() {
  const REPETITIONS = parseInt(repetitionsInput.value)
  let coprimeCount = 0
  let total = 0
  for (let i = 0; i < REPETITIONS; i++) {
    if (gcd(random(), random()) === 1) {
      coprimeCount++
    }
    total++
  }

  //Using the property that probability of two numbers being coprime = 6/(pi)^2
  return Math.sqrt(6 / (coprimeCount / total))
}

function random() {
  const MAX = parseInt(maxInput.value)
  return Math.floor(Math.random() * MAX) + 1
}

function gcd(a, b) {
  if (a > b) {
    if (a % b === 0) {
      return b
    }

    return gcd(b, a % b)
  }
  if (b % a === 0) {
    return a
  }

  return gcd(a, b % a)
}
