export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // Função para ativar o tab
  function activeTab(index) {
    // Percorrendo todas as section e removendo a class ativo
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    // Adicionando a class ativo na section de acordo ao index da imagem
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    // Percorrendo todas imagens como tab e usar o index destas imagens
    // como parametro da minha função
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
