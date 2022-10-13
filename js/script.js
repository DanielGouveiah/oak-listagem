//importações
import createTd from "./createTd.js";

//constantes de estrutura
const addBtn = document.querySelector(".adicionar");
const lista = document.querySelector(".lista");

//dados dos inputs
const produto = document.querySelector("#produto");
const disponivel = document.querySelector("#disponivel");
const valor = document.querySelector("#valor");
const descricao = document.querySelector("#descricao");

//itens da lista
let itemLista;
//contador
let count = 0;

//Usa os dados do localStorage para reestabelecer a lista
function rebootSave() {
  let novoCount;
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      lista.innerHTML += localStorage.getItem(i);
      if (novoCount < key) {
        novoCount = key;
        count = novoCount;
      } else {
        count = count;
      }
    }
  }
  itemLista = document.querySelectorAll(".item");
}
//Roda a primeira vez para que a lista recarregue junto com o carregamento do site
rebootSave();

//transforma os valores de inputs em elementos html
function transformaTd() {
  const produtoTd = new createTd(produto.value, false).init();
  const valorTd = new createTd(`R$${valor.value}`, false).init();
  const disponivelTd = new createTd(disponivel.checked, true).init();
  const descricaoTd = new createTd(descricao.value, false).init();

  return listTd(produtoTd, valorTd, disponivelTd, descricaoTd);
}

// Cria uma table row com os dados de cada input dentro e salva os estados para um uso futuro
function createTr(lista) {
  const tr = `<tr class="item" data-key="${count}">${lista.produto}${lista.valor}${lista.disponivel}${lista.descricao}`;
  saveState(count, tr);
  count++;
  return tr;
}

// retorna um objeto com os items dentro, para fins organizacionais
function listTd(produto, valor, disponivel, descricao) {
  return {
    produto,
    valor,
    disponivel,
    descricao,
  };
}

//salva o estado da lista
function saveState(index, item) {
  const storage = window.localStorage;
  storage.setItem(index, item);
}

// Apaga um elemento da lista
function handleDelete(e) {
  e.currentTarget.parentNode.removeChild(e.currentTarget);
  localStorage.removeItem(e.currentTarget.dataset.key);
}

// Evento de adicionar um novo item na lista
function handleClick() {
  const novoElemento = createTr(transformaTd());
  lista.innerHTML += novoElemento;
  itemLista = document.querySelectorAll(".item");
  itemLista.forEach((item) => item.addEventListener("click", handleDelete));
}

//Adiciona event listeners
itemLista.forEach((item) => item.addEventListener("click", handleDelete));
addBtn.addEventListener("click", handleClick);
