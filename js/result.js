import { getFraseAleatoria } from "./data/data-frases.js";

const btn = document.getElementById("startBtn");

const phrase = document.getElementById("phrase");

const result = document.getElementById("result");

btn.addEventListener("click", () => {

  const frase = getFraseAleatoria();

  phrase.textContent = frase;

  result.classList.add("show");

});