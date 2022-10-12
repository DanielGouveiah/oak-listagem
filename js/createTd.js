export default class createTd {
  constructor(elementValue, isCheckbox) {
    this.isCheckbox = isCheckbox;
    this.value = elementValue;
  }

  createNormalTd() {
    const td = document.createElement("td");
    td.innerText = this.value;
    return td;
  }

  createCheckTd() {
    const td = document.createElement("td");
    if (this.value) {
      td.innerText = "Sim";
      td.classList.add("true");
    } else {
      td.innerText = "Não";
      td.classList.add("false");
    }
    return td;
  }

  init() {
    if (this.isCheckbox) {
      return this.createCheckTd();
    } else {
      return this.createNormalTd();
    }
  }
}
