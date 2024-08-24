"use strict";
const formulario = document.querySelector(".form");
const PoupUp = document.querySelector(".container-mensagem-error");
const fundoBlur = document.querySelector(".fundo-blur");
const close = document.querySelector("#button-close");
const mensagemPouUp = document.querySelector(".mensagem-error");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputsValue = document.querySelectorAll("input");

  for (let i = 0; i < inputsValue.length; i++) {
    const valor = inputsValue[i].value;

    if (valor === "") {
      mensagemPouUp.textContent = `Preencha todos os campos!`;
      PoupUpAtivado();
    } else {
      mensagemPouUp.textContent = `Formulario enviado com sucesso!`;
      PoupUpAtivado();
    }
  }
});

const PoupUpAtivado = function () {
  PoupUp.classList.remove("delete");
  fundoBlur.classList.remove("delete");
};

const PoupUpDesativado = function () {
  PoupUp.classList.add("delete");
  fundoBlur.classList.add("delete");
};

close.addEventListener("click", function () {
  PoupUpDesativado();
  const input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  return;
});
