const currencyA = document.getElementById('currency-One')
const amtA = document.getElementById('amount-one')

const currencyB = document.getElementById('currency-Two')
const amtB = document.getElementById('amount-two')

const rate = document.getElementById('rate')
const swap = document.getElementById('swap')

currencyA.addEventListener('change', grab)
amtA.addEventListener('input', grab)
currencyB.addEventListener('change', grab)
amtB.addEventListener('input', grab)

function grab() {
  const currencyValueA = currencyA.value
  const currencyValueB = currencyB.value

  fetch(
    `https://v6.exchangerate-api.com/v6/e0ee3020537fd414c0d72852/latest/${currencyValueA}`
  )
    .then((res) => res.json())
    .then((data) => {
      const theRate = data.conversion_rates[currencyValueB]
      rate.innerText = `1 ${currencyValueA}=${theRate} ${currencyValueB}`
    })
}

grab()
