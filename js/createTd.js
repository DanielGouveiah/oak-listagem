export default class createTd {
  constructor(elementValue, isCheckbox) {
    //verifica se o input é checkbox
    this.isCheckbox = isCheckbox;
    //determina o valor do input
    this.value = elementValue;
  }

  //cria uma <td> que não é do tipo checkbox
  createNormalTd() {
    return `<td>${this.value}</td>`;
  }

  //cria uma <td> que é do tipo checkbox
  createCheckTd() {
    const td = document.createElement("td");
    if (this.value) {
      return `<td class="true">Sim</td>`;
    } else {
      return `<td class="false">Não</td>`;
    }
  }

  // verifica qual dos tipos de input está sendo usado e depois inicia a classe
  init() {
    if (this.isCheckbox) {
      return this.createCheckTd();
    } else {
      return this.createNormalTd();
    }
  }
}
