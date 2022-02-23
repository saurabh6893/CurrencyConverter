const currencyA = document.getElementById('currency-One')
const amtA = document.getElementById('amount-one')

const currencyB = document.getElementById('currency-Two')
const amtB = document.getElementById('amount-two')

const cardy = document.querySelector('.cardy')

const rateX = document.getElementById('rate')
const swap = document.getElementById('swap')

currencyA.addEventListener('change', grab)
amtA.addEventListener('input', grab)
currencyB.addEventListener('change', grab)
amtB.addEventListener('input', grab)

function read() {
  cardy.innerText = rate.innerText
}

function grab() {
  const currencyValueA = currencyA.value
  const currencyValueB = currencyB.value

  fetch(
    `https://v6.exchangerate-api.com/v6/5af81cb7abd6677b99760f65/latest/${currencyValueA}`
  )
    .then((res) => res.json())
    .then((data) => {
      const theRate = data.conversion_rates[currencyValueB]
      rateX.innerText = `1 ${currencyValueA} = ${theRate} ${currencyValueB}`
      amtB.value = (amtA.value * theRate).toFixed(2)
      read()
    })
}

swap.addEventListener('click', () => {
  const temp = currencyA.value
  currencyA.value = currencyB.value
  currencyB.value = temp
  grab()
})

grab()

// if Api key fails try the one below
//Your API Key: 9fe149352b8193ce07cbb833
// Example Request: https://v6.exchangerate-api.com/v6/9fe149352b8193ce07cbb833/latest/USD
