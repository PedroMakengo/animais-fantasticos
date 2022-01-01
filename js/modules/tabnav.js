export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }


  // Função para ativar o tab
  activeTab(index) {
    // Percorrendo todas as section e removendo a class ativo
    this.tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    // Adicionando a class ativo na section de acordo ao index da imagem
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add('ativo', direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }


  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
