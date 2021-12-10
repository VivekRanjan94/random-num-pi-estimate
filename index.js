const value = document.querySelector('.value')
const estimateBtn = document.querySelector('.btn')
const maxInput = document.querySelector('.max-random')
const maxOutput = document.querySelector('.max-random-output')
const pairsInput = document.querySelector('.pairs')
const pairsOutputs = document.querySelectorAll('.pairs-output')

window.onload = (e) => {
  estimateAndUpdate()
}

maxInput.addEventListener('input', (e) => {
  maxOutput.innerText = e.target.value
})
pairsInput.addEventListener('input', (e) => {
  pairsOutputs.forEach((output) => {
    output.innerText = e.target.value
  })
})

function estimateAndUpdate() {
  const estimatedValue = estimate()
  value.innerText = estimatedValue
}

estimateBtn.addEventListener('click', () => {
  estimateAndUpdate()
})

function estimate() {
  const pairs = parseInt(pairsInput.value)
  let coprimeCount = 0
  let total = 0
  for (let i = 0; i < pairs; i++) {
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
