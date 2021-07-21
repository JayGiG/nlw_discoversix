import Modal from './modal.js';

const modal = Modal()

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

// pega todos os botoões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

// Evento acionado ao clicar no botão de marcar como lido
checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete");

// Evento acionado ao clicar no botão de excluir 
deleteButton.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? "Marcar como lida" : "Excluir";

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;

  modalButton.innerHTML = `Sim, ${text}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

  modal.open();
}
