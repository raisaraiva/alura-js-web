import BotaoConclui from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"

const criarTarefa = (evento) => {
    evento.preventDefault();

    let lista = document.querySelector('[data-list]');
    let input = document.querySelector('[data-form-input]');
    let valor = input.value;

    let tarefa = document.createElement('li');

    tarefa.classList.add("task");

    tarefa.innerHTML = `<p class="content">${valor}</p>`;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);

    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener("click", criarTarefa);