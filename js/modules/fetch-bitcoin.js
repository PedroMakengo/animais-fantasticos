export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btn-preco');
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(error);
    });
}

// https://blockchain.info/ticker
