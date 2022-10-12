import createTd from "./createTd.js";

const addBtn = document.querySelector(".adicionar");
const lista = document.querySelector(".lista");

const produto = document.querySelector("#produto");
const disponivel = document.querySelector("#disponivel");
const valor = document.querySelector("#valor");
const descricao = document.querySelector("#descricao");

function transformaTd() {
  const produtoTd = new createTd(produto.value, false).init();
  const valorTd = new createTd(`R$${valor.value}`, false).init();
  const disponivelTd = new createTd(disponivel.checked, true).init();
  const descricaoTd = new createTd(descricao.value, false).init();

  return listTd(produtoTd, valorTd, disponivelTd, descricaoTd);
}

function createTr(lista) {
  const tr = document.createElement("tr");
  tr.appendChild(lista.produto);
  tr.appendChild(lista.valor);
  tr.appendChild(lista.disponivel);
  tr.appendChild(lista.descricao);
  return tr;
}

function listTd(produto, valor, disponivel, descricao) {
  return {
    produto,
    valor,
    disponivel,
    descricao,
  };
}

function handleClick() {
  const novoElemento = createTr(transformaTd());
  lista.appendChild(novoElemento);
}

addBtn.addEventListener("click", handleClick);
