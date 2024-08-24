"use strict";
const formulario = document.querySelector(".form");
const PoupUp = document.querySelector(".container-mensagem-error");
const fundoBlur = document.querySelector(".fundo-blur");
const close = document.querySelector("#button-close");
const mensagemPouUp = document.querySelector(".mensagem-error");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputsValue = document.querySelectorAll("input");

  for (let i = 0; 4 < inputsValue.length; i++) {
    const valor = inputsValue[i].value;

    if (valor === "") {
      mensagemPouUp.textContent = `Preencha todos os campos!`;
      PoupUpAtivado();
    } else {
      mensagemPouUp.textContent = `Formulario enviado com sucesso!`;
      PoupUpAtivado();
    }
  }

  /*const verificar = document.querySelector(".button-enviar");
  const user = document.querySelector(".inputUser").value;
  const numero = Number(document.querySelector(".inputNumero").value);
  const email = document.querySelector(".inputEmail").value;
  const cpf = Number(document.querySelector(".CPF").value);
  const nomeSocial = document.querySelector(".nomeSocial").value;*/
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
  return;
});

/*if (
  verificar.value === "" ||
  user.value === "" ||
  numero.Number(value) === "" ||
  email.value === "" ||
  cpf.Number(value) === ""
)*/
