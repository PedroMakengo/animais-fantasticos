import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.space}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numeroGrid = document.querySelector('.numeros-grid');

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numeroGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      console.log(AnimaNumeros.incrementarNumero(document.querySelector('.numeral')));
      animaNumeros.init();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimais('./animaisapi.json');
}
